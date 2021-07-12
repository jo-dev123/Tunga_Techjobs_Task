//Create an empty array called arr
let arr = [];

//Add your first name to the arr variable
arr.unshift("Johnson");

//Add your last name to the end of the arr variable
arr.push("Degbor")

//Add your favorite color to the beginning of the arr variable

arr.unshift("Red");

//Checking....
console.log(arr);
/*OUTCOME:["Red","Johnson","Degbor"]*/

//Remove the favorite color from the arr variable
arr.shift();
//Checking....
console.log(arr);
/*OUTCOME:["Johnson","Degbor"]*/

//Create another array called arr2.
let arr2 = [];

//Add your favorite number to arr2
arr2.unshift(3);
arr2.push("JavaScript")
//Checking....
console.log(arr2);

//See if the value 3 exists in the arr2 array. Do this using the indexOf method

if (arr2.indexOf(3) > -1) {
    console.log("3 is currently in your array")
} else {
    console.log("3 cannot be found in this array")
}

//What does indexOf return to you if the value passed to it can not be found in the array?

/*if no condition is set it would return -1 but in this case it would return "3 cannot be found in this array" */

//Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.

let combinedArr = arr.concat(arr2);

//Checking....
console.log(combinedArr);
//OUTPUT: ["Johnson","Degbor","3", "JavaScript"]

/////////////////////////////////
//PART 2

//Complete the following, starting from the following array: let arr = ["JavaScript", "Python", "Ruby", "Java"]

let arrC = ["JavaScript", "Python", "Ruby", "Java"];

//Return the following array: ["Python", "Ruby"].

let newArray = arrC.slice(1, 3);

//Checking.....
console.log(newArray);
//OUTPUT: ["Python", "Ruby"]

//Combine the array with the array ["Haskell", "Clojure"].

let anotherArr = ["Haskell", "Clojure"];

let combined2Array = newArray.concat(anotherArr);

//Checking....
console.log(combined2Array);

//Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.

/* Passing by value creates a copy of the original value assigned to a variable, this new copy can be manipulated independently without affecting the original. Passing by reference shares the same value with the original variable, if any manipulation or editing is made in the value of the new variable it would affect that of the original variable likewise.*/


