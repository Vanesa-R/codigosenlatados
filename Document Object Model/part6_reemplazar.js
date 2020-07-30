/* PARTE 6: REEMPLAZANDO NODOS

replaceChild(nuevo_elemento, elemento_reemplazado) */

const list2 = document.getElementById("list");
const newItem = document.createElement("li");
newItem.classList.add("list-item");
newItem.textContent = "Cillum tempor nisi esse velit do anim";
list2.replaceChild(newItem, list.children[2]); // Reemplaza «Quisque phasellus inceptos ante sapien blandit tempor diam» por el contenido de newItem

/* replaceWith(nuevo_elemento) */
list.children[0].replaceWitch(newItem); // Reemplaza «Lorem ipsum dolor sit amet consectetur adipiscing elit» por el contenido de newItem



/* ELIMINANDO NODOS
remove() Elimina todo el elemento 
removeChild(elemento_hijo) Elimina el nodo hijo */
list.removeChild(list.children[0]); // Elimina el primer hijo del elemento «list»