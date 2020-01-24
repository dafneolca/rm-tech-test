var slideIndex = 1;
showSlides(slideIndex);

var mobileMenuView = false;

function login() {
    console.log('Hello, you are now logged in')
}

// MOBILE MENU
function displayMobileMenu() {
    console.log('click')
    mobileMenuView = !mobileMenuView;
    var menu = document.getElementById('mobile-navigation');
    var backdrop = document.getElementById('backdrop');
    mobileMenuView ? menu.classList.remove('hide-menu') : menu.classList.add('hide-menu');
    mobileMenuView ? backdrop.classList.remove('hide-menu') : backdrop.classList.add('hide-menu');
}

// CUSTOM DROPDOWN TOGGLE
function dropdownSelection(item) {
    var origButtonString = document.getElementById('dropdown-toggle');
    var newButtonString = item.innerHTML;
    origButtonString.innerHTML = newButtonString;
}


// SLIDER CONTROLS
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    console.log('slides', slides)
    console.log('slides', slides.length)
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log('slides', slides)
}
