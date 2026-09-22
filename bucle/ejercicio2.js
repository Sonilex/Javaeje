import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas horas duró el préstamo? ", function(respuesta) {

    const prestamoDiario = Number(respuesta);

    let costoPrestamo = 2.25;
    let recaudacionTotal = 0;

    for (let prestamo = 1; prestamo <= 4; prestamo++) {

        let costo = costoPrestamo * prestamoDiario;

        recaudacionTotal = recaudacionTotal + costo;

        console.log(`Préstamo ${prestamo}, horas utilizadas: ${prestamoDiario.toFixed(2)}`);
        console.log(`Costo del préstamo: $${costo.toFixed(2)}`);
    }

    console.log(`El recaudo total es de: $${recaudacionTotal.toFixed(2)}`);

    rl.close();
});