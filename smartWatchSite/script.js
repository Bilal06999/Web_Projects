// responsive nav menu
const hamburger = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const nav_menu = document.querySelector('.nav-menu');
const nav_links = document.querySelectorAll('.nav-link');


hamburger.addEventListener('click', () => {
    nav_menu.style.display = 'flex';
    nav_menu.classList.add('nav-menu-mobile');
    xmark.style.display = 'block';
    hamburger.style.display = 'none';
});
xmark.addEventListener('click', () => {
    nav_menu.style.display = 'none';
    nav_menu.classList.remove('nav-menu-mobile');
    xmark.style.display = 'none';
    hamburger.style.display = 'block';
})
nav_links.forEach((nav_link) => {
    nav_link.addEventListener('click', () => {
        nav_menu.style.display = 'none';
        nav_menu.classList.remove('nav-menu-mobile');
        xmark.style.display = 'none';
        hamburger.style.display = 'block';
    })
})