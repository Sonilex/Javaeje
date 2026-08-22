import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.question("Ingrese su nombre: ", (nombre)=>{
    let nombreMayuscula=nombre.toLocaleUpperCase();
    console.log(`Entrada del nombre: ${nombre} \n Entrada en mayúscula: ${nombreMayuscula} `);
    rl.close();
});