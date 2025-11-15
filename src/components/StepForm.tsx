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

  // --- INÍCIO DA LÓGICA CORRIGIDA ---
  const handleSelect = (
    question: ConfessionQuestion,
    option: ConfessionOption
  ) => {
    setSelections((prev) => {
      // 1. Separa as respostas de OUTRAS perguntas
      const otherQuestionAnswers = prev.filter(
        (s) => s.questionId !== question.id
      );

      // 2. Pega apenas as respostas DESTA pergunta
      let thisQuestionAnswers = prev.filter(
        (s) => s.questionId === question.id
      );

      // 3. Cria o novo item de seleção
      const newSelection: SelectedAnswer = {
        questionId: question.id,
        label: option.label,
        pdfPhrase: option.pdfPhrase,
        isExclusive: option.isExclusive,
        dialogType: option.dialogType,
        value: null,
      };

      // CASO 1: O utilizador clicou numa opção EXCLUSIVA
      if (option.isExclusive) {
        const isAlreadySelected = thisQuestionAnswers.some(
          (s) => s.label === option.label
        );

        if (isAlreadySelected) {
          // Se já estava selecionada, desmarca (fica vazio)
          thisQuestionAnswers = [];
        } else {
          // Se não estava selecionada, desmarca tudo e seleciona esta
          thisQuestionAnswers = [newSelection];
        }
      }
      // CASO 2: O utilizador clicou numa opção NORMAL (não exclusiva)
      else {
        // 1. Remove qualquer opção exclusiva que possa estar marcada
        thisQuestionAnswers = thisQuestionAnswers.filter(
          (s) => !s.isExclusive
        );

        // 2. Verifica se esta opção normal já estava marcada
        const isAlreadySelected = thisQuestionAnswers.some(
          (s) => s.label === option.label
        );

        if (isAlreadySelected) {
          // Se sim, remove-a (desmarca)
          thisQuestionAnswers = thisQuestionAnswers.filter(
            (s) => s.label !== option.label
          );
        } else {
          // Se não, adiciona-a
          thisQuestionAnswers.push(newSelection);
        }
      }

      // Devolve as respostas das outras perguntas + as respostas atualizadas desta pergunta
      return [...otherQuestionAnswers, ...thisQuestionAnswers];
    });
  };
  // --- FIM DA LÓGICA CORRIGIDA ---

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
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-red-800 text-white p-4 text-center">
        <h1 className="text-lg opacity-80 font-bold tracking-tight">
          {stepData.title}
        </h1>
        {stepData.subtitle && (
          <h2 className="mt-1 text-xl font-semibold">
            {stepData.subtitle}
          </h2>
        )}
      </div>

      <div className="p-6 md:p-8 space-y-10">
        <div className="space-y-10">
          {stepData.questions.map((question) => (
            <div
              key={question.id}
              className="space-y-5 border-b border-zinc-200 pb-8 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-red-800 text-white font-semibold size-8 flex items-center justify-center rounded-md shrink-0">
                  {question.id}
                </div>
                <h3 className="text-lg font-semibold text-red-900">
                  {question.prompt}
                </h3>
              </div>

              <div className="space-y-4 pl-11">
                {question.options.map((option) => (
                  <div key={option.label}>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={`q${question.id}-${option.label}`}
                        checked={isSelected(question.id, option.label)}
                        onCheckedChange={() => handleSelect(question, option)}
                      />
                      <label
                        htmlFor={`q${question.id}-${option.label}`}
                        className="cursor-pointer text-lg font-medium leading-snug text-zinc-700 transition-colors hover:text-zinc-900"
                      >
                        {option.label}
                      </label>
                    </div>

                    {isSelected(question.id, option.label) &&
                      option.dialogType && (
                        <div className="ml-8 mt-3 space-y-2 pb-1">
                          <Label
                            htmlFor={`input-${question.id}-${option.label}`}
                            className="text-sm font-medium text-red-700"
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
                            className="h-10 border-zinc-300 bg-white text-zinc-800"
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
            className="inline-flex h-11 items-center justify-center rounded-md bg-yellow-600 px-6 text-base font-semibold cursor-pointer text-zinc-100 transition-colors hover:bg-yellow-800  disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            onClick={() => handleNavigate("next")}
            className="inline-flex h-11 items-center justify-center rounded-md bg-red-800 px-6 text-base font-semibold text-white shadow-lg transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 cursor-pointer focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            {nextStepId !== null ? "Próximo" : "Finalizar"}
          </button>
        </div>
      </div>
    </div>
  );
}