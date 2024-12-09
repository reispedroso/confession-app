import { Responses, SetResponses, Question } from "@/data/types/commandments-types";
import { updateCommandmentResponses } from "@/services/cookieServices";

export const handleOptionChange = (
    questionId: number,
    optionIndex: number,
    isExclusive: boolean,
    responses: Responses,
    setResponses: SetResponses,
    questions: Question[],
    commandmentNumber: number
) => {
    const currentSelectedOptions = responses[questionId] || [];
    const optionText = questions.find((q) => q.id === questionId)?.options[optionIndex]; // Retrieve option text

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
