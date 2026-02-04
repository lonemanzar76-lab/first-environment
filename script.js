const formulas = document.querySelectorAll(".formula");
const tip = document.querySelector("#formula-tip");

formulas.forEach((button) => {
  button.addEventListener("click", () => {
    formulas.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const message = button.dataset.tip || "Formula tip is coming soon.";
    tip.textContent = `Tip: ${message}`;
  });
});
