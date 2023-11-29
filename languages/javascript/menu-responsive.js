const toggleMenu = document.getElementById("toggleMenu");
const sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "toggleMenu") {
    toggleMenu.classList.remove("active");
    sidebar.classList.remove("active");
  }
};

toggleMenu.onclick = function () {
  toggleMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
};
