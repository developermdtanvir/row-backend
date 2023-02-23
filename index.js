const School = require("./school");

const EventEmitter = require("events");

const school = new School();

// register a listerner for baillRing event

school.on("ballRing", (preoed) => {
  console.log(`we need to Run!! ${preoed.preoed} plize ${preoed.sir} sir`);
});

// raise an event

school.startPeriod();
