//aca capturamos la carga de la pagina
document.addEventListener( "DOMContentLoaded", () => {
    var menu = document.querySelector('.menu');
    var titulo = document.querySelector(".titulo-principal");
    window.onscroll = () => {
        var alturaMenu = menu.getBoundingClientRect().top;
        var alturaTitulo = titulo.getBoundingClientRect().top;
        //si el scroll del sitio es mayor a altura
        if (alturaMenu <= 0) {
            //entonces se añade la clase menu-fixed
            menu.classList.add('menu-fixed');
        }
        if (alturaTitulo >= -55) {
            //sino se remueve la clase
            menu.classList.remove('menu-fixed');
        };
    };
    
});