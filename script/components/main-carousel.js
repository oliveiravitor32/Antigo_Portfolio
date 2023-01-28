
const CardCourseOne = document.querySelector('#CardCourseOne');
const CardCourseTwo = document.querySelector('#CardCourseTwo');

// Click
function moveButtonRight() {
    let isCardCourseOne = CardCourseOne.classList.contains("-Target")

    if (isCardCourseOne) {
        CardCourseOne.style.display = "none"
        CardCourseOne.classList.remove("-Target","-FromRight", "-FromLeft")

        CardCourseTwo.style.display = "flex"
        CardCourseTwo.classList.add("-Target", "-FromRight")
    } else {
        CardCourseOne.style.display = "flex"
        CardCourseOne.classList.add("-Target", "-FromRight") 

        CardCourseTwo.style.display = "none"
        CardCourseTwo.classList.remove("-Target", "-FromRight", "-FromLeft")
    }
}

function moveButtonLeft() {
    let isCardCourseOne = CardCourseOne.classList.contains("-Target")

    if (isCardCourseOne) {
        CardCourseOne.style.display = "none"
        CardCourseOne.classList.remove("-Target", "-FromLeft", "-FromRight")

        CardCourseTwo.style.display = "flex"
        CardCourseTwo.classList.add("-Target" ,"-FromLeft")
    } else {
        CardCourseOne.style.display = "flex"
        CardCourseOne.classList.add("-Target","-FromLeft") 

        CardCourseTwo.style.display = "none"
        CardCourseTwo.classList.remove("-Target", "-FromLeft", "-FromRight")
    }
}



