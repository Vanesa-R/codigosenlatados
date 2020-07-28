/* PARTE 2: MODIFICACIÓN DE ATRIBUTOS Y CLASES

element.getAttribute 
Nos devuelve el atributo */
const name = document.getElementById("name");
name.getAttribute("type"); // Devuelve «text»

/* element.setAttribute 
Asigna un valor nuevo al atributo*/
name.setAttribute("type", "tel"); // Modifica «text» por «tel»
name.setAttribute("type", "text");

/* element.classList.add
Se utiliza para añadir una clase */
name.classList.add("name");

/* element.classList.remove
Eliminar clase */
name.classList.remove("name");

/* element.classList.togle
En el caso de que el elemento tenga clase se la quitará, y viceversa.

/* element.classList.contains
Devuelve «true» o «false» */
name.classList.contains("title"); // Devuelve «false»

/* element.classList.replace
Reemplaza una clase por otra */
name.classList.replace("nombre", "name") // Reemplazaría la clase «nombre» por «name»