/* PARTE 1: ACCEDIENDO A LOS NODOS/ELEMENTOS

document.getElementById 
Nos permite acceder al elemento a través de su id */
const title = document.getElementById("title"); // Accede al h1 con id «title»

/* document.getElementsByClassName
Nos permite acceder a todos los elementos con la clase que pasemos por parámetro */
const item = document.getElementsByClassName("list-item"); // Accede a todos los elementos li con clase «list-item»

/* document.querySelector
Nos permite acceder a un elemento a través de su selector CSS (accede al primero que coincida) */
const title2 = document.querySelector("#title"); // Accede al h1 con id «title». Al ser un selector CSS necesitamos poner «#»

/* document.querySelectorAll */
const item2 = document.querySelectorAll(".list-item"); // Accede a todos los elementos li con clase «list-item». Al ser un selector CSS necesitamos poner «.»
const listItem = Array.from(document.querySelectorAll(".list-item")) // Si queremos tratar los elementos como un array debemos poner «Array.from»