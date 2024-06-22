let tblUsuarios, tblClientes, tblCategorias, tblMedidas, tblProductos;
document.addEventListener("DOMContentLoaded", function(){
    tblUsuarios = $('#tblUsuarios').DataTable({
        ajax: {
            url: base_url + "Usuarios/listar",
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'usuario' },
            { data: 'nombre' },
            { data: 'correo' },
            { data: 'caja' },
            { data: 'estado' },
            { data: 'acciones' }
        ],
        language: {
            url: base_url + "Assets/css/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                buttons: [
                    {
                    //Botón para Excel
                    extend: 'excelHtml5',
                    footer: true,
                    title: 'Archivo',
                    filename: 'Export_File',
     
                    //Aquí es donde generas el botón personalizado
                    text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
                },
                //Botón para PDF
                {
                    extend: 'pdfHtml5',
                    download: 'open',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para copiar
                {
                    extend: 'copyHtml5',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para print
                {
                    extend: 'print',
                    footer: true,
                    filename: 'Export_File_print',
                    text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
                },
                //Botón para cvs
                {
                    extend: 'csvHtml5',
                    footer: true,
                    filename: 'Export_File_csv',
                    text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
                },
                {
                    extend: 'colvis',
                    text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                    postfixButtons: ['colvisRestore']
                }
            ]
    });
    //fin de la tabla usuarios
    tblClientes = $('#tblClientes').DataTable({
        ajax: {
            url: base_url + "Clientes/listar",
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'imagen' },
            { data: 'dni' },
            { data: 'nombre' },
            { data: 'telefono' },
            { data: 'direccion' },        
            { data: 'estado' },
            { data: 'acciones' }
        ],
        language: {
            url: base_url + "Assets/css/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                buttons: [
                    {
                    //Botón para Excel
                    extend: 'excelHtml5',
                    footer: true,
                    title: 'Archivo',
                    filename: 'Export_File',
     
                    //Aquí es donde generas el botón personalizado
                    text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
                },
                //Botón para PDF
                {
                    extend: 'pdfHtml5',
                    download: 'open',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para copiar
                {
                    extend: 'copyHtml5',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para print
                {
                    extend: 'print',
                    footer: true,
                    filename: 'Export_File_print',
                    text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
                },
                //Botón para cvs
                {
                    extend: 'csvHtml5',
                    footer: true,
                    filename: 'Export_File_csv',
                    text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
                },
                {
                    extend: 'colvis',
                    text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                    postfixButtons: ['colvisRestore']
                }
            ]
    });
    //fin de la tabla clientes
    tblCategorias = $('#tblCategorias').DataTable({
        ajax: {
            url: base_url + "Categorias/listar",
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'nombre' },       
            { data: 'estado' },
            { data: 'acciones' }
        ],
        language: {
            url: base_url + "Assets/css/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                buttons: [
                    {
                    //Botón para Excel
                    extend: 'excelHtml5',
                    footer: true,
                    title: 'Archivo',
                    filename: 'Export_File',
     
                    //Aquí es donde generas el botón personalizado
                    text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
                },
                //Botón para PDF
                {
                    extend: 'pdfHtml5',
                    download: 'open',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para copiar
                {
                    extend: 'copyHtml5',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para print
                {
                    extend: 'print',
                    footer: true,
                    filename: 'Export_File_print',
                    text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
                },
                //Botón para cvs
                {
                    extend: 'csvHtml5',
                    footer: true,
                    filename: 'Export_File_csv',
                    text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
                },
                {
                    extend: 'colvis',
                    text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                    postfixButtons: ['colvisRestore']
                }
            ]
    });
    //fin de la tabla categorias
    tblMedidas = $('#tblMedidas').DataTable({
        ajax: {
            url: base_url + "Medidas/listar",
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'nombre' },
            { data: 'nombre_corto' },    
            { data: 'estado' },
            { data: 'acciones' }
        ],
        language: {
            url: base_url + "Assets/css/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                buttons: [
                    {
                    //Botón para Excel
                    extend: 'excelHtml5',
                    footer: true,
                    title: 'Archivo',
                    filename: 'Export_File',
     
                    //Aquí es donde generas el botón personalizado
                    text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
                },
                //Botón para PDF
                {
                    extend: 'pdfHtml5',
                    download: 'open',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para copiar
                {
                    extend: 'copyHtml5',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para print
                {
                    extend: 'print',
                    footer: true,
                    filename: 'Export_File_print',
                    text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
                },
                //Botón para cvs
                {
                    extend: 'csvHtml5',
                    footer: true,
                    filename: 'Export_File_csv',
                    text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
                },
                {
                    extend: 'colvis',
                    text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                    postfixButtons: ['colvisRestore']
                }
            ]
    });
    //fin de la tabla medidas
    tblProductos = $('#tblProductos').DataTable({
        ajax: {
            url: base_url + "Productos/listar",
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'fecha_registro' },
            { data: 'fecha_fin' },
            { data: 'codigo' },
            { data: 'categorias' },
            { data: 'clientes' },
            { data: 'nombre' },
            { data: 'estatus' },
            { data: 'proceso' },
            { data: 'fase_proyecto' },
            { data: 'cantidad' },
            { data: 'medidas' },
            { data: 'ubicacion' },
            { data: 'imagen' },
            { data: 'estado' },
            { data: 'acciones' }
        ],
        language: {
            url: base_url + "Assets/css/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                buttons: [
                    {
                    //Botón para Excel
                    extend: 'excelHtml5',
                    footer: true,
                    title: 'Reporte de proyectos',
                    filename: 'Reporte de proyectos Excel',
     
                    //Aquí es donde generas el botón personalizado
                    text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
                },
                //Botón para PDF
                {
                    extend: 'pdfHtml5',
                    download: 'open',
                    footer: true,
                    title: 'Reporte de proyectos',
                    filename: 'Reporte de proyectos PDF',
                    text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para copiar
                {
                    extend: 'copyHtml5',
                    footer: true,
                    title: 'Reporte de proyectos',
                    filename: 'Reporte de proyectos',
                    text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para print
                {
                    extend: 'print',
                    footer: true,
                    filename: 'Export_File_print',
                    text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
                },
                //Botón para cvs
                {
                    extend: 'csvHtml5',
                    footer: true,
                    filename: 'Export_File_csv',
                    text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
                },
                {
                    extend: 'colvis',
                    text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                    postfixButtons: ['colvisRestore']
                }
            ]
    });
    //inicio del fintrado de la tabla productos.
    $('#iptFecha').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptFecha_fin').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptCodigo').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptTipo').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptOperador').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptNombre').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptEstatus').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptProceso').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptFase').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptMetros').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptRegion').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptUbicacion').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })
    $('#iptRegion').keyup(function(){
        tblProductos.columns($(this).data('index')).search(this.value).draw();
    })

    $('#iptFechaini, #iptFechafin' ).keyup(function(){
        tblProductos.draw();
    })
    
    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var fechaDesde = new Date($("#iptFechaini").val());
            var fechaHasta = new Date($("#iptFechafin").val());
    
            var col_fecha = new Date(data[1]);
    
            if (
                (isNaN(fechaDesde.getTime()) && isNaN(fechaHasta.getTime())) ||
                (isNaN(fechaDesde.getTime()) && col_fecha <= fechaHasta) ||
                (isNaN(fechaHasta.getTime()) && col_fecha >= fechaDesde) ||
                (col_fecha >= fechaDesde && col_fecha <= fechaHasta)
            ) {
                return true;
            }
            return false;
        }
    );

    $('#iptFechainif, #iptFechafinf').change(function(){
        tblProductos.draw();
    });
    
    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var fechaDesde = new Date($("#iptFechainif").val());
            var fechaHasta = new Date($("#iptFechafinf").val());
    
            var col_fecha = new Date(data[2]);
    
            if (
                (isNaN(fechaDesde.getTime()) && isNaN(fechaHasta.getTime())) ||
                (isNaN(fechaDesde.getTime()) && col_fecha <= fechaHasta) ||
                (isNaN(fechaHasta.getTime()) && col_fecha >= fechaDesde) ||
                (col_fecha >= fechaDesde && col_fecha <= fechaHasta)
            ) {
                return true;
            }
            return false;
        }
    );


})


