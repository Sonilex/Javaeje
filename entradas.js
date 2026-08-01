//1-Importar Modulo
import readline from "node:readline";

//2-Creamos la interfaz
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//Hacemos la pregunta al usuario
rl.question("¿Cuál es su nombre? ",function(nombre){
    rl.question("¿Cuál es su edad? ",function(edad){
        console.log(`Hola soy ${nombre} y tengo ${edad} años`);
        rl.close();
    });
});

//Ejercicios practicos
rl.question("Cual es la ciudad donde vives? ",function(ciudad){
  rl.question("Cual es tu color favorito? ",function(color){
    console.log(`Vivo en ${ciudad} y mi color favorito es ${color}`);
    rl.close();
  });
});

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese un primer numero: ", function(num1){
   rl.question("ingrese un segundo numero: ", function(num2){

    num1 = Number(num1);
    num2 = Number(num2);

    let suma = num1 + num2

    console.log(`La suma de los dos numeros es: ${suma}`);
    rl.close();

  });
});