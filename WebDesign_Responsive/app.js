const menu = document.querySelector('#mobile-menu');
const menuLinks = documents.querySelector('.navbar_menu');

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('avtive');
}

menu.addEventListener('click'),mobileMenu);
