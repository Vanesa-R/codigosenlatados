// REPETICIONES

    // 1.1 FOR - Bucle determinado
    
        // Sintaxis y ejemplos básicos

        for (let i=1; i<=10; i++){
            console.log(i);
        }

        // 
        let books = ["Dune", "Dracula", "American Gods", "Hyperion"];
        for (let i=0; i < books.length; i++){
            console.log(`La posición ${i} tiene el valor de ${books[i]}`)
        }

        /* Es importante no olvidar ninguna de las tres sentencias, dentro del bucle for o fuera cada una de ellas tiene que aparecer:
            1.  Sentencia inicializando la variable con un valor fuera del bucle:
                let i = 0;
                let books = ["Dune", "Dracula", "American Gods", "Hyperion"];
                for ( ;<books.length; i++){
                    alert(books[i]);
                }
            2. Hasta cuándo tiene que recorrer el bucle:
                let books = ["Dune", "Dracula", "American Gods", "Hyperion"];
                for (let i=0; ; i++){
                    if (i == books.length){
                        break;
                    }
                alert(books[i]);
                }
                
            3. Sentencia para incrementar la variable fuera del bucle:
                let books = ["Dune", "Dracula", "American Gods", "Hyperion"];
                for (let i=0; i <books.length; ){
                    alert(books[i]);
                    i++;
                } */
                
         
        /* 1.1.1 FOR OF
            Sentencia para recorrer un array */

                let books = ["Dune", "Dracula", "American Gods", "Hyperion"];
                for(book of books){
                    console.log(book) // Muestra los valores del array
                    /* console.log(`La posición ${books.indexOf(book)} tiene el valor de ${book}`); 
                    Podemos obtener el índice con indexOF aunque en este caso es más adecuado utilizar el For in */            
                }
            
            
        /* 1.1.2 FOR IN
            Sentencia más indicada para recorrer un objeto */

                let author = {name: "J. R. R. Tolkien", born: 1892, book: "The Hobbit"};
                let propiedad;
                for (propiedad in author) {
                    console.log(author[propiedad]);
                }

            
    /* 1.2 WHILE - Bucle indeterminado
        Se ejecutará hasta que la condición deje de ser cierta. Es necesario incluir una condición para salir del bucle o este será infinito */

            // Sintaxis y ejemplo básico
        
                let i = 1;
                while (i <= 10){
                    console.log(i);
                    i++;
                }
           
            
            // Ejemplo: Mientras la contraseña introducida sea distinta a la contraseña guardada, nmostrará un mensaje de «Contraseña incorrecta» y requerirá introducir de nuevo la contraseña. Saldrá del bucle una vez la contraseña introducida sea la correcta

                const clave = "abracadabra";
                let claveUser = prompt ("Escribe tu contraseña");
                    while
                        (claveUser != clave){
                            alert("Contraseña incorrecta");
                            claveUser = prompt ("Escribe tu contraseña");
                        }
                    (claveUser == clave);
                    alert("Bienvenido");
    

        /* 1.2.1 DO WHILE
            La diferencia entre While y Do While es que en este
             caso la condición se va a ejecutar una vez mínimo, mientras que en While si la condición no se cumple el código no se ejecuta */

                let i = 1;
                do {
                    console.log(i);
                    i++;
                } while (i <= 10);
    
/* 
    Palabras reservadas para los bucles
    break: Rompe el bucle.
    continue: Salta las indicaciones que demos en el código a ejecutar. */