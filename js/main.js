







    $("section").each(function(){
        /*each examina uno a uno los objetos seleccionados */
        // console.log("Prueba");
        var tituloSeccion=$(this).find("h2").text();
        console.log(tituloSeccion);
        //$(this) hace referencia al objeto que en estos momentos se esta examinando
        //Con find se busca un objeto dentro del obejeto seleccionado
        //con text() se extrae el contenido texto de un objeto 

            var idSeccion = $(this).attr("id")
            console.log("---" + idSeccion)


        $("#menu-principal").append('<li class="nav-item">'
    +'<a class="nav-link  text-dark" aria-current="page" href="#'+idSeccion+'">'+tituloSeccion+'</a>'
    +'</li>');
    })