// creating Object
const myInfo = {
    username: "chavdahardik",
    study: "college",
    sem: 1,
    clgName: "Vishwakarma Enginering college",
    add: "Ahemedabad",
    moNum: 6352535590,
    email: "chavdahardik3690@gmail.com",
    corse: "BE-CSE",
    rollNum: "2024BCER0059",
};

// get value --> 
myInfo.clgName;
myInfo["username"];
// add & updet value
myInfo.clgName = "L.D. Engineering college"; //--> add
delete myInfo.email;  //-->> deleting

// nested object
const clgClss = {
    hardik: {
        mark: 90,
        gred: `A+`,
        add: `kathwada`
    },
    prince: {
        mark:80,
        gred:`A`,
        add:`dhandhuka`
    },
    dharmik: {
        mark:70,
        gred:`B`,
        add:`chandkheda`
    },
    vivek: {
        mark:50,
        gred:`C`,
        add:`Botad`
    },
};

// arry of object
const frieds = [
    {
        name: "jay",
        add: "morbi",
        study:"B.com"
    },
    {
        name:"Prince",
        add: "Dhandhuka",
        study:"B.E - EE"
    },
    {
        name:"vivek",
        add: "botad",
        study:"B.E - CSE"
    }
];


console.log(Math.floor(1.0001));  // 0
console.log(Math.PI);             // 3.14
console.log(Math.E);              // 2.71
console.log(Math.random());            // any number [0 , 1)
console.log(Math.sqrt(4));              // 2
console.log(Math.pow(2,5));             // 32
console.log(Math.ceil(1.01));       // 2


// random number creat 1 to 10

let num = Math.floor((Math.random()*10) + 1);


//dice

let dice = Math.floor(Math.random()*6)+1;
console.log(dice);

// car object
const car = {
    name: "Maruti Suzuki",
    model: "Maruti Suzuki Dzire",
    color: "white",
};
console.log(car.name);
// person Object
const Person={
    name: "JaneDoe",
    age: 21,
    city: "NewJersey",
};
Person.city="NewYork";
Person.country="UnitedStates";
console.log(Person);