const readline = require("readline");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const collectAnswers = (questions, done) => {
    const answers = [];

    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            readlineInterface.question(questions[answers.length], questionAnswered);
        } else {
            return done(answers);
        }
    };

    readlineInterface.question(questions[0], questionAnswered);
};

module.exports = { collectAnswers };
