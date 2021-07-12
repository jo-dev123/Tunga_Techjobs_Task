// Write a function called displayFullName, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away.

let displayName = (function displayFullName(firstName, lastName) {
    return firstName + " " + lastName
}("Bart", "Inyang"));

// Write a function called createCalculator, which should return an object that has four methods, add, subtract, multiply and divide.

/*let calc = createCalculator();
calc.add(20,20); // 40
calc.subtract(2,2); // 0
calc.multiply(2,2); // 4
calc.divide(12,2); // 6*/

let calc = (function createCalculator(a, b) {
    return {
        add: (function () {
            return a + b
        }()),
        subtract: (function () {
            return a - b
        }()),
        multiply: (function () {
            return a * b
        }()),
        divide: (function () {
            return a / b
        }())
    }
})

console.log(calc(2, 9))
