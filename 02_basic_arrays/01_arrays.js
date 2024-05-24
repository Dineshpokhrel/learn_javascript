// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Krishna", "Hanuman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  // add 6 to that array  output will be 0,1,2,3,4,5,6
// console.log(myArr);

// myArr.push(7)  
// myArr.pop()    // remove the last value from the array
// console.log(myArr);


// myArr.unshift(0)   //it will add 0 to the first output will be 0, 0 ...

// myArr.unshift(9)  // it will add 9 to the first ..

// myArr.shift()     // it will remove first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   // it will change it to string

// console.log(myArr);
// console.log( newArr);


// slice,          splice
// copy,         manuplate original array 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    //it will give copy ....first ko include last ko include gardaina....index 1,2 ko dekhauchha yesma 1,3 garda

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it will manuplate the array  .......bich ko portion nai chhuttinchha
console.log("C ", myArr);
console.log(myn2);