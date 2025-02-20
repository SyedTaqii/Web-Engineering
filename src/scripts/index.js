// let fruits = ["Apple", "Banana", "Orange"]; 
let fruits = new Array("Apple", "Banana", "Orange", "Apricot", "Guava");

console.log(fruits); 
// Output: [ 'Apple', 'Banana', 'Orange', 'Apricot', 'Guava' ]

fruits.splice(1, 1, "Apple");
console.log(fruits);
// Output: [ 'Apple', 'Apple', 'Orange', 'Apricot', 'Guava' ]

fruits.splice(2, 4, "Apple", "Orange", "Apricot", "Guava");
console.log(fruits);
// Output: [ 'Apple', 'Apple', 'Apple', 'Orange', 'Apricot', 'Guava' ]

// fruits.slice(0, 1); 
console.log(fruits.indexOf("Apricot")); 
// Output: 4 (index of "Apricot" in the modified array)

fruits.forEach((value) => console.log(value.toUpperCase())); //callback loop function
// Output: 
// APPLE
// APPLE
// APPLE
// ORANGE
// APRICOT
// GUAVA

console.log(fruits.filter(val => val === "Apple")); 
// Output: [ 'Apple', 'Apple', 'Apple' ]

// let htmlListItems = fruits.map(val => "<li>" + val + "</li>");
// console.log(htmlListItems);
// Output: [ '<li>Apple</li>', '<li>Apple</li>', '<li>Apple</li>', '<li>Orange</li>', '<li>Apricot</li>', '<li>Guava</li>' ]

let value = [1, 2, 5, 8, 9];
console.log((value.reduce(((result, val) => result * val), 0)));
// Output: 0 (because the initial value is 0, multiplying by anything stays 0)

// let result = fruits.reduce((result, val) => result + "<li>" + val + "</li>"), "<ul>");
// result += "</ul>";

let resultMax = value.reduce(((result, val) => result > val ? result : val), value[0]);
console.log(resultMax);
// Output: 9 (maximum value in the array)

let valueSet = new Set([1, 3, 5, 1]);
console.log(valueSet);
// Output: Set { 1, 3, 5 } (duplicates are removed in a Set)

function hello() {
    console.log("hello");
}
hello();
// Output: hello
