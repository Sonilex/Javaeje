import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de entradas vendidas diariamente:", function(respuesta){
    const ventasEntradas= Number(respuesta);

    let ventaTotal = 0;
    
    for(let venta = 1; venta <= 5; venta++){
        ventaTotal = ventaTotal + ventasEntradas;
    }

    console.log(`El total de entradas vendidas durante los 6 dias fue de: ${ventaTotal}`)
    rl.close();

});