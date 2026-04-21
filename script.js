
document.addEventListener('DOMContentLoaded', () => {
    
    let carritoCount = 0;
    
    const contador = document.getElementById('contador-carrito');
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    const actualizarContador = () => {
        carritoCount++;
        contador.textContent = carritoCount;
        
        contador.classList.add('bg-primary');
        setTimeout(() => contador.classList.remove('bg-primary'), 300);
    };

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            actualizarContador();
            console.log(`Producto ID ${boton.dataset.id} añadido.`);
        });
    });
});