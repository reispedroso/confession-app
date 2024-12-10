import { Question, Responses, SetResponses } from "@/data/types/commandments-types";
import { updateCommandmentResponses } from "@/services/cookieServices";

export const handleOptionChange = (
    questionId: number,
    optionIndex: number,
    isExclusive: boolean,
    responses: Responses,
    setResponses: SetResponses,
    questions: Question[],
    commandmentNumber: number,
    disableAllOnAnySelection: boolean = false
) => {
    const optionText = questions.find((q) => q.id === questionId)?.options[optionIndex];

    if (!optionText) return;

    // Obtém as opções atualmente selecionadas para esta pergunta
    const currentSelectedOptions = responses[questionId] || [];

    let updatedOptions: string[];

    if (disableAllOnAnySelection) {
        // Se a lógica for desmarcar tudo ao selecionar qualquer opção
        updatedOptions = currentSelectedOptions.includes(optionText)
            ? [] // Desmarcar tudo se a opção já está marcada
            : [optionText]; // Marcar apenas a opção selecionada
    } else if (isExclusive) {
        // Lógica para opções exclusivas
        updatedOptions = currentSelectedOptions.includes(optionText)
            ? [] // Desmarcar tudo se a opção exclusiva já está marcada
            : [optionText]; // Marcar apenas a opção exclusiva
    } else {
        // Lógica para seleção múltipla
        updatedOptions = currentSelectedOptions.includes(optionText)
            ? currentSelectedOptions.filter((o) => o !== optionText) // Remove a opção se já está marcada
            : [...currentSelectedOptions, optionText]; // Adiciona a nova opção
    }

    // Atualiza respostas no estado
    const updatedResponses = { ...responses, [questionId]: updatedOptions };
    setResponses(updatedResponses);

    // Atualiza respostas dos mandamentos
    updateCommandmentResponses(commandmentNumber, questionId, updatedOptions);
};


export const handleSingleSelectionChange = (
    questionId: number,
    optionIndex: number,
    responses: Responses,
    setResponses: SetResponses,
    questions: Question[],
    commandmentNumber: number // Adicione este parâmetro
) => {
    const optionText = questions.find((q) => q.id === questionId)?.options[optionIndex];

    if (!optionText) return;

    // Atualiza para permitir somente uma seleção
    const updatedResponses = { ...responses, [questionId]: [optionText] };
    setResponses(updatedResponses);

    // Atualiza o cookie (adicione esta linha)
    updateCommandmentResponses(commandmentNumber, questionId, [optionText]);
};


