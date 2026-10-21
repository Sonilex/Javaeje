
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarConsumo = (actual, cantidad, total, elevados) => {

    // CASO BASE
    if (actual > cantidad) {
        console.log(`Cantidad de equipos: ${cantidad}`);
        console.log(`Consumo total: ${total.toFixed(2)} kWh`);
        console.log(`Equipos con consumo elevado: ${elevados}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese el consumo del equipo ${actual} en kWh: `, (dato) => {

        const consumo = parseFloat(dato);

        if (!Number.isFinite(consumo) || consumo < 0) {
            console.log("Ingrese un consumo válido.");
            registrarConsumo(actual, cantidad, total, elevados);
            return;
        }

        let nuevoTotal = total + consumo;
        let nuevosElevados = elevados;

        if (consumo > 15) {
            console.log(`El equipo ${actual} presenta un consumo elevado.`);
            nuevosElevados = elevados + 1;
        }

        console.log(`Consumo acumulado: ${nuevoTotal.toFixed(2)} kWh`);

        // LLAMADA RECURSIVA
        registrarConsumo(actual + 1, cantidad, nuevoTotal, nuevosElevados);

    });

};

rl.question("¿Cuántos equipos desea registrar?: ", (dato) => {

    const cantidad = Number(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarConsumo(1, cantidad, 0, 0);
    } else {
        console.log("Ingrese una cantidad válida.");
        rl.close();
    }

});
