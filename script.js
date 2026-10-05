const year = document.querySelector("#year");
const treatButton = document.querySelector(".treat-button");
const treatToast = document.querySelector(".treat-toast");

year.textContent = new Date().getFullYear();

treatButton.addEventListener("click", () => {
  treatToast.classList.add("show");
  window.setTimeout(() => treatToast.classList.remove("show"), 2200);
});
