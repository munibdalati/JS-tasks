//1
function toArray(string1){
    let array1 = string1.split(' ')
    return array1
}
console.log("output 1:");
console.log(toArray("Oranga Jordan"));

 //2
 function hiddenMobilePhone(mobile){
    let hiddenMobile = "*******" + mobile.slice(7);
    return hiddenMobile
 }
 console.log("output 2:");
 console.log(hiddenMobilePhone("0785056637"));

 //3
 function hiddenEmail(email){
    let username = email.slice(0,email.indexOf("@"))
    let hiddenE = username.slice(0, username.length/2)
    return hiddenE + "...@orange.com"

 }
 console.log("output 3:");
 console.log(hiddenEmail("munibaldalati97@gmail.com"));

 //4
 function upperFirst(string4){
    let firstLetter = string4[0].toUpperCase()
    return firstLetter + string4.substring(1)
 }
 console.log("output 4:");
 console.log(upperFirst("coding academy by orange"));

 //5
 function uppereach(string5){
    const words = string5.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ")
 }
 console.log("output 5:");
 console.log(uppereach("coding academy by orange"));

 //6
 function flipNumber(string6){
    splitString = string6.split("")
    reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
}
 console.log("output 6:");
 string6 = 92482
 console.log(flipNumber(string6.toString()));


//7
function swap(a, b){
    let c = a
    a = b
    b = c
    return `a=${a}, b=${b}`

}
let a = 3
let b = 4
console.log("output 7:");
console.log(swap(a, b));

//8
function removing(string8, n){
    let splitedString8 = string8.split("")
    let deletetedChar = splitedString8.splice(n,1)
    let modString8 = splitedString8.join("")
    return modString8
}
let string8 = "Orange"
let n = 3
console.log("output 8:");
console.log(removing(string8, n));

//9
function merge(first, second){
    let firstArray = first.split("")
    let deleteFirst = firstArray.shift()
    let modFirst = firstArray.join("")
    let secondArray = second.split("")
    let deleteSecond = secondArray.shift()
    let modSecond = secondArray.join("")
    let finalString9 = modFirst.concat(modSecond)
    return finalString9
}
let first = "lora"
let second = "inge"
console.log("output 9:");
console.log(merge(first, second));

//10
function isin(string10, letter){
    let result =""
    for (i=0; i<=string10.length; i++){
        if (letter === string10[i]){
            result = "True"
            return result
        }
        else{
            result = "False"
            return result
        }

    }
}
console.log("output 10:");
let string10 = "orange"
let letter = "o"
console.log(isin(string10, letter));

//11
function convertToArray(string11){
    let stringToArray = string11.split(" ")
    return stringToArray
}
let string11 = "Coding Academy by Orange"
console.log("output 11:");
console.log(convertToArray(string11));

//12
function reorder(string12){
    splitString = string12.split("")
    orderedString = splitString.sort()
    modString12 = orderedString.join("")
    return modString12
}
let string12 = "orange"
console.log("output 12:");
console.log(reorder(string12));




