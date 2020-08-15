/* Fetch con método POST*/

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const book = {
        title: "The Lord of the Rings",
        author: "John Ronald Reuel Tolkien",
        genre: "High fantasy",
        publicationDate: 1954
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

// res: response (respuesta)