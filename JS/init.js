import data from "./data.js";

const slidesWrapper = document.getElementById("slides-wrapper");

if (!slidesWrapper) {
  console.error("slides-wrapper not found in DOM");
}

data.forEach((item, index) => {
  const { name, icon } = item;

  const slideContainer = document.createElement("div");
  slideContainer.classList.add("slide");

  const img = document.createElement("img");
  img.src = icon;

  const techName = document.createElement("p");
  techName.innerText = name;
  techName.classList.add("tech-name");
  techName.style.display = "none"; // Initial state

  const revealBtn = document.createElement("button");
  revealBtn.innerText = "Reveal";
  revealBtn.classList.add("reveal-btn");

  revealBtn.addEventListener("click", () => {
    console.log(
      `Reveal clicked for slide ${index}. Current display: ${techName.style.display}`
    );
    // Toggle display and log the new state
    techName.style.display =
      techName.style.display === "none" ? "block" : "none";
    revealBtn.innerText = techName.style.display === "none" ? "Reveal" : "Hide";

    console.log(`New display value: ${techName.style.display}`);
    // Check computed style to see if CSS is overriding
    const computedStyle = window.getComputedStyle(techName).display;
    console.log(`Computed display (after toggle): ${computedStyle}`);
  });

  slideContainer.appendChild(img);
  slideContainer.appendChild(revealBtn);
  slideContainer.appendChild(techName);

  slidesWrapper.appendChild(slideContainer);
  console.log(`Slide ${index} added to DOM`);
});

// Set the first slide as active
const firstSlide = document.querySelector(".slide");
if (firstSlide) {
  firstSlide.classList.add("active");
} else {
  console.error("No slides found to set as active");
}
