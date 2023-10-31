let imagenes = ['css/img/juego1.gif', 'css/img/juego2.webp', 'css/img/juego3.webp'];
let contador = 0;
let encendida = true;

function Encenderoapagar() {
    encendida = !encendida;
    const img = document.getElementById('imgchange');
    const botonReset = document.getElementById('botonReset');
    
    if (encendida) {
        img.src = 'css/img/inicio.webp';
        botonReset.disabled = false; 
    } else {
        img.src = 'css/img/apagado.png';
        botonReset.disabled = true; 
    }
}

function Reset() {
    if (encendida) {
        const img = document.getElementById('imgchange');
        img.src = 'css/img/inicio.webp';
    }
}

function cambiarImagen() {
    if (encendida) {
        contador = (contador + 1) % imagenes.length;
        const img = document.getElementById('imgchange');
        img.src = imagenes[contador];
    }
}


