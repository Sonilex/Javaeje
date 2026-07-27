import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese la base de un rectangulo: ", function(base){
    rl.question("Ingrese la altura del rectangulo: ", function(altura){
        base = Number(base);
        altura = Number(altura);

        const area = base * altura;

        console.log(`El área del rectángulo es: ${area}`);

        rl.close
    });
});