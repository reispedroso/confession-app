'use client'
import React, { useState, useEffect } from 'react';
import { firstCommandmentPtBr } from '@/data/firstcommandment';
import { getCommandmentResponses, updateCommandmentResponses } from '@/services/cookieServices';

const FirstCommandmentScreen = () => {
    const { commandment, commandmentNumber, questions } = firstCommandmentPtBr;

    // Estado inicial com as respostas salvas do cookie
    const [responses, setResponses] = useState(() => getCommandmentResponses()[commandmentNumber] || {});

    // Função para lidar com a marcação/desmarcação de opções
    const handleOptionChange = (questionId: number, optionIndex: number, isExclusive: boolean) => {
        const currentSelectedOptions = responses[questionId] || [];
        let updatedOptions;

        if (isExclusive) {
            // Caso a opção seja exclusiva
            updatedOptions = currentSelectedOptions.includes(optionIndex) ? [] : [optionIndex];
        } else {
            // Caso não seja exclusiva
            updatedOptions = currentSelectedOptions.includes(optionIndex)
                ? currentSelectedOptions.filter((o) => o !== optionIndex) // Remove a opção
                : [...currentSelectedOptions, optionIndex]; // Adiciona a opção
        }

        // Atualiza o estado local e o cookie
        const updatedResponses = { ...responses, [questionId]: updatedOptions };
        setResponses(updatedResponses);
        updateCommandmentResponses(commandmentNumber, questionId, updatedOptions);
    };

    // Verifica se uma opção está desabilitada (por causa de exclusividade)
    const isOptionDisabled = (questionId: number, optionIndex: number, exclusiveOption: number) => {
        const currentSelectedOptions = responses[questionId] || [];
        return exclusiveOption === optionIndex && currentSelectedOptions.length > 0 && !currentSelectedOptions.includes(optionIndex);
    };

    return (
        <div>
            <header>
                <h1>{commandmentNumber}º Mandamento</h1>
                <h2>{commandment}</h2>
            </header>
            <main>
                {questions.map((question) => (
                    <section key={question.id}>
                        <h3>{question.id}. {question.title}</h3>
                        <ul>
                            {question.options.map((option, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={`question-${question.id}`}
                                            value={index}
                                            checked={responses[question.id]?.includes(index) || false}
                                            disabled={isOptionDisabled(question.id, index, question.exclusiveOption)}
                                            onChange={() => handleOptionChange(question.id, index, question.exclusiveOption === index)}
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
            <footer>
                <button onClick={() => console.log('Ir para o próximo mandamento')}>Próximo mandamento</button>
            </footer>
        </div>
    );
};

export default FirstCommandmentScreen;
