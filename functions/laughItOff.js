/**
 * Directions:
    Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.
 */

    /*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
function Laugh(){
    var message = "hahahahahahahahahaha!";
    return message;
}
console.log(Laugh());


/**
 * Directions:
    Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

    TIP: You might need a loop to solve this!

    Here's an example of the output and how to call the function that you will write:

    console.log(laugh(3));
    Prints: "hahaha!"
 */

    /*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */
function laugh(num){
    var message = "";
    for(var i = 0; i < num; i++){
        message = message + "ha";
    }
    message = message + "!";
    return message;
 }
  console.log(laugh(3));