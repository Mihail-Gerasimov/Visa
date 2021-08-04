"use ctrict";

// modal

const burgerBtn = document.querySelector('.burder-menu'),
    mobileMenu = document.querySelector('.navigation-block__mobile');

burgerBtn.onclick = function () {
    mobileMenu.classList.toggle('navigation-block__mobile--active');
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        mobileMenu.classList.remove('navigation-block__mobile--active');
    }
    prevScrollpos = currentScrollPos;
};
