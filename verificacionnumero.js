import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un dato: ", function(dato){

    dato = parseFloat(dato);

    if (isNaN(dato)) {
        console.log("El dato ingresado NO es un número.");
    } else {
        console.log("El dato ingresado SÍ es un número.");
    }

    rl.close();

});