document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    // Hamburger menu functionality
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
        body.classList.toggle('nav-open');
    });

    // Smooth scrolling and close menu on link click
    document.querySelectorAll('.nav-links li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    hamburger.classList.remove('toggle');
                    body.classList.remove('nav-open');
                }
            }
        });
    });
});