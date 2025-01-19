let img = document.getElementsByClassName("oldImg");
for(let i = 0;i<img.length;i++){
    img[i].src = "/Sigma 4.0/Webdevlopment/assets/spiderman_img.png";
     console.log(`Img is changed ${i}`); 
}

// style

let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = 'green';
}

// 
// let box = document.querySelector(".box");
// box.classList.add("boxBg");

// Ass Qs..............

let pera1 = document.createElement("p");
pera1.innerText = "Hyy I'm red pera.......";
document.querySelector("body").append(pera1);
pera1.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "hi I am H3 tag with blue color...";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let box = document.createElement("div");
let h2 = document.createElement("h2");
let pera2 = document.createElement("p");

box.append(h2);
box.append(pera2);


h2.innerText = "Hello I am in Box...";
pera2.innerText = "MEET TOO!!!!";
box.classList.add("box");
pera2.classList.add("blue")
h2.classList.add("red");

document.querySelector("body").append(box);


// Create a new input and button element on the page using JavaScript only.Set the text of button “Click me”

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click Me....!!!"

document.querySelector("body").append(button)
document.querySelector("body").append(input)

// button.id = "btn";
// input.placeholder = "username";

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// 

document.querySelector("#btn").classList.add("btnStyle");

//
let h1 = document.createElement("h1");
h1.innerText = "DOM Prectice";
h1.classList.add("h1Style");
document.querySelector("body").prepend(h1);


// 
let p = document.createElement("p");
p.innerHTML = "Hello... Let's <b>Code with Hardik</b>.....";
document.querySelector("body").append(p);








