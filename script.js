document.addEventListener("DOMContentLoaded", (event) => {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const root = document.documentElement;
  const computedFontSize = parseFloat(window.getComputedStyle(root).fontSize);

  if (computedFontSize < 16) {
    root.style.fontSize = "16px";
  }
});
