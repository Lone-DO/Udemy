let numbers = [1, 2, 3],
   doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
   doubledNumbers.push(numbers[i] * 2);
}

let doubled = numbers.map(function(number) {
   return number * 2;
});

doubled;
doubledNumbers;

// Excersises below...

/** Using map, craete a new arra that contains the 'height' property for each object.
 * Assign this new array to the vraiable 'heights'.
 * Don't forget to use the 'return' keyword in the function! */

var images = [
   { height: "34px", width: "39px" },
   { height: "54px", width: "19px" },
   { height: "83px", width: "75px" }
];

var heights = images.map(function(image) {
   return image.height;
});

/**Create a new array that contains the distance / time value from each trip.
 * in other words, the new array should contain the (distance / time) value.
 * Assign the result to the variabl 'speeds'.
 */

var trips = [
   { distance: 34, time: 10 },
   { distance: 90, time: 50 },
   { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
   return trip.distance / trip.time;
});

/** CHALLENGE:
 * Implement a 'pluck' function.
 * Pluck should accept an array,
 *    a string representing a property name,
 *    & return an array containing that property from each object.
 */

function pluck(array, property) {
   return array.map(function(item) {
      return item[property];
   });
}
