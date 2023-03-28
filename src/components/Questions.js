//categories 

const questions = [
    {   type: "france",
        question: "Which of these Bordeaux estates is NOT a 'First Growth'?",
        answers: [
            {
                answer: "Montrose",
                correct: true,
            },
            {
                answer: "Lafite Rotschild",
                correct: false,
            },
            {
                answer: "Haut Brion",
                correct: false,
            },
            {
                answer: "Latour",
                correct: false,
            }
        ]
    },
    {   type: "hungary",
    question: "How many wine regions Hungary has?",
    answers: [
        {
            answer: "22",
            correct: true,
        },
        {
            answer: "15",
            correct: false,
        },
        {
            answer: "9",
            correct: false,
        },
        {
            answer: "27",
            correct: false,
        }
    ]
},
    {   type: "france",
        question: "Which Chateau has a second wine known as 'Le Petit Lion'?",
        answers: [
            {
                answer: "Leoville-Poyferre",
                correct: false,
            },
            {
                answer: "Domaine De Chevalier",
                correct: false,
            },
            {
                answer: "Leoville-Las-Cases",
                correct: true,
            },
            {
                answer: "Chateau Cheval Blanc",
                correct: false,
            }
        ]
    },
    {   type: "france",
        question: "Which were the two estates that were upgraded to Premier Grand Cru Classe A status in the St-Emilion classification in 2012?",
        answers: [
            {
                answer: "Pavie and Angelus",
                correct: true,
            },
            {
                answer: "Angelus and Ausone",
                correct: false,
            },
            {
                answer: "Pavie and Cheval Blanc",
                correct: false,
            },
            {
                answer: "Angelus and Canon",
                correct: false,
            }
        ]
    },
    {   type: "italy",
        question: "Where is the wine region of Trentino?",
        answers: [
            {
                answer: "Italy",
                correct: true,
            },
            {
                answer: "Argentina",
                correct: false,
            },
            {
                answer: "France",
                correct: false,
            },
            {
                answer: "Hungary",
                correct: false,
            }
        ]
    },
    {   type: "france",
        question: "True or false? in Saint-Joseph, Syrah must be used excusively for wine production.",
        answers: [
            {
                answer: "False",
                correct: true,
            },
            {
                answer: "True",
                correct: false,
            }
        ]
    },
    {   type: "france",
        question: "The most common grape for Cognac and Armagnac is...",
        answers: [
            {
                answer: "Ugni Blanc",
                correct: true,
            },
            {
                answer: "Colombard",
                correct: false,
            },
            {
                answer: "Folle Blanche",
                correct: false,
            },
            {
                answer: "Chenin Blanc",
                correct: false,
            }
        ]
    },
    {   type: "france",
        question: "Where is Fixin located?",
        answers: [
            {
                answer: "Burgundy",
                correct: true,
            },
            {
                answer: "Bordeaux",
                correct: false,
            },
            {
                answer: "South West France",
                correct: false,
            },
            {
                answer: "Provance",
                correct: false,
            }
        ]
    },
    {   type: "france",
        question: "What Burgundy Classification does the following Appellation have: 'Romanée Conti (Cote de Nuits)'",
        answers: [
            {
                answer: "Grand Cru",
                correct: true,
            },
            {
                answer: "Regional",
                correct: false,
            },
            {
                answer: "Village",
                correct: false,
            },
            {
                answer: "Village & Premier Cru",
                correct: false,
            }
        ]
    },
    {   type: "france",
        question: "Where in France is the following located: 'Chateau Pape-Clement'",
        answers: [
            {
                answer: "Pessac-Leognan",
                correct: true,
            },
            {
                answer: "Saint-Estephe",
                correct: false,
            },
            {
                answer: "Saint Emilion",
                correct: false,
            },
            {
                answer: "Margaux",
                correct: false,
            }
        ]
    },
    {   type: "portugal",
        question: "Which is the correct sort on these Port Wine Regions from west to east?",
        answers: [
            {
                answer: "Baixo Corgo, Cima Corgo, Douro Superior",
                correct: true,
            },
            {
                answer: "Cima Corgo, Baixo Corgo, Douro Superior",
                correct: false,
            },
            {
                answer: "Douro Superior, Baixo Corgo, Cima Corgo",
                correct: false,
            },
            {
                answer: "Baixo Corgo, Douro Superior, Cima Corgo",
                correct: false,
            }
        ]
    },
    {   type: "france",
        question: "All of the following French appellations are in Bordeaux region expect for one - which is the odd one out?",
        answers: [
            {
                answer: "Volnay Santenots",
                correct: true,
            },
            {
                answer: "Graves",
                correct: false,
            },
            {
                answer: "Cremant de Bordeaux",
                correct: false,
            },
            {
                answer: "Pomerol",
                correct: false,
            }
        ]
    },
    {   type: "italy",
        question: "Which grape variety used for Gavi DOCG production?",
        answers: [
            {
                answer: "Cortese",
                correct: true,
            },
            {
                answer: "Nebbiolo",
                correct: false,
            },
            {
                answer: "Trebbiano",
                correct: false,
            },
            {
                answer: "Nerello Mascalese",
                correct: false,
            }
        ]
    },
    {   type: "italy",
        question: "Which grape variety used for Chianti DOC production?",
        answers: [
            {
                answer: "Sangiovese",
                correct: true,
            },
            {
                answer: "Barbera",
                correct: false,
            },
            {
                answer: "Malvasia",
                correct: false,
            },
            {
                answer: "Verdicchio",
                correct: false,
            }
        ]
    },
    {   type: "usa",
        question: "Which is the most widely planted black grape in California?",
        answers: [
            {
                answer: "Cabernet Sauvignon",
                correct: true,
            },
            {
                answer: "Syrah",
                correct: false,
            },
            {
                answer: "Merlot",
                correct: false,
            },
            {
                answer: "Zinfandel",
                correct: false,
            }
        ]
    },
    {   type: "usa",
        question: "What is the most widely planted white grape in California?",
        answers: [
            {
                answer: "Chardonnay",
                correct: true,
            },
            {
                answer: "Sauvignon Blanc",
                correct: false,
            },
            {
                answer: "Riesling",
                correct: false,
            },
            {
                answer: "Pinot Noir",
                correct: false,
            }
        ]
    },

];

let shuffle = array => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

shuffle(questions);

for (let question of questions) {
    shuffle(question.answers)
}

export default questions;