import clickMenuButton from './menuButton.js';
import mouseOutMenu from './mouseOutMenu.js'

const menu = document.querySelector('.menu-btn')
menu.addEventListener('click', clickMenuButton);

const menu2 = document.querySelector('.nav-tab')
menu2.addEventListener('mouseout', mouseOutMenu);
// clickMenuButton();