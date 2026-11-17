
$(document).ready(function () {

    // OWL CAROUSEL
    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // NEXT BUTTON
    $('.next').click(function () {
        $('.product-carousel').trigger('next.owl.carousel');
    });

    // PREVIOUS BUTTON
    $('.prev').click(function () {
        $('.product-carousel').trigger('prev.owl.carousel');
    });

});


// MOBILE MENU
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', function () {

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


// MENU LINK CLICK
document.querySelectorAll('.nav-links a').forEach(function (link) {

    link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });

});


// CONTACT FORM
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {

    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.innerText = 'Please fill in all fields!';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.innerText = 'Your message has been received!';

    contactForm.reset();

});


// SCROLL REVEAL
const revealElements = document.querySelectorAll(
    '.section-heading, .about-content, .product-card, .duo-content, .contact-container'
);

const revealObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {
    element.classList.add('reveal');
    revealObserver.observe(element);
});


// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.96)';
    } else {
        navbar.style.background = 'rgba(8,8,8,0.88)';
    }

});
