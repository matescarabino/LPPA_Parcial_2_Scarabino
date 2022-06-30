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
            body += `<tr>
                        <td>${data.data[i].id}</td>
                        <td>${data.data[i].name}</td>
                        <td>${data.data[i].username}</td>
                        <td>${data.data[i].email}</td>
                        <td>${data.data[i].phone}</td>
                        <td>${data.data[i].website}</td>
                        <td>${data.data[i].address["city"]}</td>
                        <td>${data.data[i].address["street"] + ' ' + data.data[i].address["suite"]}</td>
                        <td>${data.data[i].company["name"]}</td>
                        </tr>`
        }
        document.getElementById('data').innerHTML = body
    }

    const mostrarError = (error)  => {
        let body = ""

    }
}

obtenerUsuarios();