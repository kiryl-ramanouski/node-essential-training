const readline = require("readline");
const { EventEmitter } = require("events");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();

    const questionAnswered = (answer) => {
        emitter.emit("answer", answer);
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            readlineInterface.question(questions[answers.length], questionAnswered);
        } else {
            return done(answers);
        }
    };

    readlineInterface.question(firstQuestion, questionAnswered);
    return emitter;
};

module.exports = { collectAnswers };
