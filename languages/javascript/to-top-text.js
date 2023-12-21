var scrollLink = document.getElementById("scrollLink");

scrollLink.addEventListener("click", function (event) {
  event.preventDefault(); // Previeni il comportamento predefinito del link (navigazione)

  window.scrollTo({
    top: 0,
    behavior: "smooth", // Aggiunta dello smooth scroll
  });
});
