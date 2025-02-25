import data from "./data.js";

console.log(data);

data.map((item) => {
  const { name, icon } = item;

  const slideContainer = document.createElement("div");
  slideContainer.classList.add("slide");

  const img = document.createElement("img");
  img.src = icon;

  const techName = document.createElement("p");
  techName.innerText = name;
  techName.classList.add("tech-name");
  techName.style.display = "none";

  const revealBtn = document.createElement("button");
  revealBtn.innerText = "Reveal";
  revealBtn.classList.add("reveal-btn");

  revealBtn.addEventListener("click", () => {
    if (techName.style.display === "none" || techName.style.display === "") {
      techName.style.display = "block";
    } else {
      techName.style.display = "none";
    }
  });

  slideContainer.appendChild(img);
  slideContainer.appendChild(revealBtn);
  slideContainer.appendChild(techName);

  document.body.appendChild(slideContainer);
});
