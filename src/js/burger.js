const burgerOpen = document.querySelector('.burger-open')
const burgerClose = document.querySelector('.burger-close')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.body

function toggleScroll() {
  body.classList.toggle('locked')
}

function toggleBurger() {
  toggleScroll()
  burgerMenu.classList.toggle('active')
}

burgerOpen.addEventListener('click', () => {
  toggleBurger()
})
burgerClose.addEventListener('click', () => {
  toggleBurger()
})
