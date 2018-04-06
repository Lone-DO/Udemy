const products = [
   { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
   { name: "celery", type: "vegetable", quantity: 30, price: 13 },
   { name: "banana", type: "fruit", quantity: 10, price: 15 },
   { name: "orange", type: "fruit", quantity: 3, price: 5 }
];

let filteredProducts = [];

let oldWay = function() {
   for (i = 0; i < products.length; i++) {
      if (products[i].type === "fruit") {
         filteredProducts.push(products[i]);
      }
   }
};

filteredProducts;

let newWay = function() {
   products.filter(function(product) {
      return product.type === "fruit";
   });
};

let manyFilters = function() {
   products.filter(function(product) {
      return (
         product.type === "fruit" && product.quantity > 0 && product.price < 10
      );
   });
};

// **********

let post = { id: 4, title: "New Post" },
   comments = [
      { postId: 4, content: "awesome postt" },
      { postId: 3, content: "it was ok" },
      { postId: 4, content: "neat" },
      { postId: 3, content: "moooooooooar" }
   ];

function commentsForPost(post, commetns) {
   return comments.filter(function(comment) {
      return comment.postId === post.id;
   });
}

commentsForPost(post, comments);

// Excersises below

/**
 *
 *  Filter the array of numbers using the filter helper,
 * creating a new array that only contains numbers greater than 50,
 * Assign this new array to a variable called 'filteredNumbers'.
 *
 */

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
   return number > 50;
});

/**
 * Filther the array of users, only returning users who have admin level access.
 * Assign the result to the variable 'filteredUsers'.
 *
 */

var users = [
   { id: 1, admin: true },
   { id: 2, admin: false },
   { id: 3, admin: false },
   { id: 4, admin: false },
   { id: 5, admin: true }
];

var filteredUsers = users.filter(function(user) {
   return user.admin === true;
});

/**
 * Create a function called 'reject'.
 * Reject should work in the opposite way of 'filter'
 * if a function returns 'true,
 * the items shouldnt be included in the new array.
 */

function reject(array, iteratorFunction) {
   return array.filter(function(item) {
      return !iteratorFunction(item);
   });
}
