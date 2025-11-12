// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle icons
    if (navMenu.classList.contains('active')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Close menu when clicking on a link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});

// Close menu when resizing to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});
