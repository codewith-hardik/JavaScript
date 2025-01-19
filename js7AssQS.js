// this 

let student = {
    name: "hardik",
    math: 25,
    bee: 22,
    bme: 20,
    ipdc: 25,
    getAvg(){
        let avg = (this.math + this.bee +this.bme + this.ipdc )/4;
        return avg;
    }

}
student.getAvg();

// try &&& catch

console.log("hardik")
console.log("chavda")
console.log("codewith")
console.log("hardik")
try {
    console.log(a);
} catch (error) {
    // console.log("a is not definde ... error....");
    console.log(error);
}
console.log("webdevloper")
console.log("cse-studant")

// Arrow fxn

const sum = (a,b) => {
    return a+b;
}
const mul = (a,b) => {
    return a*b;
}
const pow = (a,b) => {
    return a**b;
}
const sub = (a,b) => {
    return a-b;
}
const hello = () => (
     "hello world"
);

// setTimeout
console.log("code with......>");
setTimeout(() => {
    console.log("codewith_hardik")
},4000)
console.log("<......hardik");


// setInterval

setInterval(() => {
    console.log("codewith_hardik multipultime");
}, 2000);

// get info

const student2 = {
    name: "hardik",
    marks: 95,
    prop: this,
    getName: function(){  // this ====>>> student2 
        console.log(this);
        return this.name;
    },
    getMarks: () => {       // this ====>>> window
        console.log(this);
        return this.marks;
    },
    getInfo1: function(){             //  this =====>>> student2
        setTimeout(
            () =>{             
                console.log(this);
            },2000);
    },
    getInfo2: function(){   //  this =====>>> window
        setTimeout(
            function(){
                console.log(this);
            },2000);
    }
}


// square of n
let n = 2;
const sqr = (n) => {
    return n*n;
}

// write a js program for print 5 times code with hardik
let id = setInterval(() => {
    console.log("*******");
}, 2000);
setTimeout( () => {
    clearInterval(id);
    console.log("clear Interval.....")
},10000)

// arrow fxn....for arryAvg

let arr = [1,2,3,4,5,6,7,8,9,10];  // avg 55/10 --> 5.5

let arryAvg = (arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}



const arrayAverage=(arr)=>{
    let total=0;
    for(let number of arr){
        total+=number;
    }
        return total/arr.length;
     };

//   Even()......
let number = 1;
let Even = (n) => {
    if(n%2==0){
        return "Not Even number";
    }else{
        return "It is Even Number";
    }
}








