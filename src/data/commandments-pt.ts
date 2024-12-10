import { Commandment } from "./types/commandments-types";

export const initialQuestionsPtBr: Commandment = {
    commandment: 'Perguntas Iniciais',
    commandmentNumber: 0,
    questions: [
        {
            id: 1,
            title: "A quanto tempo se converteu ao catolicismo ",
            exclusiveOption: 0,
            options: [
                "Nasci na Igreja Católica",
                "Na a infância",
                "Na a adolescência",
                "Na a vida adulta",
                "Na a velhice"
            ],
        },
        {
            id: 2,
            title: "Sobre a última confissão",
            exclusiveOption: 0,
            options: [
                "Nunca confessei",
                "Confessei sem falhas",
                "Menti na confissão",
                "Omiti pecados",
                "Confessei sem arrependimento",
                "Não cumpri a penitência",
                "Não reparei meus erros"
            ]    
        }
    ]
}

export const firstCommandmentPtBr: Commandment = {
    commandment: 'Amar a Deus sobre todas as coisas',
    commandmentNumber: 1,
    questions: [
        {
            id: 1,
            title: "Sobre as doutrinas da fé da Igreja Católica",
            exclusiveOption: 0,
            options: [
                "Professei e cumpri meus deveres",
                "Fugi de buscar conhecer em momentos oportunos",
                "Conscientemente neguei doutrinas",
                "Incentivei outros a descrerem",
                "Defendi doutrinas contrárias à fé verdadeira em público",
                "Me abstive de defender minha fé quando necessário",
            ],
        },
        {
            id: 2,
            title: "Sobre a lealdade a igreja católica",
            exclusiveOption: 0,
            options: [
                "Nunca me desviei da servidão a igreja de Cristo",
                "Participei ativamente de cultos protestantes e suas atividades",
                "Participei ativamente de cultos pagões e suas atividades",
                "atividades como previsão do futuro, tarô, astrologia etc"
            ]
        },
        {
            id: 3,
            title: "Sobre o respeito a Deus",
            exclusiveOption: 0,
            options: [
                "Sempre respeitei Deus sobre todas as coisas",
                "Duvidei da capacidade de Deus",
                "Coloquei meus pecados como maiores que a misericórdia de Deus",
                "Comunguei em pecado mortal",
                "Me vi como já salvo independente de minhas ações",
                "Me enfureci contra Deus",
                "Tentei tentar a Deus exigindo algo"
            ]
        }
    ],
};

export const secondCommandmentPtBr: Commandment = {
    commandment: 'Não tomar o santo nome em vão',
    commandmentNumber: 2,
    questions: [
        {
            id: 1,
            title: "Sobre a blasfêmia",
            exclusiveOption: 0,
            options: [
                "Nunca blasfemei",
                "Critiquei a Igreja",
                "Ataquei doutrinas da Igreja",
                "Desrespeitei o nome de Deus",
                "Desrespeitei Maria, a mãe de Deus",
                "Desrespeitei os santos da Igreja",
                "Desrespeitei bispos, padres, diáconos e outros membros da Igreja",
                "Desrespeitei os sacramentos da Igreja",
                "Incentivei outros a praticar desrespeito contra a Igreja",
                "Cometi blasfêmias físicas, como destruir ou causar danos a imagens",
                "Ataquei o santo Papa Francisco ou qualquer outro",
            ],
        },
        {
            id: 2,
            title: "Sobre invocar o nome de Deus",
            exclusiveOption: 0,
            options: [
                "Nunca o invoquei em vão",
                "Invoquei a Deus em momentos de impureza moral",
                "Fiz promessas a Deus e não cumpri",
                "Fiz piadas e zombarias com o nome de Deus",
                "Fiz orações maliciosas a Deus",
                "Fiz juras imorais ou falsas usando Deus",
            ],
        },
    ],
};

export const thirdCommandmentPtBr: Commandment = {
    commandment: 'Guardar domingos e festas',
    commandmentNumber: 3,
    questions: [
        {
            id: 1,
            title: "Sobre a missa",
            exclusiveOption: 0,
            options: [
                "Não faltei e nem desrespeitei a liturgia da missa",
                "Faltei à missa no domingo por vontade própria",
                "Fiz com intenção que outros faltassem à missa no domingo",
                "Faltei à missa nos dias santos de preceito",
                "Fiz com intenção que outros faltassem à missa nos dias santos de preceito",
                "Desrespeitei o horário da missa saindo mais cedo ou chegando atrasado",
                "Fiz com que outros saíssem mais cedo ou se atrasassem para a missa",
            ],
        },
        {
            id: 2,
            title: "Sobre oração",
            exclusiveOption: 0,
            options: [
                "Mantenho minha rotina de orações em dia",
                "Passei longos períodos sem praticar orações",
                "Comecei novenas, quaresmas, comemorações e interrompi no meio por falta de vontade",
            ],
        },
    ],
};

