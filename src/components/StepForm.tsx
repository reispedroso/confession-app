"use client";

import * as React from "react";
import { Questionnaire } from "@/types/confession";
import { useConfessionStore, SelectedAnswer } from "@/store/confession-store";
import { ConfessionQuestion, ConfessionOption } from "@/types/confession";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

interface StepFormProps {
  stepData: Questionnaire;
  prevStepId: number | null;
  nextStepId: number | null;
}

export function StepForm({
  stepData,
  prevStepId,
  nextStepId,
}: StepFormProps) {
  const router = useRouter();
  const { setStepAnswers, getStepAnswers } = useConfessionStore();

  const [selections, setSelections] = React.useState<SelectedAnswer[]>([]);

  React.useEffect(() => {
    const savedAnswers = getStepAnswers(stepData.id);
    setSelections(savedAnswers);
  }, [stepData.id, getStepAnswers]);

  const handleSelect = (
    question: ConfessionQuestion,
    option: ConfessionOption
  ) => {
    setSelections((prev) => {
      const otherQuestionAnswers = prev.filter(
        (s) => s.questionId !== question.id
      );

      const thisQuestionAnswers = prev.filter(
        (s) => s.questionId === question.id
      );

      const newSelection: SelectedAnswer = {
        questionId: question.id,
        label: option.label,
        pdfPhrase: option.pdfPhrase,
        isExclusive: option.isExclusive,
        dialogType: option.dialogType,
        value: null,
      };

      if (option.isExclusive) {
        const isAlreadySelected = thisQuestionAnswers.some(
          (s) => s.label === option.label
        );

        const newAnswers = isAlreadySelected ? [] : [newSelection];
        return [...otherQuestionAnswers, ...newAnswers];
      }

      const exclusiveAnswer = thisQuestionAnswers.find((s) => s.isExclusive);
      if (exclusiveAnswer) {
        return [...otherQuestionAnswers, newSelection];
      }

      const isAlreadySelected = thisQuestionAnswers.some(
        (s) => s.label === option.label
      );

      if (isAlreadySelected) {
        const newAnswers = thisQuestionAnswers.filter(
          (s) => s.label !== option.label
        );
        return [...otherQuestionAnswers, ...newAnswers];
      }

      const newAnswers = [...thisQuestionAnswers, newSelection];
      return [...otherQuestionAnswers, ...newAnswers];
    });
  };

  const handleValueChange = (
    questionId: number,
    label: string,
    newValue: string
  ) => {
    setSelections((prev) =>
      prev.map((s) => {
        if (s.questionId === questionId && s.label === label) {
          let valueToStore: string | number | null = newValue;
          if (s.dialogType === "count") {
            if (newValue === "") {
              valueToStore = null;
            } else {
              const parsed = parseInt(newValue, 10);
              valueToStore = isNaN(parsed) ? null : parsed;
            }
          }
          return { ...s, value: valueToStore };
        }
        return s;
      })
    );
  };

  const isSelected = (questionId: number, label: string) => {
    return selections.some(
      (s) => s.questionId === questionId && s.label === label
    );
  };

  const getSelectionValue = (questionId: number, label: string) => {
    const selection = selections.find(
      (s) => s.questionId === questionId && s.label === label
    );
    return selection?.value ?? "";
  };

  const handleNavigate = (direction: "prev" | "next") => {
    setStepAnswers(stepData.id, selections);

    if (direction === "prev") {
      if (prevStepId !== null) {
        router.push(`/new-confession/${prevStepId}`);
      } else {
        router.push("/");
      }
      return;
    }

    if (nextStepId !== null) {
      router.push(`/new-confession/${nextStepId}`);
    } else {
      router.push("/new-confession/summary");
    }
  };

  return (
    <div className="w-full max-w-2xl space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          {stepData.title}
        </h1>
        {stepData.subtitle && (
          <h2 className="mt-2 text-xl text-zinc-400">
            {stepData.subtitle}
          </h2>
        )}
      </div>

      <div className="space-y-10">
        {stepData.questions.map((question) => (
          <div
            key={question.id}
            className="space-y-5 border-b border-zinc-700 pb-10"
          >
            <h3 className="text-lg font-semibold text-zinc-100">
              {question.prompt}
            </h3>
            <div className="space-y-4">
              {question.options.map((option) => (
                <div key={option.label}>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id={`q${question.id}-${option.label}`}
                      checked={isSelected(question.id, option.label)}
                      onCheckedChange={() => handleSelect(question, option)}
                    />
                    <label
                      htmlFor={`q${question.id}-${option.label}`}
                      className="cursor-pointer text-base font-light leading-snug text-zinc-300 transition-colors hover:text-zinc-100"
                    >
                      {option.label}
                    </label>
                  </div>

                  {isSelected(question.id, option.label) &&
                    option.dialogType && (
                      <div className="ml-7 mt-3 space-y-2 pb-1">
                        <Label
                          htmlFor={`input-${question.id}-${option.label}`}
                          className="text-sm font-medium text-red-400"
                        >
                          {option.dialogType === "count"
                            ? "Quantas vezes?"
                            : "Especifique (opcional):"}
                        </Label>
                        <Input
                          id={`input-${question.id}-${option.label}`}
                          type={
                            option.dialogType === "count" ? "number" : "text"
                          }
                          min={option.dialogType === "count" ? 1 : undefined}
                          value={getSelectionValue(question.id, option.label)}
                          onChange={(e) =>
                            handleValueChange(
                              question.id,
                              option.label,
                              e.target.value
                            )
                          }
                          className="h-10 border-zinc-600 bg-zinc-800 text-zinc-100"
                          placeholder={
                            option.dialogType === "count" ? "Ex: 3" : "..."
                          }
                        />
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => handleNavigate("prev")}
          disabled={prevStepId === null}
          className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-700 px-6 text-base font-medium text-zinc-100 transition-colors hover:bg-zinc-600 disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => handleNavigate("next")}
          className="inline-flex h-11 items-center justify-center rounded-md bg-red-800 px-6 text-base font-medium text-white shadow-lg transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          {nextStepId !== null ? "Próximo" : "Finalizar"}
        </button>
      </div>
    </div>
  );
}