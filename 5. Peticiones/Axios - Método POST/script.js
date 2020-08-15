const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    axios({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            title: "The Lord of the Rings",
            author: "John Ronald Reuel Tolkien",
            genre: "High fantasy",
            publicationDate: 1954
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})