'use client'
import { useEffect, useState } from "react";
import { firstCommandmentPtBr } from "@/data/firstcommandment";
import { updateCommandmentResponses, getCommandmentResponses } from "@/services/cookieServices";

const FirstCommandmentScreen = () => {
    const [responses, setResponses] = useState<{ [questionId: number]: string[] }>({});

    const commandmentNumber = firstCommandmentPtBr.commandmentNumber;

    // Load saved responses on mount
    useEffect(() => {
        const savedResponses = Object.fromEntries(
            Object.entries(getCommandmentResponses()[commandmentNumber] || {}).map(
                ([key, value]) => [key, value.filter((v) => typeof v === 'string')]
            )
        );
        setResponses(savedResponses);
    }, [commandmentNumber]);

    const handleOptionChange = (questionId: number, optionIndex: number, isExclusive: boolean) => {
        const currentSelectedOptions = responses[questionId] || [];
        const optionText = firstCommandmentPtBr.questions
            .find((q) => q.id === questionId)?.options[optionIndex]; // Retrieve option text

        if (!optionText) return;

        let updatedOptions: string[];

        if (isExclusive) {
            updatedOptions = currentSelectedOptions.includes(optionText) ? [] : [optionText];
        } else {
            updatedOptions = currentSelectedOptions.includes(optionText)
                ? currentSelectedOptions.filter((o) => o !== optionText)
                : [...currentSelectedOptions, optionText];
        }

        const updatedResponses = { ...responses, [questionId]: updatedOptions };
        setResponses(updatedResponses);
        updateCommandmentResponses(commandmentNumber, questionId, updatedOptions);
    };

    return (
        <div>
            <h1>{firstCommandmentPtBr.commandment}</h1>
            {firstCommandmentPtBr.questions.map((question) => (
                <div key={question.id} className="mb-4">
                    <h2>{question.title}</h2>
                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id={`q${question.id}-o${index}`}
                                checked={responses[question.id]?.includes(option) || false}
                                onChange={() =>
                                    handleOptionChange(question.id, index, question.exclusiveOption === index)
                                }
                                disabled={
                                    question.exclusiveOption !== -1 &&
                                    responses[question.id]?.includes(
                                        question.options[question.exclusiveOption]
                                    ) &&
                                    !responses[question.id]?.includes(option)
                                }
                            />
                            <label htmlFor={`q${question.id}-o${index}`} className="ml-2">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FirstCommandmentScreen;
