let mainElemt = document.getElementById("main");
console.log(mainElemt);
console.log(mainElemt.parentNode);


let className = document.getElementsByClassName(` `)
console.log(className);

// let tagName = document.getElementsByTagName("body");
// console.log(tagName.children);
// console.log(tagName);

// console.log(document.body.children); //One way
let tagName1 = document.getElementsByTagName("body")[0]; //Second Way
console.log(tagName1.children);


let querySelector = document.querySelector(".class") //#id, tag
let allQuerySelector = document.querySelectorAll("#id");

// document.getElementById("title").innerText = "new document";
// document.getElementsByTagName("body")[0].innerHTML = "<h1> I have changed</h1>";

// document.getElementById("div1").innerText = "I am a Div";

document.getElementById("div1").style.color = "blue";   
document.getElementById("div1").style.backgroundColor = "#333";

// document.getElementById("binImg").src = "./images/toDoListBackground.jpg";


//create element through js
let newElement = document.createElement("div");
let newButton = document.createElement("button");
newButton.innerText = "Counter";
let count = 0;
newButton.addEventListener("click", () => {
    alert('I am Clicked');
});

function incrementCount(){
    console.log(count);
    return count++;
}

newElement.addEventListener("click", incrementCount);
newElement.addEventListener("mouseenter", () => {
    newButton.style.backgroundColor = "yellow";
});
newElement.addEventListener("mouseleave", () => {
    newButton.style.backgroundColor = "white";
});

setTimeout(newElement.innerText = count, 3000);

newElement.appendChild(newButton);

document.body.appendChild(newElement);

// newElement.remove();

let elements = document.getElementsByTagName("*");
console.log(elements);
// for(i=0; i<elements; i++){
//     console.log(elements[i]);
// }
// elements.array.forEach(element => {
//     console.log(element);
// });