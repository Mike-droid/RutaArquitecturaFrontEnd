const ipad = (window.matchMedia('screen and (max-width: 767px'));
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

burgerButton.addEventListener('click', hideShowMenu);

ipad.addListener(validation);

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click',hideShowMenu);
    }else{
        burgerButton.removeEventListener('click',hideShowMenu);
    }
    
}
validation(ipad);

function hideShowMenu() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active');
    }
}