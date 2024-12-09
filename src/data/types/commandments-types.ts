export type Commandment = {
    commandment: string;
    commandmentNumber: number;
    questions: Question[];
};

export type Question = {
    id: number;
    title: string;
    exclusiveOption: number;
    options: string[];
};

export interface CommandmentResponses {
    [commandmentNumber: number]: {
        [questionId: number]: string[] | number[];
    };
}

export type QuestionResponses = { [questionId: number]: number[] };

export type Responses = { [questionId: number]: string[] };
export type SetResponses = (updatedResponses: Responses) => void;

