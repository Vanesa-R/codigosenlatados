// Solicita un número y muestra por consola un mensaje con todos los números pares e impares desde el número 1 hasta el número introducido.En cada número deberá aparecer un mensaje de si es par o impar.

let number = parseInt(prompt("Introduce un número"));

for (let i=1; i<=number; i++){
  if (i % 2 == 0){
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}