// poem function
function poem() {
   console.log(` Twinkle, twinkle, little star,`);
   console.log(`How I wonder what you are!`);
   console.log(`Up above the world so high,`);
   console.log(`Like a diamond in the sky.`);
   console.log(`Twinkle, twinkle, little star`);
    console.log(`How I wonder what you are!`);
}
// rolldice
function rollDice() {
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
}
rollDice();
// my info
function myInfo(name,age){
    console.log(`${name}'s age is ${age} `);
}
myInfo("hardik",17);

// sum of two number 
function sum(s1,s2) {
    console.log(s1+s2);
}
sum(10,24);


// average of three numbers
function avgOfthreeNum(x,y,z) {
    let avg = (x+y+z)/3;
    console.log(avg);
}
avgOfthreeNum(1,2,3);

// function with return --------------
function isAdult(age){
    if (age < 18) {
        return "not adult";
    }else{
        return "adult";
    }
}

// sum of natural number -----------------

function oneToNsum(n){
    // let sum = 0;
    // for(let i = 1;i <= n;i++){
    //     sum = sum + i; // sum += i
    // }
    // return sum;

    return n*(n+1)/2;
}
// concationation of string-------------
let str = ['hardik ','chavda ','in ','study ','computer Engineering'];
function concat(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}

// scope ------------------- output
let greet = 'hello';  // global scope

function changeGreet(){
    let greet = 'namaste';  // Fxn scope
    console.log(greet);

    function innerGreet(){
        console.log(greet);  // lexicl scope
    }
    innerGreet();
}

console.log(greet);
changeGreet();

//  output
// hello
// namaste
// namaste

// Higher fxn Order-------------------

function multipelGreet(fxn,n){
    for(let i = 1; i<= n; i++){
        fxn();
    }
}

let Greet = function() {
    console.log("hello");
}

multipelGreet(Greet,3);

// Higher Order FXN for return---------
 


function oddEvenTest(req){
    if(req = 'odd'){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(req = 'even'){
        return  function(n){
            console.log((n%2 == 0));
        }
    }else {
        console.log("wrong request");
    }
}

// mathode in function

let calculator = {
    add : function(a,b){
        return (a+b);
    },
    sub : function(a,b){
        return (a-b);
    },
    mul : function(a,b){
        return (a*b);
    }
};

//Write a JavaScript function that returns array  elements larger than a number................

let arr = [1,2,3,5,4,5,6,7,8,10,3];
let num = 6;
function getGreterthan(arr,num) {
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}

getGreterthan(arr,num);

// Example : str=“abcdabcdefgggh”      ans=“abcdefgh”...........
let str1 = "abcdabcdefgggh";

function uniqueChr(str){
    let ans = "";
    for(let i = 0 ; i<str.length; i++){
        let curectstr = str[i];
         if(ans.indexOf(curectstr) == -1){
            ans += curectstr;
         }

    }
    return ans;
}

uniqueChr(str1);


//   Example: country=["Australia","Germany","UnitedStatesofAmerica"]      output:"UnitedStatesofAmerica"............

let country = ["Australia", 'Germany', 'UnitedStatesofAmerica'];
function longestContName(arr){
    let ansIdx = 0;
    for(let i = 0; i<country.length;i++){
       let ansLen = country[ansIdx].length;
       let currLen = country[i].length;
       if(currLen > ansLen){
        ansIdx = i;
       }
    }
    return country[ansIdx];
}
longestContName(country);


//Write a JavaScript function to count the number of vowels in a String argument

let str2 = "hardikchavda";
function countVowels(str){
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(
            str.charAt(i) == 'a' ||
            str.charAt(i) == 'e' ||
            str.charAt(i) == 'i' ||
            str.charAt(i) == 'o' ||
            str.charAt(i) == 'u' 
        ){
            count++;
        }
    }
    return count;
}

//  Write a JavaScript function to generate a random number with in a range.....

let range = 10;
function randomNum1(range){
   let genRandomNum =  Math.floor(Math.random()*range + 1);
    return  genRandomNum;
}
randomNum1(range)


//     Write a JavaScript function to generate a random number with in a range..... with Start &&& End


let start = 100;
let end = 200;
function randomNum2(start,end){
    let diff = end - start;
   let genRandomNum =  Math.floor(Math.random()*diff + start);
    return  genRandomNum;
}

randomNum2(100,200);


