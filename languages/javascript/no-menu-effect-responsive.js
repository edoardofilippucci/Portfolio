// Funzione per rimuovere il caricamento di uno specifico file JavaScript quando la finestra diventa responsive
function checkAndRemoveScriptOnResponsive() {
  if (window.innerWidth <= 1100) {
    // Controllo per il file JavaScript da escludere (script.js)
    var excludedScript = document.querySelector(
      'script[src="./menu-effect.js"]'
    );
    if (excludedScript) {
      excludedScript.remove(); // Rimuove il tag script che carica il file JavaScript specificato
    }
  }
}

// Attiva la verifica quando la finestra viene caricata e ridimensionata
window.addEventListener("load", checkAndRemoveScriptOnResponsive);
window.addEventListener("resize", checkAndRemoveScriptOnResponsive);
