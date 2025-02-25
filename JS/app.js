let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

slides[0].classList.add("active");

document.addEventListener("keydown", function (event) {
  slides[currentSlide].classList.remove("active");

  if (event.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % slides.length;
  } else if (event.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  slides[currentSlide].classList.add("active");

  let techName = slides[currentSlide].querySelector(".tech-name");
  if (techName) techName.style.display = "none";
});
