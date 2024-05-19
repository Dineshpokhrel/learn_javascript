const name = "dinesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//we say string interplotation ${}

const gameName = new String('dinesh-dp-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-13, 4) //can take negative value also 
console.log(anotherString);

const newStringOne = "   dinesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://facebook.com/dineshp0khrel%20dp"

console.log(url.replace('%20', '-'))

console.log(url.includes('krishna'))
console.log(url.includes('dp'))

console.log(gameName.split('-'));