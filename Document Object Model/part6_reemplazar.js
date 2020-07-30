/* PARTE 6: REEMPLAZANDO NODOS

replaceChild(nuevo_elemento, elemento_reemplazado) */

const list2 = document.getElementById("list");
const newItem = document.createElement("li");
newItem.classList.add("list-item");
newItem.textContent = "Cillum tempor nisi esse velit do anim";
list2.replaceChild(newItem, list.children[2]); // Reemplaza «Quisque phasellus inceptos ante sapien blandit tempor diam» por el newItem
