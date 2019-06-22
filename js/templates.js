window.onload = function () {
    $('header').load('./templates/menu.html');
    $('footer').load('./templates/footer.html');
    $('main').load('./templates/inicio.html');
    var cambioComponente = function(nombrePagina){
        console.log("hola")
        nombrePagina = $("#nav-link").val()
        $("main").innerHTML()
        $("main").load('./templates/' + nombrePagina)
    }
};