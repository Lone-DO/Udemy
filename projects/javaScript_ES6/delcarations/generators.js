/**CONVULTED EXAMPLE OF GENERATORS */

/**
function* shopping() {
   //stuff on the sidewalk

   //walking down the sidewalk

   //go into the store with cash
   const stuffFromStore = yield 'cash';
   // walking to laundry place
   const cleanClothes = yield 'laundry';
   //walking back home
   return [stuffFromStore, cleanClothes];
}

//stuff in the store
const gen = shopping();
gen.next(); //leaving our house
//walked into the store
//walking up and down the aisles...
//purchase our stuff

gen.next('groceries'); //leaving the store with groceries
gen.next('cleanclothes');

*/
/**END OF CONVULTED EXPRESSION */

function* colors() {
   yield "red";
   yield "blue";
   yield "green";
}

const myColors = [];

for (let color of colors()) {
   myColors.push(color);
}

//myColors;

/******* */
function teamFactoring() {
   const testingTeam = {
      lead: "Amanda",
      tester: "Bill"
   };

   const engineeringTeam = {
      testingTeam,
      size: 3,
      department: "Engineering",
      lead: "Jill",
      manager: "Alex",
      engineer: "Dave"
   };

   function* TestingTeamIterator(team) {
      yield team.lead;
      yield team.tester;
   }

   function* TeamIterator(team) {
      yield team.lead;
      yield team.manager;
      yield team.engineer;
      const TestingTeamGenerator = TestingTeamIterator(team.testingTeam);
      yield* TestingTeamGenerator;
   }

   const names = [];
   for (let name of TeamIterator(engineeringTeam)) {
      names.push(name);
   }

   //names;
}

/***** */
function teamRefactor() {
   const testingTeam = {
      lead: "Amanda",
      tester: "Bill",
      [Symbol.iterator]: function*() {
         yield this.lead;
         yield this.tester;
      }
   };

   const engineeringTeam = {
      testingTeam,
      size: 3,
      department: "Engineering",
      lead: "Jill",
      manager: "Alex",
      engineer: "Dave",
      [Symbol.iterator]: function*() {
         yield this.lead;
         yield this.manager;
         yield this.engineer;
         yield* this.testingTeam;
      }
   };

   const names = [];
   for (let name of engineeringTeam) {
      names.push(name);
   }

   //names;
}

/***** */
function practicalGeneratorUse() {
   // Array Helpers Don't work inside Genrators
   class Comment {
      constructor(content, children) {
         this.content = content;
         this.children = children;
      }

      *[Symbol.iterator]() {
         yield this.content;
         for (let child of this.children) {
            yield* child;
         }
      }
   }

   const children = [
      new Comment("good comment", []),
      new Comment("bad comment", []),
      new Comment("meh", [])
   ];

   const tree = new Comment("Great post!", children);
   const values = [];

   for (let value of tree) {
      values.push(value);
   }

   values;
}
