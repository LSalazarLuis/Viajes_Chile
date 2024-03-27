//Habilitar Tooldtips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Funcion para habilitar Smooth Scroll

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});


/* codigo para cambiar color al navbar cuando salga del header */

document.onscroll = function(){
    const etiquetaMain = document.querySelector('#principal');
    const nav = document.querySelector('nav');

    if(etiquetaMain.getBoundingClientRect().top <= 0){
        nav.classList.add('fondoCard');
    }
    else{
        nav.classList.remove('fondoCard');
    }

} 

/*Funcion para el boton, mostrara un alert*/
$('#btnEnviar').click(function(){
    
    let nombre = document.getElementById('txtNombre').value;
    let asunto = document.getElementById('txtAsunto').value;
    let mensaje = document.getElementById('txtMensaje').value;

    if(nombre != "" && asunto != "" && mensaje != ""){
        alert("Gracias " + nombre + " nos contactaremos lo antes posible, Que tenga Buen día");
        document.getElementById('txtNombre').value = "";
        document.getElementById('txtAsunto').value = "";
        document.getElementById('txtMensaje').value = "";
    }
    else{
        alert("Debe completar Todos los campos para enviar mensaje.");
    }

    

});