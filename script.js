const navButton = document.getElementById("nav-button")
const navMenu = document.querySelector("#nav-menu")

navButton.addEventListener("click", (e) => {
    navMenu.classList.toggle("nav-menu-active")
})