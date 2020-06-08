// 2. NÚMEROS

    let year = new Number(); // No se recomienda su uso
    let year = 34; // Se recomienda utilizar el dato primitivo de tipo número
        

/* Propiedades: Constructor, prototype, max value, min value, negative infinity, positive infinity y NaN.


Métodos útiles: */
    const num = 41.24;
    
    // toFixed: Devuelve el número con los decimales indicados
    num.toFixed(0); // Devuelve: 41
    num.toFixed(3); // Devuelve: 41.240

    // toPrecision: Devuelve el número específico de cifras indicadas
    num.toPrecision(2); // Devuelve 41

    // toString: Devuelve la cadena de un número
    num.toString(); // Devuelve "41.24"