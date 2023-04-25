const questions = ["What is your name?\n", "Where do you live?\n", "What are you going to do with Node.js?\n"];

let answers = [];

const ask = (i) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    process.stdout.write("\n\nThanks!");
});

ask(0);