function frmUsuario(){
    document.getElementById("title").innerHTML = "Nuevo Usuario";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("claves").classList.remove("d-none");
    document.getElementById("frmUsuario").reset();
    $("#nuevo_usuario").modal("show");
    document.getElementById("id").value = "";
}
function registrarUser(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const calve = document.getElementById("calve");
    const confirmar = document.getElementById("confirmar");
    const caja = document.getElementById("caja");
    if (usuario.value == "" || nombre.value == "" || correo.value == "" || caja.value == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Todos los campos son obligatorios",
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Usuarios/registrar";
        const frm = document.getElementById("frmUsuario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                const res= JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Usuario registrado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_usuario").modal("hide");
                      tblUsuarios.ajax.reload();  
                }else if(res == "modificado"){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Usuario modificado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_usuario").modal("hide");
                      tblUsuarios.ajax.reload();  
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })   
                }
            }
        }
    }
}
function btnEditarUser(id) {
    document.getElementById("title").innerHTML = "Actualizar Usuario"; 
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Usuarios/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("usuario").value = res.usuario;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("correo").value = res.correo;
            document.getElementById("caja").value = res.id_caja;
            document.getElementById("claves").classList.add("d-nose");
            $("#nuevo_usuario").modal("show");
        }
    }

}
function btnEliminarUser(id) {
    Swal.fire({
        title: "¿Estas seguro de Eliminar?",
        text: "El usuario no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Usuario eliminado con exito.",
                            icon: "success"
                        })
                        tblUsuarios.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
function btnReingresarUser(id) {
    Swal.fire({
        title: "¿Estas seguro de reingresar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Usuario reingresado con exito.",
                            icon: "success"
                        })
                        tblUsuarios.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
//fin usuarios
function frmCliente(){
    document.getElementById("title").innerHTML = "Nuevo Cliente";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmCliente").reset();
    document.getElementById("id").value = "";
    $("#nuevo_cliente").modal("show");
    deleteImg();
}
function registrarCli(e) {
    e.preventDefault();
    const dni = document.getElementById("dni");
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    if (dni.value == "" || nombre.value == "" /*|| telefono.value == "" *//*|| direccion.value == ""*/) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Todos los campos son obligatorios",
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Clientes/registrar";
        const frm = document.getElementById("frmCliente");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                const res= JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Cliente registrado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_cliente").modal("hide");
                      tblClientes.ajax.reload();  
                }else if(res == "modificado"){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Cliente modificado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_cliente").modal("hide");
                      tblClientes.ajax.reload();  
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })   
                }
            }
        }
    }
}
function btnEditarCli(id) {
    document.getElementById("title").innerHTML = "Actualizar Cliente"; 
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Clientes/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("dni").value = res.dni;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("telefono").value = res.telefono;
            document.getElementById("direccion").value = res.direccion;
            document.getElementById("img-preview").src = base_url + 'Assets/img/'+ res.logo;
            document.getElementById("icon-cerrar").innerHTML = `
            <button class"btn btn-danger" onclick="deleteImg()">
            <i class="fas fa-times"></i></button>`;
            document.getElementById("icon-imagen").classList.add("d-none");
            document.getElementById("foto_actual").value = res.logo;
            $("#nuevo_cliente").modal("show");
        }
    }

}
function btnEliminarCli(id) {
    Swal.fire({
        title: "¿Estas seguro de Eliminar?",
        text: "El usuario no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Clientes/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Cliente eliminado con exito.",
                            icon: "success"
                        })
                        tblClientes.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
function btnReingresarCli(id) {
    Swal.fire({
        title: "¿Estas seguro de reingresar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Clientes/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Cliente reingresado con exito.",
                            icon: "success"
                        })
                        tblClientes.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
//fin Clientes
function frmCategoria(){
    document.getElementById("title").innerHTML = "Nuevo Categoria";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmCategoria").reset();
    $("#nuevo_categoria").modal("show");
    document.getElementById("id").value = "";
}
function registrarCate(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    if (nombre.value == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Todos los campos son obligatorios",
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Categorias/registrar";
        const frm = document.getElementById("frmCategoria");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                const res= JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Categoria registrado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_categoria").modal("hide");
                      tblCategorias.ajax.reload();  
                }else if(res == "modificado"){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Categoria modificado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_categoria").modal("hide");
                      tblCategorias.ajax.reload();  
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })   
                }
            }
        }
    }
}
function btnEditarCate(id) {
    document.getElementById("title").innerHTML = "Actualizar Categoria"; 
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Categorias/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("nombre").value = res.nombre;
            $("#nuevo_categoria").modal("show");
        }
    }

}
function btnEliminarCate(id) {
    Swal.fire({
        title: "¿Estas seguro de Eliminar?",
        text: "El usuario no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Categorias/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Categoria eliminado con exito.",
                            icon: "success"
                        })
                        tblCategorias.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
function btnReingresarCate(id) {
    Swal.fire({
        title: "¿Estas seguro de reingresar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Categorias/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Categoria reingresado con exito.",
                            icon: "success"
                        })
                        tblCategorias.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
//fin categorias
function frmMedida(){
    document.getElementById("title").innerHTML = "Nuevo Medida";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmMedida").reset();
    $("#nuevo_medida").modal("show");
    document.getElementById("id").value = "";
}
function registrarMedi(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const nombre_corto = document.getElementById("nombre_corto");
    if (nombre.value == "" || nombre_corto.value == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Todos los campos son obligatorios",
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Medidas/registrar";
        const frm = document.getElementById("frmMedida");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                const res= JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Medida registrado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_medida").modal("hide");
                      tblMedidas.ajax.reload();  
                }else if(res == "modificado"){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Medida modificado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_medida").modal("hide");
                      tblMedidas.ajax.reload();  
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })   
                }
            }
        }
    }
}
function btnEditarMedi(id) {
    document.getElementById("title").innerHTML = "Actualizar Medida"; 
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Medidas/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("nombre_corto").value = res.nombre_corto;
            $("#nuevo_medida").modal("show");
        }
    }

}
function btnEliminarMedi(id) {
    Swal.fire({
        title: "¿Estas seguro de Eliminar?",
        text: "El usuario no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Medidas/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Medida eliminado con exito.",
                            icon: "success"
                        })
                        tblMedidas.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
function btnReingresarMedi(id) {
    Swal.fire({
        title: "¿Estas seguro de reingresar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Medidas/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Cliente reingresado con exito.",
                            icon: "success"
                        })
                        tblMedidas.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
//fin Medidas
function frmProducto(){
    document.getElementById("title").innerHTML = "Nuevo Producto";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmProducto").reset();
    document.getElementById("id").value = "";
    $("#nuevo_producto").modal("show");
    deleteImg();
}
function registrarPro(e) {
    e.preventDefault();
    const codigo = document.getElementById("codigo");
    const nombre = document.getElementById("nombre");
    const fecha_fin = document.getElementById("fecha_fin");
    const cantidad = document.getElementById("cantidad");
    const estatus = document.getElementById("estatus");
    const proceso = document.getElementById("proceso");
    const ubicacion = document.getElementById("ubicacion");
    const fase_proyecto = document.getElementById("fase_proyecto");
    const id_medida = document.getElementById("medida");
    const id_cat = document.getElementById("categoria");
    const id_cliente = document.getElementById("cliente");
    if (codigo.value == "" || nombre.value == "" || cantidad.value == "" || estatus.value == "" || proceso.value == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Los campos Codigo, Nombre, Cantidad, Estatus y Proceso son obligatorios",
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Productos/registrar";
        const frm = document.getElementById("frmProducto");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "proyecto registrado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_producto").modal("hide");
                      tblProductos.ajax.reload();  
                }else if(res == "modificado"){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "proyecto modificado con exito",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_producto").modal("hide");
                      tblProductos.ajax.reload();  
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })   
                }
            }
        }
    }
}
function btnEditarPro(id) {
    document.getElementById("title").innerHTML = "Actualizar pro"; 
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Productos/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("codigo").value = res.codigo;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("fecha_fin").value = res.fecha_fin;
            document.getElementById("cantidad").value = res.cantidad;
            document.getElementById("estatus").value = res.estatus;
            document.getElementById("proceso").value = res.proceso;
            document.getElementById("ubicacion").value = res.ubicacion;
            document.getElementById("fase_proyecto").value = res.fase_proyecto;
            document.getElementById("medida").value = res.id_medida;
            document.getElementById("categoria").value = res.id_categoria;
            document.getElementById("cliente").value = res.id_cliente;
            document.getElementById("img-preview").src = base_url + 'Assets/img/'+ res.foto;
            document.getElementById("icon-cerrar").innerHTML = `
            <button class"btn btn-danger" onclick="deleteImg()">
            <i class="fas fa-times"></i></button>`;
            document.getElementById("icon-imagen").classList.add("d-none");
            document.getElementById("foto_actual").value = res.foto;
            $("#nuevo_producto").modal("show");
        }
    }

}
function btnEliminarPro(id) {
    Swal.fire({
        title: "¿Estas seguro de Eliminar?",
        text: "El productos no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Productos/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Producto eliminado con exito.",
                            icon: "success"
                        })
                        tblProductos.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
function btnReingresarPro(id) {
    Swal.fire({
        title: "¿Estas seguro de reingresar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Productos/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res == "ok") {
                        Swal.fire({
                            title: "Mensaje!",
                            text: "Producto reingresado con exito.",
                            icon: "success"
                        })
                        tblProductos.ajax.reload(); 
                    }else{
                        Swal.fire({
                            title: "Mensaje!",
                            text: res,
                            icon: "erro"
                        })
                    }
                }
            }

        }
      })
}
//fin productos
function preview(e) {
    const url = e.target.files[0];
    const urltmp = URL.createObjectURL(url);
    document.getElementById("img-preview").src = urltmp;
    document.getElementById("icon-imagen").classList.add("d-none");
    document.getElementById("icon-cerrar").innerHTML = `
    <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>
    ${url['name']}`;
}
function deleteImg() {
    document.getElementById("icon-cerrar").innerHTML = '';
    document.getElementById("icon-imagen").classList.remove("d-none");
    document.getElementById("img-preview").src = ''; 
    document.getElementById("imagen").value = ''; 
    document.getElementById("foto_actual").value = ''; 
}
// fin herramientas para imagenes

