// Immediately Invoked Function Expressions (IIFE)
// global scope pollution bata bachna ko lagi  

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('dinesh')