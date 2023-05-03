//1
console.log("---------Q1---------");
let object1 = { name: "Adam", age: 25, gender: "male" }
console.log(Object.values(object1));

//2
console.log("---------Q2---------");
let object2 =  { name: "Adam", age: 25 }
object2.gender = "male"
console.log(object2);

//3
console.log("---------Q3---------");
let object3 =  { name: "Adam", age: 25 }
object3["gender"] = "male"
console.log(object3);

//4
console.log("---------Q4---------");
let object4 = { name: "Adam", age: 25 }
console.log(object4.name);

//5
console.log("---------Q5---------");
let object5 = { name: "Adam", age: 25 }
console.log(object5["name"]);

//6
console.log("---------Q6---------");
let object6 = { name: "Adam", age: 25, gender: "male" };
for (const property in object6){
    console.log(`${property}: ${object6[property]}`);
}

//7
console.log("---------Q7---------");
let object7 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.keys(object7));

//8
console.log("---------Q8---------");
let object8 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.values(object8));

//9
console.log("---------Q9---------");
let object9 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.entries(object9));

//10
console.log("---------Q10---------");
let object10 = { name: "Adam", age: 25};
let object10a = { gender: "male"}
console.log(Object.assign(object10, object10a));

//11
console.log("---------Q11---------");
let object11 = { name: "Adam", age: 25};
console.log(Object.freeze(object11));

//12
console.log("---------Q12---------");
let object12 = { name: "Adam", age: 25};
console.log(Object.seal(object12));