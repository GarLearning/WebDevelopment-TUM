## Comments 
---
 - //Single line comments.
 - /*
  Multiple lines comments.
 */

## Variables
---
 - Contain only letters, numbers, underscores or dollar signs.
 - Cannot start with a number.
 - Are case-sensitive.
 - Cannot math any JS reserved words.

## [Declaring Variables](https://www.youtube.com/watch?v=9WIJQDvt4Us)
---
 - var = 'It allows to declare global and local variables'
   - When just assigning a value, this always declares a global variable.
 - let =  'It is used to declare a block scope local variable'
 - const = 'Once initialized, they cannot be re-declared nor their value clan be changed within the same program.'

## Printing out variables to the console
---
 - Accessing an undeclared variable throws **ReferenceError** exception:<br>

       > console.log('The value of a is' + a);
       < ReferenceError: a is not defined (...)
 - Accessing a declared variable, but not initialized with a value returns **undefined**:<br>

       > var b;
       > console.log('The value of a is' + b);
       < The value is b is undefined
 - Not error form

       > var c = 4;
       > console.log('The value of a is' + c);
       The value of a is 4

## Literals
---
 - A fixed value that is literally provide to a variable is called a **literal**<br>
   - 23 is a integer<br>
   - 1.2 is a floating<br>
   - ...

## Data Types
---
 - JS is a untyped language, this means with we don't declare the data type of variables explicitly.
   - null - Null means 'nothing', it is used to indicate an absence of value. It is considered good practice to use 'null' in your code instead of 'undefined'.

            > var foo = null;
            > foo;
            < null //foo exists but has neither type nor value.
    - Object - Collection of named values
      - Consist of properties that describe the object (**key:value**)
    - Array - Indexed collection
      - Use to store multiple values indexed by number. 

## Scoping
---
 - Define the content in which variables (also functions) can be accessed.
 - Variables declared **outside** a function has a global scope.
   - Global variables can be accessed and modified throughout the program.
      - Declared by **var**.
 - Variable declared **within** a function has a local scope.
   - Local variables can be accessed only within a function.
 - Variables hoisting 
   - Means declare the variable in the top of script/function, **a variable can be used before it is declared**.
      - Only variables declared with **var** keyword can be hoisted.
 - Function hoisted
   - The same above idea, invoke a function before it is declared.