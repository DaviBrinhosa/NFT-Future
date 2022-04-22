const botaoMenu = document.querySelector('.menu__mobile')
const sideMenu = document.querySelector('.side-menu')

botaoMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('side-menu--active')
})