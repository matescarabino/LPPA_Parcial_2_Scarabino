# Parcial 2 LPPA - Scarabino

<p>Alumno: Scarabino Mateo<br>
Carrera: T1-09 INGENIER脥A EN SISTEMAS INFORM脕TICOS<br>
Comisi贸n: 4-A<br>
Turno: Noche<br>
Inicio: 04/04/2022<br>
Fin: 23/07/2022<br>
<br>
Profesor: Frare Esteban
</p>

## Comenzando 馃殌

Ver pagina funcionando: [click aqui](https://matescarabino.github.io/LPPA_Parcial_2_Scarabino/)

### Pre-requisitos 馃搵

- Estar conectado a internet
- Usuario v谩lido:
    - email: valeria@gmail.com
    - password: lppa2022

## Funcionamiento 鈿欙笍

- El sitio comienza con un formulario de login (en index.html), el cual solicita ingresar los valores de mail y contrase帽a. Ambos valores cuentan con una validaci贸n onFocus/onBlur la cual inserta un mensaje de error si el usuario coloca mal alguno de los campos. 

- Luego de que el usuario coloque un mail y contrase帽a correctos y cliquee el bot贸n de iniciar sesi贸n, se ejecutara una funci贸n que validara los campos onSubmit. De pasar por esta validaci贸n correctamente se pasar谩 a la validaci贸n a trav茅s del m茅todo POST de los inputs.
Esta funci贸n v谩lida que los datos ingresados sean v谩lidos (el 煤nico usuario v谩lido es el indicadolos pre-requisitos), de ser correcto guardara en localStorage login=true y el email del usuario. Finalmente nos redirigir谩 al Dashboard.

- Una vez en el Dashboard se ejecutar谩 una funci贸n GET que traera un .json con datos de usuario, para luego convertirlo en un objeto y poder mostrarlo en una tabla html a trav茅s del DOM.

- En el Header del Dashboard contaremos con un men煤 desplegable el cual nos muestra el mail de usuario previamente ingresado (guardado en localStorage) y un bot贸n de Cerrar Sesi贸n, el cual setea en localStorage login=false y nos redirige al login nuevamente. Por lo cual al estar la variable Local "login" como falsa, la funci贸n que verifica esto no nos redirige al Dashboard.

### Extras 馃敥
- El dise帽o es responsivo

- En login.js primero se ejecuta una funci贸n que valida el estado de la variable en localStorage "login", si esta es verdadera (true), nos redirigir谩 directamente al Dashboard sin pasar por el login.

- De haber alg煤n error en el m茅todo POST del login, este mismo se mostrar谩 en el DOM (ej: si se ingresa un usuario que no existe)

- De haber alg煤n error en el m茅todo GET del Dashboard, este mismo se mostrar谩 en el DOM (ej: si el link es incorrecto o el servidor esta ca铆do)

- En dashboard.js primero se ejecuta una funci贸n que valida el estado de la variable en localStorage "login", si esta es falsa (false), nos redirigir谩 directamente al login. As铆 nos aseguramos de que nadie pueda saltarse el login por escribir en el navegador el link: [https://matescarabino.github.io/LPPA_Parcial_2_Scarabino/html/dashboard.html](https://matescarabino.github.io/LPPA_Parcial_2_Scarabino/html/dashboard.html)

- Tanto el login como el dashboard cuentan con una animaci贸n de carga mientras se espera el fetch, ya que, haciendo pruebas, me di cuenta de que la gente no entend铆a que estaba cargando.


## Construido con 馃洜锔?

- HTML 
- CSS 
- JavaScript

## Autores 鉁掞笍

* **Mateo Scarabino** - *todo* - [matescarabino](https://github.com/matescarabino)

