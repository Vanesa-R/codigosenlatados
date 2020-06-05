// Solicitar un color y evaluar si está introducido en un array de colores

const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

let color = prompt("Introduce un color").toLowerCasse();

if(colors.indexOf(color) !== -1){
  console.log("El color introducido es válido");
} else {
  console.log("El color introducido no es válido");
}