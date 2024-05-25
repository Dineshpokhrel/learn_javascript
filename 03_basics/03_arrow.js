const user = {
    username: "Dinesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//this is use to refer current context

// user.welcomeMessage()
// user.username = "dp"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "dinesh"
//     console.log(this.username);
// }

// chai()

// when we run this chai it will say undefined cause cant use in function
// let username nagari this print gare dherai data dekhauchha you can try 


// const chai = function () {
//     let username = "dinesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "dinesh"
    console.log(this);
}
// chai()

//

//explict return 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//implict return 


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )


//if we use curly braces need return keyword but if we use parenthesis we dont need to write return keyword


const addTwo = (num1, num2) => ({username: "dinesh"})

// to return object parenthesis vitra rakhna parchha object  

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()