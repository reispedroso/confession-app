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
        [questionId: number]: number[]; 
    };
}

export type QuestionResponses = { [questionId: number]: number[] };
