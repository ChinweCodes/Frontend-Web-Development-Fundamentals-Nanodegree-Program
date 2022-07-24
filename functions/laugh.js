/**
 * Directions:
    Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

    laugh(3);
    Returns: hahaha!
 */

/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

/* finish the function expression */
var laugh = function(argument)
{
    var message = "";
    for(var i = 0; i < argument; i++)
    {
        message = message + "ha";
    }
    message = message + "!";
    return message;
} 

console.log(laugh(10));
