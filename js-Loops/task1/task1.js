//1
console.log("output 1: ");
for (a=1; a<=10; a++){
    console.log(a);
}

//2
let b = 1
console.log("output 2: ");
while (b<=10){
    console.log(b);
    b++
}

//3
var array = [1,2,3,4,5]
var c = 0
console.log("output 3: ");
for (c=0; c<=4; c++){
    console.log(array[c]);
}

//4
console.log("output 4: ");
for (d=0; d<=10; d=d+2){
    console.log(d);
}

//5
let sum = 0
console.log("output 5: ");
for (e=1; e<=10; e++){
    sum= sum + e
}
console.log(sum);

//6
let arr = [1,2,3,4,5];
var largest = arr[0] || null;
var number = null;
console.log("output 6: ");
for (var i = 0; i<arr.length; i++){
    number = arr[i];
    largest = Math.max(largest, number);
}
console.log(largest);

//7
let array7 = [1,2,3,4,5,-9];
var smallest = array7[0] || null;
var number = null;
console.log("output 7: ");
for (var i = 0; i<array7.length; i++){
    number = array7[i];
    smallest = Math.min(smallest, number);
}
console.log(smallest);

//11
let array11 = [1,2,3,4,5,6];
let sum11 = 0;
console.log("output 11: ");
for (let i=0; i<array11.length; i++){
    sum11 += array11[i];
}
let avg = sum11/array11.length
console.log(avg);

//12
let f=5
let factorial = 1;
console.log("output 12: ");
for (i=0; i<f; i++){
    factorial=factorial*(f-i) ;
}
console.log(factorial);

//13
let result = []
let n = 15

if (n===1){
    result=[0]
}
else if (n===2){
    result=[0, 1]
}
else{
    result=[0, 1]
    for (let g=2; g<n; g++){

        result.push(result[g-2] + result[g-1])
    }
}
console.log("output 13: ");
console.log(result);

//14
const higherNumber = 20
console.log("output 14: ");
console.log(`The prime numbers between 1 and ${higherNumber} are:`);
for (let i = 1; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//15
let k = 5
console.log("output 15: ");
for (i=1; i<=10; i++){
    result = k*i
    console.log(`${k} × ${i} = ${result} `);
}

//16
let twoArray = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
console.log("output 16: ");
for (i=0; i<twoArray.length; i++){
    for (j=0; j<twoArray[i].length; j++){
        console.log(twoArray[i][j]);
    }
}

//17
let reverseArray = [1,2,3,4,5]
console.log("output 17: ");
for (i=1; i<=reverseArray.length; i++){
    console.log(reverseArray[reverseArray.length-i]);
}

//18
let array18 = [[1,2,3,4,5],2,4]
let lowestnum = array18[1]
let highestnum = array18[2]
console.log("output 18: ");
for (i=lowestnum; i<=highestnum; i++){
    console.log(array18[0][i]);
}


//19
let array19 = [[1,2,3,4,5],2]
console.log("output 19: ");
for (i=0; i<=array19[0].length; i=i+array19[1]){
    console.log(array19[0][i]);
}

//20
let num20 = 5
let array20=[1,2,3,4,5]
console.log("output 20: ");
for (i=0; i<=array20.length; i++){
    if (num20 === array20[i]){
        console.log(true);
    }
}

//21
let num21 = 1
let counter21 = 0
let array21=[1,2,1,3,2,1]
console.log("output 21: ");
for (i=0; i<=array21.length; i++){
    if (num21 === array21[i]){
        counter21++;
    }
    
}
console.log(counter21);

