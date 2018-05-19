
let isMenuOpen = false;


function toggleMenu() {
    let nav = document.getElementById('nav');
    if (isMenuOpen) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
    isMenuOpen = !isMenuOpen;
}



