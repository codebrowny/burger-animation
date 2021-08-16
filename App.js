const burgerMenu = document.querySelector('#burger-menu');
const navLinks = document.querySelector('#nav-links');
const allLinks = document.querySelectorAll('#nav-links li');


// toggle navLink section
const toggleNavLinks = () => {
    navLinks.classList.toggle('open');
    burgerMenu.classList.toggle('change');

}

burgerMenu.addEventListener('click', toggleNavLinks);

allLinks.forEach(link => {
    link.classList.toggle('fade');
    link.addEventListener('click', toggleNavLinks);
})