const users = [
    {
        id: 1,
        name: "Vanesa"
    },
    {
        id: 2,
        name: "Jose"
    },
    {
        id: 3,
        name: "John"
    },
    {
        id: 4,
        name: "Ronald"
    }
]
const emails = [
    {
        id: 1,
        email: "vanesa@gmail.es"
    },
    {
        id: 2,
        email: "jose@jose.com"
    },
    {
        id: 3,
        email: "john@outlook.com"
    }
    
]

const getUser = (id) => {
    const user = users.find(user => user.id == id);
    return promise = new Promise((resolve, reject) => {
        if(!user) reject(`No existe un usuario con el id ${id}`)
        else resolve(user)
    });
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id);
    return promise = new Promise((resolve, reject) => {
        if(!email) reject(`${user.name} no ha facilitado un email de contacto`)
        else resolve({
            id:user.id,
            name: user.name,
            email: email.email
        })
    })
}
getUser(1)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err));

    // Devuelve: 1: 1, name: "Vanesa", email: "vanesa@gmail.es"