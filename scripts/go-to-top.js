const goToTop = document.querySelector('#go-to-top');
const home = document.querySelector('#home');

let showing = false;

document.addEventListener("scroll", function () {
    const top = home.getClientRects()[0].top;

    if (top < -10 && !showing) {
        showing = true;
        goToTop.classList.remove('d-none')
    } else if (top >= -10 && showing) {
        goToTop.classList.add('d-none')
        showing = false;
    }
});