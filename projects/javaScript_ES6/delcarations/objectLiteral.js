/*
function createBookShop(inventory) {
   return {
      inventory: inventory,
      inventoryValue: function() {
         return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle: function(title) {
         return this.inventory.find(book => book.title === title).price;
      }
   };
}
*/
function example1() {
   function createBookShop(inventory) {
      return {
         /**object value that = its same name */
         inventory,
         /** object functions no longer need to declate 'function' */
         inventoryValue() {
            return this.inventory.reduce(
               (total, book) => total + book.price,
               0
            );
         },
         priceForTitle() {
            return this.inventory.find(book => book.title === title).price;
         }
      };
   }

   const inventory = [
      { title: "Harry Potter", price: 10 },
      { title: "Programmign for Dummies", price: 50 }
   ];

   const bookShop = createBookShop(inventory);
}

// -----

function saveFile(url, data) {
   $.ajax({
      url,
      data,
      method: "POST"
   });
}

const url = "http://google.com";
const data = { opacity: 0 };

saveFile(url, data);

// ----

// CHALLENGES BELOW

const red = "#ff0000";
const blue = "#0000ff";

const _COLORS = { red: red, blue: blue };
const COLORS = { red, blue };

// -----

const fields = ["firstName", "lastName", "phoneNumber"];

const _props = { fields: fields };
const props = { fields };

// -------

const canvasDimensions = function(width, initialHeight) {
   const height = initialHeight * 9 / 16;
   //return {width: width, height: height};
   return {
      width,
      height
   };
};

// ---------

const color = "red";

const _Car = {
   color: color,
   drive: function() {
      return "Vroom!";
   },
   getColor: function() {
      return this.color;
   }
};

const Car = {
   color,
   drive: () => "Vroom!",
   getColor: function() {
      return this.color;
   }
};
