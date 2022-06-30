//Metodo GET 

function obtenerUsuarios() {
    let url = 'https://basic-server-one.vercel.app/users';
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => mostrarError(error))

    const mostrarData = (data) => {

        let tabla = document.getElementById("tabla");
        tabla.style.display = 'table';

        let body = ""
        for (var i = 0; i < data.data.length; i++) {
            body += `<tr role="row">
                        <td data-label="NOMBRE">${data.data[i].name}</td>
                        <td data-label="USUARIO">${data.data[i].username}</td>
                        <td data-label="SITIO WEB">${data.data[i].website}</td>
                        <td data-label="CIUDAD">${data.data[i].address["city"]}</td>
                    </tr>`
        }
        document.getElementById('data').innerHTML = body
    }

    const mostrarError = (error)  => {
        let body = ""
        body += 'Error: ' + error.message
        document.getElementById('error').innerHTML = body


    }
}

obtenerUsuarios();