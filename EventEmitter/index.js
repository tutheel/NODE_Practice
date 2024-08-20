// import LogEvents from "./logEvents";
const LogEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmiiter extends EventEmitter {}

//Initialize Object
const myEmiiter = new MyEmiiter();

//addig listener for the log event
myEmiiter.on("log", msg => {
  LogEvents(msg);
});

setTimeout(() => {
  myEmiiter.emit("log", "log Event Emmitted!");
}, 2000);
