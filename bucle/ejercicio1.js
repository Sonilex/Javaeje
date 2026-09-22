import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuanto ahorrado este dia? ", function(respuesta) {
    const ahorroDiario = Number(respuesta);

    let ahorroTotal = 0;

    for (let dia = 1; dia <= 5; dia++) {
        ahorroTotal= ahorroTotal + ahorroDiario;
        console.log (`Dia ${dia} ahorro: ${ahorroTotal.toFixed(2)}`);
    }
    console.log(`Ahorro total $${ahorroTotal.toFixed(2)}`);
    rl.close();
});