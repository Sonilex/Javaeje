import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.question("Ingrese un codigo numerico de 8 digitos: ", (codigo)=>{
    let digitos=codigo.slice(0,4);
    console.log(`Codigo: ${codigo} \n Digitos: ${digitos} `);
    rl.close(); 
})