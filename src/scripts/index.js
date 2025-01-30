// let fruits = ["Apple", "Banana", "Orange"];
let fruits = new Array("Apple", "Banana", "Orange", "Apricot", "Guava");

console.log(fruits);
// fruits.splice(1, 1, "Apple");
// fruits.splice(2, 4, "Apple", "Orange", "Apricot", "Guava");

// fruits.slice(0, 1);
fruits.indexOf("Apricot");
console.log(fruits.indexOf("Apricot")); //return -1 meaning the thing does not exist

fruits.forEach((value) => console.log(value.toUpperCase())); //callback loop function
console.log(fruits.filter(val => val === "Apple"));

// let htmlListItems = fruits.map(val => "<li>" + val + "</li>");
// console.log(htmlListItems);

let value = [1,2,5,8,9];
console.log((value.reduce(((result, val) => result * val), 0)));

// let result = fruits.reduce((result, val) => result + "<li>" + val + "</li>"), "<ul>");
// result+="</ul>";

let resultMax = value.reduce(((result, val) => result > val ? result : val), value[0]);
console.log(resultMax);

let valueSet = new Set([1, 3, 5, 1]);
console.log(valueSet);

function hello(){
    console.log("hello");
}