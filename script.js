const myNumber = 100;

console.log("typeof myNumber", typeof myNumber);

const myText = "Bojour JavaScript";

console.log("typeof myText", typeof myText);


const myBoolean = true;

console.log("typeof myBoolean", typeof myBoolean);

let myUndefined;

console.log("typeof myUndefined", typeof myUndefined);


let myNull = null;

console.log("typeof myNull", typeof myNull);




let myName = "Giorgi";
let myHobby = "Money Laundering";
let yearOfBirth = 2002;
let currentYear = 2023;

console.log(myName, myHobby,  yearOfBirth, currentYear);

let myAge = currentYear - yearOfBirth;

console.log (myAge);

let result = "My name is " + myName + " I am " + myAge + " years old and " + "my hobby is " + myHobby;

console.log(result);



let secondWay = `My name is ${myName} I am ${myAge} years old and my hobby is ${myHobby}`;

console.log(secondWay);