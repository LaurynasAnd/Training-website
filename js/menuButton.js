function clickMenuButton(){
    // console.log("working");
    console.log('on click');
    
    let button = document.querySelector('.menu-btn');
    let nav = document.querySelector('.nav-tab')
    let link = document.querySelectorAll('.link');
    // console.log(button);
    // console.log(link);
    // button.onclick = function () {
        button.classList.toggle('change');
        nav.classList.toggle('visible-nav');
        // nav.classList.toggle('nav-tab');
        for (let i = 0; i < link.length; i++){
            // link[i].classList.toggle('visible-link');
            if (i === link.length - 1){
            link[i].classList.toggle('button');
            }
        }
    // }
    

    return
}

export default clickMenuButton;