/* PARTE 3: EVENTOS

Listado de eventos principales:
- click: el evento se dispara al hacer click
- dbclick: el evento se dispara al hacer doble click
- mouseenter: el evento se dispara cuando nos situamos en el elemento que tiene el evento
- mouseleave: el evento se dispara cuando salimos del elemento que tiene el evento
- mousemove: el evento se dispara cuando movemos el ratón
- keydow: el evento se dispara al pulsar una tecla
- keyup: el evento se dispara al soltar una tecla */

const btn = document.getElementById("btn-saludo");
btn.addEventListener("click", () => alert(`¡Hola!`));

const inputName = document.getElementById("name");
inputName.addEventListener("mouseenter", () => {
    inputName.classList.add("blue");
})
inputName.addEventListener("mouseleave", () => {
    inputName.classList.remove("blue");
})

// Escuchando eventos
inputName.addEventListener("keyup", (e) => {
    console.log(e);
})