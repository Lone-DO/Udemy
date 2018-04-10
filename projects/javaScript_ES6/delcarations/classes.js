function es5() {
   function Car(options) {
      this.title = options.title;
   }

   Car.prototype.drive = () => "vroom";

   function Toyota(options) {
      Car.call(this, options);
      this.color = options.color;
   }

   Toyota.prototype = Object.create(Car.prototype);
   Toyota.prototype.constructor = Toyota;

   Toyota.prototype.honk = () => "honk";

   const toyota = new Toyota({ color: "red", title: "New Hotness" });
}

function es6() {
   class Car {
      constructor({ title }) {
         this.title = title;
      }

      drive() {
         return "vroom";
      }
   }
   const car = new Car({ title: "Old and Busted" });
   car.drive();

   class Toyota extends Car {
      constructor(options) {
         super(options);
         this.color = options.color;
      }

      horn() {
         return "doooodlebob";
      }
   }

   const toyota = new Toyota({ color: "red" });
   toyota.horn();
}

// -----

// CHALLENGE BELOW

/**
 * You're game developer, Create a class called 'Monster'
 * Initialize with these settings:
 *    defaultes with 100 health,
 *    can be assigned a name
 */

class Monster {
   constructor(options) {
      this.health = 100;
      this.name = options.name;
   }
}

/**
 * Create a subclass of hte Monster called Snake.
 *    Should have a 'bite' method with a target option
 *    Bite should deduct health by 10
 */

class Snake extends Monster {
   constructor(options) {
      super(options);
   }

   bite(target) {
      target.health -= 10;
   }
}
