function cambiarImagen(accion) {
    var img = document.getElementById("imgchange");
    
    if (accion === 'siguiente') {
        img.src = 'css/img/videojuego2.jpeg';
        contador = 1
    } else if (accion === 'reset') {
        img.src= 'css/img/pantallainicio.png';
    } else if (accion === 'siguiente'){
        img.src = 'css/img/videojuego1.avif';

    }
}
