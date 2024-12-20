'use client';
import React, { useEffect, useState } from 'react';
import { Commandment } from '@/repositories/interfaces/ICommandments';
import { handleCheckboxChange } from '@/app/utils/handleCheckboxChange';
import { fetchAndUpdateCommandments } from '../services/commandmentsService';
import { applyTheme } from '../utils/themeManager';
import PdfButton from '../components/pdfButton';

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
            <div className="fixed inset-0 flex items-center justify-center bg-white text-roman-red">
                <div className="text-center">
                    <div className="loader"></div> 
                    <p className="mt-4 text-lg font-semibold">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full ">
            <div id="head" className='bg-backgr text-white p-4 bg-background-black'>
                <h1 className="text-2xl font-semibold text-center">Exame de consciência</h1>
            </div>

            <div id="alert-container" className="w-full max-w-screen-md mx-auto mt-5 mb-5 flex flex-col items-center justify-center ">
                <div id="alert-head" className="w-full bg-roman-yellow text-center rounded-t-2xl p-2" >
                    <h1 className="font-semibold">ATENÇÃO</h1>
                </div>
                <div id="alert-box" className="w-full p-2 text-center bg-background-gray rounded-b-2xl shadow-lg">
                    <p>Para uma boa <span className='font-semibold'>confissão</span> é preciso de um bom exame
                        de consciência. Procure fazer isso em um local calmo,
                        onde você possa relaxar. Reze por sabedoria e responda
                        essas perguntas de coração.
                        Nenhum dado seu é retido, sendo as opções apenas usadas para montar
                        posteriormente a sua confissão da melhor forma. É totalmente anônimo.</p>
                </div>
            </div>

            <div id="commandments-container" className='max-w-screen-md mx-auto'>
                <ul className="rounded-md">
                    {commandments.map((commandment) => (
                        <div
                            id="question-container"
                            className="mb-6 bg-background-gray rounded-2xl pb-2 shadow-lg"
                            key={commandment.questionnaireNumber}
                        >
                            <li>
                                <div id="title-head" className='bg-roman-red rounded-t-2xl p-2 text-center'>
                                    <h2 className="text-md font-semibold text-white">
                                        {commandment.questionnaireTitle}
                                    </h2>
                                    {commandment.questionnaireSubtitle && (
                                        <h1 className="text-lg text-white font-semibold opacity-70">{commandment.questionnaireSubtitle}</h1>
                                    )}
                                </div>

                                <ul className="m-4">
                                    {commandment.questions.map((question) => (
                                        <li key={question.questionNumber} className="mb-4">
                                            <div id="question-title" className='flex items-center mb-2'>
                                                <div id="number" className='bg-roman-red text-white font-semibold w-8 h-8 flex items-center justify-center rounded-md'>
                                                    {question.questionNumber}
                                                </div>
                                                <div id="title" className='ml-2 font-semibold text-lg'>
                                                    {question.questionTitle}
                                                </div>
                                            </div>
                                            <ul className="ml-2 max-w-screen-md mx-auto">
                                                {question.options.map((option, index) => (
                                                    <li
                                                        key={index}
                                                        className={`pb-1 flex items-center space-x-2 ${option.disabled ? 'opacity-50' : ''}`}
                                                    >
                                                        <div id="checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-md checked:bg-black checked:border-black"
                                                                checked={option.checked || false}
                                                                disabled={option.disabled || false}
                                                                onChange={(e) =>
                                                                    handleCheckbox(
                                                                        commandment.questionnaireNumber,
                                                                        question.questionNumber,
                                                                        index,
                                                                        e.target.checked
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        <label className="text-gray-700">{option.optionPhrase}</label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>

            <div id="pdf-button-div">
                <PdfButton />
            </div>
        </div>
    );
};

export default CommandmentsList;
