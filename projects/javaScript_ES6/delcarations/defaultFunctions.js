function _makeAjaxRequest(url, method) {
   if (!method) {
      method = "GET";
   }

   return method;
   //logic to make request
}

function makeAjaxRequest(url, method = "GET") {
   return method;
   //logic to make request
}

makeAjaxRequest("google.com", null);
makeAjaxRequest("bing.com", "POST");

// -----

function User(id) {
   this.id = id;
}

function generateId() {
   return Math.round() * 999999;
}

function _createAdminUser(user) {
   user.admin = true;
   return user;
}

// function _createAdminUser(user = new User(genenrateId())) {
//    user.admin = true;
//    return user;
// }

// _createAdminUser(new User(genenrateId()));

const user = new User(genenrateId());
createAdminUser(user);

// CHALLENGES BELOW //

/**
 * Refactor the following code to use default function arguments.
 * 
 function sum(a, b) {
   if (a === undefined) {
      a = 0;
   }

   if (b === undefined) {
      b = 0;
   }

   return a + b;
}
 */

function sum(a = 0, b = 0) {
   return a + b;
}

// ------

/**
 * 
 function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}
 */

function addOffset(style = {}) {
   style.offset = "10px";

   return style;
}

// ----------
