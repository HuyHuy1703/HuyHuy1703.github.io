// js

// Get height screen

let bg = document.getElementsByClassName("banner-background")[0]

let curent_width = window.innerWidth

let curent_height = window.innerHeight

if (curent_width > 992) {
    bg.style.height = (curent_height - 100) + "px"
    console.log(curent_height)
}else if(curent_width <= 992){
    bg.style.height = (curent_height - 63) + "px"
}

