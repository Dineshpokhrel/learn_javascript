// let myName = "dinesh     "
// let mychannel = "dp     "

// console.log(myName.trueLength);


let myHeros = ["shiva", "bishnu"]


let heroPower = {
    shiva: "trisul",
    bishnu: "sudarsanChakra",

    getBishnuPower: function(){
        console.log(`Bishnu power is ${this.bishnu}`);
    }
}

Object.prototype.dinesh = function(){
    console.log(`dinesh is present in all objects`);
}

Array.prototype.heyDinesh = function(){
    console.log(`Dinesh says hello`);
}

// heroPower.dinesh()
// myHeros.dinesh()
// myHeros.heyDinesh()
// heroPower.heyDinesh()



// inheritance

const User = {
    name: "learnJavascript",
    email: "learnJavascript@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "learnJavascript     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dinesh".trueLength()
"iceTea".trueLength()