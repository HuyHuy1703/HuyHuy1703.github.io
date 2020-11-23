// JS

let menu = document.getElementsByClassName("menu")[0]

// let ul_list = document.getElementsByTagName("ul")[0]

window.addEventListener("resize", _resize)

function _resize() {

    let currentWidth = window.innerWidth

    if (currentWidth > 576) {
        menu.style.display = "flex"
    }
}

function hamburger() {

    let comp = window.getComputedStyle(menu)
    let val = comp.getPropertyValue("display")

    if (val === "flex") {
        menu.style.display = "none"
    } else if (val === "none") {
        menu.style.display = "flex"
    }

}