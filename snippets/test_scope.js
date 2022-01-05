var mensajeUndefined;
console.log(mensajeUndefined);

var mensajeInitialized = "mensajeInitialized";
console.log(mensajeInitialized);

var message = "Global Message";

function hola() {
    console.log(mensajeInitialized); // It gets the variable looking for in the previous context to the one created in the function's block of code

    message = "Local Message";
    console.log(message); //It gets the closer declaration one

    sideEffect = "sideEffect"; // You aren't declaring a variable. You are adding a key / value to the window
    // Using this --> Impure function
    console.log(sideEffect);
    console.log(this.sideEffect);
} // Define a function, returns an undefined
hola();