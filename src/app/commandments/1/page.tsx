'use client'
import { useEffect, useState } from "react";
import { firstCommandmentPtBr } from "@/data/commandments-pt";
import { updateCommandmentResponses, getCommandmentResponses } from "@/services/cookieServices";
import { handleOptionChange } from "@/app/utils/handleOptionChange";
import Link from "next/link";
import Image from "next/image";

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

    const handleChange = (questionId: number, optionIndex: number, isExclusive: boolean) => {
        handleOptionChange(
            questionId,
            optionIndex,
            isExclusive,
            responses,
            setResponses,
            firstCommandmentPtBr.questions,
            commandmentNumber
        );
    };

    return (
        <div>

            <div id="title" className="bg-background-light-black p-2 flex items-center justify-center mb-10">
                <button
                    onClick={() => window.history.back()}
                    className="bg-roman-light-red hover:bg-roman-dark-red ease-in duration-150 text-white hover:text-roman-gray text-md font-medium h-10 w-10 rounded-2xl flex items-center justify-center mr-5"
                >
                    <Image src="/assets/images/arrow-left.svg" alt="Arrow left" width={10} height={10} />
                </button>
                <div id="title">
                    <h2 className="text-lg font-semibold text-center text-white">{commandmentNumber}° Mandamento</h2>
                    <h1
                        className="text-2xl font-semibold text-center text-white">
                        {firstCommandmentPtBr.commandment}
                    </h1>
                </div>

            </div>
            {firstCommandmentPtBr.questions.map((question) => (
                <div key={question.id} className="mb-4">
                    <div id="question" className="flex items-center m-2">
                        <div id="number" className="bg-roman-light-red w-10 h-10 rounded-lg flex items-center justify-center text-white mr-2">
                            <span className="text-lg font-semibold">{question.id}</span>
                        </div>
                        <h2 className="text-2xl font-semibold">{question.title}</h2>
                    </div>

                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center m-2 pl-3 text-md">
                            <input
                                type="checkbox"
                                className=" peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                id={`q${question.id}-o${index}`}
                                checked={responses[question.id]?.includes(option) || false}
                                onChange={() =>
                                    handleChange(question.id, index, question.exclusiveOption === index)
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
            <div id="center-button" className='w-full flex flex-col justify-center items-center'>
                <div id="button" className="w-2/3 flex flex-col items-center justify-center text-center">
                    <Link href="/commandments/2" className="bg-roman-light-red hover:bg-roman-dark-red ease-in duration-150 text-white hover:text-roman-gray text-md font-medium h-16 w-full rounded-2xl flex flex-col items-center justify-center mt-10">
                        Próximo mandamento
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FirstCommandmentScreen;
