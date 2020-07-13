import mouseLeaveMenu from './mouseLeaveMenu.js';
function clickMenuButton(){
    let nav = document.querySelector('.nav-tab')
    let link = document.querySelectorAll('.link');
        nav.classList.toggle('visible-nav');
            link[link.length-1].classList.toggle('button');
    
            const mouseLeft = document.querySelector('.nav-tab')
            mouseLeft.addEventListener('mouseleave', mouseLeaveMenu);
    return
}

export default clickMenuButton;