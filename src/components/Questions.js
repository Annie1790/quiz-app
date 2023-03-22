const questions = [
    {
        question: "Grape",
        answers: [
            {
                answer: "Merlot",
                correct: true,
            },
            {
                answer: "Furmint",
                correct: false,
            },
            {
                answer: "Chardonnay",
                correct: false,
            },
            {
                answer: "Gamay",
                correct: false,
            }
        ]
    },
    {
        question: "Wine",
        answers: [
            {
                answer: "bottle",
                correct: true,
            },
            {
                answer: "screwcap",
                correct: false,
            },
            {
                answer: "red",
                correct: false,
            },
            {
                answer: "white",
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