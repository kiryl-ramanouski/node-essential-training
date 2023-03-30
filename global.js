const waitTime = 3000;

console.log(`Setting a ${waitTime / 1000} seconds delay \n`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("\nDone");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;

let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting... ${p}`);
};

const interval = setInterval(incTime, waitInterval);
