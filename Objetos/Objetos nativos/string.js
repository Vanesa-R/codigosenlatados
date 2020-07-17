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

    // substring: Devuelve los carácteres desde la posición que indiquemos por parámetro(hasta la posición final, o la posición final indicada en un segundo parámetro)
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
    stevenson.replace("Mr.", "Mister"); // Devuelve «Mister Utterson the lawyer was a manof a rugged countenance that was never lighted by a smile»
    
    // trim(): Elimina espacios al principio y final de una cadena