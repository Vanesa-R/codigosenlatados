// CONDICIONALES

    // 1.1 IF / ELSE
        
        // Ejercicio: Solicitar edad. Dar acceso a los mayores de edad

        // Con sintaxis ECMAScript 6:
        const acceso = edad => {
            edad = prompt("Por favor, introduce tu edad");
            if (edad >= 18){
                alert("¡Vienvenido!");
            }
            else {
                alert("Lo sentimos, debes tener 18 años para acceder a esta página");
            }
        }
        acceso();

        // Podemos seguir encontrando funciones con esta sintaxis

            function acceso () {
                const edad = prompt("Por favor, introduce tu edad");
                    if (edad >= 18){
                        alert("¡Bienvenido!");
                    }
                    else {
                        alert("Lo sentimos, debes tener 18 años para acceder a esta página");
                    }
            }
            acceso();


        // Ejercicio: Validar nombre de usuario

            const usuario = prompt("Introduce tu nombre de usuario");
            if (usuario && usuario.trim()){
                const confirmar = confirm("¿Es " + usuario + " tu nombre de usuario?");
                if (confirmar){
                    alert("El nombre de usuario es correcto");
                } else {
                    alert("El nombre de usuario es incorrecto");
                }
            } else {
                alert("No has introducido ningún nombre");
            }

            
    // 1.2 SWITCH - Sentencia utilizada en casos de multiples condiciones

        // Ejercicio: Solicita una figura entre triángulo, rectángulo y círculo, y dependiendo de la palabra introducida solicita los datos para calcular su área.

            let figura = prompt("Introduce una figura para calcular su área. \n Elige entre triángulo, rectángulo y círculo.");
            let b, h, r, a, resultado;

            switch (figura){
                case "triangulo":
                case "triángulo":
                    b = parseInt(prompt("Introduce la base"));
                    h = parseInt(prompt("Introduce la altura"));
                    a = ((b*h)/2);
                    resultado = `El área del triángulo es ${a}`;
                    break;
                case "rectangulo":
                case "rectángulo":
                    b = parseInt(prompt("Introduce la base"));
                    h = parseInt(prompt("Introduce la altura"));
                    a = b*h;
                    resultado = `El área del rectángulo es ${a}`;
                    break;
                case "circulo":
                case "círculo":
                    r = parseInt(prompt("Introduce el radio"));
                    a = ((Math.PI)*(Math.pow(r, 2)));
                    resultado = `El área del círculo es ${(a.toFixed(2))}`;
                    break;
                default:
                    resultado = `Introduce una figura válida`;
            }
            alert(resultado);


    // El OPERADOR TERNARIO

        // Primer ejercicio realizado con operador ternario

            const edad = prompt("Por favor, introduce tu edad");
            const acceder = (edad >= 18) ? "Bienvenido" : "Lo sentimos, debes tener 19 años para acceder a esta página";
            alert(acceder);
        

        // Otro ejemplo con operador ternario

            let num = 5;
            (num % 2 == 0) ? console.log("El número es par") : console.log("El número es impar"); // Devuelve por consola «El número es impar»