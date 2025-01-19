
// Method 1 oops....
const stu1 = {
    name:"hardik",
    age : 17,
    marks: 99,
    getMarks: function(){
        return this.marks;
    }
 }
 const stu2 = {
    name: "ankit",
    age : 16,
    marks: 99,
    getMarks: function(){
        return this.marks;
    }
 }

 // Method 2 Oops....  factory fxn


function personMaker (name,age){
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`Hi my name is ${this.name}`)
        }
    }
    return person;
}

let p1 = personMaker("hardik", 17);


// Method 3 Oops.... 
//  constuctors ..... doesn't return anything & start with capital latter

// ----->>>>>function student(name,age,tenPass){
//     this.name = name;
//     this.age = age;
//     this.tenPass = tenPass;
// }
// student.prototype.talk = function(){
//     console.log(`Hi My name is ${this.name} & I 10th ${this.tenPass}`)
// }
// let stu3 = new student("hardik",17,"pass");    <<<<<------

//   Method 4 Class Object....\

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name}`)

    }
}
let p2 = new person("hardik",17, )


// Inheritanc.......

class student extends person{
    constructor(name,age,marks) {
        super(name,age)
        this.marks = marks;
    }
    
}
class teacher extends person{
    constructor(name,age,subject) {
        super(name,age)
        this.subject = subject;
    }
   
}
let student1 = new student("hardik",17,95);
let teacher1 = new teacher("chirag",35,"maths");




