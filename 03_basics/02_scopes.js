// block scope and global scope


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// if we use var inside scope we can access it form outside also but we can't access let and const
// so don't use var 

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "dinesh"

    function two(){
        const website = "pokhreldinesh"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "dinesh"
    if (username === "dinesh") {
        const website = " pokhreldinesh"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ........................interesting ..........................................


console.log(addone(5))

function addone(num){
    return num + 1
}


// addTwo(5)

// we cannot access the functiom before initialization
//cause we have defined like this below

const addTwo = function(num){
    return num + 2
}

addTwo(5)
