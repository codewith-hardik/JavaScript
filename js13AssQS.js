// print random fact about cats.....
let url = `https://catfact.ninja/fact`;
let btn = document.querySelector("#getFact");
let result = document.querySelector("#result");

btn.addEventListener("click", async ()=>{
    let fact = await getFact();
    result.innerHTML = fact;
  
})

async function getFact() {
   try {
    let res = await axios.get(url);
    return res.data.fact;
   } catch (error) {
    console.log(`error is `,error);
    return "no fact found";

   }
}
// print random imges of dog....
let url2 = `https://dog.ceo/api/breeds/image/random`;
let img = document.querySelector("img");
let btn2 = document.getElementById("getImg");

btn2.addEventListener("click",async ()=>{
    let link = await getImg();
    img.setAttribute("src",link);
})

async function getImg() {
    let res = await axios.get(url2);
    return res.data.message
}

getImg();

// headers of APIs.....
let url3 = `https://icanhazdadjoke.com/`;
async function getJoks() {
    const config = { headers : {accept : `application/json`}};
    let res = await axios.get(url3,config);
    console.log(res.data);
}






