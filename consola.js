function cambiarImagen(accion) {
    var img = document.getElementById("imgchange")
    if (accion === 'siguiente') {
        img.src = 'css/img/videojuego2.jpeg';
    } else if (accion === 'reset') {
        img.src= 'css/img/pantallainicio.png';
    }
}
