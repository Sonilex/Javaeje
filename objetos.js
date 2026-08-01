const estudiante = {
    nombre: "Juan",
    edad: 21,
    carrera: "Ingeniería en Sistemas"
};

var nombre = estudiante.nombre;
var edad = estudiante.edad;
var carrera = estudiante.carrera;

console.log(nombre);
console.log(edad);
console.log(carrera);

const { nombre: nombreEstudiante, edad: edadEstudiante, carrera: carreraEstudiante } = estudiante;
console.log(nombreEstudiante);
console.log(edadEstudiante);
console.log(carreraEstudiante);