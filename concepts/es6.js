// //Arrow functions /lamda functions or anonymous: which need variable declaration

var sumoftwo = (a, b) => {
	return a + b;
};

var fact = (n) => {
	if (n === 1 || n === 0) {
		return 1;
	}
	return n * fact(n - 1);
};

console.log(fact(4));
arr = [1, 2, 4, 5, 6, 7];
var temp = 0;
var revarray = (arr) => {
	var len = arr.length;
	var start = 0;
	var end = len - 1;
	var mid = len / 2;
	var newarr = swap;
	return newarr;
};

console.log(revarray(arr));
var swap = (arr) => {
	while (start < mid) {
		temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	return arr;
};

// functions with default parameter
var sumof3 = (a, b, c = 0) => {
	//argument c with default value 0
	return a + b + c;
};
// console.log(sumof3(4,5));

let myPromise = new Promise((myResolve, myReject) => {
	setTimeout(() => {
		myResolve("Hi! This is es6");
	}, 3000);
});

myPromise.then((value) => {
	console.log(value);
});

// Promises: takes the function constructor as an argument with 2 arguments myResolve (True) and myReject (False)
var newpromise = new Promise((resolve, reject) => {
	let a = 12;
	let b = 14;
	if (a * b > a ** 2) {
		resolve("Promise Success");
	} else {
		reject("Promise Failure");
	}
});

// .then() promise fulfilled
// .catch() promise was failed

newpromise
	.then((value) => {
		// console.log(value);
	})
	.catch((value) => {
		// console.log(value);
	});

//Cloning Array with pass by value using spread operator
var arr1 = [1, 2, 5, 1, 2, 8, 9];
var arr2 = [...arr1];
arr2 = [1, 3, 5, 1, 2, 8, 1];
// console.log(arr1);
// console.log(arr2);

//Function which returns multiple values and are cathched by another and printed
var arr = [2, 4, 5, 6, 7, 8, 8, 9];
function sumandmul(arr) {
	let add = 0;
	let mul = 1;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		add += arr[i];
		mul *= arr[i];
		count++;
	}
	var newarr = [add, mul, count];
	return newarr;
}
// "&&" is used to get rid of else condiction
var printall = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		i == 0 && console.log("Addition is:", arr[i]);
		i == 1 && console.log("Multiplication is:", arr[i]);
		i == 2 && console.log("Number of elements in list is:", arr[i]);
	}
};
newarr = sumandmul(arr);
printall(newarr);

// spread operator: The spread operator allows us to expand elements.
//spread operator "..." in arrays

var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

var fruits2 = [...fruits, "Strawberry"];
console.log("Fruits2", fruits2);
console.log("Fruits", fruits);

//spread operator "..." in objects
var obj = {
	name: "The Alchemist",
	author: "Paulo Coleho",
	genre: "Motivational",
};

console.log(obj);
var obj2 = { ...obj, releaseYear: 2010 };
console.log(obj);
console.log(obj2);

// class and methods
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getName = () => {
		return this.name;
	};

	setName = (name) => {
		this.name = name;
	};

	usePerson = () => {
		return [this.name, this.setName];
	};
}
//returning and catching multiple values from function
var person = new Person("John", 23);
let [a, b] = person.usePerson();
console.log(a);
b("Gary");
console.log(person.name);

var developer = {
	name: "Shivam Prakash",
	place: "Kolkata",
	field: "Web developement",
	age: 24,
	practiceStartTime: "12:30 PM",
	practiceEndTime: "6:30 PM",
	interests: ["CyberSecurity", "Front-End", "Networking", "Back-End"],
	ProjectsDone: 15,
	graduationYear: 2002,
};

let { interests, name: developerName, age, field, graduationYear } = developer;

console.log(developerName);
developer.name = "Satyam Keshri";
console.log(developerName);

console.log(interests, developerName, age, field, graduationYear);

// Operators
//Ternary
let z = 6;
// console.log(z <= 5 ? z : "Value is greater than 5");

// && operator is used to get rid else condiction
var printMessage;
z <= 5 &&
	(() => {
		printMessage = z;
	})();
console.log(printMessage);

// ?? operator
let r;
r = r ?? { name: "Satyam" }; // it will check first if r is null or undefined if yes it will assign name Satyam to it
console.log(r);

// self invoking functions
function sumOfTwoNumbers(a, b) {
	console.log(a + b);
}
sumOfTwoNumbers(5, 6);

(function (a, b) {
	console.log(a + b);
})(5, 6); // directly passing arguments to anonymous function without function call

// map function
var array1 = ["Bike", "Car", "Cycle"];
var array2 = array1.map((el) => {
	return "I Bought: " + el;
});

console.log(array2);

// ?. operator --> checks whether the obj is declared or not then execute the condiction applied , used to handle/deal with erros
// it just return "undefined" for those that are not declared
var obj = {
	name: "James",
	age: 29,
	interests: {
		sports: ["Wrestling", "Badminton"],
		food: ["Indian", "Mexican", "Italian"],
	},
};

// console.log(obj?.placestovisit?.locations)

// The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
// When an async function is called, it returns a Promise .
// async function can be used without await keyword

async function myFunction() {
	return "Hello";
}
// .then will return the resolved value of the promise
myFunction().then((value) => {
	console.log(value);
});

let testFunction = async () => {
	let testPromise = new Promise((Resolve, Reject) => {
		setTimeout(() => {
			Resolve("Its! Resolved part of a promise");
		}, 3000);
	});
	let result = await testPromise; //The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
	console.log(result);
	// return result;
};

testFunction();
