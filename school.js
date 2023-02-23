const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("preriod start");
    this.emit("ballRing", {
      preoed: "Frist Preroed class is finished",
      sir: "shopon",
    });
  }
}

module.exports = School;
