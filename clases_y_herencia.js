/*  CLASES
    Permiten organizar nuestro código, separando las variables y funciones que estén relacionadas */
        
        class User { // Clase
            constructor (name, address, years){ // Método con parámetros
                this.name = name, // Propiedades
                this.address = address,
                this.years = years
            }
        
            showInfo (){ // Método asociado al objeto
                return `
                    Nombre: ${this.name}
                    Dirección: ${this.address}
                    Edad: ${this.years}
                `;
            }
        }
        const vanesa = new User("Vanesa", "Mengano, 79", 34); // Instanciar objeto
        console.log(vanesa.showInfo());
            
            /* Si queremos acceder a una propiedad los haremos con console.log(vanesa.name), que devolverá "Vanesa"

            
/* HERENCIA
    Permite heredar las propiedades de otras clases.

    Por ejemplo, podemos tener la clase «Usuario» de una página, que al mismo tiempo sea alumno de un curso. Compartirá las anteriores propiedades de «Usuario», y además podrá tener propiedades propias de la clase «Alumno» */
        
        class User {
            constructor (name, address, years){
                this.name = name,
                this.address = address,
                this.years = years
            }
        }
        class Student extends User {
            constructor(name, address, years, course){
                super(name, address, years) // Propiedades de Usuario que hereda
                this.course = course // Propiedad de Alumno
            }
            showInfo (){
                return `
                    Nombre: ${this.name}
                    Dirección: ${this.address}
                    Edad: ${this.years}
                    Curso: ${this.course}
                `;
            }
        }
        const vanesa = new Student("Vanesa", "Mengano, 79", 34, "React"); // Instancia
        console.log(vanesa.showInfo());