
const Menu = document.querySelector("#Menu-Nav")
const IconMenu = document.querySelector("#Icon-Menu")

function ToggleMobileMenu() {
    const isMenuOpen = Menu.classList.contains("-Open");

    if(!isMenuOpen) {
        IconMenu.classList.toggle("-Close")
        Menu.classList.toggle("-Open")   
        document.body.style = "overflow: hidden"  
    } else {
        IconMenu.classList.toggle("-Close")
        Menu.classList.toggle("-Open")   
        document.body.style = "overflow: visible"
    }
}

function MenuIsOpen() {
    const isMenuOpen = Menu.classList.contains("-Open");

    if(isMenuOpen) {
        Menu.classList.toggle("-Open")     
        IconMenu.classList.toggle("-Close")
        document.body.style = "overflow: visible"
    }
    
}