var expense = {
   type: "Business",
   amount: "$45 USD"
};

//var type = expense.type;
//var amount = expense.amount;

// ES6

const { type, amount } = expense;

// -----
function deconstructProperty() {
   const savedFile = {
      extension: "jpg",
      name: "memes",
      size: 10110101
   };

   function fileSummary({ name, extension, size }, { color }) {
      return `The file ${name}.${extension} is of size ${size}`;
   }

   fileSummary(savedFile, { color: "white" });
}

// ---

/**
 *
 * Deconstruction Arrays assign [ elements[0] ],
 * Deconstructing Objects assign { properties.name }
 */
function deconstructElement() {
   const companies = ["Google", "Facebook", "Uber"];

   const [name, name2, ...rest] = companies;
   // ...rest takes remainder
   const [title] = companies; // companies[0]
   const { length } = companies; // companies.length
}

// ----
function deconstructTest() {
   const Google = {
         locations: ["Mountain View", "New York", "London"]
      },
      companies = [
         { name: "Google", location: "Mountain View" },
         { name: "Facebook", location: "Menlo Park" },
         { name: "Uber", location: "San Fransisco" }
      ],
      /**below... return companies[0].location */
      [{ location }] = companies,
      /**below... return Google.locations[0] */
      { locations: [place] } = Google;
}

// -----

function signup({ email, password, dateOfBirth, city, username }) {
   // create new user
}

// other code
// other code
// other code
// other code
// other code
// other code

const user = {
   username: "myname",
   password: "mypassword",
   dateOfBirth: "9/11/2001",
   city: "New Jersey",
   email: "myEmail@exmaple.com"
};
// Using deconstructor, order is ireelevant
signup(user);

// ------

const points = [[4, 6], [10, 4], [0, 20]];

/**
 * ****
 points.map(pair => {
   const x = pair[0],
         y = pair[1];
});

 * *****
points.map(pair => {
   const [x, y] = pair;
});

 */

points.map(([x, y]) => {
   return { x, y };
});

/**
 *End result...
  [
     { x: 4, y: 6},
     { x: 10, y: 4},
     { x: 0, y: 20}
  ]
 *
 */

// CHALLENGE BELOW

/**
  *
  * 
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
  */

const profile = {
   title: "Engineer",
   department: "Engineering"
};

function isEngineer({ title, department }) {
   return title === "Engineer" && department === "Engineering";
}

/**
 * Array Destructuring Practice
 * 
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject;
 */

const classes = [
   ["Chemistry", "9AM", "Mr. Darnick"],
   ["Physics", "10:15AM", "Mrs. Lithun"],
   ["Math", "11:30AM", "Mrs. Vitalis"]
];

const classesAsObject = [];

classes.map(([subject, time, teacher]) => {
   return classesAsObject.push({ subject, time, teacher });
});
// classes.map(([subject, time, teacher]) =>  classesAsObject.push( { subject, time, teacher } ));

// -----

/**
 * Recursion with Destructuring
 * Use array destructuring, recursion, and the rest/ spread operator
 *    to create a function 'double'
 * that will return a new array with all values inside of it multiplied by two.
 * Do not use array helpers!
 */

function _double(array, count = 0, doubled = []) {
   if (count === array.length) {
      console.log(doubled);
      return doubled;
   }
   let value = array[count];
   doubled.push(value * 2);
   _double(array, ++count, doubled);
}

// refactored

function double([number, ...rest]) {
   if (number === undefined) {
      return (number = []);
   }
   return [number * 2, ...double(rest)];
}
