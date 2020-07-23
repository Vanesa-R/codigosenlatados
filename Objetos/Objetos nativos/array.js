// 4. ARRAYS

    let month = new Array (); // No se recomienda su uso

    let month = ["enero", "febrero", "marzo", "abril"] // Podemos almacenar números, booleanos… es suficiente con crear un array declarando una variable y almacenar los valores entre corchetes.


/* Propiedades y métodos útiles: */

    let colors = ["naranja", "verde", "violeta", "amarillo"];

    // Array.isArray: Evalua si la variable es un array
    console.log(Array.isArray(colors)); // Devuelve «true»

    // length: Propiedad que devuelve el número de posiciones del array
    console.log(colors.length); // Devuelve «4»

    // concat: Concatenar arrays
    let colors2 = ["azul", "morado"];
    console.log(colors.concat(colors2)); // Devuelve «"naranja", "verde", "violeta", "amarillo", "azul", "morado»
    // También podemos concatenar arrays con spread operator:
    console.log([...colors, ...colors2]); // Devuelve «"naranja", "verde", "violeta", "amarillo", "azul", "morado»

    // shift: Eliminar el primer elemento del array
    // pop: Eliminar el último elemento del array
    console.log(colors.pop()); // Devuelve y elimina del array «amarillo»

    // unshift: Añade un elemento al principio del array
    // push: Añade un elemento al final del array
    console.log(colors.push("rojo")); // Añade «rojo» al final del array «colores»

    // indexOf: Primer índice del elemento que coincida con el valor indicado
    // lastIndexOf, por el contrario, devuelve el último
    console.log(colors.indexOf("verde")); // Devuelve «1»

    // reverse: Invierte el orden de los elementos
    console.log(colors.reverse()); // Devuelve «(4) ["amarillo", "violeta", "verde", "naranja"]»

    // join: Separador, devuelve el string con el separador que indiquemos (por defecto: comas sin espacio)
    console.log(colors.join()); // Devuelve «naranja,verde,violeta,amarillo»
    console.log(colors.join(", ")); // Devuelve «naranja, verde, violeta, amarillo»

    // splice: Cambia contenido del array. Elimina el contenido que indicamos y añade nuevo contenido
    console.log(colors.splice(0, 2, "rojo", "azul")); // Devuelve  «["rojo", "azul", "violeta", "amarillo"]» Se posiciona en el indicador a (0), y modifica hasta el indicador b (2), añadiendo el nuevo contenido.
    console.log(colors.splice(2, 0, "naranja")); // Devuelve «["rojo", "azul", "naranja", "violeta", "amarillo"]» pues si el indicador b es cero no elimina nada

    // slice: Extrae elementos de un array desde el indicador a al b.
    colors = ["rojo", "azul", "naranja", "violeta", "amarillo"];
    console.log(colors.slice(2,3)); // Devuelve «naranja»

    // sort: Ordena los elementos de un array alfabéticamente. Puede ordenarlos según el algoritmo que le pasemos en el callback.
    colors = ["rojo", "azul", "naranja", "violeta", "amarillo"];
    console.log(colors.sort()); // Devuelve «["amarillo", "azul", "naranja", "rojo", "violeta"]»

    // forEach: Recorrer array
    colors.forEach(e => console.log(e));
    /* El método forEach recibe una función de tipo flecha. Para ver claramente el ejemplo sin nociones 
    de este tipo de funciones:

        colors.forEach(function(e){
            console.log(e);
        }); */
   
    // find
    console.log(colors.find (color => color.length > 4)); //Devuelve naranja
    /* console.log(colors.find(function(color){
        return color.length > 7;
    })); */

    // some: Comprueba si al menos un elemento del array cumple la condición.
    console.log(colors.some(color => color.length > 6 )); // Devuelve «true» pues el elemento «naranja» cumple la condición
    /* console.log(colors.some(function(color){
        return color.length > 6;
    })); */

    // every: Comprueba si todos los elementos del array cumplen la condición.
    console.log(colors.every(color => color.length > 6)); // Devuelve «false» pues solo un elemento cumple la condición
    /* console.log(colors.every(function(color){
        return color.length > 6;
    })); */

    // filter: Filtra los elementos del array que cumplan la condición y devuelve otro array
    console.log(colors.filter(color => color.length > 4)); // Devuelve «"Naranja", "violeta", "amerillo», pues "rojo y "azul" quedan fuera del filtrado
    /* console.log(colors.filter(function(color){
        return color.length > 4;
    })); */