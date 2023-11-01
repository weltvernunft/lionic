const hIcon = document.querySelector('.h-menu')
const hMenu = document.querySelector('.side-nav')
const navBlur = document.querySelector('.blur')

hIcon.addEventListener('click', () => {
    hIcon.classList.toggle('open')
    hMenu.classList.toggle('open')
    navBlur.classList.toggle('open')
    navBlur.classList.toggle('t-off')
})