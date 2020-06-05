// Solicita un número y muestra por consola su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

let number = parseInt(prompt("Introduce un número"));
let resultado = 1;

for (let i=number; i>0; i--) {
  resultado *= i;
}

  console.log(`El factorial de ${number} es ${resultado}`);