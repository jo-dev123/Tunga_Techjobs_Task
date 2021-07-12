/* Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.
Access the second element in favoriteFoods.
Change the last element in favoriteFoods to some other food.
Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
Add a favorite food to the back of the favoriteFoods array.
Add a favorite food to the front of the favoriteFoods array.
What happens when you try to pop from an empty array?
In the examples below, use splice to convert the first array to the second array:
[2, 3, 4, 5] -> [2, 4, 5]
["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
[10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] */


let favouritFoods = ["beans", "plantain", "fried-rice", "bread"];
favouritFoods[1];
favouritFoods.splice(3, 1, "rice");
favouritFoods;
let formerFavouritFood = favouritFoods.splice(0, 1);
formerFavouritFood;
favouritFoods.unshift[formerFavouritFood];
favouritFoods;

// What happens when you try to pop from an empty array?
// it returns undefined

let num = [2, 3, 4, 5];
num.splice(1, 1);

let num2 = ["alpha", "gamma", "delta"];
num2.splice(1, 0, "beta")

let num3 = [10, -10, -5, -3, 2, 1]
num3.splice(1, 5, 9, 8, 7, 6, 5, 4, 3, 2, 1)