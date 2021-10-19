const sidebarMenu = document.querySelector('[data-sidebar-menu]')
const overlay = document.querySelector('[data-sidebar-overlay]')
const body = document.querySelector('body')

function removeFocus(data, curr) {
  data.forEach((element) => {
    if (element === curr) return
    element.classList.remove('focus')
  })
}

function removeClass() {
  if (window.innerWidth > 767) {
    body.classList.remove('no-scroll')
    sidebarMenu.classList.remove('toggle-in')
    sidebarMenu.classList.remove('toggle-out')
    overlay.classList.remove('overlay')
  }
}

window.addEventListener('resize', removeClass)

document.addEventListener('click', (e) => {
  // ---------- SIDEBAR MENU LOGIC ---------- //
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
  } else if (
    sidebarArea == null &&
    sidebarMenu.classList.contains('toggle-in')
  ) {
    body.classList.remove('no-scroll')
    sidebarMenu.classList.remove('toggle-in')
    sidebarMenu.classList.add('toggle-out')
    overlay.classList.remove('overlay')
  }

  // ---------- GALLERY THUMBNAIL LOGIC ---------- //
  const thumbnailFocus = document.querySelectorAll('[data-thumbnail].focus')
  const containerFocus = document.querySelectorAll(
    '[data-thumbnail-container].focus'
  )
  const isThumbnail = e.target.matches('[data-thumbnail]')
  let currentThumbnail
  let currThumbContainer

  if (isThumbnail) {
    currentThumbnail = e.target.closest('[data-thumbnail')
    currThumbContainer = e.target.closest('[data-thumbnail-container]')
    currentThumbnail.classList.add('focus')
    currThumbContainer.classList.add('focus')
  }

  if (e.target.closest('[data-thumbnail]') != null) {
    removeFocus(thumbnailFocus, currentThumbnail)
    removeFocus(containerFocus, currThumbContainer)
  }
})
