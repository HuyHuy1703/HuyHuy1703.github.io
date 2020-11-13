// JS

function changeColor() {
    let p = document.querySelectorAll("p")

    p[0].style.color = "dodgerblue"
    p[1].style.color = "#D2D226"
    p[2].style.color = "red"
}

function changBgColor(bgColor) {
    bgColor = document.getElementById("bgColor").value
    let background = document.getElementsByTagName("body")

    background[0].style.backgroundColor = bgColor
}

function copyContent(paragraph1, paragraph2) {
    paragraph1 = document.getElementById("paste").value
    paragraph2 = document.getElementById("copy").value

    let to = document.getElementById(paragraph1)
    let from = document.getElementById(paragraph2)

    to.innerHTML = from.innerHTML
}

function changeFontSize(nbr) {
    nbr = document.getElementById("changeFontSize").value
    let res = parseInt(nbr)
    let p = document.querySelectorAll("p")

    p[0].style.fontSize = `${res}px`
    p[1].style.fontSize = `${res}px`
    p[2].style.fontSize = `${res}px`

}

function computed() {
    let p = document.getElementById("element").value
    let para = document.getElementById(p);
    let compStyles = window.getComputedStyle(para);
    res = compStyles.getPropertyValue("font-size").substring(0,2)
    res = parseInt(res)
    return res
}

function increaseFontSize(paragraph) {
    computed()
    let curentSize = res
    paragraph = document.getElementById("element").value
    p = document.getElementById(paragraph)
    
    p.style.fontSize = curentSize + 1 + "px"
}

function decreaseFontSize(paragraph) {
    computed()
    let curentSize = res
    paragraph = document.getElementById("element").value
    p = document.getElementById(paragraph)
    
    p.style.fontSize = curentSize - 1 + "px"
}