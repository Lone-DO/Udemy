/**
 * var name: 'Jane';
 * var title: 'Software Enginerr';
 * var hourlyWage: 40;
 */

//ES6
//const// Constant declartion for permanent values || Read-only
//let// Let declarations for values be flexible || Read & Write

const name = "Jane";
let title = "Software Engineer";
let hourlyWage = 40;

// some time later

title = "Sr. Software Engineer";
hourlyWage = 45;

//CHALLENGES BELOW

/**
 * Imagine that you are building an application to manage a user's Facebook profile.
 *    A profile might have a 'name', 'age', 'dateOfBirth'.
 * Declare three variables with these same name, making sure to use 'const' or 'let'
 *    depending on whether you expect the value to change over time.
 */

const name = "billy";
let age = 25;
const dateOfBirth = "01/01/90";

// ---------
/**
 * * The following code uses 'var' instead of const and 'let'.
*   Refactor the function to use the new keywords.
* Be sure to consider whether the variable shoud be declared using 'const' or 'let' 
*   depending on whether the variable gets reassigned or not.

  var statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
*
 */

const statuses = [
   { code: "OK", response: "Request successful" },
   { code: "FAILED", response: "There was an error with your request" },
   { code: "PENDING", response: "Your reqeust is still pending" }
];
let message = "";
const currentCode = "OK";

for (var i = 0; i < statuses.length; i++) {
   if (statuses[i].code === currentCode) {
      message = statuses[i].response;
   }
}

// -------
