// PARTE 5: TRAVERSING

/* parentNode
Devuelve el padre de un elemento */
let parent = document.getElementById("list");
console.log(parent.parentNode); // Devuelve «secction class="main-list"»
console.log(parent.parentNode.parentNode) // Devuelve «main class="main"»

/* children
Devuelve los nodos hijos */
console.log(parent.children) // Devuelve los elementos «li-item»

/* firstElementChild
Devuelve el primer elemento hijo */
console.log(parent.firstElementChild) // Devuelve el primer elemento «li-item»

/* lastElementChild
Devuelve el último elemento hijo */
console.log.(parent.lastElementChild) // Devuelve el último elemento «li-item»

/* hasChildrenNodes
Método que nos devuelve «true» o «false» dependiendo de si el nodo tiene nodos hijo */
console.log(parent.hasChildresNodes()) // Devuelve «true»

/* childNodes
Devuelve todos los nodos hijos. Cuidado, devuelve también espacios en blanco y saltos de línea. Sucede lo mismo
con firstChild y LastChild*/

/* nextSibling
console.log(parent.nextSibling); // Devuelve un salto de línea («text»)
Devuelve el siguiente nodo hermano, como en el anterior, devuelve también espacios en blanco y saltos de línea*/

/* nextElementSibling
Devuelve el siguiente nodo hermano */
console.log(parent.nextElementSibling); // En este caso devuelve «null╗ porque el elemento no tiene elemento hermano
console.log(parent.parentNode.nextElementSibling) // Si subimos un nivel y nos posicionamos en el section main-list, devuelve «section class="main-inputs"» que es hermano del anterior section

/* previousElementSibling
Devuelve el anterior nodo hermano */
console.log(parent.parentNode.previousElementSibling) // Devuelve «section class="main-paragraphs"»
