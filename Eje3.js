import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese una cantidad de horas: ", function(hora){
    const minutos = hora * 60;
        console.log(`La cantidad de minutos es: ${minutos} minutos`);
        rl.close
});