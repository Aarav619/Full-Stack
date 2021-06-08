// //Functions on arrays
// cars = ["MC-Laren", 'W-Motors', 'Koiensegg', 'BMW'];
// // // removing elements from array in Stack fashion
// // cars.pop();
// // console.log(cars);
// // // adding elements to array in Stack fashion
// // cars.push("Jaguar");

// // // remoing elements in queue fashion
// // cars.shift();
// // // adding elements in queue fashion
// // cars.unshift("Mini-Copper");

// // // adding element anywhere between elements
// // cars.splice(2,2,"Mercedez","Rangerover");
// // console.log(cars);

// // Adding two arrays together
// var bikes = ["Kawasaki", "Yahamaha", "Dodge", "Duccati"];
// var merged = cars.concat(bikes);
// console.log(merged);

// // creating sub-arrays from given array
// var cars2 = cars.slice(1, 2);
// console.log(cars2);

// // conversion of array elements to array
// console.log(cars.to_string());
// // Max aur Min of array
// var Numbers = [2, 4, 6, 7, 8, 35, 5, 2, 5, 6]
// var minimum = Numbers.MIN_VALUE;
// var maximum = Numbers.MAX_VALUE;
// for (let number of Numbers) {
//     minimum = Math.min(minimum, number);
//     maximum = Math.max(maximum, number);
// }

// console.log("MAX:" + maximum, "MIN:" + minimum);
// //JS specific method for finding max and min '...' removes all the elements from array first
// var max = Math.max(...Numbers);
// var min = MAX.min(...Numbers);  //rest operator '...' will allow us to pass variable arguments to function and access them in an array , Rest parameters have to be at the last argument.
// console.log("MAX:" + max, "MIN:" + min);

// //Sorting of arrays
// var num = [100, 34, 65, 88, 45, 2, 61];
// console.log(num.sort()); //will sort the array upon strings

// //Functions

// // while loop in js to print numbers in array
// // reverse an array using stack

// var numb = [2, 5, 6, 7, 8, 89, 0];
// var i = 0;
// while (i < numb.length) {
//     console.log(numb[i]);
//     i++;
// }

// // calculate permutation and combinations of given numbers
// function fact(num) {
//     if (num == 1) {
//         return 1
//     }
//     else
//         return num * (fact(num - 1));
// }

// function permu(n, r) {
//     let per = fact(n) / (fact(n - r));
//     return per;
// }

// function comb(n, r) {
//     let com = fact(n) / (fact(r) * (fact(n - r)))
//     return com;
// }
// var n = 12;
// var r = 2;
// console.log("Permutation is:" + permu(n, r));
// console.log("Combination is:" + comb(n, r));

// //Switch-Case
// function switchCase(a) {
//     switch (a) {
//         case "1":
//             console.log("It is 1");
//             break;
//         case "2":
//             console.log("It is 2");
//             break;
//         default:
//             console.log("Not 1 or 2");
//             break;
//     }
// }

// switchCase(5);

// // Call Back Functions
// // callback = parameter of function which is also a function.
// function sum(a, b, add) {
//     var sumoftwo = a + b;
//     console.log("sum from sum function:" + sumoftwo);
//     console.log("sum from add function:" + add(a, b))
// }
// function add(x, y) {
//     var sumoftwo = x + y;
//     return sumoftwo;
// }

// sum(4,5,add);

// // Example for callback function:
// function verifyUserCredentials(inputEmail, inputPassword) {
//     var user = User.findOne({ email: inputEmail }, function (error) {
//       if (!error) {
//         if (user.password === inputPassword) {
//           console.log("Login Successful");
//         } else {
//           console.log("Login was unsuccessful");
//         }
//       } else {
//         console.log(
//           "There was an error in getting the user with email:" + inputEmail
//         );
//       }
//     });
//     console.log(user);
//   }

// //map and reduce
// var arr1 = [4, 6, 7, 9, 5, 22, 11, 34, 20];
// var sumarr = arr1.reduce((num1, num2) => {
//   return num1 + num2;
// });
// console.log(sumarr)

// var sqarr = arr1.map((num) => {
//   return num ** 2;
// });
// console.log(sqarr)

//closures

var add = (function () {
  var counter = 0;
  return function () { counter += 1; return counter }
})();

x = add();
x = add();
x = add();
console.log(x)





