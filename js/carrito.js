document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    renderCarrito(carrito);
});

function renderCarrito(carrito) {
    let rows = '';
    for (let juego of carrito) {
        rows += `
        <tr>
            <td>${juego.titulo}</td>
            <td>${juego.consola}</td>
            <td>
                <img src="${juego.imagen}" alt="" class="img-fluid" style="width: 100px;">
            </td>
            <td>$${juego.precio}</td>
            <td>${juego.cantidad}</td>
        </tr>
        `;
    }
    document.querySelector('#carrito').innerHTML = rows;
}

function comprar() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    alert('Compra realizada con éxito');
    localStorage.removeItem('carrito');
    document.querySelector('#carrito').innerHTML = '';
}
