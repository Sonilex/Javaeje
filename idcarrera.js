import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.question("Ingrese el codigo de carrera (Ej: U20260867): ", (codigo)=>{
    let codigocarrera=codigo.slice(0,3);
    console.log(`Codigo de carrera: ${codigo} \n Codigo de carrera sin prefijo: ${codigocarrera} `);
    rl.close(); 
})