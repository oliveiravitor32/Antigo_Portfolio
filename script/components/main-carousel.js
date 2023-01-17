
let carouselElements = document.querySelector('.Elements')

let timeOut = 0
let calcTranslateX = 0

const buttonRight = document.querySelector('#arrowButtonRight');
const buttonLeft = document.querySelector('#arrowButtonLeft');


// Click
function moveButtonRight() {
    calcTranslateX +=20
    carouselElements.style.transform = `translateX(${calcTranslateX}px)`
}

function moveButtonLeft() {
    calcTranslateX -=10
    carouselElements.style.transform = `translateX(${calcTranslateX}px)`
}



// Hold
buttonRight.addEventListener("mousedown", () => {
    
    timeOut = setInterval(() => {
        calcTranslateX +=10
        carouselElements.style.transform = `translateX(${calcTranslateX}px)`;
      }, 100);
})
buttonRight.addEventListener("mouseup", () => {
    clearInterval(timeOut);
});

buttonLeft.addEventListener("mousedown", () => {
    
    timeOut = setInterval(() => {
        calcTranslateX -=10
        carouselElements.style.transform = `translateX(${calcTranslateX}px)`;
      }, 100);
})
buttonLeft.addEventListener("mouseup", () => {
    clearInterval(timeOut);
});