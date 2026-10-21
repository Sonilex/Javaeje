
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarVehiculos = (actual, cantidad, total) => {

    // CASO BASE
    if (actual > cantidad) {
        console.log(`Cantidad de vehículos: ${cantidad}`);
        console.log(`Ingresos totales: $${total.toFixed(2)}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese las horas de estacionamiento del vehículo ${actual}: `, (dato) => {

        const horas = parseFloat(dato);

        if (!Number.isFinite(horas) || horas <= 0) {
            console.log("Ingrese una cantidad de horas válida.");
            registrarVehiculos(actual, cantidad, total);
            return;
        }

        let importe = horas * 1.50;

        if (horas > 5) {
            importe = importe * 0.90;
            console.log("Se aplicó un descuento del 10 %.");
        }

        console.log(`Importe del vehículo ${actual}: $${importe.toFixed(2)}`);

        const nuevoTotal = total + importe;

        console.log(`Ingresos acumulados: $${nuevoTotal.toFixed(2)}`);

        // LLAMADA RECURSIVA
        registrarVehiculos(actual + 1, cantidad, nuevoTotal);

    });

};

rl.question("¿Cuántos vehículos se registrarán?: ", (dato) => {

    const cantidad = Number(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarVehiculos(1, cantidad, 0);
    } else {
        console.log("Ingrese una cantidad válida.");
        rl.close();
    }

});
