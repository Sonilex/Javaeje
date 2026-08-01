import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la longitud en mentros: ", function(metros){
    let longitud = parseFloat(metros);
    let centrimetros = longitud * 100;
    console.log(`La longitud en centímetros es: ${centrimetros}`);
    rl.close();
});
