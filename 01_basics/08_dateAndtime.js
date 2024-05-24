// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24) // month start from 0 in javascript
// console.log(myCreatedDate.toDateString());
// let myCreatedDate1 = new Date(2024, 0, 24, 5, 3)   // year , month , day , hour, min 
// console.log(myCreatedDate1.toLocaleString());
// let myCreatedDate = new Date("2024-05-19")
let myCreatedDate = new Date("05-19-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // dont know why this is working giving 0 
console.log(newDate.getFullYear());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})