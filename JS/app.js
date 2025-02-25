let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const updateSlide = () => {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });
};

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % slides.length;
  } else if (event.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }
  updateSlide();
});

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    currentSlide = [...slides].indexOf(slide);
    updateSlide();
  });
});

updateSlide();
