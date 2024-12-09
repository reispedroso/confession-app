import { parseCookies, setCookie } from "nookies";
import { CommandmentResponses } from "@/data/types/commandments-types";

const COOKIE_NAME = "commandmentResponses";

export const getCommandmentResponses = (): CommandmentResponses => {
    const cookies = parseCookies();
    return cookies[COOKIE_NAME] ? JSON.parse(cookies[COOKIE_NAME]) : {};
};

export const updateCommandmentResponses = (
    commandmentNumber: number,
    questionId: number,
    options: string[]
) => {
    const currentResponses = getCommandmentResponses();
    currentResponses[commandmentNumber] = {
        ...(currentResponses[commandmentNumber] || {}),
        [questionId]: options,
    };
    setCookie(null, COOKIE_NAME, JSON.stringify(currentResponses), {
        path: "/",
    });
};
