var greeting = "Hola contexto global!";
console.log(greeting); // Hola contexto global!
function greet() {
    var greeting = "Saludo desde greet";
    console.log(greeting);
    var obj = {};
    obj.grita = function() {
        console.log("TE ESTOY SALUDANDO!");
    };
    obj.grita();
}
greet(); // "Saludo desde greet"  "TE ESTOY SALUDANDO!"
console.log(greeting); // Hola contexto global!