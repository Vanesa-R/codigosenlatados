/* DEFINIENDO UN OBJETO
    Definir y crear un objeto con un literal */

    const author = { 
        name: "Lewis Carroll",
        book: "Alice's Adventures in Wonderland",
        fphrase: "Alice was beginning to get very tired of sitting by her sister on the bank"
        };
        console.log(author.name); // Devuelve «Lewis Carroll»


/* IMPRIMIENDO UN OBJETO
    En el ejemplo anterior accedemos al objeto con el punto. Veamos casos más complejos */
    
    // Ejemplo con un array dentro del objeto
        const author = { 
            name: "Lewis Carroll",
            book: "Alice's Adventures in Wonderland",
            editions: ["anotada", "completa", "ilustrada", "infantil"]
        };
        for (propiedad in author){
            console.log(`La propiedad «${propiedad}» tiene el valor: ${(author[propiedad])}`);
        } 
    /* Si queremos que solo nos devuelva los valores: console.log(author[propiedad]);
       Si queremos que solo nos devuelva las propiedades: console.log(propiedad); */


// DESESTRUCTURANDO UN OBJETO
    
    const author = { 
        name: "Lewis Carroll",
        book: "Alice's Adventures in Wonderland",
        fphrase: "Alice was beginning to get very tired of sitting by her sister on the bank"
    };

    const {name, book, fphrase, awards = "No se ha especificado"} = author; // Trabajando con desestructuración de objetos y parámetros por defecto

    console.log(book); //Devuelve «Alice's Adventures in Wonderland»
    console.log(awards); //Devuelve «No se ha especificado»



// TIPOS DE OBJETOS NATIVOS

    // 1. STRING
        
        let name = new String (); // No se recomienda su uso

        const name = "Vanesa"; // Se recomienda utilizar el dato primitivo de tipo cadena
        const profesion = 'maquetadora frontend';
        const presentation = `Mi nombre es ${name} y soy ${profesion}`; // Devuelve «Mi nombre es Vanesa y soy maquetadora frontend».

        // Propiedades: Constructor, length (Devuelve la longitud de la cadena), prototype

        // Métodos útiles:
            const name = "Vanesa",
                hobby = "literatura",
                huxley = "Wearied of its own turning",
                stevenson = "Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile",
                stoker = "I did not sleep well, though my bed was comfortable enough, for I had all sorts of queer dreams.";
            
            // charAt: Devuelve el caracter de una posición        
            name.chartAt(2); // Devuelve: «n»

            // indexOf: Devuelve la primera posición de un caracter en una cadena. Si no lo encuentra devolverá -1
            // lastIndexOf, por el contrario, devuelve la última
            hobby.indexOf("t"); // Devuelve «2»

            // substring: Devuelve los carácteres desde la posición que indiquemos por parámetro (hasta la posición final, o la posición final indicada en un segundo parámetro)
            hobby.substring(0, 4); // Devuelve «lite»

            // includes: Devuelve true o false si la cadena incluye el parámetro que pasamos
            huxley.includes("own"); // Devuelve «true»

            // starsWith: Devuelve true o false si la cadena comienza por el parámetro que pasemos
            stevenson.startsWith("lawyer"); // Devuelve «false»
            stevenson.startsWith("lawyer", 17); // Devuelve «true»

            //endsWith, al contrario, devuelve true o false si la cadena finaliza por el parámetro que pasemos
            stevenson.endsWith("smile"); // Devuelve «true»

            // slice: Devuelve la cadena comprendida entre las posiciones indicadas
            stoker.slice(6,20); // Devuelve «not sleep well»

            // toUpperCase: Devuelve la cadena en mayúsculas
            // toLowerCase, al contrario, devuelve la cadena en minúsculas
            name.toUpperCase(); // Devuelve «VANESA»

            // replace: Reemplaza la cadena que indiquemos
            stevenson.replace("Mr.", "Mister"); // Devuelve «Mister Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile»

            // trim(): Elimina espacios al principio y final de una cadena


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


    // 3. BOOLEANOS

        let education = new Boolean(); // No se recomienda su uso
        const education = true; // Se recomienda el dato primitivo de tipo boolean
       

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
            
            /*El método find recibe una función de tipo flecha, que ha sido optimizada para mejorar su legibilidad. 
            Para ver más claramente el ejemplo sin nociones de este tipo de funciones:

                console.log(colores.find((color) => { 
                    return color.length > 7; 
                }));
            */
        

        <!--5. DATE-->
        <script>
            let fecha = new Date();
        </script>
        

    /* 6. MATH
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

            // Abs: Devuelve el valor absoluto

    // 7. RegExp
        
        let tex = new RegExp(); // No se recomienda su uso
        const text = /()/; // Utilizar

    
    // 8. FUNCTION

        let suma = new Function (); // No se recomienda su uso
        const suma = function (); // Utilizar