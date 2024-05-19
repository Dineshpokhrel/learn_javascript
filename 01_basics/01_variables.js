const userId = 1
let userEmail = "dinesh@gmail.com"
var userPassword = "12345"
userCity = "Pokhara"
let userState
// it will say undefined  if we initialize and left it 
// userId = 2 // not allowed cause there is const


userEmail = "dp@dp.com"
userPassword = "54321"
userCity = "ktm"

console.log(userId);

/*
Prefer not to use var because of issue in block scope and functional scope
..ek thau ma initialize garesi aru thau ma tei name variable use gare change hune sabai thau ma nai ...
*/


console.table([userId, userEmail, userPassword, userCity, userState])