export const fourthCommandmentPtBr: Commandment = {
    commandment: 'Honrar pai e mãe',
    commandmentNumber: 4,
    questions: [
        {
            id: 1,
            title: "Sobre os pais",
            exclusiveOption: 0,
            options: [
                "Nunca cometi injustiças com meus pais",
                "Conscientemente prejudiquei meus pais",
                "Conscientemente roubei meus pais",
                "Conscientemente entristeci ou enraiveci meus pais",
                "Conscientemente zombei de meus pais",
                "Deixei de dar apoio ou ajuda a meus pais em momento de necessidade",
                "Me vi feliz ao ver o sofrimento de meus pais",
                "Agredi fisicamente meus pais",
                "Desobedeci meus pais em momentos de falhas morais minhas",
                "Obedeci ordens absolutamente imorais de meus pais",
            ],
        },
        {
            id: 2,
            title: "Sobre o cônjuge",
            exclusiveOption: 0,
            options: [
                "Nunca cometi injustiças com meu cônjuge",
                "Ofendi com intenção meu cônjuge",
                "Magoei com intenção meu cônjuge",
                "Bati em meu cônjuge",
                "Desviei meu cônjuge do caminho de Deus e o pus em pecado mortal",
            ],
        },
        {
            id: 3,
            title: "Sobre os filhos",
            exclusiveOption: 0,
            options: [
                "Nunca cometi injustiças com meus filhos",
                "Não batizei meus filhos o mais cedo possível por negligência",
                "Não eduquei meus filhos na correta fé católica os roubando a alegria dos sacramentos",
                "Abdiquei da minha função de prover meus filhos",
                "Permiti que meus filhos consumissem conteúdos contrários à verdade de Cristo",
                "Fui mal exemplo",
                "Castiguei com ódio",
            ],
        },
    ],
};

export const fifthCommandmentPtBr: Commandment = {
    commandment: "Não matarás",
    commandmentNumber: 5,
    questions: [
        {
            id: 1,
            title: "Sobre a intenção de matar",
            exclusiveOption: 0,
            options: [
                "Nunca desejei ou torci pela morte de alguém",
                "Desejei o sofrimento a alguém",
                "Desejei a doença a alguém",
                "Desejei acidentes a alguém",
                "Desejei a alguém que sofresse aborto",
                "Tive a intenção de vingança contra alguém",
                "Tive a intenção de me suicidar"
            ]
        },
        {
            id: 2,
            title: "Sobre a posição",
            exclusiveOption: 0,
            options: [
                "Nunca defendi publicamente o ataque, destruição ou mals tratos a alguém",
                "Incentivei outros a buscarem vingança",
                "Alimentei sentimentos de ódio em outras pessoas",
                "Defendi a morte a pessoas de forma injusta",
                "Defendi o aborto",
                "Votei em políticos que defendem pautas abortistas",
                "Incentivei pessoas a usarem métodos contraceptivos",
                "Defendi a Eutanásia humana",
                "Votei em políticos que defendem a eutanásia humana",
                "Incentivei pessoas a praticarem a Eutanasia humana",
                "Incentivei pessoas ao suicídio"
            ]
        },
        {
            id: 3,
            title: "Sobre a atitude",
            exclusiveOption: 0,
            options: [
                "Nunca pratiquei atos injustos contra a vida",
                "Matei alguém sem ser em legitima defesa minha ou de outros",
                "Tentei matar alguém sem ser em legitima defesa minha ou de outros",
                "Pratiquei aborto",
                "Fiz uso de métodos contraceptivos",
                "Negligenciei alguém que estava sobre minha responsabilidade levando a sua morte",
                "Tentei praticar suicídio"
            ]
        }
    ]
}

