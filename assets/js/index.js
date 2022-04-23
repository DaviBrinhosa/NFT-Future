const botaoMenu = document.querySelector('.menu__mobile')
const sideMenu = document.querySelector('.side-menu')
var countToggle = 0

botaoMenu.addEventListener('click', sideMenuByButton)
window.addEventListener('scroll', sideMenuByScroll)
window.addEventListener('scroll', showButton)

function sideMenuByButton() {
    sideMenu.classList.toggle('side-menu--active');
    countToggle++
}

function sideMenuByScroll() {
    if (document.documentElement.scrollTop > 150 && countToggle % 2 !== 0) {
        sideMenu.classList.toggle('side-menu--active');
        countToggle++
    } 
}

const showButton01 = document.getElementById("post__button_01")
const showButton02 = document.getElementById("post__button_02")
const showButton03 = document.getElementById("post__button_03")
const showButton04 = document.getElementById("post__button_04")
const showBlur01 = document.getElementById("blur_01")
const showBlur02 = document.getElementById("blur_02")
const showBlur03 = document.getElementById("blur_03")
const showBlur04 = document.getElementById("blur_04")

function showButton() {
    if (window.screen.availWidth < 1280) {   
        if (document.querySelector('.post').getBoundingClientRect().top < 350){
            showButton01.style.display = "block";
            showBlur01.style.display = "block";
            showButton02.style.display = "block";
            showBlur02.style.display = "block";
            showButton03.style.display = "block";
            showBlur03.style.display = "block";
            showButton04.style.display = "block";
            showBlur04.style.display = "block";
        } else {
            showButton01.style.display = "none";
            showBlur01.style.display = "none";
            showButton02.style.display = "none";
            showBlur02.style.display = "none";
            showButton03.style.display = "none";
            showBlur03.style.display = "none";
            showButton04.style.display = "none";
            showBlur04.style.display = "none";
        }
    }
}

showButton01.getBoundingClientRect().top