// Create an object that has your firstName, lastName, and occupation as keys.

let aboutMe = {
    firstName: "Johnson",
    lastName: "Degbor",
    occupation: "Coding Trainer"
}

// Access each value from your object using both dot notation and bracket notation.
/*DOT NOTATION */
console.log(aboutMe.firstName);
console.log(aboutMe.lastName);
console.log(aboutMe.occupation);
/*BRACKET NOTATION */
console.log(aboutMe["firstName"]);
console.log(aboutMe["lastName"]);
console.log(aboutMe["occupation"])

// Add a key for hobby to your object. Remove the key and value for occupation.
/*ADDING HOBBY*/
aboutMe.hobby = "coding";
console.log(aboutMe);

/*REMOVING occupation */
delete aboutMe.occupation;
console.log(aboutMe);

// What is the difference between dot notation and bracket notation?

/*Dot Notation is used to directly access the value of a key and its is most recommended*/

/*Bracket Notation is Used when you have to evaluate an expression, when you
have to pass in a variable to get the name a key. It is also used to get the
values of keys which has a number as its key because all keys including numbers
are recognised as text*/
