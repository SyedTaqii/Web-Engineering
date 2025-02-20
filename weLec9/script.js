// console,console.log("I am Initial");

// setTimeout(function(){
//     console.log("I am Inside");
// }, 2000);  

// console.log("I am Ending");

// console.log("Before");

// function fetchUser(){
//     setTimeout(function(){
//         console.log("I am Inside");
//         return {name: "Asad", age: 20};
//     }, 2000);
// }

// const returnedUser = fetchUser();
// console.log(returnedUser);

//callback function

// fetchUser(123, function(user){
//     console.log(user);
// });

// function fetchUser(userId, callback){
//     setTimeout(function(){
//         const fetchedUser = {id: userId, name: "Asad", email: "asad@123", age: 20};
//         callback(fetchedUser);
//     }, 2000);
// }

// function sendEmail(userEmail, callback){
//     setTimeout(function(){
//         const response = {status: true};
//         callback(response);
//     }, 3000);
// }

// sendEmail("asad@123", function(response){
//     console.log(response);
// });

// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve(1);
//         reject(new Error("I am Rejected"));
//     }, 2000);
// });

// promise.then(function(result){ //resolve will call this function
//     console.log(result);
// });

// promise.catch(function(error){ //reject will call this function
//     console.log(error.message);
// });

// const promise = new Promise(function(resolve, reject){
//     resolve(1);
//     reject(new Error("I am Rejected"));
// });

// Promise.all([promise])
//     .then(function(result){
//         console.log("working" + result);
//     })
//     .catch(function(error){
//         console.log("not working"+error.message);
//     });

// console.log("End");


// async function getGitData(){
//     const response = await fetch("https://api.github.com/users/SyedTaqii");
//     const profile = await response.json();
//     console.log(profile);
// }
// getGitData();
// const getAPI = fetch("https://api.github.com/users/hashimaliii");

// getAPI.then((response) => {
//     response.json();
// })
// .then(function(profile){
//     console.log(profile);
// });

// getAPI.catch(function(error){    
//     console.log(error);
// });

// localStorage.setItem('gitURL', 'api.github.com/users/hashimaliii');

const users = [
    {name: "Asad", age: 20},
    {name: "Ali", age: 22},
    {name: "Taqi", age: 24}
];

console.log(users);

sampleusers = JSON.stringify(users); // convert object to string
console.log(sampleusers);
console.log(JSON.parse(sampleusers)); // convert string to object

localStorage.setItem('classStudents', sampleusers);
console.log(localStorage.getItem('classStudents'));

//Task 
//Record Expenses
//Source: input
//amount: input
//spend and income button

//debit balance (display)    //Credit Balance(display)
//green and +                 //red and -
//total amount (display)
//history