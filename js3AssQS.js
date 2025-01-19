let msg = " hello! ";
let newMsg = msg.trim().toUpperCase();
console.log(msg.trim().toUpperCase().repeat(2));

// Array Prectic Qs -->> Mathod

let month = ["january","July","March","August","Desamber","November","February"];
month.shift();
month.shift();
month.unshift("June");
month.unshift("July");
month.indexOf("June");          // 1
month.includes("March");        // true
month.slice(2);
//
let primaryColor = ["red", "green" ,"blue"];
let secondnaryColor = ["yellow" ,"Pink" , "white"];
let allColor = primaryColor.concat(secondnaryColor);

// 
let cars = ["bmw" , "toyota" ,"suzuki" ,"maruti" ,"xuv" ,"audi" ,"farrari" ,"neno"];
cars.splice(0,2,"thar" ,"mahendra");

//tic-tac-teo

let game = [["x", null, "0"],[null, "x", null],["0" , null, "0"]];
game[0][1] = "0";




// .Write a JavaScript program to get the first n elements of an array.[n can be any positive number].


let arr = [1,2,3,-1];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);
let lastElements = arr.slice(arr.length-n);
console.log(lastElements);

// string is blank or not-----------------
let str1 = "";
if(str1.length === 0){
    console.log(`string is blank/empty`);
}else{
    console.log(`string is not blank/empty`);
}

// check string element is lowercase-----------

let str2 = `PRiNcE KhAnDhLa`;
let idx = 2;
if(str2[idx] == str2[idx].toLowerCase()){
    console.log(`Cherector is lowercase`);
}else{
    console.log(`cherector is uppercase`);
}
//  without space string-------------

// let str3 = prompt(`Enter string :- `);
// console.log(`Orignal string :- ${str3}`);
// console.log(`String without space :- ${str3.trim()}`);

// check exeist element in arrys-----------

let friends = ['prince','jay','meet','kashyap','krishna','bhargave','mitesh','maulik','chetan','dharmik'];
let favfriend = 'utpal';
if(friends.indexOf(favfriend) != -1){
    console.log(`your fevorite firend exist in arry`);
}else{
    console.log(`friend is not exist`);
}

