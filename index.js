const EventEmitter = require("events");

const emitter = new EventEmitter();

// register a listerner for baillRing event

emitter.on("ballRing", (preoed) => {
  console.log(`we need to Run!! ${preoed.preoed} plize ${preoed.sir} sir`);
});

// raise an event

emitter.emit("ballRing", {
  preoed: "Frist Preroed class is finished",
  sir: "shopon",
});
