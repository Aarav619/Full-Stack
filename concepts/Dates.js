// Date object in any language is the total milliseconds elapsed from a particular date ie in js is "19 March -1971"
var date = new Date();
console.log(date)

// converting date object to string
var date = new Date(2020,5-1,19,22,23,45);
// console.log(date.toLocaleString());
var currentDate = new Date();
// console.log(currentDate.toLocaleString());

//Date comparision
// console.log(currentDate >= date)

var arr = [
    obj1 = {
        firstname: 'John',
        lastname: 'Strange',
        DOB: new Date(1981, 2 - 1, 11)
    },
    obj2 = {
        firstname: 'Peter',
        lastname: 'Parker',
        DOB: new Date(1991, 5 - 1, 15)
    },
    obj3 = {
        firstname: 'James', 
        lastname: 'Johnson', 
        DOB: new Date(2004,9-1,28)
    }
]
var count = 0;
for (let i = 0; i < arr.length; i++) {
        if ((currentDate.getFullYear() - arr[i].DOB.getFullYear()) > 20) {
        count+=1;
    }
}
console.log("People age greater than 20:" ,count);
