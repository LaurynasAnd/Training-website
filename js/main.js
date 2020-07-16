import clickMenuButton from './menuButton.js';
import icons from '../data/socials.js';
import renderSocialIcons from './renderSocialIcons.js';
import clock from './clock.js'


if (document.querySelector('.menu-btn')) {
    const menu = document.querySelector('.menu-btn')
    menu.addEventListener('click', clickMenuButton);
}

if (document.querySelector('.social-icons')) {
    renderSocialIcons('.social-icons', icons);
}

if (document.querySelector('.clock')) {
    clock('.clock')
}


// clickMenuButton();