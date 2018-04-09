let numbers = [10, 20, 30],
   sum = 0;
function forLoop() {
   for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
   }
}

function refector() {
   numbers.reduce(function(sum, number) {
      return sum + number;
   }, 0);
}

// *******

function array() {
   let primaryColors = [
      { color: "red" },
      { color: "yellow" },
      { color: "blue" }
   ];

   primaryColors.reduce(function(previous, color) {
      previous.push(color.color);
      return previous;
   }, []);
}

// ******

function balanacedParams(string) {
   return !string.split("").reduce(function(prev, char) {
      /** if it starts in negatives, restage*/
      if (prev < 0) {
         return prev;
      }
      /** if forward, increase incremet*/
      if (char === "(") {
         ++prev;
      }
      /** if backward, decrease incremet*/
      if (char === ")") {
         --prev;
      }
   });
}

/**
 * Use the 'reduce' helper to find the sum of all the distances traveled.
 * Assign the result to the variable 'totalDistance'
 */

function sumMyTrip() {
   var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

   var totalDistance;

   trips.reduce(function(result, trip) {
      return (totalDistance = result + trip.distance);
   }, 0);
}

/**
 * use the helper to create an object that tallies the number of sitting & standing desks.
 * The object returned should have the form "{sitting:3, standing:2}"
 * The initial valua has been provided to you.
 */

function deskTally() {
   var desks = [
      { type: "sitting" },
      { type: "standing" },
      { type: "sitting" },
      { type: "sitting" },
      { type: "standing" }
   ];

   var deskTypes = desks.reduce(
      function(prev, desk) {
         if (desk.type === "sitting") {
            ++prev.sitting;
         }
         if (desk.type === "standing") {
            ++prev.standing;
         }
         return prev;
      },
      { sitting: 0, standing: 0 }
   );
}

/**
 * Wrute a function called 'unique' that will rmeove all
 * the duplicate values from an array.
 */

function unique(array) {
   return array.reduce(function(previous, num) {
      if (
         !previous.find(function(newValue) {
            return newValue === num;
         })
      ) {
         previous.push(num);
      }
      return previous;
   }, []);
}

//NOTE TO SELF: dont forget to add "!" at the begginning of find to turn result into boolean...
//EX. !array.find((keyValue) => keyValue === searchValue);

/**
 * Ex. !array.find(function(keyValue) {
 *    return keyValue === searchValue;
 * })
 */
