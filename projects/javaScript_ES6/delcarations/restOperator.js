// Rest Operator
function addNumbers(...numbers) {
   return numbers.reduce((sum, num) => {
      return sum + num;
   }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// -------

// Spread Operator

const defaultColors = ["red", "green"];

const userFavoriteColors = ["orange", "yellow"];

// defaultColors.concat(userFavoriteColors);
[...defaultColors, ...userFavoriteColors];

// -----

function validateShoppingList(...items) {
   if (items.indexOf("milk") < 0) {
      return ["milk", ...items];
   }

   return items;
}

validateShoppingList("oranges", "bread", "tofu");

// ------------

const MathLibrary = {
   calculateProduct(...rest) {
      console.log(
         'This method has been deprecated, please use "multiply" method instead'
      );
      return this.multiply(...rest);
   },
   multiply(a, b) {
      return a * b;
   }
};

// CHALLENGES BELOW

/**
 * Refactor the following function to use the rest operator.
 * Remember, an argument using the rest operator does *not* need to be called 'rest'
 * 
 function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
 */

function product(...values) {
   var numbers = [...values];

   return numbers.reduce(function(acc, number) {
      return acc * number;
   }, 1);
}
