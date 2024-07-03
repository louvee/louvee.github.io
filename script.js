document.addEventListener("DOMContentLoaded", (event) => {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});
