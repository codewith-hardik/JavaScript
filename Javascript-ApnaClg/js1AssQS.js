console.log("hello hardik", "Chavda", (2000+24));
let mathMark = 25;
let BMEMark = 20;
let BEEMark = 20;
// let output = "The Total Marks Out of 90 is :" + (mathMark+BEEMark+BMEMark) + " gain by hardik";
let output = `the total marks out of 90 is : ${mathMark+BMEMark+BEEMark} gain by hardik `
console.log(output);

// Traffic loght system
let color;
let red = "stop !!! light color is Red";
let yellow = "slow dowen !! light color is Yellow";
let green = "go ! light color is Green";
if(color === red){
    console.log(red);
}
if(color === yellow){
    console.log(yellow);
}
if(color === green){
    console.log(green);
}
// popcon price system 

let popcon = "xl";
if(popcon === "xl"){
    console.log("price = 250rupee");
} else if(popcon === "l") {
    console.log('price = 200rupee');
}else if(popcon === "m"){
     console.log('price = 100rupee');
}else if(popcon === "s"){
    console.log('price = 50rupee');
}else {
    console.log('Not Your Riquerment Popcon available');
}

//  pass or fail or gread 

let marks = 99;
if(marks >= 33){
    console.log('pass');
    if(marks >= 90)
        console.log('Gread = A++');
    else if(marks >= 80)
        console.log('Gread = A');
    else if (marks >= 50 )
        console.log('Gread = B');
    else
        console.log('Gread = C');
    }else{
        console.log("fail");
    }

// good string

let str = 'spple';
if( str[0] === 'a' && str.length > 3){
    console.log("Good Sting ");
}else {
    console.log("not good String");
}


// useing switch stt (stetment) make day of week program

let day = 10;
switch(day){
    case 1 :  console.log("Monday");
        break;
    case 2 : console.log("Tuesday");
        break;
    case 3 : console.log("Wednsday");
        break;
    case 4 : console.log("Thurday");
        break;
    case 5 : console.log("Friday");
        break;
    case 6 : console.log("Seturday");
        break;
    case 7 : console.log("Sunday is Funday");
        break;
    default : console.log("Wrong day !!!");
}

// alert && Prompt

console.error("Hardik Chavda");
console.warn("Mahendrabhai");

alert("hardik");

let firstName = prompt("Enter Your first Name :- ");
let lastName = prompt("Enter Your last Name :- ");
let msg = 'welcome' + " " +  firstName + " " +  lastName ;

alert(msg);

