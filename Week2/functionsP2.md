## Rest parameters
---
 - [The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#:~:text=The%20rest%20parameter%20syntax%20allows%20a%20function%20to%20accept%20an%20indefinite%20number%20of%20arguments%20as%20an%20array)

   ```
   > function func(par1, par2, ...theOthers) { 
    return theOthers 
   }

   func(1, 2, 3, 4, 5)

   < theOthers[3, 4, 5]
   ```
## Function create scope
---
 - Each function create a new scope.
 - A variable declared in a scope is accessible inside all of th inner scopes.

    ### Inner functions and outer scope
   - Allows to access the all variables out of function scope.
   - [The inner function can be accessed only from statements in the outer function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#:~:text=The%20inner%20function%20can%20be%20accessed%20only%20from%20statements%20in%20the%20outer%20function.)
   <br><br>
   ### Variables shadowing
   - Declare a variable with the same name in a outer scope blocks the access to the outer variable in a inner scope.
   <br><br>
   ### Higher order functions
   - Take a function as a value or return a function as return value.
      ```
      > function add(x){
       return function innerAdd(y){
        return x + y
       };
      };

      add(x=5)(y=5)

      < 10
      ```
      <br>
   ### [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
   - [The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#:~:text=The%20inner%20function%20forms%20a%20closure%3A%20the%20inner%20function%20can%20use%20the%20arguments%20and%20variables%20of%20the%20outer%20function%2C%20while%20the%20outer%20function%20cannot%20use%20the%20arguments%20and%20variables%20of%20the%20inner%20function.)
   - In JavaScript, closures are created every time a function is created, at function creation time.
   <br><br>
   ### [IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
   - It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
   <br><br>
   1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
   <br><br>
   2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
   <br><br>
   ### IIFE + Closures example
   ```
   > const counter = (function(){
    let counterValue = 0;
    return function(){
     return counterValue++;
    }
   }());

   counter();
   < 1

   > counter();
   < 2
   ```
   - In this example is no other way to access the variable counterValue.