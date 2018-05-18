
let isMenuOpen = false;


function ToggleMenu() {
    let nav = document.getElementById('nav');
    if (isMenuOpen) {
        nav.classList.remove('menu-open');
    } else {
        nav.classList.add('menu-open');
    }
    isMenuOpen = !isMenuOpen;
}