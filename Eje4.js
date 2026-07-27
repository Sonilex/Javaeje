import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el nombre del producto: ", function(producto){
    rl.question("Ingrese el precio unitario: ", function(precio){
        rl.question("Ingrese la cantidad: ", function(cantidad){

            producto = String(producto);
            precio = Number(precio);
            cantidad = Number(cantidad);

            const total = precio * cantidad;

            console.log(`El total a pagar por ${producto} es: $${total}`);

            rl.close

         });
    });
});