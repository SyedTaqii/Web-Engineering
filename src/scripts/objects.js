var Person = {
  name: "taqi",
  age: 21,
  registeredCourses: {
    course1: {
      title: "PF",
      isPassed: true,
    },
  },
  displayname: function () {
    return this.name;
  },
};
for(key in Person){
    console.log(Person[key]);
}
console.log(Person);

let Person1 = new Object();
Person1.name = "Talha";
Person1.isStudent = true;
Person1.courses = ["Db", "PF"];
let str = "name";
Person1[str] = "taqi";
delete Person1["isStudent"];
console.log(Person1[str]);
console.log(Person1);
let {name, isStudent} = Person1;


let Person2 = Object.create(null);
Person2.name = "taqi";
console.log(Person2);

let person4 = {...Person};
console.log(person4)

function add (...val){
    let result = 0;
    for(count = 0; count<val.length; counter++){
        result+=val;
    }
}

function createPerson(name, isStudent){
    this.name = name;
    this.isStudent = isStudent;
}
let person5 = new createPerson("yp", true);
console.log(person5);

// Person.proto().__proto__().semesterStart = true;
// console.log(Person);