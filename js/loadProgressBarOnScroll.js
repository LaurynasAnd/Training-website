function loadProgressBarOnScroll() {
    console.log('I started');
    if (document.body.scrollTop > 410 ||
        document.documentElement.scrollTop > 410) {
        const DOM = document.querySelectorAll('.fill');
        for (let i = 0; i < DOM.length; i++) {

            DOM[i].classList.toggle('animate-fill')
        }
        window.removeEventListener('scroll', loadProgressBarOnScroll)
    }
}

export default loadProgressBarOnScroll;