export const sixthAndNinthCommandmentPtBr: Commandment = {
    commandment: "Não cometerás atos impuros",
    commandmentNumber: 6.9,
    questions: [
        {
            id: 1, 
            title: "Sobre o estado civil",
            exclusiveOption: 0,
            options: [
                "Nunca estive em relacionamentos imorais",
                "Vivi um casamento meramente civil",
                "Vivi um casamento de igreja protestante ou outra religião",
                "Sou casado na igreja, mas me divorciei civilmente",
                "Me divorciei civilmente e me relacionei com outras pessoas, consequentemente praticando adultério"
            ]
        },
        {
            id: 2,
            title: "Sobre a observação",
            exclusiveOption: 0,
            options: [
                "Nunca me coloquei diante de situações eróticas",
                "Busquei prazer na pornografia",
                "Busquei prazer em músicas eróticas",
                "Busquei prazer em textos eróticos",
                "Busquei prazer ao olhar mulheres comprometidas"
            ]
        },
        {
            id: 3,
            title: "Sobre a prática",
            exclusiveOption: 0,
            options: [
                "Nunca pratiquei atos de erotismo imorais",
                "Pratiquei masturbação",
                "Pratiquei sexo antes do casamento",
                "Propositadamente ejaculei fora do órgão sexual de minha parceira",
                "Pratiquei sexo anal",
                "Pratiquei homossexualismo",
                "Pratiquei sexo oral",
                "Pratiquei estupro",
                "Pratiquei pedofilia",
                "Pratiquei incesto",
                "Pratiquei zoofilia",
                "Me vesti de forma sensual intencionalmente",
                "Trai meu parceiro de casamento com outras pessoas",
                "Neguei a meu parceiro de casamento a relação sexual sem motivo válido"
            ]
        },
        {
            id: 4,
            title: "Sobre a divulgação",
            exclusiveOption: 0,
            options: [
                "Nunca divulguei ou criei conteúdos de erotismo imoral",
                "Compartilhei textos eróticos",
                "Compartilhei pornografia",
                "Criei conteúdo pornográfico",
                "Defendi publicamente ideais modernos de sexo livre",
                "Utilizei assuntos de cunho sexual para escandalizar pessoas"
            ]
        }
    ]
}

export const seventhAndTenthCommandmentsPtBr: Commandment = {
    commandment: "Não furtar e Não cobiçar as coisas alheias",
    commandmentNumber: 7.10,
    questions: [
        {
            id: 1,
            title: "Sobre o pensamento",
            exclusiveOption: 0,
            options: [
                "Nunca desejei ou pensei algo ruim para alguém em virtude de seus bens",
                "Desejei sofrimento a alguém por ter algo que não tenho",
                "Desejei fracasso econômico a alguém que não gosto",
                "Desdenhei dos bens do espírito diante de bens materiais",
                "Me entristeci por ver alguém tendo sucesso",
                "Comemorei o fracasso de alguém"
            ]
        },
        {
            id: 2,
            title: "Sobre a atitude",
            exclusiveOption: 0,
            options: [
                "Nunca agi de má fé para causar prejuízo ou obter benefício injusto",
                "Roubei algo",
                "Causei dano intencional a um bem",
                "Causei dano intencional a uma propriedade",
                "Pratiquei golpes",
                "Pratiquei fraude",
                "Me recusei a devolver algo emprestado",
                "Me afundei em apostas e jogos por minha ambição",
                "Pratiquei injustiças com meus funcionários"
            ]
        }
    ]
};

export const eighthCommandmentPtBr: Commandment = {
    commandment: "Não levantar falso testemunho",
    commandmentNumber: 8,
    questions: [
        {
            id: 1,
            title: "Sobre meus pensamentos",
            exclusiveOption: 0,
            options: [
                "Nunca pensei coisas injustas ou maldosas sobre os outros",
                "Fiz julgamentos sem conhecimento sobre outros",
                "Fiquei pensando sobre os erros e pecados de outros",
                "Criei imagens maldosas de outras pessoas em minha cabeça"
            ]
        },
        {
            id: 2,
            title: "Sobre minhas atitudes",
            exclusiveOption: 0,
            options: [
                "Nunca levantei falso testemunho",
                "Menti sobre as atitudes de alguém",
                "Criei intrigas falsas entre pessoas",
                "Forjei documentos",
                "Falsifiquei conversas",
                "Menti para causar prejuízo a alguém",
                "Revelei segredos danosos a alguém",
                "Falei de forma desnecessária sobre os pecados de alguém"
            ]
        }
    ]
};
