
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarCalificaciones = (actual, cantidad, total) => {

    // CASO BASE
    if (actual > cantidad) {
        const promedio = total / cantidad;

        console.log(`Cantidad de evaluaciones: ${cantidad}`);
        console.log(`Promedio: ${promedio.toFixed(2)}`);

        if (promedio >= 6.0) {
            console.log("El estudiante aprobó.");
        } else {
            console.log("El estudiante reprobó.");
        }

        rl.close();
        return;
    }

    rl.question(`Ingrese la calificación ${actual} (0-10): `, (dato) => {

        const calificacion = parseFloat(dato);

        if (!Number.isFinite(calificacion) ||
            calificacion < 0 ||
            calificacion > 10) {

            console.log("Ingrese una calificación válida entre 0 y 10.");
            registrarCalificaciones(actual, cantidad, total);
            return;
        }

        const nuevoTotal = total + calificacion;

        console.log(`Total acumulado: ${nuevoTotal.toFixed(2)}`);

        // LLAMADA RECURSIVA
        registrarCalificaciones(actual + 1, cantidad, nuevoTotal);

    });

};

rl.question("¿Cuántas evaluaciones desea registrar?: ", (dato) => {

    const cantidad = Number(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarCalificaciones(1, cantidad, 0);
    } else {
        console.log("Ingrese una cantidad válida.");
        rl.close();
    }

});
