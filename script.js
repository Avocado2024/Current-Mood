const homeDiv = document.getElementById("home");
const displayDiv = document.getElementById("display");
const actionBtn = document.getElementById("actionBtn");

actionBtn.addEventListener("click", () => {
  homeDiv.classList.add("hidden");
  displayDiv.classList.remove("hidden");

  setTimeout(() => {
    homeDiv.classList.remove("hidden");
    displayDiv.classList.add("hidden");
  }, 5000);
});
