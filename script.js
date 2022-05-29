const hamBtn = document.querySelector("#open");
const crossBtn = document.querySelector("#close");
const hamSlide = document.querySelector(".ham-slide");

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");
const submitButton = document.getElementById("submit-button");

function openbar(){
    
    hamSlide.style.visibility = "visible";
    hamSlide.style.width = "200px"; 
    crossBtn.style.display = "block"; 
    hamBtn.style.display = "none";
}

function closebar(){
    hamSlide.style.width = "0"; 
    hamSlide.style.visibility = "hidden";
    hamBtn.style.display = "block";
    crossBtn.style.display = "none"; 
}
