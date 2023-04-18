const { collectAnswers } = require("./collectAnswers");

const questions = ["What is your name?\n", "Where do you live?\n", "What are you going to do with Node.js?\n"];

const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers!");
    console.log(answers);
    process.exit();
});

answerEvents.on("answer", (answer) => {
    console.log(`The answer is ${answer}`);
});
