const waitTime = 3000;

console.log(`Setting a ${waitTime / 1000} seconds delay \n`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("Done");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;

let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`Waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitInterval);
