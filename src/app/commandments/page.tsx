'use client';
import React, { useEffect, useState } from 'react';
import { Commandment } from '@/repositories/interfaces/ICommandments';
import { handleCheckboxChange } from '@/app/utils/handleCheckboxChange';
import { fetchAndUpdateCommandments } from '../services/commandmentsService';
import { applyTheme } from '../utils/themeManager';
import PdfButton from '../components/pdfButton';
import Link from 'next/link';
import Navbar from '../components/navBar';

const CommandmentsList = () => {
    const [commandments, setCommandments] = useState<Commandment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        applyTheme('#222222');

        const loadCommandments = async () => {
            try {
                const updatedCommandments = await fetchAndUpdateCommandments();
                setCommandments(updatedCommandments);
            } catch (error) {
                console.error("Error fetching commandments:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCommandments();
    }, []);

    const handleCheckbox = (
        questionnaireNumber: number,
        questionNumber: number,
        optionIndex: number,
        isChecked: boolean
    ) => {
        setCommandments((prevCommandments) => {
            const updatedCommandments = prevCommandments.map((commandment) =>
                commandment.questionnaireNumber === questionnaireNumber
                    ? handleCheckboxChange(commandment, questionNumber, optionIndex, isChecked)
                    : commandment
            );
            return updatedCommandments;
        });
    };

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white text-brand-500">
                <div className="text-center">
                    <div className="loader"></div>
                    <p className="mt-4 text-lg font-semibold">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <main className='w-full'>
            <Navbar />
            <div id="container" className='p-10 flex flex-col items-center max-w-screen-md mx-auto'>
                <div id="page-title">
                    <Link href="/" className='font-katibeh text-3xl font-bold text-brand-500'>EXAME DE CONSCIÊNCIA</Link>
                </div>
                <div id="warning-block" className='w-full mt-5 max-w-screen-md mx-auto'>
                    <div id="warning-head" className='bg-warning-500 w-full flex flex-col items-center rounded-t-2xl'>
                        <h2 className='font-roboto text-sm font-semibold p-1 text-white '>ATENÇÃO</h2>
                    </div>
                    <div id="warning-body" className='bg-warning-100 w-full p-2 rounded-b-2xl'>
                        <p className='text-warning-700 font-roboto text-sm font-medium leading-5 text-center p-2'>Para uma boa confissão é preciso de um bom exame de consciência. Procure fazer isso em um local calmo, onde você possa relaxar. Reze por sabedoria e responda essas perguntas de coração. Nenhum dado seu é retido, sendo as opções apenas usadas para montar posteriormente a sua confissão da melhor forma. É totalmente anônimo.</p>
                    </div>
                </div>

                <div id="commandments-body" className='mt-5 w-full max-w-screen-md mx-auto'>
                    {commandments.map((commandments) => (
                        <div
                            id='info'
                            key={commandments.questionnaireNumber}
                            className='bg-whites-question-background w-full rounded-2xl mb-5'>
                            <div id="question-header" className='bg-brand-500 rounded-t-2xl mb-1 p-2 '>
                                <h1 className=' text-center flex items-center justify-center text-white uppercase font-semibold'>{commandments.questionnaireTitle}</h1>
                                {commandments.questionnaireSubtitle && (
                                    <h1 className="text-md text-center text-white font-semibold opacity-70">{commandments.questionnaireSubtitle}</h1>
                                )}
                            </div>
                            <div id="question-body">
                                {commandments.questions.map((question) => (
                                    <div
                                        id="question-info"
                                        key={question.questionNumber}
                                    >
                                        <div id="question-title" className='flex p-4 items-center border-b-2 border-whites-line-white'>
                                            <div id="number-square" className='bg-brand-500 h-10 w-10 rounded-md flex items-center justify-center mr-2 '>
                                                <h1 className='text-white text-center font-semibold'>{question.questionNumber}</h1>
                                            </div>
                                            <h2 className='text-brand-900 text-center font-semibold '>{question.questionTitle}</h2>
                                        </div>

                                        {question.options.map((option, index) => (
                                            <div
                                                id="options"
                                                key={index}
                                                className={`border-b-2 border-whites-line-white flex flex-col justify-center ${index === question.options.length - 1 ? 'border-none' : ''
                                                    }`}
                                            >
                                                <li
                                                    key={index}
                                                    className={`p-2 ml-4 flex items-center space-x-2 cursor-pointer ${option.disabled ? 'opacity-50' : ''
                                                        }`}
                                                    onClick={() =>
                                                        !option.disabled &&
                                                        handleCheckbox(
                                                            commandments.questionnaireNumber,
                                                            question.questionNumber,
                                                            index,
                                                            !option.checked
                                                        )
                                                    }
                                                >
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            className="appearance-none w-6 h-6 bg-whites-checkbox-white rounded-md checked:bg-brand-500 checked:border-transparent"
                                                            checked={option.checked || false}
                                                            disabled={option.disabled || false}
                                                            onChange={(e) => e.stopPropagation()} // Evitar duplicar chamada
                                                        />
                                                    </div>
                                                    <span
                                                        className={`${option.checked ? 'text-brand-500' : 'text-whites-text-gray'
                                                            } text-sm font-medium`}
                                                    >
                                                        {option.optionPhrase}
                                                    </span>
                                                </li>
                                            </div>
                                        ))}
                                    </div>

                                ))}

                            </div>
                        </div>
                    ))}
                </div>

                <PdfButton />
            </div>
        </main>
    )
};

export default CommandmentsList;
