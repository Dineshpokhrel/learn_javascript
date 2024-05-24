// singleton   if it become from constructor
// Object.create   // it is constructor method through

// object literals  

const mySym = Symbol("key1")


const JsUser = {
    name: "Dinesh",
    "full name": "Dinesh Pokhrel",
    [mySym]: "mykey1",
    age: 25,
    location: "Pokhara",
    email: "dinesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "dinesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "dinesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

