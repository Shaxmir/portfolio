const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveScroll(param) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = param * divider / 10;
        layer.style.transform = `translateY(-${strafe}%)`;
    })
}
window.addEventListener('scroll', e => {
    const param = window.pageYOffset;
    moveScroll(param);
})