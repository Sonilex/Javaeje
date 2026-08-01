import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio unitario del producto: ", function(precio){

    rl.question("Ingrese la cantidad que desea comprar: ", function(cantidad){

        precio = parseFloat(precio);
        cantidad = parseFloat(cantidad);

        let total = precio * cantidad;

        console.log("\n--- Total de la compra ---");
        console.log("Precio unitario: $" + precio.toFixed(2));
        console.log("Cantidad: " + cantidad);
        console.log("Total a pagar: $" + total.toFixed(2));

        rl.close();

    });

});