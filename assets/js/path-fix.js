// Asegurar que las imágenes y recursos carguen correctamente
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar rutas de imágenes
    document.querySelectorAll('img').forEach(img => {
        if (!img.src.startsWith('http')) {
            img.src = '/CraftServer-Hub' + img.src;
        }
    });

    // Actualizar rutas de enlaces
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            link.setAttribute('href', '/CraftServer-Hub' + href);
        }
    });
});
