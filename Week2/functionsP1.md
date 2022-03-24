## Function
 - Function declaration:
   - Allows us to use the function **before they are declare**.
 ```
  function func (statement1, statement2) {
   return `${statement1} and ${statement2}`
  }
 ```

 - Function expression consist in to create a function to a variable identifier using var, let or const.
    - The name of the function is not mandatory.
    - Allow us to use a arrow function.

 ```
  const myFunc = function nameFunc (parameter) {
   return `This is a function expression!!`
  }
 ```
## Arguments vs Parameters
 - When we define a function, we list its parameters.
 - When we invoke a function, we pass arguments.

 ```
  function func (parameters) {
   return ""
  }

  func(arguments)
 ```

 - When parameters not correspond with the number of arguments return undefined.
 - Is possible to defined a default value to parameters.
 <br>
 <br>
 - If number of arguments is larger than the number of parameters, "excessive" arguments is not be used, but they still can access them by the special variable arguments:
 
 ```
  function func (par1, par2) {
   console.log(arguments[3]);
  }

  > func(1, 2, 3, 4, 5)
  < 4
 ```
 > arguments object contains all the arguments passed to a function.

## Function return 
 - JS function always have a return value, by default the value is "undefined" and use return keyword it will return a different value.