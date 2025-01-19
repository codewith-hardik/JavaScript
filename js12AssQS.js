async function greet() {
    // throw "weak conection / 404 pag not found";  //-> error
    return "hello!"
}
greet()
 .then((result)=>{
    console.log("promise was solved result :",result );
}).catch((error)=>{
    console.log("error : ",error)
});

// heading color change....
let h1 = document.querySelector("h1");
function colorChange(color,dealy){
    return new Promise((resolv,reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*5 + 1);
            if(num < 3){
                reject("promise rejected")
            }
            h1.style.color = color;
            console.log(`color change to ${color}`);
            resolv("color changed");
        }, dealy);     
    });
};
async function demo() {
    try {
        await colorChange("red",1000);
        await colorChange("blue",1000);
        await colorChange("green",1000);
        await colorChange("pink",1000);
        await colorChange("yellow",1000);
        await colorChange("purple",1000);
        await colorChange("gray",1000);
        await colorChange("aqua",1000);
    } catch (error) {
        console.log("error caught",error);
    }
    let a = 5;
    let sqrt = a*a;
    console.log("sqare of number is :-",sqrt); 
};
//   json to js object

let jsonRes = `{"fact":"Julius Ceasar, Henri II, Charles XI, and Napoleon were all afraid of cats.","length":74}`;
let validRes = JSON.parse(jsonRes).fact;
console.log(validRes);

// js object to json
let i = {
    name: `hardik`,
    age: 17,
    college: `vishwakarma Engineering college`,
    add: `Ahmedabad`,
    course: `BE-1st-CSE`,
}
console.log(JSON.stringify(i));

// APIs with browser....

let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res)=>{
       return res.json()
    })
    .then((data1)=>{
        console.log(data1.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log(data2.fact);
    });

// APIs with Async & await

async function getFeacts() {
  
   try {
    let res = await fetch(url);
    let data =  await res.json();
    console.log(data.fact);

    let res1 = await fetch(url);
    let data1 =  await res1.json();
    console.log(data1.fact);

    let res2 = await fetch(url);
    let data2 =  await res2.json();
    console.log(data2.fact);
   } catch (error) {
    console.log("error -",error)
   }
}
getFeacts();








