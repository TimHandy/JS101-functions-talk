// Intro to Functions: Things I wish someone had told me.

/*
Functions take in some data, and do something with that data.
*/

// Basic Function

function addUp(num1, num2) {  // pass in two numbers
  return num1 + num2   // function spits out (returns) the sum of adding the numbers together
}

let addUpAnswer = addUp(2, 3)  // assign the result of addUp(2,3) to the variable addUpAnswer

console.log('addUpAnswer: ', addUpAnswer)  // console.log the addUpAnswer variable

/* 

Input: the ways a function gets hold of other data:

  - by pulling some data from elsewhere, like a variable somewhere else in your app for example
  - from what you pass in as arguments

Output: the ways a function spits out or modifies data:

  - It can modify some data outside of the function, changing a global variable, updating a database... these are called side-effects.
  - It can 'return' some value that is then stored in a variable and used elsewhere in your app


Pure vs Impure
=================
  Sometimes the whole point of a function is to update a variable outside of the function or update a database, 
    but wherever possible, try to keep them 'pure': 
    - pass in stuff as arguments to your function
    - return a value from the function and use that value somewhere; assign it to a var or use as an input in some other function for example
    This way your function:
      1. doesn't rely on anything in the outside world (that could be changed by something/someone else at any time), 
      2. doesn't change anything in the outside world (no side-effects), 
      3. will return the exact same output every time (predictable)...assuming you pass the same arguments every time. This becomes more relevant when you get to 'unit testing'.
  Start learning good habits now; make your functions pure wherever possible.



Using other people's functions
=================================

It's important to understand that built-in functions as part of JS (or other people's functions) also have inputs and outputs. 
This affects how you use them as they don't all behave in the same way. Here's two examples using array.slice and array.splice. 

Check the code below and see what the console.log statements produce:

*/


// Example using array.slice

let cheese = ["Edam", "Vintage Cheddar", "Stinky Blue", "Smoked Apple Cider Chemical Flavoured"]

console.log('cheeseBefore: ', cheese)        // ["Edam", "Vintage Cheddar", "Stinky Blue", "Smoked Apple Cider Chemical Flavoured"]

let myFavCheese = cheese.slice(1, 3)         // http://devdocs.io/javascript/global_objects/array/slice   We assign the return value from cheese.slice() to the var myFavCheese.

console.log('myFavCheese: ', myFavCheese)    // ["Vintage Cheddar", "Stinky Blue"]    myFavCheese is the return value of slice.

console.log('cheeseAfter: ', cheese)         // ["Edam", "Vintage Cheddar", "Stinky Blue", "Smoked Apple Cider Chemical Flavoured"]    The initial array is UNCHANGED.

// array.slice is a pure function, it returns a new array.




// Example using array.splice

let lunch = ['Avacado', 'Toast', 'Egg', 'Marmite']

console.log('lunchBefore: ', lunch)      //  ["Avacado", "Toast", "Egg", "Marmite"]

// now assign the new lunch to improvedLunch...
let improvedLunch = lunch.splice(0, 0, 'Spinach', 'Salt & Pepper')  // http://devdocs.io/javascript/global_objects/array/splice

console.log('improvedLunch: ', improvedLunch)  // []    oh oh... an empty array?  Check the docs to see what the return value of array.slice() is.

console.log('lunchAfter: ', lunch)  //  ['Spinach', 'Salt & Pepper', 'Avacado', 'Toast', 'Egg', 'Marmite']   // looks like the lunch array has been MUTATED... it's been changed by splice.

// array.splice is not a pure function; it made a change to the initial array.




/*

In summary:

- Functions need input from somewhere and produce an output somewhere
- Inputs and outputs can be internal to the function (hard-coded in the body of the function, passed in as arguments, and outputted as return values)
- Inputs and outputs can be external (global variables)
- Inputs and outputs can be a mix of internal and external values
- Read the docs to see what the inputs required are, and what the expected return value should be if you want effects the function has and also if you need to assign a return value to a variable
- Try to keep functions pure when you write your own functions
- If you find your function is working... have you forgotten the return keyword to create some output. I do this all the time!

*/