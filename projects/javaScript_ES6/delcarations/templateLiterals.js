// function getMesage() {
//    const year= new Date().getFullYear();
//    return "the year is " + year;
// }

function getMesage() {
   const year = new Date().getFullYear();
   return `the year is ${year}`;
}

getMessage();

// PHP
// $data = '{"devuce_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

const device_id = 4;
const guid = 20;
const username = "lone-do";

const data = `{ "device_id": "${device_id}", "guid": "${guid}", "username": "${username}","} `;

// CHALLENGE BELOW

/**
 * refactor the function to use template strings
 *
   function doubleMessage(number) {
      return "Your number doubled is " + (2 * number);
   }
 *
 *
   function fullName(firstName, lastName) {
      return firstName + lastName;
   }
 */

function doubleMessage(number) {
   return `Your number doubled is ${2 * number}`;
}

function fullName(firstName, lastName) {
   return `${firstName} ${lastName}`;
}
