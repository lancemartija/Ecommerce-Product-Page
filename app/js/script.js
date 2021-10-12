const sidebarMenu = document.querySelector('[data-sidebar-menu]')

document.addEventListener('click', (e) => {
  const isHamburger = e.target.matches('[data-hamburger-button]')
  const isCloseButton = e.target.matches('[data-close-button]')

  if (
    isHamburger ||
    isCloseButton ||
    e.target.closest('[data-hamburger-button]') != null ||
    e.target.closest('[data-close-button]') != null
  ) {
    sidebarMenu.classList.toggle('active')
  }
})
