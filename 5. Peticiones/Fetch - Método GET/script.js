/* Mismo ejercicio que el propuesto en el ejercicio 1 con XMLHTTPRequest*/

const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users") // Fecth trabaja con "GET" por defecto, por lo que no hace falta indicarlo
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(error)) // Indicamos qué hacer dependiendo de la respuesta
        .then(res => res.json()) // Convertir  los datos json recibidos a un objeto de JavaScript
        .then(data => {
            const fragment = document.createDocumentFragment();
            if(list.textContent === ""){
                for (const key of data){
                    const listItem = document.createElement("li");
                    listItem.classList.add("list-item");
                    listItem.textContent = `${key.name} - ${key.email}`;
                    fragment.appendChild(listItem);
                }
                list.appendChild(fragment);
            }
        })
        .catch(err => console.log(err);
})

// res = Response (respuesta)