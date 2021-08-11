/////////// PART I

// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

/*
2 == "2";
... true

2 === 2;
... true

10 % 3;
... 1

10 % 3 === 1;
... true

true && false;
... false

false || true;
... true

true || false;
... true

*/



/////////// PART II

// Answer the following questions about this code block:

let isLearning = true;
if (isLearning) {
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}


// What should the above code console.log?   
// true

// Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
// This is because *isLearning* is a truthy value

let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if (firstvariable) {
    console.log("first");
} else if (firstvariable || secondvariable) {
    console.log("second");
} else if (firstvariable || thirdvariable) {
    console.log("third");
} else {
    console.log("fourth");
}

// What should the above code console.log? Why?
// This will console "third" beacuse all other predifined conditions would return false

// What is the value of firstvariable when it is initialized?
// undefined

// Is the value of firstvariable a "truthy" value? Why?
// It is a faulty value as it results to undefined

// Is the value of secondvariable a "truthy" value? Why?
// It is a faulty value as it is an empty string

// Is the value of thirdvariable a "truthy" value? Why?
// Yes this is a "truthy" value as it returns an integer


/////////// PART III

/* Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns 
   a number greater than 0.5. Otherwise console.log "Under 0.5". 
*/

if (Math.random() > 0.5) {
    console.log("Over 0.5")
}
else {
    console.log("Under 0.5")
}

// What is a falsey value? List all the falsey values in JavaScript.
/*

A falsey value is a value that when evaluated in a boolean expression the return false
They incluse:
0;
"";
undefined;
false;
NaN;
null;
*/