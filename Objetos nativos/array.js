// 4. ARRAYS

    let month = new Array (); // No se recomienda su uso

    const month = ["enero", "febrero", "marzo", "abril"] // Podemos almacenar números, booleanos… es suficiente con crear un array declarando una variable y almacenar los valores entre corchetes.


/* Propiedades y métodos útiles: */

    let colors = ["naranja", "verde", "violeta", "amarillo"];

    // length: Propiedad que devuelve el número de posiciones del array
    console.log(colors.length); // Devuelve «4»

    // Array.isArray: Evalua si la variable es un array
    console.log(Array.isArray(colors)); // Devuelve «true»

    // shift: Eliminar el primer elemento del array
    // pop: Eliminar el último elemento del array
    colors.pop(); // Devuelve y elimina del array «amarillo»

    // unshift: Añade un elemento al principio del array
    // push: Añade un elemento al final del array
    colors.push("rojo"); // Añade «rojo» al final del array «colores»

    // indexOf: Primer índice del elemento que coincida con el valor indicado
    // lastIndexOf, por el contrario, devuelve el último
    colors.indexOf("verde"); // Devuelve «1»

    // reverse: Invierte el orden de los elementos
    colors.reverse(); // Devuelve «(4) ["amarillo", "violeta", "verde", "naranja"]»

    // join: Separador, devuelve el string con el separador que indiquemos (por defecto: comas sin espacio)
    colors.join(); // Devuelve «naranja,verde,violeta,amarillo»
    colors.join(", "); // Devuelve «naranja, verde, violeta, amarillo»

    // splice: Cambia contenido del array. Elimina el contenido que indicamos y añade nuevo contenido
    colors.splice(0, 2, "rojo", "azul"); // Devuelve  «["rojo", "azul", "violeta", "amarillo"]» Se posiciona en el indicador a (0), y modifica hasta el indicador b (2), añadiendo el nuevo contenido.
    colors.splice(2, 0, "naranja"); // Devuelve «["rojo", "azul", "naranja", "violeta", "amarillo"]» pues si el indicador b es cero no elimina nada

    // slice: Extrae elementos de un array desde el indicador a al b.
    colors = ["rojo", "azul", "naranja", "violeta", "amarillo"];
    colors.slice(2,3); // Devuelve «naranja»

    // forEach: Recorrer array
    colors.forEach(function(e){
        console.log(e);
    });

    //Find
    console.log(colors.find (color => color.length > 7)); //Devuelve «amarillo»
    
    /* El método find recibe una función de tipo flecha, que ha sido optimizada para mejorar su legibilidad. 
    Para ver más claramente el ejemplo sin nociones de este tipo de funciones:

        console.log(colores.find((color) => { 
            return color.length > 7; 
        }));
    */