// Selezione di tutti i link del menu
var linkMenu = document.querySelectorAll(".link-menu");

// Funzione per gestire l'opacità dei link
function handleLinkOpacity(link) {
  // Rimuovi la classe 'opacita025' da tutti i link del menu
  linkMenu.forEach(function (item) {
    item.classList.remove("opacita025");
  });

  // Aggiungi la classe 'opacita025' a tutti i link del menu tranne al link corrente
  linkMenu.forEach(function (item) {
    if (item !== link) {
      item.classList.add("opacita025");
    }
  });
}

// Aggiungi un event listener a ciascun link del menu
linkMenu.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    handleLinkOpacity(link);
  });

  link.addEventListener("mouseout", function () {
    // Quando il mouse esce dal link, rimuovi la classe 'opacita025' da tutti i link del menu
    linkMenu.forEach(function (item) {
      item.classList.remove("opacita025");
    });
  });
});
