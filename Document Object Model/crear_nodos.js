// PARTE 4: CREANDO NODOS

/* Añadir un párrafo */
const paragraph = document.getElementById("paragraph");
const newParagraph = document.createElement("p"); //Crear elemento "p"
newParagraph.textContent = "Proin congue nibh libero mauris quam ridiculus, facilisis ultricies eu habitant et ligula semper, nisl justo montes inceptos orci. Scelerisque duis felis quam vel eget congue nostra litora cubilia, eros facilisi ultrices vulputate hendrerit arcu vehicula natoque nulla, rhoncus neque ultricies mauris viverra ante gravida potenti."; // Crear su contenido
paragraph.appendChild(newParagraph);



/* Añadir elementos en una lista
(En la posición final) */
const list = document.getElementById("list");
const newListItem = document.createElement("li"); // Crear elemento «li»
newListItem.textContent = "Condimentum tellus nibh facilisi ultrices sagittis feugiat"; // Crear su contenido
list.appendChild(newListItem); // Posicionar el elemento en el contenedor padre. Con appendChild siempre se va a colocar en último lugar

/*(En otra posición)*/
const newListItem2 = document.createElement("li");
newListItem2.textContent = "Proin congue nibh libero mauris quam ridiculus";
list.insertBefore(newListItem2, list.children[2]);



/* Añadir elementos a un select */
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
