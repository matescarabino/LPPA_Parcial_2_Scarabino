# Parcial 2 LPPA - Scarabino

<p>Alumno: Scarabino Mateo<br>
Carrera: T1-09 INGENIERÍA EN SISTEMAS INFORMÁTICOS<br>
Comisión: 4-A<br>
Turno: Noche<br>
Inicio: 04/04/2022<br>
Fin: 23/07/2022<br>
<br>
Profesor: Frare Esteban
</p>

## Comenzando 🚀

Ver pagina funcionando: [click aqui](https://matescarabino.github.io/LPPA_Parcial_2_Scarabino/)

### Pre-requisitos 📋

- Estar conectado a internet
- Usuario válido:
    - email: valeria@gmail.com
    - password: lppa2022

## Funcionamiento ⚙️

- El sitio comienza con un formulario de login (en index.html), el cual solicita ingresar los valores de mail y contraseña. Ambos valores cuentan con una validación onFocus/onBlur la cual inserta un mensaje de error si el usuario coloca mal alguno de los campos. 

- Luego de que el usuario coloque un mail y contraseña correctos y cliquee el botón de iniciar sesión, se ejecutara una función que validara los campos onSubmit. De pasar por esta validación correctamente se pasará a la validación a través del método POST de los inputs.
Esta función válida que los datos ingresados sean válidos (el único usuario válido es el indicadolos pre-requisitos), de ser correcto guardara en localStorage login=true y el email del usuario. Finalmente nos redirigirá al Dashboard.

- Una vez en el Dashboard se ejecutará una función GET que traera un .json con datos de usuario, para luego convertirlo en un objeto y poder mostrarlo en una tabla html a través del DOM.

- En el Header del Dashboard contaremos con un menú desplegable el cual nos muestra el mail de usuario previamente ingresado (guardado en localStorage) y un botón de Cerrar Sesión, el cual setea en localStorage login=false y nos redirige al login nuevamente. Por lo cual al estar la variable Local "login" como falsa, la función que verifica esto no nos redirige al Dashboard.

### Extras 🔩

- En login.js primero se ejecuta una función que valida el estado de la variable en localStorage "login", si esta es verdadera (true), nos redirigirá directamente al Dashboard sin pasar por el login.

- De haber algún error en el método POST del login, este mismo se mostrará en el DOM (ej: si se ingresa un usuario que no existe)

- De haber algún error en el método GET del Dashboard, este mismo se mostrará en el DOM (ej: si el link es incorrecto o el servidor esta caído)

- En dashboard.js primero se ejecuta una función que valida el estado de la variable en localStorage "login", si esta es falsa (false), nos redirigirá directamente al login. Así nos aseguramos de que nadie pueda saltarse el login por escribir en el navegador el link: [https://matescarabino.github.io/LPPA_Parcial_2_Scarabino/html/dashboard.html](https://matescarabino.github.io/LPPA_Parcial_2_Scarabino/html/dashboard.html)

- Tanto el login como el dashboard cuentan con una animación de carga mientras se espera el fetch, ya que, haciendo pruebas, me di cuenta de que la gente no entendía que estaba cargando.

## Construido con 🛠️

- HTML 
- CSS 
- JavaScript

## Autores ✒️

* **Mateo Scarabino** - *todo* - [matescarabino](https://github.com/matescarabino)

