//1
console.log("-----------Q1----------");
function cleanNames(array){
    for (i=0; i<array1.length; i++){
        array[i] = array[i].trim()
    }
    return array
}
let array1 = [" injustice", "    SuperMan", "Batman ", " flash     "]
console.log(cleanNames(array1));

//2
console.log("-----------Q2----------");
function miles2km(array){
    let km = []
    km= miles.map(x => x * 1.60934)
    return km
}
const miles = [10,20,30,40]
console.log(miles2km(miles));

//3
console.log("-----------Q3----------");
let array3 = [1,2,3,4,5]
let array3A = array3.map(x => x**2)
sumWithInitial = arr => [array3.reduce((x, y) => x + y**2,0), array3.reduce((x,y)=>x+y**2)/array3A.length]
console.log(array3A);
console.log(sumWithInitial(array3));

//4
console.log("-----------Q4----------");
let array4 = [1,2,3,4,5]
let array4A = array4.map(x => x+4)
console.log(array4A);

//5
console.log("-----------Q5----------");
let array5 = [1,2,3,4,5,6,7,8,9,10]
sum = arr => array5.reduce((x,y) => x+y,0)
console.log(sum(array5));
let even = array5.filter(num => num%2==0)
let double = even.map(x => x*2)
console.log(double);

//6
console.log("-----------Q6----------");
const words = ['apple', 'banana', 'cherry', 'date'];
let words2 = words.map(x => x.toUpperCase())
console.log(words2);

//7
console.log("-----------Q7----------");
const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]
newHeros = heros.map((x,y) => {return {id:y, hero:x.name, power:x.power}})
console.log(newHeros);

//8
console.log("-----------Q8----------");
function moreThan7 (array){
    let newarray = array.filter(word => word.length>=7)
    return newarray
}
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(moreThan7(inputWords));

//9
console.log("-----------Q9----------");
let array9 = [1,2,3,4,5,6,7,8,9,10]
let odd = array9.filter(num => num%2!==0)
let div2or5 = array9.filter(num => num%2===0 || num%5===0)
let div3 = array9.filter(num => num%3===0).map(x => x**2)
let div5 = array9.filter(num => num%5===0).map(x => x**2).reduce((x,y) => x+y,0)
console.log(odd);
console.log(div2or5);
console.log(div3);
console.log(div5);

//10
console.log("-----------Q10----------");
let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredEvenNums = nums.filter(num => num%2===0).map(x => x**2)
let sum10 = nums.reduce((x,y)=> x+y,0 )

console.log(squaredEvenNums);
console.log(sum10);

//11
console.log("-----------Q11----------");
let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];
let filteredCountries = countries.filter(word => !word.startsWith("U") &&  !word.startsWith("R"))
let upperCaseCountries = filteredCountries.map(word => word.toUpperCase())
let totalCharacters = upperCaseCountries.join("").length
console.log(filteredCountries);
console.log(upperCaseCountries);
console.log(totalCharacters);

//12
console.log("-----------Q12----------");
const numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];
let largerthan50 = numbers.filter(num => num>50)
console.log(largerthan50);

