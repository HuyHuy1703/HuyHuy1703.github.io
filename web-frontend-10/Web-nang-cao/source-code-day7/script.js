// js

// Get height screen

let bg = document.getElementsByClassName("banner-background")[0]



let data = window.getComputedStyle(bg)
let res = data.getPropertyValue("height")

let curent_height = window.innerHeight

bg.style.height = (curent_height - 100) + "px"
console.log(curent_height)
