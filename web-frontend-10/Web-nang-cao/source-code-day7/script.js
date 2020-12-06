// js

// Start
// Thay đổi chiều cao hình nền 
// để kín màn hình khi truy cập

// Lấy phần tử cần thay đổi
let bg = document.getElementsByClassName("banner-background")[0]

// lấy chiều cao và chiều rộng màn hình hiện tại
let curent_width = window.innerWidth
let curent_height = window.innerHeight

// lấy chiều cao navbar
let nav = document.getElementsByTagName("nav")[0]
let data = window.getComputedStyle(nav)
let res_nav = data.getPropertyValue("height")

// cắt chuỗi lấy ra số
let height_nav = res_nav.slice(0, -2)

// Thay đổi chiều cao hình nền kín với màn hình (bao gồm navbar)
if (curent_width > 992) {
    bg.style.height = (curent_height - height_nav) + "px"
} else if (curent_width <= 992) {
    bg.style.height = (curent_height - height_nav) + "px"
}
// End

// Start
// Thay đổi chiều cao nền khi resize

window.addEventListener("resize", _resize)

function _resize() {
    // lấy chiều cao và chiều rộng màn hình hiện tại
    let curent_width = window.innerWidth
    let curent_height = window.innerHeight

    // lấy chiều cao navbar
    let nav = document.getElementsByTagName("nav")[0]
    let data = window.getComputedStyle(nav)
    let res_nav = data.getPropertyValue("height")

    // cắt chuỗi lấy ra số
    let height_nav = res_nav.slice(0, -2)

    // Thay đổi chiều cao hình nền kín với màn hình (bao gồm navbar)
    if (curent_width > 992) {
        bg.style.height = (curent_height - height_nav) + "px"
    } else if (curent_width <= 992) {
        bg.style.height = (curent_height - height_nav) + "px"
    }
}
// End