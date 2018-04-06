let users = [
   { name: "Jill" },
   { name: "Alex", id: 4 },
   { name: "Bill" },
   { name: "Alex" }
];

function forLoop() {
   for (i = 0; i < users.length; i++) {
      if (users[i].name == "Alex") {
         user = users[i];
         break;
      }
   }
}

function refector() {
   return users.find(function(user) {
      return user.name === "Alex";
   });
}

// *******

let posts = [{ id: 1, title: "New Post" }, { id: 2, title: "Old Post" }];

let comment = { postId: 1, content: "Great Post" };

function postForComments(posts, comment) {
   return posts.find(function(post) {
      return post.id === comment.postId;
   });
}

// Excersises

/**
 *
 */

function findAdmin() {
   var users = [
      { id: 1, admin: false },
      { id: 2, admin: false },
      { id: 3, admin: true }
   ];

   var admin = users.find(function(user) {
      return user.admin === true;
   });
}

/**
 * Find the acc with a balance of 12 & assign it to the variable 'account'
 */
function balance() {
   var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

   var account = accounts.find(function(acc) {
      return acc.balance === 12;
   });
}

/**
 * CHALLENGE
 * Write a 'findWhere' function that achieves this shorthand approach.
 * 'findWhere' should return the found object.
 */

function findWhere(array, criteria) {
   var search = criteria;
   return array.find(function(item) {
      return item[Object.keys(criteria)] === criteria[Object.keys(criteria)];
   });
}
