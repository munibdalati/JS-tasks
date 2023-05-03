//1

function objectToArray(object1){
    let array1 = Object.keys(object1)
    return array1
}
let object1 = {
    name: "Munib",
    age: "26",
    certificate: null,
    daughter: "Yumna"
}
console.log("output 1:");
console.log(objectToArray(object1));

//2

function propertiesNumber(object2){
    let array2 = Object.keys(object2)
    let length = array2.length
    return length
}
let object2 = {
    name: "Munib",
    age: "26",
    daughter: "Yumna"
}
console.log("output 2:");
console.log(propertiesNumber(object2));

//3
function merge (object3, object4){
    let mergeObject = Object.assign(object3, object4)
    return mergeObject
}

let object3 = {
    name: "Munib",
    age: "26",
    daughter: "Yumna"
}
let object4 = {
    name2: "Mawadda",
    age2: "24",
    daughter2: "Roqaya"
}
console.log("output 3:");
console.log(merge(object3, object4));

//4
function upperCase(object4){
    for (let key of Object.keys(object4)) {
        object4[key.toUpperCase()] = object4[key];
        delete object4[key];
      }
    return object4
}
console.log("output 4:");
console.log(upperCase(object4));

//5
function removeNullValues(obj) {
    let newObj = {};
    for (let key in obj) {
      if (obj[key] !== null) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}
let myObj = {
prop1: 'hello',
prop2: null,
prop3: 42
};
let newObj = removeNullValues(myObj);
console.log(newObj); 

//6
function arrayAlphabetic (object1){
    let array6 = Object.keys(object1)
    array6.sort()
    return array6
}
console.log(arrayAlphabetic(object1));