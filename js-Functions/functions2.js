//1
function findSmallest(array){
    let min = Math.min(...array)
    return min
   }
let array1= [30,45,60,7]
console.log("output 1:")
console.log(findSmallest(array1))

//2
function AlphabeticalOrder(word){
    return word.split("").sort().join("")
  }
  let word2= "hello"
  console.log("output 2:")
  console.log(AlphabeticalOrder(word2))

// //3
function factorial(num){
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
console.log("output 3:")
console.log(factorial(8));

//4
function evenOdd(n){
    if(n%2===0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log("output 4:")
console.log(evenOdd(4));

//5
let array5 = [1, 2, 3, 4, 5, 6,7,8,9]
function removeOdd(array){
    for (i=0; i<=array.length; i++){
        if (array[i]%2 !== 0){
            array.splice(i,1)
        }
    }
    return array
}
console.log("output 5:")
console.log(removeOdd(array5));

//6
function removeString(array){
    for (i=0; i<=array.length; i++){
        if (typeof array[i]==='string'){
            array.splice(i,1)
        }
    }
    return array
}
let array6 = ['Ayham', 3, 7, 'Alaa', 13, 'coding']
console.log("output 6:");
console.log(removeString(array6));

//7
function addUp(n){
    let sum = 0
    for (i=0; i<n; i++){
        sum = sum + (n-i)
    }
    return sum
}
console.log("output 7:");
console.log(addUp(6));

//8
function allFunctions(array){
    let lowest = Math.min(...array)
    let highest = Math.max(...array)
    let length = array.length
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avarage = sum / array.length
    let newArray8 = [lowest, highest, length, avarage]
    return newArray8
}
console.log("output 8:");
console.log(allFunctions([7, 13, 3, 77, 100]));

//9
function convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
}
console.log("output 9:");
console.log(convertToRoman(1989));

//10
function wordsNum(string){
let array = string.split(" ")
let wordNumbers = array.length
return wordNumbers
}
console.log("output 10:");
console.log(wordsNum('hello from CodingAcademy!'));

//11
function multiply(array){
for (i=0; i<array.length; i++){
    array[i] = array[i]*array.length
}
return array
}
console.log("output 11:");
console.log(multiply([4,2,5]));

//12
function checkEnding(str1, str2){
    if (str1.charAt(str1.length-1) === str1.charAt(str2.length-2)){
        return "true"
    }
    else{
        return "false"
    }
}
console.log("output 12:");
console.log(checkEnding("hello", "ksdfjo"));

//13
function repeat(string){
    let sum = ""
    for (i=0; i<string.length; i++){
        sum = sum + string[i]+string[i]
    }
    return sum
}
console.log("output 13:");
console.log(repeat("coding"));

//14
function findIndex(array, element){
    for (i=0; i<array.length; i++){
        if (array[i]===element){
            return i+1
        }
    }
}
console.log("output 14:");
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], "Ali"))

//15
function absoluteSum(array){
    let sum = 0
    for (i=0; i<array.length; i++){
        sum = sum + Math.abs(array[i])
    }
    return sum
}
console.log("output 15:");
console.log(absoluteSum([-1, -3, -5, -4, -10, 0]))