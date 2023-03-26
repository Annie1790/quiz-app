//categories 

const questions = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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