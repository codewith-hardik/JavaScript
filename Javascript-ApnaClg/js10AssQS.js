let btns = document.querySelectorAll(".btnAlert");

for(btn of btns){
    btn.onclick = () => {  console.log("Hello");};
    btn.onmouseenter = () => {console.log("you enter in button...")};
    btn.addEventListener("click",()=>{
        alert("dont click me.....");
        alert("code with hardik..........")
    })
}

// miniiii Activity.........

let button = document.getElementById("btnGenCol");
let h2 = document.querySelector("h2");
let div = document.querySelector("div");
button.addEventListener("click",()=>{
   h2.innerText = getRandomColor();
    div.style.backgroundColor = getRandomColor();
})

function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}


// use of this .........

let head1 = document.querySelector("#head1");
let pera1 = document.querySelector("#pera1");
let btn1 = document.querySelector("#btn1");

function changColor() {
    console.dir(this);
    this.style.backgroundColor = getRandomColor();
}
head1.addEventListener("click",changColor);
pera1.addEventListener("click",changColor);
btn1.addEventListener("click",changColor);


// keybord Events........

let inp = document.querySelector("input");
inp.addEventListener("keydown",(event) => {
    console.log("code =",event.code);
  if (event.code == "KeyU") {
    console.log(`Charector moves up...`);
  }else if (event.code == "KeyD"){
    console.log(`charector moves down...`);
  }else if (event.code == "KeyR"){
    console.log(`charector moves Right...`);
  }else if (event.code == "KeyL"){
    console.log(`charector moves Lift...`);
  }else{
    alert(`You press Wrong Key....`);
  }
});


// form.........

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
  event.preventDefault();
  console.dir(this)
  let pass = this.elements[1];
  let user = this.elements[0];
  console.log(user.value);
  console.log(pass.value);

  alert(`username is ${user.value} & it's password is ${pass.value}` );
});


// my text editor.........

let peditor = document.querySelector("#peditor");
let h1editor = document.querySelector("#h1editor");
let texteditor = document.querySelector("#texteditor");

texteditor.addEventListener("input",function(event){
 console.log(texteditor.value);
 peditor.innerHTML = texteditor.value;
});

// scroll .......

let scrollBox = document.querySelector("#scroll-box");
let output = document.querySelector("#output");

scrollBox.addEventListener("scroll",function(event){
  output.innerHTML = "Scroll Now...";
  setTimeout(()=>{
    output.innerHTML = "Waiting on scroll events...";
  },2000)
})

// keypress.....

let focus = document.getElementById("focus");
let keyOutput = document.getElementById("keypress-output");

focus.addEventListener("keypress",function(event){
  keyOutput.textContent += event.code;

});

// mouseout &&& mouseleave.....
const ul = document.getElementById("codewith");

ul.addEventListener("mouseleave",(e)=>{
  e.target.style.color = "purple";

  setTimeout(() => {
    e.target.style.color = "";
  }, 1000);
}
);

ul.addEventListener("mouseout",(e)=>{
  e.target.style.color = "pink";

  setTimeout(()=>{
    e.target.style.color = "";
  },500);
});

// Cheange button color....

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",(e)=>{
  btn2.style.backgroundColor = "yellow";
  setTimeout(()=>{
    btn2.style.backgroundColor ="";
  },500);

});

// Write Your Name as Heading.....

let heading = document.getElementById("heading");
let headname = document.getElementById("headname");

headname.addEventListener("keypress",(e)=>{
  // heading.textContent = "";
  heading.textContent += e.key;
});












