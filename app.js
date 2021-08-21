const mainTop = document.querySelector('.main-header')

window.addEventListener('scroll', animationNav)

function animationNav() {
  if (window.scrollY > mainTop.offsetHeight) {
    mainTop.classList.add('activ')
  } else {
    mainTop.classList.remove('activ')
  }
}