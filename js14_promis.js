console.log('this is Promis');

let prom1 = new Promise((resolv,reject) => {
  
    let a = Math.random();
    if(a>0.5){
        setTimeout(() => {
            console.log(`promise resolv`);
            resolv(`hardik1`);
        },3000 )
    }else{
        console.log(`promise reject`);
        reject("random number not supported");
    }
}
);



let prom2 = new Promise((resolv,reject) => {
  
    let a = Math.random();
    if(a>0.5){
        setTimeout(() => {
            console.log(`promise resolv - 2`);
            resolv("hardik2");
        },2000 )
    }else{
        console.log(`promise reject - 2`);
        reject("random number not supported - 2");
    }
}
);


let p3 = Promise.allSettled([prom1,prom2])

p3.then((a) => {
  console.log(a);
}
).catch((err) => {
  console.log(err);
}
)
    
    
    
    
    // prom1.then((a)=>{
//     console.log(a);
// }).catch((err) => {
//   console.log(err);
// }
// )