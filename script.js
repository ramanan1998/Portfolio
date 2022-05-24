const hamBtn = document.querySelector(".hamburger");
const hamSlide = document.querySelector(".ham-slide");

hamBtn.addEventListener("click", () => {
    hamSlide.classList.add("slide-open");
});


hamSlide.addEventListener("click", () => {
    if(hamSlide.className == "ham-slide slide-open"){
        hamSlide.classList.remove("slide-open");
    }
})