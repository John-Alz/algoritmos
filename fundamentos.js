// Tipos de datos primitivos

let nombre = "John"; // declaramos e inicializamos la varibale;
let edad = 21; 

let mayorEdad = true;

let vacio = null;

let idefinido;

console.log( "La varibale (nombre) es tipo: " + typeof nombre);
console.log( "La varibale (edad) es tipo: " + typeof edad);
console.log( "La varibale (mayorEdad) es tipo: " + typeof mayorEdad);
console.log( "La varibale (vacio) es tipo: " + typeof vacio);
console.log( "La varibale (idefinido) es tipo: " + typeof idefinido);

// Tipos de datos complejos

console.log("=================== datos complejos ========================");
console.log("=================== Arrys ========================");


let frutas = ["manzana", "Pera", "Uvas", "Fresas"];

console.log( "La varibale (frutas) es tipo: " + typeof frutas);


console.log("=============================For==================================");

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("=============================Foreach==================================");


frutas.forEach(element => {
    console.log(element);
});


console.log("=============================Objetos==================================");

let auto = {
    modelo: 2025,
    color: "Rojo",
    marca: "Ferrari"
};

console.log( "La varibale (auto) es tipo: " + typeof auto);


console.log("=============================ForIn==================================");

for (const key in auto) {
    console.log(`${key}: ${auto[key]}`);
}


console.log("=============================Concatenando variables en mensaje ==================================");

console.log("Hola " + nombre + " Tienes " + edad + " años."); // forma 1
console.log(`Hola ${nombre} tienes ${edad} años.`); // forma 2


console.log("============================= Estructuras condicionales ==================================");

console.log("============================= If ==================================");

let calificacion = 45;

if(calificacion >= 90) {
    console.log(`Muy buen trabajo ${nombre} tu nota fue ${calificacion}`);
} else if (calificacion >= 70) {
    console.log(`Aprobaste ${nombre} tu nota fue ${calificacion}`)
} else if(calificacion >= 50 ) {
    console.log(`Reprobaste ${nombre} tu nota fue ${calificacion}`)
}  else {
    console.log(`Tremendo perdedor ${nombre} tu nota fue ${calificacion}`)
}


console.log("============================= switch ==================================");


let dia = "Sabado";

switch(dia) {
    case "Lunes":
        console.log("EL dia es Lunes")
        break;
    case "Martes":
        console.log("EL dia es Martes")
        break;
    case "Miercoles":
        console.log("EL dia es Miercoles")
        break;
    case "Jueves":
        console.log("EL dia es Jueves")
        break;
    case "Vienes":
        console.log("EL dia es Viernes")
        break;
    case "Sabado":
        console.log("EL dia es Sabado")
        break;
    case "Domingo":
        console.log("EL dia es Domingo")
        break;
    default:
        console.log("Error: el dia no existe.");
        break;
}


console.log("============================= Loops ==================================");
console.log("============================= While ==================================");

let count = 1;

while(count <= 10) {
    console.log(count);
    count ++;
}

console.log("============================= For ==================================");

for(let i = 0; i <= 100; i+=10) {
    if(i % 2 == 0) {
        console.log(`${i} -> Es par`);
    } else {
        console.log(`${i} -> Es impar`);
    }
}


console.log("============================= For (inverso) ==================================");

for(let i = 100; i >= 0; i-=10) {
    if(i % 2 == 0) {
        console.log(`${i} -> Es par`);
    } else {
        console.log(`${i} -> Es impar`);
    }
}


console.log("============================= Funciones ==================================");

function suma(a, b) {
    return a + b;
}

let resultado = suma(10, 50);
console.log(resultado);
