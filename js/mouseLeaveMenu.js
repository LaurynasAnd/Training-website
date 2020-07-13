let DOM;
function mouseLeaveMenu() {
    if (DOM = document.querySelector('.visible-nav')) {
        
        let link = document.querySelectorAll('.link');
        DOM.classList.toggle('visible-nav');
        link[link.length-1].classList.toggle('button');
        
        const mouseLeft = document.querySelector('.nav-tab')
        mouseLeft.removeEventListener('mouseleave', mouseLeaveMenu);
    
    }
    
}

export default mouseLeaveMenu;