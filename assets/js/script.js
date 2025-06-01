document.addEventListener('DOMContentLoaded', function() {
    // Activate card animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        setTimeout(() => {
            card.classList.add('active');
        }, 100); // Small delay to ensure smooth animation
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === '#' && currentPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            mobileNav.classList.remove('active');
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    menuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('active');
        }
    });
});
