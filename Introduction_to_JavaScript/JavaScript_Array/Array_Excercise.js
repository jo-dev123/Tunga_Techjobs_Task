///////ARRAY EXERCISES

// For each of the exercises below, assume you are starting with the following people array.
let people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.
for (let name of people) {
    console.log(name)
}

// Write the command to remove "Greg" from the array.

people.shift()

// Write the command to remove "James" from the array.

people.pop()

// Write the command to add "Matt" to the front of the array.

people.unshift("Matt")

// Write the command to add your name to the end of the array.

people.push("Johnson")
people

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

for (let i = 0; i < people.length; i++) {
    if (i > 1) {
        break;
    }
    console.log(people[i])
}

// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

people.slice(2)

// Write the command that gives the indexOf where "Mary" is located.
people.indexOf("Mary")

// Write the command that gives the indexOf where "Foo" is located (this should return -1).
people.indexOf("Foo")

// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie")

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob")