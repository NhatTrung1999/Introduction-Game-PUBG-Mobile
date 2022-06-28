let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 5000)
}

const btnOpen = document.querySelector(".js-btn");
const overPlay = document.querySelector(".js-overplay")
const btnClose = document.querySelector(".js-close")
const btnOutside = document.getElementById("videoPlayer")

function showPopup() {
    overPlay.classList.add("open");
}

function hidePopup() {
    overPlay.classList.remove('open');
}

function pause() {
    btnOutside.pause();
}

btnOpen.addEventListener("click", showPopup)
btnClose.addEventListener("click", hidePopup)
btnClose.addEventListener("click", pause)
overPlay.addEventListener("click", hidePopup)
overPlay.addEventListener("click", pause)