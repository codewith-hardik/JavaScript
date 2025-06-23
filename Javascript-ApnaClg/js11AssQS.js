function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}
three();


// callback hell 
let h1 = document.getElementById("cwh");

function colorChange(color,delay,nextcolorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextcolorChange)  nextcolorChange();
    }, delay)
}

let colorrepet = colorChange("red",1000,()=>{
    colorChange("green",1000,()=>{
        colorChange("yellow",1000,()=>{
            colorChange("aqua",1000,()=>{
                colorChange("blue",1000,()=>{
                    colorChange("pink",1000,()=>{
                        colorChange("black",1000);

                    })
                })
            })
        })
    })
})

//  promisis

function saveDb(data,success,failure){
    let internet = Math.floor(Math.random()*10 + 1);
    if(internet >5){
        success();
    }else{
        failure();
    }
   
}

//    saveDb("code with hardik",
//     ()=>{
//     console.log("success1 : data savd");
//         saveDb("chavda hardik",
//             ()=>{
//                 console.log("success2 : data savd");
//                 saveDb("vgec - cse - G4 - 59",
//                     ()=>{
//                         console.log("success3 : data savd");
//                     },
//                     ()=>{
//                         console.log("failure3 : weak conection");
//                     }
//                 )
//             },
//             ()=>{
//                 console.log("failure2 : weak conection");
//             }
//         )
//     },
//     ()=>{
//         console.log("failure1 : weak conection");
//     }
// );



// new topic
// refectory of promise
function saveDb2(data){
    return new Promise((resolve,reject) =>{
        let internet = Math.floor(Math.random()*10 + 1);
        if(internet > 4){
          resolve("success : data saved"); // result
        }else{
            reject("fileur : weak conection"); // error
        }
    });
}
// promise chaining 
saveDb2("codewith-hardik").then((result)=>{
    console.log("data1 savde");
    console.log("Result of Promise : ",result)
    return saveDb2("chavda hardik");
}).then((result)=>{
    console.log("data2 savde");
    console.log("Result of Promise : ",result)
    return saveDb2("hello world");
}).then((result)=>{
    console.log("data3 savde");
    console.log("Result of Promise : ",result)
}).
catch((error)=>{
        console.log("promise reject");
        console.log("error of promise",error);
});


// heading color change .....
let color = document.getElementById(series);

function changeColor(color,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            series.style.color = color;
            resolve("color change");
        },delay);
    });
}

changeColor("red",1000).then( ()=>{
    console.log("red color ");
    return changeColor("blue",1000);
}).then(()=>{
    console.log("blue color");
    return changeColor("green",1000);
}).then(()=>{
    console.log("green color");
    return changeColor("pink",1000);
}).then(()=>{
    console.log("pink color");
    return changeColor("grey",1000);
}).then(()=>{
    console.log("grey color");
})




