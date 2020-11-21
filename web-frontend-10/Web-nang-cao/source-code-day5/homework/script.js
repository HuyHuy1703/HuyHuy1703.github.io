// JS

    let monitor = document.getElementsByTagName("html")

    let comp_mor = window.getComputedStyle(monitor[0])
    
    let val_mor = comp_mor.getPropertyValue("width")

function hamburger(){

    let menu = document.getElementById("menu-mobile")
    
    let btn = document.querySelector("button")

    let comp = window.getComputedStyle(menu)

    let val = comp.getPropertyValue("display")
    
    if(val == "flex"){
        menu.style.display = "none"        
    }else if(val == "none"){
        menu.style.display = "flex"
    }

    let res_mor = val_mor.slice(val_mor, -2)

    // console.log(monitor)
    // console.log(comp_mor)

    
    // console.log(comp)
    // console.log(val)

    console.log(res_mor)
}

console.log("Size : " + val_mor)
