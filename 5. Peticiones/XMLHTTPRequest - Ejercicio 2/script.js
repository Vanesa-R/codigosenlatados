const form = document.getElementById("form");
const characters = document.getElementById("characters");
const table = document.getElementById("tbody");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData(characters.children[characters.selectedIndex].value);
})

const getData = (id) => {
    let xhr
    
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (id == undefined){
        xhr.open("GET", "marvel.php");

        xhr.addEventListener("load", (data) => {
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON)

        const fragment = document.createDocumentFragment();

        for (const characters of dataJSON){
            const character = document.createElement("option");
            character.setAttribute("value", characters.ID);
            character.textContent = characters.Name;
            fragment.appendChild(character);
        }
        characters.appendChild(fragment);
        })

    } else {
        xhr.open("GET", `marvel.php?id=${id}`);

        xhr.addEventListener("load", (data) => {
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON)

        const fragment = document.createDocumentFragment();

        for (const character of dataJSON){
            const row = document.createElement("tr");
            const name = document.createElement("td");
            const alignment = document.createElement("td");
            const gender = document.createElement("td");
            const hometown = document.createElement("td");
            const skills = document.createElement("td");

            name.textContent = character.Name;
            alignment.textContent = character.Alignment;
            gender.textContent = character.Gender;
            hometown.textContent = character.Hometown;
            skills.textContent = character.Fighting_Skills;
            
            row.appendChild(name);
            row.appendChild(alignment);
            row.appendChild(gender);
            row.appendChild(hometown);
            row.appendChild(skills);

            fragment.appendChild(row);
        }
        table.appendChild(fragment);
        })  
    }
    xhr.send();
}

getData();