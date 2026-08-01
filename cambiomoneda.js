import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de dólares: ", function(dolares){

    rl.question("Ingrese el tipo de cambio del euro: ", function(tipoCambio){

        dolares = parseFloat(dolares);
        tipoCambio = parseFloat(tipoCambio);

        let euros = dolares * tipoCambio;

        console.log("\n--- Conversión de moneda ---");
        console.log("Dólares: $" + dolares.toFixed(2));
        console.log("Tipo de cambio: " + tipoCambio);
        console.log("Euros recibidos: €" + euros.toFixed(2));

        rl.close();

    });

});