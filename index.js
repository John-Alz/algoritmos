
// function saludo(nombre) {
//     return `Hola, ${nombre}`
// };

// let resultado = saludo("John");
// console.log(resultado);

let edad = 29;
let genero = "Masculino";

const servicioMilitar = (edad, genero) => {
    if(edad >= 18 && edad <= 27 && genero === "Masculino") {
        return `Debes ir al servicio militar: tu edad es: ${edad} y tu genero es: ${genero}` ;
    } else if (genero === "Femenino") {
        return `NO debes ir al servicio militar: tu genero es: ${genero}` ;
    } else {
        return `NO debes ir al servicio militar: tu edad es: ${edad}` ;
    }
}

let resultado = servicioMilitar(edad, genero);
console.log(resultado);


//