$(document).ready(function(){
    /*creamos una variable llamada altura que contendra
    el valor en pixeles de la diferencia que hay entre
    el objeto de clase menu y el top de la pantalla*/
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        /*si el scroll del sitio es mayor a altura*/
        if ( $(window).scrollTop() > altura ){
            /*entonces se añade la clase menu-fixed*/
            $('.menu').addClass('menu-fixed');
        } else {
            /*sino se remueve la clase*/
            $('.menu').removeClass('menu-fixed');
        }
    })
});