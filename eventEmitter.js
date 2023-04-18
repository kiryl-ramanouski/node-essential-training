const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(user, message);
});

emitter.emit("customEvent", "Hello from custom event!", "Computer");
emitter.emit("customEvent", "Will check you out", "Kiryl");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();

    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "Process");
        process.exit();
    }

    emitter.emit("customEvent", input, "Terminal");
});
