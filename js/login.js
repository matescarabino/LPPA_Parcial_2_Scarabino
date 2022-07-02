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
            if (!((mail.value).toLowerCase()).match(mail_format)) {
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
                errorContrasenia.innerHTML = 'Debe contener por lo menos una minuscula, un numero y como minimo 8 caracteres.'
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

        if (!(((mail.value).toLowerCase()).match(mail_format)) || (mail.value == "")) {
            mail.classList.add('invalid');
            errorMail.innerHTML = 'Ingrese un email válido.';
            return false;
        }

        //Validación contrasenia --------------------------------------------------------------------
        let contrasenia = document.getElementById('contraseniaInput');
        let contrasenia_format = /(?=.*\d)(?=.*[a-z]).{8,}/;

        if (!contrasenia.value.match(contrasenia_format) || (contrasenia.value == "")) {
            contrasenia.classList.add('invalid');
            errorContrasenia.innerHTML = 'Debe contener por lo menos una minúscula, un número y como mínimo 8 caracteres.'
            return false;
        }


        let parametroMail = (mail.value).toLowerCase();
        let parametroContrasenia = contrasenia.value;


        //LLamo al metodo validarDatos y le paso como parametro los imputs del formulario
        validarDatos(parametroMail,parametroContrasenia);

        //Al poner esta línea impido que se envie el formulario, y así que se cierre/refresque el mensaje de error
        event.preventDefault();
    }


    //Metodo POST
    function validarDatos(parametroMail, parametroContrasenia) {
        let loader =  document.getElementById('loader');
        let mensaje_error = document.getElementById('mensaje_error');

        loader.classList.add('loader');
        mensaje_error.innerHTML = '';

        fetch("https://basic-server-one.vercel.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: parametroMail, 
                password: parametroContrasenia
            })
        })
            .then(res => res.json())
            .then(data => mostrarData(data))
            .catch(error => console.error(error))

        const mostrarData = (data) => {

            if(data.error == false ){
                //guardo en el localStorage una variable booleana para confirmar que el login fue exitoso
                localStorage.setItem('login', true);
                localStorage.setItem('user', parametroMail);
                window.location.href = "./html/dashboard.html";

            }else{
                loader.classList.remove('loader');
                mensaje_error.innerHTML = `${data.message}`
            }

        }

    }



    function consultaEstadoLogin(){
        //me traigo del localStorage la variable booleana para confirmar si ya esta logeado
        let login = localStorage.getItem('login');

        if(login == 'true'){
            window.location.href = "./html/dashboard.html";
        }
    }

}