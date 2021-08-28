// menu

const burgerMenu = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
burgerMenu.addEventListener('click', function() {
    if (!burgerMenu.classList.contains('open')) {
        burgerMenu.classList.add('open');
        menu.classList.add('open');
    } else {
        burgerMenu.classList.remove('open');
        menu.classList.remove('open');
    }
});

const buttonOpenSubMenu = document.querySelector('.blog-sub-menu');
const subMenu = document.querySelector('.sub__menu');
buttonOpenSubMenu.addEventListener('click', function(e) {
    e.preventDefault();
    subMenu.classList.toggle('open');
});


// back to top

let scrollToTopBtn = document.querySelector('.back-to-top');
let rootElement = document.documentElement;



function handleScroll() {
    let top = window.pageYOffset;


    if (top > 200) {
        // Show button
        scrollToTopBtn.classList.add("open");
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("open");
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", handleScroll);