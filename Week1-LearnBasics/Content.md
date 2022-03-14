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
 - A fixed value that is literally provide to a variable is called a **literal**<br>
   - 23 is a integer<br>
   - 1.2 is a floating<br>
   - ...