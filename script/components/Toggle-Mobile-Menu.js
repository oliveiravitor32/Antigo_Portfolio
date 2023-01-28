
const Menu = document.querySelector("#Menu-Nav")
const IconMenu = document.querySelector("#Icon-Menu")
const SkillsLink = document.querySelector("#Skills-Link") 




function ToggleMobileMenu() {
    const isMenuOpen = Menu.classList.contains("-Open");

    if(!isMenuOpen) {
        IconMenu.classList.toggle("-Close")
        Menu.classList.toggle("-Open")
        document.body.style = "overflow: hidden"

        window.addEventListener('resize', function CheckSize() {
            if (Menu.getBoundingClientRect().width === 700) {
                document.body.style = "overflow: visible"
            } else if (Menu.getBoundingClientRect().width <= 980) {
                document.body.style = "overflow: hidden"
            }
        }, true);
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

function ChangeFocusToIcon(buttonFocus) {
    const isMenuOpen = Menu.classList.contains("-Open");

    if(isMenuOpen) {
        buttonFocus.addEventListener("focusout", () => {
            IconMenu.focus();
        })
    }
}
function ChangeFocusToFirstLink(x) {
    const isMenuOpen = Menu.classList.contains("-Open");

    if(isMenuOpen) {
        x.addEventListener("focusout", () => {
            SkillsLink.focus();
        })
    }
}