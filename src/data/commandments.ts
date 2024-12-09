import { Commandment } from "./types/commandments-types";

export const initialQuestions: Commandment = {
    commandment: 'Perguntas Iniciais',
    commandmentNumber: 0.1,
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

export const secondCommandmentPtBr = {
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

export const thirdCommandmentPtBr = {
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

export const fourthCommandmentPtBr = {
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
