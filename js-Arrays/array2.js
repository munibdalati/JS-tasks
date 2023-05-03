//1
let array1 = [1,2,3,4,5]
console.log("output 1:");
array1.forEach(element => console.log(element))

//2
let map2 = array1.map(x => x*2)
console.log("output 2:");
console.log(map2);

//3
let array3 = array1.filter(number => number%2==0)
console.log("output 3:");
console.log(array3);

//4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log("output 4:");
console.log(sumWithInitial);

//5
array5 = ["apple", "banana", "cherry"];
array5.sort()
console.log("output 5:");
console.log(array5);

//6
array5.reverse()
console.log("output 6:");
console.log(array5);

//7
let array71 = [1,2,3]
let array72 = [4,5,6]
console.log("output 7:");
console.log(array71.concat(array72));

//8
let array8 = [1,2,3,4,5,6]
console.log("output 8:");
let array81 = array8.slice(0,2)
let array82 = array8.slice(4,6)
let array83 = array81.concat(array82)
console.log(array83);


//9
let array9=[1,2,3,4,5]
console.log("output 9:");
console.log(array9.splice(1,1))


//10
let array10 = [1,2,3,4,5]
console.log("output 10:");
console.log(array10.indexOf(4));

//11
let array11 = [1,2,3,4,5]
console.log("output 11:");
console.log(array11.join(" "));

//12
let string12 ="12345"
console.log("output 12:");
console.log(string12.split(""));

//13
let array13 = [1,2,3,4,5]
console.log("output 13:");
console.log(array13.length);

//14
let array14 = [1,2,3,4,5]
console.log("output 14:");
for (i=1; i<array14.length; i++){
    console.log(i);
}

//15
let array15 = [1,2,3,4,5]
console.log("output 15:");
for (i=0; i<array15.length; i++){
    console.log(array15[i]);
}

//16
console.log("output 16:");
console.log(Array.isArray([1,2,3,4,5]));

//17
let object17={0:"a", 1:"b", 2:"c", length:3};
console.log("output 17:");
console.log(Array.from(object17));

//18
console.log("output 18:");
console.log(Array.of(1,2,3));

//19
let array19 = [1,2,3,4,5]
console.log("output 19:");
console.log(array19.fill(0,0,3));

//20
let array20 = [1,2,3,4,5]
console.log("output 20:");
console.log(array20.copyWithin(1,0,1).copyWithin(2,0,1))




