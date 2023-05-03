//1

let array1 = ["Coding", "Academy", "By", "Orange"]

array1.push("Jordan")
console.log(array1);

array1.pop()
array1.pop()
array1.pop()
console.log(array1);

array1.unshift("Welcome", "To")
array1.push("By", "Orange")
console.log(array1);

array1.shift()
array1.shift()
array1.shift()
console.log(array1);

array1.unshift("Coding")
let myString = array1.join(' ')
console.log(myString);

let array12 = myString.split(" ")
console.log(array12);

array12.splice(1,2)
console.log(array12);


//2
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//a
vegetables.pop()
console.log(vegetables);

//b
fruit.shift()
console.log(fruit);

//c
var fruit = ["banana", "apple", "orange", "watermelon"];
console.log(fruit.indexOf("orange")); 

//d
fruit.push(123)
console.log(fruit);

//e
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log(vegetables.length);

//f
vegetables.unshift(123)
console.log(vegetables);

//g
let food = fruit.concat(vegetables)
console.log(food);

//h
food.splice(4,2)
console.log(food);

//i
food.reverse()
console.log(food);

//j
let food2 = food.join(' ')
console.log(food2);


