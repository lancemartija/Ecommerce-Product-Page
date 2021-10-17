const sidebarMenu = document.querySelector('[data-sidebar-menu]')
const overlay = document.querySelector('[data-sidebar-overlay]')
const body = document.querySelector('body')

document.addEventListener('click', (e) => {
  const isHamburger = e.target.matches('[data-hamburger-button]')
  const isCloseButton = e.target.matches('[data-close-button]')

  if (e.target.closest('[data-sidebar-menu]') == null) {
    body.classList.remove('no-scroll')
    sidebarMenu.classList.remove('active')
    overlay.classList.remove('overlay')
  }

  if (
    isHamburger ||
    isCloseButton ||
    e.target.closest('[data-hamburger-button]') != null ||
    e.target.closest('[data-close-button]') != null
  ) {
    body.classList.toggle('no-scroll')
    sidebarMenu.classList.toggle('active')
    overlay.classList.toggle('overlay')
  }
})
