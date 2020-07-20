import clickMenuButton from './menuButton.js';
import progressBars from '../data/progressBars.js';
import icons from '../data/socials.js';
import renderSocialIcons from './renderSocialIcons.js';
import clock from './clock.js';
import renderProgressBars from './renderProgressBars.js'
import loadProgressBarOnScroll from './loadProgressBarOnScroll.js'

const {leftProgressBars} = progressBars;

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
if (document.querySelector('.left-column')) {
    renderProgressBars(leftProgressBars);
}

if (document.querySelector('.fill')) {
    const DOM = document.querySelector('body');
    window.addEventListener('scroll', loadProgressBarOnScroll);    
}

// clickMenuButton();