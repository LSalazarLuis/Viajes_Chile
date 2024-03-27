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
