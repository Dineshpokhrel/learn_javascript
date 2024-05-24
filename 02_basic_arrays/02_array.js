const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
//push use original array and add it in there

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat :it will combine array and create new array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// ... spread operater

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)    // it will return jagged array into single array
console.log(real_another_array);



console.log(Array.isArray("Dinesh"))
console.log(Array.from("Dinesh"))
console.log(Array.from({name: "dinesh"})) // interesting....we have to define it like create arrays from keys , values .

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));