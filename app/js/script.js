const sidebarMenu = document.querySelector('[data-sidebar-menu]')
const overlay = document.querySelector('[data-sidebar-overlay]')
const body = document.querySelector('body')

window.addEventListener('resize', () => {
  if (this.innerWidth > 767) {
    body.classList.remove('no-scroll')
    sidebarMenu.classList.remove('toggle-in')
    sidebarMenu.classList.remove('toggle-out')
    overlay.classList.remove('overlay')
  }
})

document.addEventListener('click', (e) => {
  const isHamburger = e.target.matches('[data-hamburger-button]')
  const isCloseButton = e.target.matches('[data-close-button]')
  const sidebarArea = e.target.closest('[data-sidebar-menu]')
  const hamburgerArea = e.target.closest('[data-hamburger-button]')
  const closeArea = e.target.closest('[data-close-button]')

  if (isHamburger || hamburgerArea != null) {
    body.classList.toggle('no-scroll')
    sidebarMenu.classList.add('toggle-in')
    sidebarMenu.classList.remove('toggle-out')
    overlay.classList.toggle('overlay')
  } else if (isCloseButton || closeArea != null) {
    body.classList.toggle('no-scroll')
    sidebarMenu.classList.remove('toggle-in')
    sidebarMenu.classList.add('toggle-out')
    overlay.classList.toggle('overlay')
  } else if (sidebarArea == null) {
    body.classList.remove('no-scroll')
    sidebarMenu.classList.remove('toggle-in')
    sidebarMenu.classList.add('toggle-out')
    overlay.classList.remove('overlay')
  }
})
