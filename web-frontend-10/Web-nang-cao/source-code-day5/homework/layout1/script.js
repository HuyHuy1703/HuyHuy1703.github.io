// JS

let menu = document.getElementsByClassName("menu")[0]

window.addEventListener("resize", _resize)

function _resize() {

    let currentWidth = window.innerWidth

    if (currentWidth > 576) {
        menu.style.display = "flex"
    }
}

function hamburger() {

    let comp = window.getComputedStyle(menu)
    let display = comp.getPropertyValue("display")

    if (display === "flex") {
        menu.style.display = "none"
    } else if (display === "none") {
        menu.style.display = "flex"
    }

}