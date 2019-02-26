//Timeout part 1

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

//Timeout part 2
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

function done() {
    console.log("The job is done!");

}


function countdown(num, callback) {
    console.log(callback);


    setTimeout(() => {
        console.log(num);

        // TERMINATION
        if (num < 0) return;
        // BASE
        if (num === 0) return 1;
        // RECURSION
        return num * countdown(num - 1);
        if (num === 1) return callback();
          
        

    }, 1000);


}
 
countdown(10, done);
