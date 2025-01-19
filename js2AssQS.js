// Ass. QS 1

let num = 20;
if (num % 10 === 0) {
    console.log("Good");
}else {
     console.log("bed");
}

// Ass. Qs. 2
let name = prompt("Enter Your Name :- ");
let age = prompt("Enter Your Age :- ");
let msg = `My name is ${name} and ${age}  Years Old`;
alert(msg);

// Ass. QS. 3 Write a switch statement to print the months in a quarter

let quarter = 5;
switch (quarter) {
    case 1: console.log(`January , February , March`);        
        break;
    case 2: console.log(`April , May , June`);        
        break;
    case 3: console.log(`July , August , September`);        
        break;
    case 4: console.log(`October , November , Decamber`);        
        break;

    default: console.log("Worng Quater Number")
        break;
}
// Ass. Qs. 4. Golden String

let str = "ahavda Hardik"
if ( str[0] === "A" || str[0] === "a"  && str.length >= 5 ) {
    console.log("Golden String");    
} else{
    console.log("Not Golden String");
}

// Ass.QS. 5 Large Number Of 3
let x = 3;
let y = 4;
let z = 5;
if (x>y ) {
    if(x>z)
        console.log( `${x} is large`);       
    else
        console.log(`${z} is large`);
    
}else {
    if(y>z)
        console.log(`${y} is large`);
    else
        console.log(`${z} is large`);

}

// Ass. QS. 6 

let num1 = 32;
let num2 = 47852;
if( ( num1 % 10 ) == ( num2 % 10 )){
    console.log("numbers have the same last digit which is", num1 % 10 );
}else{
    console.log("numbers don't have the same lastdigit");
}
    