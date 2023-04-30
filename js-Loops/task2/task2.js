//1
array1a = []
console.log("output 1 (for loop):");
for (i=2; i<=50; i=i+2){
    array1a.push(i);
}
console.log(array1a);

array1b = []
console.log("output 1 (while loop):");
let num1 = 2
while (num1 <=50){
    array1b.push(num1)
    num1=num1+2;
}
console.log(array1b);

//2 
// I already solve it by single for loop

//3
array3 =[]
console.log("output 3 (for loop):");
for (i=1; i<=50; i=i+2){
    array3.push(i);
}
console.log(array3);

//4
array4 =[]
console.log("output 4:");
for (i=1; i<=100; i++){
    if (i%3===0 && i%5===0 ){
        array4.push("Fizz Buzz");
    }
    else if (i%3===0){
        array4.push("Fizz");
    }
    else if (i%5===0){
        array4.push("Buzz");
    }
    else {
        array4.push(i);
    }
}
console.log(array4);

//5

function fizzbuzz(n){
    if (n%3===0 && n%5===0 ){
        console.log("Fizz Buzz");
    }
    else if (n%3===0){
        console.log("Fizz");
    }
    else if (n%5===0){
        console.log("Buzz");
    }
    else {
        console.log(n);
    }
}
fizzbuzz(15)


//6

console.log("output 6:");
function reFizzbuzz(n){
    if (n>100){
        return
    }
    else{
        if (n%3===0 && n%5===0 ){
            console.log("Fizz Buzz");
        }
        else if (n%3===0){
            console.log("Fizz");
        }
        else if (n%5===0){
            console.log("Buzz");
        }
        else {
            console.log(n);
        }
        n++
        reFizzbuzz(n)
    }
    
}
reFizzbuzz(1)

//7
// I didn't understand the concept of the question!

//8
console.log("output 8:");
let text8 = "Coding Academy by Orange"
let text8m = text8.toLowerCase()
function existence (n){
    counter8 = 0
    for (i=0; i<=text8.length; i++){
        if (n===text8m[i]){
            counter8++
        }
    }
    console.log(counter8);
}

existence("o")

//9 a
console.log("output 9a:");
for (i=0; i<=20; i++){
    console.log(i + "\n");
}

//9 b
console.log("output 9b:");
for (i=3; i<=29; i=i+2){
    console.log(i + "\n");
}

//9 c
let num9c = -14
console.log("output 9c:");
for (i=0; i<= 12; i++){
    console.log(num9c + "\n");
    num9c = num9c -2
}

//9 d


console.log("output 9d:");
for (i=50; i>= 20; i=i-2){
    if (i%3===0){
        console.log(i);
    }
    
}

//10

let title = 'CodingAcademy'
let array10 = [7, 500, 'KH404', 'black', 36]

console.log("output 10e:");
for (i=0; i<array10.length; i++){
    console.log(array10[i] + "\n");
}

console.log("output 10f:");
for (i=title.length -1; i>=0; i--){
    console.log(title[i]);
}

//11
console.log("output 11:");
let array11= [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] 
let evenArray11 = []
let oddArray11 = []

for (i=0; i<array11.length; i++){
    if (array11[i]%2===0){
        evenArray11.push(array11[i])
    }
    else{
        oddArray11.push(array11[i])
    }
}
console.log(`even numbers: ${evenArray11}`);
console.log(`odd numbers: ${oddArray11}`);

//12
let Protein_options=
['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
let Grain_options=
['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
let Vegetable_options=
['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
let Beverage_options=
['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
let Dessert_options =
['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']

console.log("output 12:");
let numberOfMeals = 4
let meal = []
for (i=0; i<numberOfMeals; i++){
    meal.push(Protein_options[i], Grain_options[i], Vegetable_options[i], Beverage_options[i], Dessert_options[i])
    console.log(meal);
    meal = []
}




