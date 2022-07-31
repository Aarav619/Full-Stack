//Functions on arrays
var cars = ["MC-Laren", "W-Motors", "Koiensegg", "BMW"];
// // removing elements from array in Stack fashion
// cars.pop();
// console.log(cars);
// // adding elements to array in Stack fashion
// cars.push("Jaguar");

// // remoing elements in queue fashion
// cars.shift();
// // adding elements in queue fashion
// cars.unshift("Mini-Copper");

// // adding element anywhere between elements
// cars.splice(2,2,"Mercedez","Rangerover");
// console.log(cars);

// Adding two arrays together
var bikes = ["Kawasaki", "Yahamaha", "Dodge", "Duccati"];
var merged = cars.concat(bikes);
console.log(merged);

// creating sub-arrays from given array
var cars2 = cars.slice(1, 2);
console.log(cars2);

// conversion of array elements to array
console.log(cars.to_string());
// Max aur Min of array
var Numbers = [2, 4, 6, 7, 8, 35, 5, 2, 5, 6];
var minimum = Numbers.MIN_VALUE;
var maximum = Numbers.MAX_VALUE;
for (let number of Numbers) {
	minimum = Math.min(minimum, number);
	maximum = Math.max(maximum, number);
}

console.log("MAX:" + maximum, "MIN:" + minimum);
//JS specific method for finding max and min '...' removes all the elements from array first
var max = Math.max(...Numbers);
var min = MAX.min(...Numbers); //rest operator '...' will allow us to pass variable arguments to function and access them in an array , Rest parameters have to be at the last argument.
console.log("MAX:" + max, "MIN:" + min);

//Sorting of arrays
var num = [100, 34, 65, 88, 45, 2, 61];
console.log(num.sort()); //will sort the array upon strings

//Functions

// while loop in js to print numbers in array
// reverse an array using stack

var numb = [2, 5, 6, 7, 8, 89, 0];
var i = 0;
while (i < numb.length) {
	console.log(numb[i]);
	i++;
}

// calculate permutation and combinations of given numbers
function fact(num) {
	if (num == 1) {
		return 1;
	} else return num * fact(num - 1);
}

function permu(n, r) {
	let per = fact(n) / fact(n - r);
	return per;
}

function comb(n, r) {
	let com = fact(n) / (fact(r) * fact(n - r));
	return com;
}
var n = 12;
var r = 2;
console.log("Permutation is:" + permu(n, r));
console.log("Combination is:" + comb(n, r));

//Switch-Case
function switchCase(a) {
	switch (a) {
		case "1":
			console.log("It is 1");
			break;
		case "2":
			console.log("It is 2");
			break;
		default:
			console.log("Not 1 or 2");
			break;
	}
}

switchCase(5);

// Call Back Functions : A callback is a function passed as an argument to another function.
// callback = parameter of function which is also a function.

// example for callback function
function sum(a, b, add) {
	var sumoftwo = a + b;
	console.log("sum from sum function:" + sumoftwo);
	console.log("sum from add function:" + add(a, b));
}
function add(x, y) {
	var sumoftwo = x + y;
	return sumoftwo;
}
sum(4, 5, add);

2;

function myDisplayer(some) {
	document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
	let sum = num1 + num2;
	myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Another Example for callback function:
function verifyUserCredentials(inputEmail, inputPassword) {
	var user = User.findOne({ email: inputEmail }, function (error) {
		if (!error) {
			if (user.password === inputPassword) {
				console.log("Login Successful");
			} else {
				console.log("Login was unsuccessful");
			}
		} else {
			console.log(
				"There was an error in getting the user with email:" +
					inputEmail
			);
		}
	});
	console.log(user);
}

//map and reduce
var arr1 = [4, 6, 7, 9, 5, 22, 11, 34, 20];
var sumarr = arr1.reduce((num1, num2) => {
	return num1 + num2;
});
console.log(sumarr);

var sqarr = arr1.map((num) => {
	return num ** 2;
});
console.log(sqarr);

// more examples for map reduce and filter

var array = [1, 10, 18, 26, 84];
var arr2 = array.filter((el) => {
	return el < 20;
});
console.log(arr2);

var myArray = [100, 28, 50];
var myArr2 = myArray.reduce((total, el) => {
	return total + el;
});
console.log(myArr2);

var numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce(
	(totalValue, currentValue) => totalValue + currentValue
);

console.log(sum);

var strArr = ["John", "Ashley", "Joe", "Taylor"];

let string = strArr.reduce((startEl, currentEl) => {
	return startEl + currentEl;
});

console.log(string);

// hoistings
// In JS variables can be declared after they are defined
// let and const keywords are hoisted to top of the block, but are not initialised, Meaning: The block of code is aware of the variable,
// but it cannot be used until it has been declared. Refrencing the variable before it is declared will result in an RefrenceError.

// Variables declared with var are hoisted to the top and are initialised with undefined. so we can use them before they are declared.

// example 1:
var z;
z = 1;
console.log(z);
// or
t = 1;
var t;
console.log(t);

// example 2:
// also normal functions are also hoisted to the top but not arrow functions since they are (defined using let and const keywords)
console.log(sumFunction(1, 2));
function sumFunction(p, q) {
	return p + q;
} // works as intended

console.log(arrowSumFunction(1, 2));
const arrowSumFunction = (p, q) => {
	return p + q;
}; // throws error

// another example
greet = "hello";
ele = document.getElementById("div");
ele.innerHTML = greet;
var greet;
// is same as following
var greet;
greet = "hello";
ele = document.getElementById("div");
ele.innerHTML = greet;

// closures: A closure is a function having access to the parent scope, even after the parent function has returned.

var add = (function () {
	//The variable add is assigned to the return value of a self-invoking function.
	var counter = 0; // The self-invoking function only runs once. It sets the counter to zero , and returns a function expression.
	return function () {
		counter += 1;
		return counter;
	}; //The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
})();

add();
add();
add();
console.log(add);

// another example
function testFunction1() {
	var a = 100;
	function testFunction2() {
		var b = 200;
		return function () {
			console.log(a, b);
		};
	}
	return testFunction2();
}
var x = testFunction1();
console.log(x);
x();
