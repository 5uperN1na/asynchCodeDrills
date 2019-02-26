//Timing Out (#1 through #3)

//function to log a message to the console

/*function getMessage(message) {
    console.log(`The message is ${message}.`);
    return message;
}

//store in variable and invoke function
let msg = getMessage("Hello, there!");

//time out function that display different message 2 seconds later
setTimeout(() => {
    getMessage("Hey!");
}, 2000);

*/

//Timing Out (#4)
/*
function getWords(word) {
    console.log("Hola--1st");
    setTimeout(() => {
        console.log("Hiya--2nd");
    }, 3000);
    setTimeout(() => {
        console.log("Bonjour--3rd");
    }, 5000);
    setTimeout(() => {
        console.log("Hey and Hello--4th");
    }, 6000);

}


getWords();
*/

//Callbacks and Recursion

//NOT COMPLETE:  still need to get the callback working for the done() function.

function done() {
    console.log("The job is done!");

}

function countdown(num, callback) {

    setTimeout(() => {
        console.log(num);

        // TERMINATION
        if (num < 2) return;

        // RECURSION
        return countdown(num - 1);

        // BASE
        if (num === 0) return;


    }, 1000);

    if (num === 1) {
        console.log(callback);
    }

}

countdown(3, done);

//Promises, Promises

//global variable
//if set to true, log food but if set to false, log error message
let lunchtime = false;

//create a promise that returns a new promise
let orderMeSomeFood = new Promise(function (resolve, reject) {
    if (lunchtime === true) {
        let food = { lunch: "soup", drink: "iced tea" };
        resolve(food);
    } else {
        let err = new Error("There is no more food!");
        reject(err);
    }
});

//function creation
function orderLunch() {
    orderMeSomeFood
        .then(food => {
            console.log(food);
        })
        .catch(err => {
            console.log(err);
        });
}

//invoke function
orderLunch();


