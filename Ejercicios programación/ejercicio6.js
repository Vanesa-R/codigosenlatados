// Solicitar tres números e imprimirlos de menor a mayor 
// (Permutación con tres elementos)

let num1 = parseInt(prompt("Introduce el primer número")),
    num2 = parseInt(prompt("Introduce el segundo número")),
    num3 = parseInt(prompt("Introduce el tercer número"));

if (num1 <= num2 && num1 <= num3){
   if (num2 <= num3){
        console.log(`El orden de los números, de menor a mayor es: ${num1}, ${num2} y ${num3}`);
   } else {
        console.log(`El orden de los números, de menor a mayor es: ${num1}, ${num3} y ${num2}`);
   }
} else if (num2 <= num1 && num2 <= num3){
    if (num1 <= num3){
        console.log(`El orden de los números, de menor a mayor es: ${num2}, ${num1} y ${num3}`);
    } else {
        console.log(`El orden de los números, de menor a mayor es: ${num2}, ${num3} y ${num1}`);
    }
} else if (num3 <= num1 && num3 <= num2){
    if (num1 <= num2){
        console.log(`El orden de los números, de menor a mayor es: ${num3}, ${num1} y ${num2}`);
    } else {
        console.log(`El orden de los números, de menor a mayor es: ${num3}, ${num2} y ${num1}`);
    }
}