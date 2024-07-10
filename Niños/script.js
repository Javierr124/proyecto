var imagenes = ['tenis1.jpg', 'tenis2.jpg', 'tenis3.jpg', 'tenis4.jpg'];
var cont = 0;

function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('#imagen'), // Selecciona la imagen por su ID 'imagen'
            tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }

        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => { // Corregido el nombre del evento 'DOMContentLoaded'
    let contenedor = document.querySelector('.Contenedor');
    carrousel(contenedor);
});