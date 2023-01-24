
const Menu = document.querySelector("#Menu-Nav")
const CloseIcon = document.querySelector("#CloseIcon")

function ToggleMobileMenu(Icon) {

    if(Menu.classList.toggle("-Open")) {
        document.body.style = "overflow: hidden"
    } else {
        document.body.style = "overflow: visible"
    }
    if(Icon.classList.toggle("-Close")) {
        
    }
    
}