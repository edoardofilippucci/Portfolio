// Rimuovi il cursore personalizzato e ripristina il cursore predefinito quando la finestra diventa responsive (per esempio, quando si ridimensiona sotto una certa larghezza)
function removeCustomCursorOnResponsive() {
  var cursorElements = document.querySelectorAll(".cursor, .cursor2");
  cursorElements.forEach(function (cursorElement) {
    cursorElement.style.display = "none"; // Nasconde il cursore personalizzato
  });
}

// Verifica se la larghezza della finestra è inferiore o uguale a 1100px per attivare la rimozione del cursore personalizzato
function checkResponsive() {
  if (window.innerWidth <= 1100) {
    removeCustomCursorOnResponsive();
  }
}

// Attiva la verifica quando la finestra viene caricata e ridimensionata
window.addEventListener("load", checkResponsive);
window.addEventListener("resize", checkResponsive);
