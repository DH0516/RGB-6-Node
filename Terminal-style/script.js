// script.js (helper file)
const figlet = require('figlet');
const chalk = require('chalk').default;

// Create a function that will use figlet to print "Hello World" into ASCII art
exports.printMsg = function() {
  console.log(figlet.textSync('Hello World'));
};

// Create a function that will colorize the outputs with yellow colour, blue background, and italic font
exports.colourMsg = function(pText) {
  console.log(chalk.yellow.bgBlue.italic(pText));
};