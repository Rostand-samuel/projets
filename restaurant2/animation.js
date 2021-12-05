/*-------------Afficher la barre de Navigation en couleur blanche-------*/

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

/*function Menu() {
    ccont Menu = document.querySelector('.menutoggle');
    const navbar = document.querySelector('navbar');
    menutoggle.classList.toggle('active');
    navbar.classList.toggle('active');
}*/