process.stdout.write("Hello \n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?",
];

const answers = [];

const ask = (i) => {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(` > `);
}

process.stdin.on("data", (data) => {
    process.stdout.write(data.toString().trim());
})

ask(answers.length);
