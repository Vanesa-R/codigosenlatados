const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
    let xhr
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    
    xhr.addEventListener("load", (data) => {
        const dataJSON = JSON.parse(data.target.response);
        if (list.textContent === ""){
            for (const key of dataJSON){
                const listItem = document.createElement("li");
                listItem.textContent = `${key.name} - ${key.email}`;
                list.appendChild(listItem);
            }
        }
    })

    xhr.send();
})