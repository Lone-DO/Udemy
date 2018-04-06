let computers = [
   { name: "Apple", ram: 24 },
   { name: "Compaq", ram: 4 },
   { name: "Acer", ram: 32 }
];

function forLoop() {
   let allComputersCanRunProgram = true,
      onlySomeComputersCanRunProgram = false;

   for (var i = 0; i < computers.length; i++) {
      var computer = computers[i];
      if (computer.ram < 16) {
         allComputersCanRunProgram = false;
      } else {
         onlySomeComputersCanRunProgram = true;
      }
   }
}

function refector() {
   computers.every(function(computer) {
      return computer.ram > 16;
   });
}

// ******

function someHelper() {
   computers.some(function(computer) {
      return computer.ram > 16;
   });
}

// ******

function somedayEveryday() {
   let names = ["Alexandria", "Matthew", "Joe", "Blilly Bob"];

   names.some(function(name) {
      return name.length > 4;
   });

   names.every(function(name) {
      return name.length > 4;
   });
}

// ******

function validateInputs() {
   function Field(value) {
      this.value = value;
   }

   Field.prototype.validate = function() {
      return this.value.length > 0;
   };

   let username = new Field("2cool"),
      password = new Field("asdfdsa"),
      birthdate = new Field("10/29/69");

   let fields = [username, password, birthdate];

   let formIsValid = fields.every(function(field) {
      return field.validate();
   });

   if (!forkIsValid) {
      //disable and show error message
   } else {
      //allow submit
   }
}

/**
 * Given an array of usersm return 'true' if every user has submited a request form.
 * Assign the result to the variable 'hasSubmitted".
 */

function submit() {
   var users = [
      { id: 21, hasSubmitted: true },
      { id: 62, hasSubmitted: false },
      { id: 4, hasSubmitted: true }
   ];

   var hasSubmitted = users.every(function(user) {
      return user.hasSubmitted;
   });
}

/**
 * Given an array of network objects representing network requests,
 * assign the boolean 'true' to the variable 'inProgress'
 * if any network request has a 'status' of 'pending'.
 */
function state() {
   var requests = [
      { url: "/photos", status: "complete" },
      { url: "/albums", status: "pending" },
      { url: "/users", status: "failed" }
   ];

   var inProgress = requests.some(function(request) {
      return request.status === "pending";
   });
}
