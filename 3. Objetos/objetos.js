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
        for (let key in author){
            console.log(`La propiedad «${key}» tiene el valor: ${(author[key])}`);
        } 
    /* Si queremos que solo nos devuelva los valores: console.log(author[key]);
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

    /* Podemos cambiar el nombre de las claves:
    const {name: nombre, book, fpprase} = author
    consol.log(nombre) // Devuelve “Lewis Carroll» 
    */