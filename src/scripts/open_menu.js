const btn = document.querySelector('.burger_menu');
const right_menu = document.querySelector('.right_open_menu');
const open_menu = document.querySelector('.open_menu');
const iks = document.querySelector('.iks');

btn.addEventListener('click', e => {
    open_menu.classList.add('open_menu_color');
    open_menu.style.zIndex = '9999';
    right_menu.style.right = '0';
    
})
iks.addEventListener('click', e => {
    open_menu.classList.remove('open_menu_color');
    open_menu.style.zIndex = '-1';
    right_menu.style.right = '-9999px';
    
})