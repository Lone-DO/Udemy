// Arrow Functions
// Fat Arrow =>

const es5Function = function(a, b) {
   return a + b;
};

// refactored, replacing 'function' with fatArrow declaration
const es6Function = (a, b) => {
   return a + b;
};

// set arguments
const refactored = (a, b) => a + b;

// one argument, one line function
const compact = number => 2 * number;

//no argument, immidiate return one line code
const noArg = () => "No argument, one line function";

//practical use
const numbers = [1, 2, 3, 4];

numbers.map(number => 2 * number);

const team = {
   members: ["Jane", "Bill"],
   teamName: "Super Squad",
   teamSummary: function() {
      return this.members.map(member => {
         return `${member} is on team ${this.teamName}`;
      });
   }
};

// Fat arrow gives Lexical "this"

/**
 * 
 * Refactor the code below to use a fat arrow functiom.
 * 1. If the function has a single expression in its body,
 *    the curly braces and 'return' keyword can be removed
 * 2. If the function has a single argument, 
 *    the () around the argument list can be removed
 * 
const fibonacci = function(n) {
   if (n < 3) return 1;
   return fibonacci(n - 1) + fibonacci(n - 2);
}

 */

const fibonacci = n => {
   if (n < 3) return 1;
   return fibonacci(n - 1) + fibonacci(n - 2);
};

/**
 *
 * Sometimes adding arrow functions binds the 
 *    "this" keyword to unexpected results.
 * Does the solution work with a fat arrow function,
 *    or will you have to use a functioin keyword instead?
 *
const profile = {
   name: "Alex", 
};
 */

const profile = {
   name: "Alex",
   getName: function() {
      return this.name;
   }
};
