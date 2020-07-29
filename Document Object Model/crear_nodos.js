// PARTE 4: CREANDO NODOS

/* Añadir un párrafo */
const elemento = document.createElement("p"), //Crear elemento
    contenido = document.createTextNode("Proin congue nibh libero mauris quam ridiculus, facilisis ultricies eu habitant et ligula semper, nisl justo montes inceptos orci. Scelerisque duis felis quam vel eget congue nostra litora cubilia, eros facilisi ultrices vulputate hendrerit arcu vehicula natoque nulla, rhoncus neque ultricies mauris viverra ante gravida potenti."); // Crear su contenido

elemento.appendChild(contenido); // Agregar el contenido al elemento
document.getElementById("paragraph").appendChild(elemento);


/* Añadir elementos en una lista
(En la posición final)*/
const elementoDos = document.createElement("li"), // Crear elemento «li»
    contenidoDos = document.createTextNode ("Condimentum tellus nibh facilisi ultrices sagittis feugiat"),
    contenedor = document.getElementById("list"); // Ubicamos el contenedor padre

elementoDos.appendChild(contenidoDos);
elementoDos.style.color = "violet"; // Añadimos estilos para resaltar en el ejercicio el nuevo elemento creado
contenedor.appendChild(elementoDos); // Agregamos el elemento al contenedor
/*(En otra posición)*/
const elementoTres = document.createElement("li"),
    contenidoTres = document.createTextNode("Proin congue nibh libero mauris quam ridiculus"),
    contenedorDos = document.getElementsByTagName("li")[0].parentNode,
    nuevoElemento = document.getElementsByTagName("li")[2]; // Indicamos la posición donde vamos a agregar el elemento
elementoTres.appendChild(contenidoTres);
elementoTres.style.color = "blue";
contenedorDos.insertBefore(elementoTres, nuevoElemento);



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
