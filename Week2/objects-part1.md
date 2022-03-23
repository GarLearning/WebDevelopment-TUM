## [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
---
 - In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.

## Creating an object
---
 - To create the object you can invoke the object constructor as below, and after this add properties:
   ```
   > let cls = new Object();
   cls.name = 'Power of node';
   cls.year = 2016;
   cls;
   < Object {name: 'Power of node', year: 2016}
   ```

- Object literal
  - It's don't necessary add the properties one by one, instead of this is just use a list of properties (name:value) to add them.

     ```
     let cls = {
       name: 'Power of node',
       year: 2016,
     };
     ```
## Property name
---
 - We can access a specific propriety value via dot notation (Object.proprietyName).
 - Is possible to use the string as propriety name, and use 
 square bracket to access them.

## Property value
---
 - They can be any type string, numbers, boolean and including functions.
 - In a function use the keyword **this** to refer the own objects properties(with in a function is called **methods**).

   ```
   > let cls = {
    name: 'Power of node',
    year: 2016,
    print: function() {
     console.log(this.name + "," this.year);
    }
   };

   cls.print();

   < Power of node, 2016
   ```
## Prototype
---
  - Is the inheritance with each object have by itself (like a method inside them).
  - [When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case **undefined** is returned.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#:~:text=When%20you%20try,undefined%20is%20returned.)

## Prototype Inheritance
---
  - If add a property to a prototype, all of the objects inheriting from this prototype will get access to that property:

      ```
      > Object.prototype.easterEgg = 'It's Genius!!!';
      cls.easterEgg;
      < 'It's Genius!!!'
      ```
  - If have a property in the object have the same name of a prototype, it's not affect the prototype to other objects and return the value of your own property object.

```A brief from OOP in JS```
-
  - Model our program as a set of objects.
  - Objects are combination of data and behavior.
  - Define groups of similar objects.

## Constructor functions 
---
 - Constructor functions allow to create  group of objects such that each object belonging to a group similar contents and behavior.

    ```
    > function Swordman(name, dmg, hp){
      this.name = name;
      this.dmg = dmg;
      this.hp = hp;
      this.attacks = 2;
      this.critic = 620;
    }

    let swordman  = new Swordman("garzy", 5500, 18000)
    Object.getPrototypeOf(swordman) === Swordman.prototype;

    < true

    > Swordman.prototype.getTotalDamage = () => {
      return this.attacks * this.dmg;
    };

    swordman.getTotalDamage();

    < 11000
    ```

## Adding properties to a prototype
---
 - We can add properties of any type and not just functions.
    ```
    > Swordman.prototype.house = "Lannister";
    swordman.house;
    < "Lannister"
    ```
  **Adding data properties to a prototype is an anti-pattern. Only add methods to a prototype.**