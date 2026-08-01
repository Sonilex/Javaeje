import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingrese el nombre del empleado: ", function(nombre){
    rl.question("Ingrese la cantidad horas trabajadas: ", function(horas){
        rl.question("Ingrese el pago recibido por cada hora: ", function(pago){
            let horasTrabajadas = parseFloat(horas);
            let pagoHora = parseFloat(pago);
            let salario = horasTrabajadas * pagoHora;
            console.log("\n--- Salario semanal ---");
            console.log(`Nombre del empleado: ${nombre}`);
            console.log("Salario semanal: $" + salario.toFixed(2));
            rl.close();
        });
    });
});