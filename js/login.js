window.onload = function () {

    consultaEstadoLogin()

    //Llamo a la función  que realiza las validaciones onFocus/onBlur
    validacionesOnFocus();
        
    //Declaro la función  que realiza las validaciones onFocus/onBlur
    function validacionesOnFocus() {
        // Validación Mail ------------------------------------------------------------------------
        let mail = document.getElementById('emailInput');
        let mail_format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        mail.onblur = function () {
            if (!mail.value.match(mail_format)) {
                mail.classList.add('invalid');
                errorMail.innerHTML = 'Ingrese un email válido.'

            }
        };
        mail.onfocus = function () {
            if (mail.classList.contains('invalid')) {
                mail.classList.remove('invalid');
                errorMail.innerHTML = "&nbsp;";
            }
        };


        // Validación contrasenia ------------------------------------------------------------------------
        let contrasenia = document.getElementById('contraseniaInput');
        let contrasenia_format = /(?=.*\d)(?=.*[a-z]).{8,}/;

        contrasenia.onblur = function () {
            if (!contrasenia.value.match(contrasenia_format)) {
                contrasenia.classList.add('invalid');
                errorContrasenia.innerHTML = 'Debe contener por lo menos un numero, una mayuscula, una minuscula y como minimo 8 caracteres.'

            }
        };
        contrasenia.onfocus = function () {
            if (contrasenia.classList.contains('invalid')) {
                contrasenia.classList.remove('invalid');
                errorContrasenia.innerHTML = "&nbsp;";
            }
        };


    }

    //Validación on Submit --------------------------------------------------------------------
    document.formulario.onsubmit = function (event) {

        //Validación Email --------------------------------------------------------------------
        let mail = document.getElementById('emailInput');
        let mail_format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if (!mail.value.match(mail_format) || (mail.value == "")) {
            mail.classList.add('invalid');
            errorMail.innerHTML = 'Ingrese un email válido.';
            return false;
        }

        //Validación contrasenia --------------------------------------------------------------------
        let contrasenia = document.getElementById('contraseniaInput');
        let contrasenia_format = /(?=.*\d)(?=.*[a-z]).{8,}/;

        if (!contrasenia.value.match(contrasenia_format) || (contrasenia.value == "")) {
            contrasenia.classList.add('invalid');
            errorContrasenia.innerHTML = 'Debe contener por lo menos un numero, una mayuscula, una minuscula y como minimo 8 caracteres.'
            return false;
        }


        let parametroMail = mail.value;
        let parametroContrasenia = contrasenia.value;

        //LLamo al metodo validarDatos y le paso como parametro los imputs del formulario
        validarDatos(parametroMail,parametroContrasenia);

        //Al poner esta línea impido que se envie el formulario, y así que se cierre/refresque el Modal (a su vez el modal tiene el código necesario para cerrar y finalizar el submit)
        event.preventDefault();
    }

    
    //Metodo POST 
    function validarDatos(parametroMail, parametroContrasenia) {
        fetch("https://basic-server-one.vercel.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: parametroMail, //'valeria@gmail.com',
                password: parametroContrasenia //'lppa2022' 
            })
        })

            .then(res => res.json())
            .then(data => mostrarData(data))
            .catch(error => console.error(error))



        const mostrarData = (data) => {
   
            if(data.error == false ){
                document.getElementById('mensaje').innerHTML = 'LOGIN EXITOSO'
            }else{
                document.getElementById('mensaje').innerHTML = 'LOGIN FALLIDO'
                document.getElementById('mensaje').style.backgroundColor = 'red';
                document.getElementById('response').style.color = 'red';
            }
            document.getElementById('response').innerHTML = `${data.message}`
        }

        mostarModal();
    }

    //Declaro la función mostrarModal()
    function mostarModal() {
        // Ejecuto modal -----------------------------------------------------------
        let modal = document.getElementById("modalRegistro");
        let span = document.getElementById("close");

        // Lo hago visible
        modal.style.display = "block";

        // Si clickea el "botón" de aceptar escondo el modal
        span.onclick = function () {
            modal.style.display = "none";
            document.getElementById("formulario").submit();
        }

        // Si clickea fuera del modal, lo escondo
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.getElementById("formulario").submit();
            }
        }
    }

    
    function consultaEstadoLogin(){
        let login = false;

        if(login == true){
            window.location.href = "./html/dashboard.html";
        }
    }

}