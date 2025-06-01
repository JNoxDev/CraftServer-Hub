// Asegurar que las imágenes y recursos carguen correctamente
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar rutas de imágenes
    document.querySelectorAll('img').forEach(img => {
        if (!img.src.startsWith('http')) {
            const currentPath = img.src;
            if (currentPath.startsWith('/assets/')) {
                img.src = '/CraftServer-Hub' + currentPath;
            } else if (!currentPath.startsWith('http')) {
                img.src = '/CraftServer-Hub/assets/' + currentPath;
            }
        }
    });

    // Actualizar rutas de enlaces
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            if (href.startsWith('/assets/')) {
                link.setAttribute('href', '/CraftServer-Hub' + href);
            } else if (!href.startsWith('http')) {
                link.setAttribute('href', '/CraftServer-Hub/assets/' + href);
            }
        }
    });
});
