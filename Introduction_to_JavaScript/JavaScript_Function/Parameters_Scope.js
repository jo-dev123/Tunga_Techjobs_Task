//Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.


function add(a,b){
    return console.log(a + b);
}

function subtract(a,b){
    return console.log(a - b);
}

function multiply(a,b){
    return console.log(a*b);
}

function divide(a,b){
   return console.log(a/b);
}

function exponentOfTwo(a,c){
    c = 3;
    return console.log(a**c);
}

exponentOfTwo(3);

//Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.

let myName = "Johnson"

function sayHello(k){
    if(k === myName){
       return console.log("Hello Boss")
    }
    else{
       return console.log('Hello ' + k)
    }
    

}

sayHello("Johnson");

// Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the

function createStudent(firstName,lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }

}

createStudent("Marcus", "Joseph");


// Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students
let johnson = createStudent("Johnson","Degbor");
let marie = createStudent("Marie","Degbor");
let stephen = createStudent("Isaac","Stephen");

let students = [johnson,marie,stephen];


// Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

function findStudentByFirstName(aName) {
    for(i=0; i < students.length; i++){
        if(aName.toLowerCase() === students[i].firstName.toLowerCase()){
            return console.log(true)
        }

        return console.log(false)
    }
        
}

findStudentByFirstName("johnson");

// Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

function extractEveryThird(arr){
    let newArray = [];
    for(i=0; i<arr.length; i += 3){
        newArray.push(arr[i]);
    }

    return console.log(newArray)
}

extractEveryThird([2,3,4,5,67,8,9]);



// Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

function countEvensAndOdds(arr){
   let counterObj = {
       oddCount= oddCount,
       evenCount = evenCount
   }
   for(i=0; i<arr.length; i++){
       let oddArr = [];
       let evenArr = [];

    if(arr[i] % 2 != 0){
        oddArr.push(arr[i])
        
    }
    counterObj.oddCount = oddArr;
    console.log(oddCount)
   }
}

countEvensAndOdds([2,3,4,5,67,8,9]);

