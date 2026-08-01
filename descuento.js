import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingrese el precio de un producto: ", function(producto){
    rl.question("Ingrese el porcentaje de descuento: ", function(porcentaje){
        parseFloat(producto);
        parseFloat(porcentaje);
        let descuento = (producto * porcentaje) / 100;
        let precioFinal = producto - descuento; 
        console.log("\n--- Precio final con descuento ---");
        console.log("Precio del producto: $" + producto);
        console.log("Porcentaje de descuento: " + porcentaje + "%");
        console.log("Descuento aplicado: $" + descuento.toFixed(2));
        console.log("Precio final: $" + precioFinal.toFixed(2));
        rl.close();
    });
});