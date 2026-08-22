import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.question("Ingrese su nombre: ", (nombre)=>{
    rl.question("Ingrese su apellido: ", (apellido)=>{
        rl.question("Ingrese su año de ingreso: ", (añoingreso)=>{
            rl.question("Ingrese su cuota mensual: ", (cuotamensual)=>{
                let nombreMayuscula=nombre.toLocaleUpperCase();
                let apellidoMayuscula=apellido.toLocaleUpperCase();
                let apellidonum=apellido.slice(0,3);
                let añoingresotexto=añoingreso.toString();
                let añoingresonum=añoingresotexto.slice(0,2);
                let cuotamensualcifra= parseFloat(cuotamensual).toFixed(2);
                console.log(`Nombre: ${nombreMayuscula} \n Apellido: ${apellidoMayuscula} \n Apellido (3 caracteres): ${apellidonum} \n Año de ingreso: ${añoingreso} \n Año de ingreso (2 dígitos): ${añoingresonum} \n Cuota mensual: ${cuotamensualcifra} `);
                rl.close(); 
            });
        });
    });
});