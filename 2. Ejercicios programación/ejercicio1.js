// Solicita nombre y edad, y muestra por consola un mensaje que diga «Hola, ________. Tienes ____ años y el próximo años tendrás ______ años».

let nombre = prompt ("Introduce tu nombre");
let edad = parseInt(prompt("Introduce tu edad"));

console.log(`Hola, ${nombre}. Tienes ${edad} y el próximo años cumplirás ${(edad +1)} años`);