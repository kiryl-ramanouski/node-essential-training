const readline = require("readline");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = ["What is your name?\n", "Where do you live?\n", "What are you going to do with Node.js?\n"];

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

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers!");
    console.log(answers);
    process.exit();
});
