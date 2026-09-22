import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el gasto diario que se utilizó durante los 6 días: ", function(respuesta){
    
    const gastoPasaje = Number(respuesta);

    let gastoTotal = 0;

    for(let dia = 1; dia <= 6; dia++) {
        
        gastoTotal = gastoTotal + gastoPasaje;

        console.log(`Día ${dia}: gasto acumulado = $${gastoTotal.toFixed(2)}`);
    }

    console.log(`El gasto total de los 6 días es: $${gastoTotal.toFixed(2)}`);

    rl.close();
});