// GRAFICOS 
reporteproyectosxo();

function reporteproyectosxo() {

    const url = base_url + "Administracion/graficouno";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let operador = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                operador.push(res[i]['operador']);
                cantidad.push(res[i]['cantidad']);
            }
            var ctx = document.getElementById("prigrafico");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: operador,
                    datasets: [{
                        label: 'Cantidad',
                        data: cantidad,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
}
function Filtrartodo() {
    reporteproyectosxofit();
    reporteproyectosxtfit();
    reporteproyectosxrfit();  
}


function reporteproyectosxofit() {
    const fechaInicio = document.getElementById("fechaInicio").value;
    const fechaFin = document.getElementById("fechaFin").value;
    const url = base_url + "Administracion/graficounofiter";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let operador = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                operador.push(res[i]['operador']);
                cantidad.push(res[i]['cantidad']);
            }
            var ctx = document.getElementById("prigraficof");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: operador,
                    datasets: [{
                        label: 'Cantidad',
                        data: cantidad,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };
    http.send("fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin);
}

reporteproyectosxr();

function reporteproyectosxr() {
    const url = base_url + "Administracion/graficodos";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let region = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                region.push(res[i]['region']);
                cantidad.push(res[i]['cantidad']);
            }
            var ctx = document.getElementById("segrafico");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: region,
                    datasets: [{
                        label: 'Cantidad',
                        data: cantidad,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
}


function reporteproyectosxrfit() {
    const fechaInicio = document.getElementById("fechaInicio").value;
    const fechaFin = document.getElementById("fechaFin").value;
    const url = base_url + "Administracion/graficodosfiter";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let region = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                region.push(res[i]['region']);
                cantidad.push(res[i]['cantidad']);
            }
            var ctx = document.getElementById("segraficof");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: region,
                    datasets: [{
                        label: 'Cantidad',
                        data: cantidad,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };
    http.send("fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin);
}

reporteproyectosxt();

function reporteproyectosxt() {
    const url = base_url + "Administracion/graficotres";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send();
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let tipo = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                tipo.push(res[i]['tipo']);
                cantidad.push(res[i]['cantidad']);
            }
            var ctx = document.getElementById("tregrafico");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: tipo,
                    datasets: [{
                        label: 'Cantidad',
                        data: cantidad,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
}

function reporteproyectosxtfit() {
    const fechaInicio = document.getElementById("fechaInicio").value;
    const fechaFin = document.getElementById("fechaFin").value;
    const url = base_url + "Administracion/graficotresfiter";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let tipo = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                tipo.push(res[i]['tipo']);
                cantidad.push(res[i]['cantidad']);
            }
            var ctx = document.getElementById("tregraficof");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: tipo,
                    datasets: [{
                        label: 'Cantidad',
                        data: cantidad,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };
    http.send("fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin);
}