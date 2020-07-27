/* Ejercicio 3: AÑADIENDO ELEMENTOS A UNA LISTA

(En la posición final)*/
let elementoDos = document.createElement("li"), // Crear elemento «li»
    contenidoDos = document.createTextNode ("Condimentum tellus nibh facilisi ultrices sagittis feugiat"),
    contenedor = document.getElementById("list"); // Ubicamos el contenedor padre

elementoDos.appendChild(contenidoDos);
elementoDos.style.color = "violet"; // Añadimos estilos para resaltar en el ejercicio el nuevo elemento creado
contenedor.appendChild(elementoDos); // Agregamos el elemento al contenedor


/*(En otra posición)*/
let elementoTres = document.createElement("li"),
    contenidoTres = document.createTextNode("Proin congue nibh libero mauris quam ridiculus"),
    contenedorDos = document.getElementsByTagName("li")[0].parentNode,
    nuevoElemento = document.getElementsByTagName("li")[2]; // Indicamos la posición donde vamos a agregar el elemento
elementoTres.appendChild(contenidoTres);
elementoTres.style.color = "blue";
contenedorDos.insertBefore(elementoTres, nuevoElemento);