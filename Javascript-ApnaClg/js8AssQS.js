// forEach............
let student = [{
    name: 'hardik',
    marks: 92
},{
    name: 'nenshi',
    marks: 90
},{
    name: 'nidhi',
    marks: 93
}];
student.forEach(function (student){
    console.log(`marks of ${student.name} is ${student.marks}`);
});

let gpa = student.map((studentInfo)=>{
    return studentInfo.marks/10;
});

// map ............
let numArr = [1,3,4,5,6,7];
let double = numArr.map((el)=>{
    return el*2;
});

// filter some & every

let nums = [1,2,3,4,5,6,7,8,910,12,11,23,56,7,8,5,3,22,366,8,2,55,3];
let even = nums.filter((el)=>{
    return el % 2 == 0;
});

let some = [1,3,5,7,9].some((el)=> el%2!=0);
let every = [2,4,6,8,10].every((el)=> el%2==0);

// reduce methode
console.log(`use of reduce methode print sum of arry`);
let numbers = [1,2,3,4,5,6,7];
let finalVal = numbers.reduce((res,el)=>{
    console.log(res);
    return res+el;
})
console.log(finalVal);

// use of reduce methode print max num of arry

let arry = [1,2,3,4,5,6,7,8,9,0];

// let max = -1;
// for(let i = 0;i<arry.length;i++){
//     if(max<arry[i]){
//         max = arry[i];
//     }
// }
// console.log(`max number is ${max}`);

let max = arry.reduce((max,el)=>{
    if(max>el){
        return max;
    }else{
        return el;
    }
});
console.log(`max number is ${max}`);



// creat getMin() & getMax()............
function getMax(numArr){
    let max = numArr.reduce((max,el)=>{
        if(max>el){
            return max;
        }else return el;
    });
    return max;
}

function getMin(numArr){
    let min = numArr.reduce((min,el)=>{
        if(min>el){
            return el;
        }else return min;
    });
    return min;
}

// spread

let odd = [1,3,5,7,9];
let evenn = [2,4,6,8,10];
let num = [...odd ,...evenn];

let myInfo = {
    name: "hardik",
    moNum: 6352535590,
    Email: "chavdahardik1729@gmail.com"
}
let infoCopy = {...myInfo, id:" codewith-hardik"};

// rest
function sum(...args){     // args ==> argument
    return args.reduce((sum,el)=> sum+el);
}

function min(...args){
    return args.reduce((min,el) => {
    if(min>el){ return el;}
    else{ return min;}
    });
}

// Destructuring

let friend = [ 'prince', 'kashyap', 'parth', 'nayan', 'yashraj', 'neel','maulik'];

let [khandhala, gunjariya, dabhi, panchal, parmar, yadav,jadav ] = [...friend];

let sisInfo = {
    name: "nenshi",
    std: "5th",
    age: 10,
    rollNum: 21,
    subject: ['maths','aaspas','hindi','english','science'],
    fName: 'anilbhai',
    mName: 'vasanbeb',
    sisName: "nidhi",
    home: 'vasana'
}

let { name, age, subject, fName, mName, sisName, home = "dhandhuka"} = sisInfo;


// Square and sum the array elements using the arrow function and then find the average of the array.

let number = [1,2,3,4,5,6,7,8,9,10];

let Square = number.map((el) => (el*el));
console.log(`square of arry is [${Square}]`);

let sums = number.reduce((acc,el)=>(acc+el));
console.log(`sum of arry is ${sums}`);

let avg = sums / number.length;
console.log(`avg of arry is ${avg}`);

// Create a new array using the map function whose each element is equal to the original element plus 5;
let arry1 = [1,2,3,4,5,6];
let newArry1 = arry1.map((el) => (el + 5));
console.log(`new arry plus five is [${newArry1}]`);

// Create a newarray whose elements are in uppercase of words present in the oiginal array........

let str = ['hardik', 'prince', 'yash', 'jay', 'bhargove', 'meet'];
console.log(str.map((el)=> el.toUpperCase()));

//  

const doubleAndReturnArgs = (arr,...args) => [
    ...arr,
    ...args.map((el)=> el*2)
];

// mergeObject 
const mergeObject = (obj1,obj2) =>({...obj1,...obj2});

let obj = mergeObject({a:1,b:2},{c:3,d:4});
console.log(obj);




