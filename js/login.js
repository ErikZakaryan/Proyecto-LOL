$(document).ready(function () {
    $('header').load('./templates/menu.html');
    $('footer').load('./templates/footer.html');
});

var loguearse = function(){
    var usuario = $("#usuario").val();
    var password = $("#password").val();
    $.ajax({
        url: "http://localhost:3000/login",
        type: "post",
        async: true,
        data: {usuario: usuario, password: password},
        timeout: 10000,
        success: function(data){
            if(data){
                // USUARIO LOGUEADO
                console.log(data);
            } else {
                // USUARIO O CONTRASEÑA INCORRECTA
                console.log(data);
            }
        },
        error: function(error){
            alert(error);
        }
    });        
}

$("#btnLogear").click(loguearse);