var arr = [];
function result(val) {
    if (arr.length < 1) {
        document.getElementById("result").innerHTML = "";
    }
    document.getElementById("result").innerHTML += val;
    arr.push(val)
}

function calc() {
    if (arr.length > 0) {
        var ele = arr.join('');             //return string format of elements of array
        var solve = eval(ele);              //this takes string input and evaluates it
        console.log(ele)
        document.getElementById("result").innerHTML = solve;
    }
}
function del() {
    arr.pop();                              //to remove elements from end of array 
    document.getElementById("result").innerHTML = arr.join('');
    if (arr.length === 0) {
        document.getElementById("result").innerHTML = "0";
    }
}

function clearAll() {
    arr = [];
    document.getElementById("result").innerHTML = ""; //clearing screen 
}
//display zero to calc screen if no elements in array
if (arr.length === 0) {
    document.getElementById("result").innerHTML = "0";
}
