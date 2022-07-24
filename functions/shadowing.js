/**
 * Without pasting into your console, what do you think this code will print out? 
 */

var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
/**
 * The global variable x is assigned the value of 1.
Then, the function addTwo() increments the variable by 2.
Next, the variable is incremented by 1.
Finally, it's printed out using console.log = 4
 */

var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

/**
 * The global variable x is incremented by 1. Since the global variable's original value was 1, and it was incremented by 1, console.log will print out 2.
The variable assignment inside the function addTwo() only has function scope, so its affect is not reflected outside the function.
 */