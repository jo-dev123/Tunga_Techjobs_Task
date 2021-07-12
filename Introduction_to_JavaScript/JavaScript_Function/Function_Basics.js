function myName() {
    let fullName = "Degbor Johnson Abel";
    console.log(fullName)
}
let favoriteFoods = ["pizza", "ice cream"];



function randomFood() {
    let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    console.log(favoriteFoods[randomIndex])

}
randomFood();


// Create a variable called numbers which is an array that contains the numbers 1 through 10.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:


// 1
// 3
// 5
// 7
// 9  

function displayOddNumbers() {
    for (num = 0; num < numbers.length; num++) {
        if (numbers[num] % 2 != 0) {
            console.log(numbers[num]);
        }
    }

}

displayOddNumbers();

//Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even. Here is what that might look like:

// 2
// 4
// 6
// 8
// 10

function displayEvenNumbers() {
    for (evenNum = 0; evenNum < numbers.length; evenNum++) {
        if (numbers[evenNum] % 2 === 0) {
            console.log(numbers[evenNum]);
        }
    }

}

displayEvenNumbers();

//Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds
// 1

function returnFirstOddNumber() {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            return numbers[i];
        }

    }
}

returnFirstOddNumber();


//Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds
// 2

function returnFirsttEvenNumber() {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0 && i != 0) {
            return numbers[i];
        }
    }
}

returnFirsttEvenNumber()

// Create a function called returnFirstHalf which returns the first half of the numbers array

function returnFirstHalf() {
    let firstHalf = numbers.splice(0, numbers.length / 2)
    return firstHalf
}

returnFirstHalf();

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Create a function called returnSecondHalf which returns the second half of the numbers array

function returnSecondHalf() {
    return numbers.slice(numbers.length / 2)
}

returnSecondHalf()


function countEvensAndOdds(arr) {
    let counterObj = {
        oddCount: 0,
        evenCount: 0
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            counterObj.oddCount++
        }
        else {
            counterObj.evenCount++
        }
    }
    return counterObj;
}
