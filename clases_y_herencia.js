/*  CLASES
    Permiten organizar nuestro código, separando las variables y funciones que estén relacionadas */
        
        class Usuario { // Clase
            constructor (name, address, years){ // Método con parámetros
                this.name = name, // Propiedades
                this.address = address,
                this.years = years
            }
        
            mostrarInfo (){
                return `
                    Nombre: ${this.name}
                    Dirección: ${this.address}
                    Edad: ${this.years}
                `;
            }
        }
        const vanesa = new Usuario("Vanesa", "Mengano, 79", 34); // Instanciar objeto
        console.log(vanesa.mostrarInfo());
            
            /* Si queremos acceder a una propiedad los haremos con console.log(vanesa.name), que devolverá "Vanesa"

            
/* HERENCIA
    Permite heredar las propiedades de otras clases.

    Por ejemplo, podemos tener la clase «Usuario» de una página, que al mismo tiempo sea alumno de un curso. Compartirá las anteriores propiedades de «Usuario», y además podrá tener propiedades propias de la clase «Alumno» */
        
        class Usuario {
            constructor (name, address, years){
                this.name = name,
                this.address = address,
                this.years = years
            }
        }
        class Alumno extends Usuario {
            constructor(name, address, years, course){
                super(name, address, years) // Propiedades de Usuario que hereda
                this.course = course // Propiedad de Alumno
            }
            mostrarInfo (){
                return `
                    Nombre: ${this.name}
                    Dirección: ${this.address}
                    Edad: ${this.years}
                    Curso: ${this.course}
                `;
            }
        }
        const vanesa = new Alumno("Vanesa", "Mengano, 79", 34, "React"); // Instancia
        document.write(vanesa.mostrarInfo());