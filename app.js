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

function done (){
    console.log ("You are done!");

}

function countdown(num, callback){
    console.log(callback);
}

countdown(1, done);