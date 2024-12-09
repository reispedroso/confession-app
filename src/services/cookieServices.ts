import { parseCookies, setCookie } from 'nookies';
import { CommandmentResponses } from '../data/types/commandments';

// Nome do cookie onde os dados serão armazenados
const COOKIE_NAME = 'userCommandmentResponses';

// Lê as respostas salvas do cookie
export const getCommandmentResponses = (): CommandmentResponses => {
    const cookies = parseCookies();
    return cookies[COOKIE_NAME] ? JSON.parse(cookies[COOKIE_NAME]) : {};
};

// Atualiza as respostas no cookie
export const updateCommandmentResponses = (
    commandmentNumber: number,
    questionId: number,
    selectedOptions: number[]
) => {
    const currentResponses = getCommandmentResponses();

    // Atualiza o objeto de respostas
    const updatedResponses: CommandmentResponses = {
        ...currentResponses,
        [commandmentNumber]: {
            ...currentResponses[commandmentNumber],
            [questionId]: selectedOptions,
        },
    };

    // Salva o novo estado no cookie
    setCookie(null, COOKIE_NAME, JSON.stringify(updatedResponses), {
        maxAge: 30 * 24 * 60 * 60, // 30 dias
        path: '/',
    });
};
