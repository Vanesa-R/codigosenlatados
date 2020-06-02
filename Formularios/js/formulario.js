(function (){
    let formulario = document.getElementById("formulario"),
        nombre = formulario.nombre,
        email = formulario.email,
        genero = formulario.genero,
        condiciones = formulario.condition,
        error = document.getElementById("error");

    const validarNombre = (e) => {
        if (nombre.value == "" || nombre.value == null){
            error.style.display = "block";
            error.innerHTML += `<li>El campo «nombre» no puede estar vacío.</li>`;

            e.preventDefault();
        }
    }
    const validarCorreo = (e) => {
        if (email.value == "" || email.value == null){
            error.style.display = "block";
            error.innerHTML += `<li>El campo «correo» no puede estar vacío.</li>`;

            e.preventDefault();
        }
    }

    const validarGenero = (e) => {
        if(genero.value == "" || genero.value == null){
            error.style.display = "block";
            error.innerHTML += `<li>Por favor, selecciona tu sexo.</li>`;

            e.preventDefault();                
        }
    }
    const terminos = (e) => {
        if (!condiciones.checked){
            error.style.display = "block";
            error.innerHTML += `<li>Debes aceptar los términos y condiciones.</li>`;

            e.preventDefault();
        }
    }

    const validarFormulario = (e) => {
        error.innerHTML = "";
        validarNombre(e);
        validarCorreo(e);
        validarGenero(e);
        terminos(e);
    }

    formulario.addEventListener("submit", validarFormulario);
    
}())