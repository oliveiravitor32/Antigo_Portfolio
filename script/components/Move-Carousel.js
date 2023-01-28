
const CardCourseOne = document.querySelector('#CardCourseOne');
const CardCourseTwo = document.querySelector('#CardCourseTwo');

// Click
function moveButtonRight() {
    let isCardCourseOne = CardCourseOne.classList.contains("-Target")

    if (isCardCourseOne) {
        CardCourseOne.classList.remove("-Target","-FromRight", "-FromLeft")

        CardCourseTwo.classList.add("-Target", "-FromRight")
    } else {
        CardCourseOne.classList.add("-Target", "-FromRight") 

        CardCourseTwo.classList.remove("-Target", "-FromRight", "-FromLeft")
    }
}

function moveButtonLeft() {
    let isCardCourseOne = CardCourseOne.classList.contains("-Target")

    if (isCardCourseOne) {
        CardCourseOne.classList.remove("-Target", "-FromLeft", "-FromRight")

        CardCourseTwo.classList.add("-Target" ,"-FromLeft")
    } else {
        CardCourseOne.classList.add("-Target","-FromLeft") 

        CardCourseTwo.classList.remove("-Target", "-FromLeft", "-FromRight")
    }
}



