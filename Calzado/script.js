let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoBody = document.getElementById('carrito-body');
    carritoBody.innerHTML = '';
    carrito.forEach((producto) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>S/${producto.precio.toFixed(2)}</td>
            <td><button onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button></td>
        `;
        carritoBody.appendChild(fila);
    });
    
    const total = carrito.reduce((total, producto) => total + producto.precio, 0);
    document.getElementById('total').innerText = `Total: S/${total.toFixed(2)}`;
}

function eliminarDelCarrito(nombre) {
    carrito = carrito.filter((producto) => producto.nombre !== nombre);
    mostrarCarrito();
}
