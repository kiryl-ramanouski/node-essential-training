const { collectAnswers } = require("./collectAnswers");

const questions = ["What is your name?\n", "Where do you live?\n", "What are you going to do with Node.js?\n"];

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers!");
    console.log(answers);
    process.exit();
});
