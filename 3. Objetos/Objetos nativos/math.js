/* 5. MATH
    Utilizado para operaciones matemásticas más complejas.
    No es un constructor, por lo tanto no se define con new. Es un objeto estático. */

    const pi = Math.PI;
    console.log(`El número PI es ${pi}`); // Devuelve «El número PI es 3.141592653589793»


// Propiedades: E (constante de Euler), PI, LN2, LN12, LOG2E, LOG10E, SQRT1_2, SORT2.

    
// Métodos útiles:
    const num1 = 11.86,
        num2 = 6.11;

    // Max y min
    Math.max(2,5,9,3,0); // Devuelve 9
    Math.min(2,5,9,3,0); // Devuelve 0

    // Round: Redondeo al alza o baja
    Math.round(num1); // Devuelve 12
    Math.round(num2); // Devuelve 6

    // Floor: Redondea a la baja
    Math.floor(num1); // Devuelve 11

    // Ceil: Redondea al alza
    Math.ceil(num2); // Devuelve 7

    // sqrt: Devuelve la raíz del número
    Math.sqrt(36); // Devuelve 6

    // pow: Devuelve la potencia al pasar dos números (base y exponente)
    Math.pow(2, 3); // Devuelve 8
    
    // random: Número aleatorio
    Math.round(Math.random()*100); // Devuelve un número entre 0 y 100. Con round evitamos decimales
    Math.round(Math.random()* (15-5)+5); // Devuelve un número sin decimales entre 5 y 15
    
    // Abs: Devuelve el valor absoluto del número que pasamos