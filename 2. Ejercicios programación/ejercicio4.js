//// Ejercicio: Solicitar una palabra y mostrar el número de consonantes, vocales y letras que tiene dicho texto
let palabra = prompt("Introduce una palabra");
let letras = palabra.length;
let vocal = 0;
let consonante = 0;

for (letra of palabra){
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        vocal ++;
    } else {
        consonante++;
    } 
}
console.log(`La palabra «${palabra}» tiene ${letras} letras: ${vocal} vocales y ${consonante} consonantes`);
