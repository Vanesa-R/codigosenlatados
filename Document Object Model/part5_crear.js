// PARTE 5: CREANDO NODOS

/* Ejercicio 1: Añadir un párrafo */
const paragraph = document.getElementById("paragraph");
const newParagraph = document.createElement("p"); //Crear elemento "p"
newParagraph.textContent = "Proin congue nibh libero mauris quam ridiculus, facilisis ultricies eu habitant et ligula semper, nisl justo montes inceptos orci. Scelerisque duis felis quam vel eget congue nostra litora cubilia, eros facilisi ultrices vulputate hendrerit arcu vehicula natoque nulla, rhoncus neque ultricies mauris viverra ante gravida potenti."; // Crear su contenido
paragraph.appendChild(newParagraph);



/* Ejercicio 2: Añadir elementos a una lista
(En la posición final) */
const list = document.getElementById("list");
const newListItem = document.createElement("li"); // Crear elemento «li»
newListItem.classList.add("list-item") // Como los elementos «li» tienen clase, damos al nuevo elemento la misma clase.
newListItem.textContent = "Condimentum tellus nibh facilisi ultrices sagittis feugiat"; // Crear su contenido
list.appendChild(newListItem); // Posicionar el elemento en el contenedor padre. Con appendChild siempre se va a colocar en último lugar

/*(En otra posición)*/
const newListItem2 = document.createElement("li");
newListItem2.classList.add("list-item");
newListItem2.textContent = "Proin congue nibh libero mauris quam ridiculus";
list.insertBefore(newListItem2, list.children[2]);

/* Podemos utilizar, además del insertBefore, el método insertAdjacentElement("posición", elemento) 
Posiciones: beforebegin (antes de empezar, elemento hermano)
            afterbegin (después de empezar, elemento hijo, arriba)
            beforeend (antes de terminar, elemento hijo, abajo)
            afterend (después de terminar, elemento hermano)
Funcionan del mismo modo:
            before
            prepend
            append
            after */ 
list.insertAdjacentElement("afterbegin", newListItem2); // Coloca el elemento como primer hijo de «list»
list.append(newListItem2) // Coloca el elemento como último hijo de «list»



/* Ejercicio 3: Añadir elementos a un select */
const provinces = ['A Coruña', 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','Cuenca','Girona','Granada','Guadalajara',
'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén', 'La Rioja', 'Las Palmas', 'León','LLeida','Lugo','Madrid','Málaga','Murcia','Navarra',
'Ourense','Palencia', 'Pontevedra','Salamanca', 'Santa Cruz de Tenerife', 'Segovia','Sevilla','Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'];
const select = document.getElementById("provinceSelect");
const fragment = document.createDocumentFragment();

provinces.forEach(el => {
    const item = document.createElement("option");
    item.setAttribute("value", el.toLowerCase());
    item.textContent = el;
    fragment.appendChild(item);
})
select.appendChild(fragment);