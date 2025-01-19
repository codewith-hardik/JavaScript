// odd number--------------------------
console.log("odd number");

for(let i = 1; i<=15 ; i=i+2){
    console.log(i);
}
//even number------------------------
console.log("even number");
for(let i = 2; i<=10; i=i+2){
    console.log(i);
    
}
// table-----------------------

// let n = prompt("Write your table number :-");
// console.log(`Table of ${n}`);
// n = parseInt(n);
// for(let i = n; i<=n*10; i=i+n){
//     console.log(i);
    
// }


// nested loop --------------------------------
for(let i = 1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j = 1; j<=3; j++){
        console.log(j);
    }
}
// while loop---------------------
console.log(`use of while loop`);
let i = 1;
while (i<=5) {
    console.log(i);
    i++;
}

// fevorite movie guess-------------------------

// let favMovie = "kgf";
// let guess = prompt(`write your fevorite Movie:- `);
// while (guess != favMovie) {
//     if(guess == "quit"){
//         console.log(`you quit`);
//         break;
//     }
//     guess = prompt(`wrong guess Pleace try again !!!`);
    
// } 

// if(guess==favMovie){
//     console.log(`Congratulation!!!`);
// }

// loop with arrys--------------------------------

let fruits = ["mango", "apple", "orenge", "banana", "papaya"];
for(let i = 0; i<fruits.length; i++){
    console.log(i,fruits[i]);
    
}

console.log(`forword`);
for(let i = fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}

// nested loop with nested arrys------------------

let heros = [['iron-man','spider-man','thor'],['super-man','wonder woman','flesh']];
for(let i = 0; i < heros.length; i++ ){
    console.log(`${i} , ${heros[i]}`);
    for(let j = 0; j < heros[i].length; j++){
        console.log(`${j} , ${heros[i][j]}`);
    }
}
// useing for-of loop 
for(list of heros){
    console.log(list);
    for(hero of list ){
        console.log(hero);
    }
}

// for-of  loop for string & arrys--------------------
let colors = ['white','black','red','orenge','blue','yellwo'];
for(let color of colors){
    console.log(color);
}

let myName = `hardik chavda`;
for(cher of myName){
    console.log(cher);
}

// Write a JS program to delete all occurrences of element ‘num’ in a given array.

let arr1 = [1,2,3,4,5,6,7,8,9,0,0,9,8,7,6,5];
let num = 5;
for(let i = 0; i<=arr1.length; i++){
    if(num == arr1[i]){
        arr1.splice(i,1);
    }
}

// factorial
let num1 = 4;
let fact = 1;
for(let i = 1;i <= num1;i++ ){
    fact = fact*i
}
console.log(`factorial of ${num1} is ${fact}.`);

// find ladrgest number of the arry
let arr2 = [1,2,3,4,5,6,7,8,9,0];
let largest = 0;
for(let i = 0; i < arr2.length; i++){
    if(largest < arr2[i]){
        largest = arr2[i];
    }
}
console.log(largest);