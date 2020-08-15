const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
    axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .then(res => {
        const fragment = document.createDocumentFragment();
        if(list.textContent === ""){
            for  (const key of res.data){
                const listItem = document.createElement("li");
                listItem.classList.add("list-item");
                listItem.textContent = `${key.name} - ${key.email}`;
                fragment.appendChild(listItem);
            }
            list.appendChild(fragment);
        }
    })
    .catch(err => console.log(err))
})