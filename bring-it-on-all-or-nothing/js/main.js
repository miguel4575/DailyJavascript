// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let variable = true;
alert(variable);

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "blue"
color = "green",
console.log(color)
// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function sum(num1,num2,num3,num4){
    return (num1 + num2 + num3) / num4
}
console.log(sum(1,2,3,4))




// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(num1,num2){
    console.log(Math.pow(num1,num2))
}
power(2,3)


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function alertString(boolean,string){
    if(boolean){
        alert(string)
    }
    else console.log(string)
}
alertString(true,"Hello")



//*Loops*
//Create a function that takes in a number. 
//Console log all values from 1 to that number, 
//but if the number is divisible by 3 log "fizz" instead of that number, 
//if the number is divisible by 5 log "buzz" instead of the number, and 
//if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number



function fizzBuzz(num){
    for(let i = 1; i < num; num++){
        if (i%3 === 0 && i%5===0){
            console.log("fizzbuzz")}
        }
        else if (i%3 === 0){
            console.log("fizz")
        }
        else if (i%5 === 0 ){
            console.log("buzz")
        }
        else console.log(i)
    }
}