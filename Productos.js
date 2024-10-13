// Datos de ejemplo de productos
const productos = [
    { id: 1, nombre: "Laptop Dell XPS", descripcion: "Potente laptop para desarrollo", imagen: "Laptop-dell.png", servicio: "software" },
    { id: 2, nombre: "Servidor HP ProLiant", descripcion: "Servidor de alto rendimiento", imagen: "prolaint.jpg", servicio: "infra" },
    { id: 3, nombre: "Cámara IP Hikvision", descripcion: "Cámara de seguridad de alta resolución", imagen: "camara.jpg", servicio: "cctv" },
    { id: 4, nombre: "Router Cisco", descripcion: "Router empresarial de alta gama", imagen: "router.jpg", servicio: "redes" },
    { id: 5, nombre: "Software de Gestión", descripcion: "ERP personalizable", imagen: "gestion.jpg", servicio: "software" },
    { id: 6, nombre: "Kit de Herramientas", descripcion: "Set completo para mantenimiento", imagen: "kit.jpg", servicio: "soporte" },
    { id: 7, nombre: "Pantalla Interactiva", descripcion: "Para capacitaciones dinámicas", imagen: "pantalla.jpg", servicio: "capacitacion" },
    { id: 8, nombre: "Dashboard Analytics", descripcion: "Software de análisis de datos", imagen: "dashboard.jpg", servicio: "asesoria" },
    { id: 9, nombre: "Hosting Web", descripcion: "Alojamiento web de alta velocidad", imagen: "hosting.jpg", servicio: "web" },
    // Añade más productos aquí...
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayProductos(productosArray) {
    const grid = document.getElementById('productos-grid');
    grid.innerHTML = '';
    productosArray.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="Imagenes/${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <div class="producto-info">
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProductos() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const selectedService = document.getElementById('service-filter').value;
    
    let filteredProductos = productos.filter(producto => 
        (producto.nombre.toLowerCase().includes(searchTerm) || 
         producto.descripcion.toLowerCase().includes(searchTerm)) &&
        (selectedService === 'all' || producto.servicio === selectedService)
    );
    
    displayProductos(filteredProductos);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProductos(shuffleArray([...productos]));
    
    document.getElementById('search').addEventListener('input', filterProductos);
    document.getElementById('service-filter').addEventListener('change', filterProductos);
});

// Animación de carga
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
});

// Animación al hacer scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    const cards = document.querySelectorAll('.producto-card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);