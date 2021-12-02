function traerInformacionProductos() {
    console.log("test");
    $.ajax({
        url: "http://localhost:8080/api/clothe/all",
        //url: "http://140.238.237.27:8080/api/supplements/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";

        myTable += "<td>" + respuesta[i].reference + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].category + "</td>";
        myTable += "<td>" + respuesta[i].price + "</td>";
        myTable += "<td>" + respuesta[i].quantity + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td>" + respuesta[i].availability + "</td>";
        myTable += "<td>" + respuesta[i].photography + "</td>";
        myTable += "<td> <button onclick=' agregarProducto(" + respuesta[i].idClient + ")'>Agregar</button>";
        myTable += "<td> <button onclick='editarProducto(" + JSON.stringify(respuesta[i].reference) + ")'>Editar</button>";
        myTable += "<td> <button onclick='borrarProducto(" + JSON.stringify(respuesta[i].reference) + ")'>Eliminar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado3").html(myTable);
}

function agregarProducto() {

    Swal
        .fire({
            title: "Tu nombre",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                let nombre = resultado.value;
                console.log("Hola, " + nombre);
            }
        });
}

function borrarProducto(reference) {
    console.log(reference);
    let myData = {
        id: reference
    };
    let dataToSend = JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax({
        url: "http://localhost:8080/api/clothe/" + reference,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultado").empty();
            traerInformacionProductos();
            Swal
                .fire({
                    title: "Venta #123456",
                    text: "¿Eliminar?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: "Sí, eliminar",
                    cancelButtonText: "Cancelar",
                })
                .then(resultado => {
                    if (resultado.value) {
                        // Hicieron click en "Sí"
                        console.log("*se elimina la venta*");
                    } else {
                        // Dijeron que no
                        console.log("*NO se elimina la venta*");
                    }
                });
        }
    });

}

function editarProducto(id) {
    Swal.fire({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: '3em',
        background: '#fff url(https://www.wallpapertip.com/wmimgs/35-350686_apple-store-background.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://www.wallpapertip.com/wmimgs/38-386847_multi-coloured-slate-wallpaper-mural-used-construction-material.jpg")
          left top
          no-repeat
        `
    })

    $.ajax({
        dataType: 'json',
        url: "http://localhost:8080/api/user/" + id,

        type: 'GET',

        success: function(response) {
            console.log(response);
            var item = response;

            $("#id").val(item.id);
            $("#name2").val(item.name);
            $("#brand").val(item.brand);
            $("#year").val(item.year);
            $("#description2").val(item.description);

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}