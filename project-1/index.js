/*
 * Title : Basice Node app example
 * Description : Simple  Node Application Print random quotes per secend interval
 * Author : Sumit Sir
 * Date :
 */

// Dependendies

const mathLibary = require("./../lib/math");
const quotesLibary = require("./../lib/quotos");

// App object- Module scaffolding
const app = {};

app.config = {
  timeBetweenQuotes: 1000,
};

//function that print a random quots
app.printQuots = function () {
  // get all the quotes
  const allQuotes = quotesLibary.allQuotes();

  // get the length of quotes
  const numberofQuotes = allQuotes.length;

  //Pick a random number between 1 and the number of quotes
  const randomNumber = mathLibary.getRandomNumber(1, numberofQuotes);

  // Get the quote at that position in the array (minus one)
  const selectedQuotes = allQuotes[randomNumber - 1];

  // Print the quotes of console
  console.log(selectedQuotes);
};

app.indefiniteLoop = function indefiniteLoop() {
  // create the interval , using the config variable defend avobe
  setInterval(app.printQuots, app.config.timeBetweenQuotes);
};

//Invoked the loop
app.indefiniteLoop();
