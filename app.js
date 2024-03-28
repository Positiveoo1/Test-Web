const faBars = document.getElementsByClassName("fa-bars")[0];

const module = document.getElementsByClassName("module")[0];

faBars.addEventListener("click", () => {
  module.classList.toggle("active");
});
