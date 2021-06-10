car = {
  company: "Mc-Laren",
  model: "P1"
}
for (let key in obj) {
  console.log(key, obj[key]);
  if (key === "company") {
    break;
  }
}

var arr = [10, 20, 30, 40, 50];

for (let el of arr) {
  console.log(el);
  if (el === 30) {
    break;
  }
}

arr.forEach(function (el) {
  console.log(el)
  // if (el == 30) {
  //   break;
  // }
})

// String interpolation
var name = "Satyam";
var arr = [1, 2, 3];

// keeping name:void "null or void" in object will be deprecated in js

// var obj = {
//   name,
//   arr,
// };

// console.log(name);
// console.log(obj.arr);

var str1 = "My name is "
var str2 = "My name is Satyam"

console.log("My name is " + name);
console.log(`My name is ${name}`) //string interpolation using back ticks


