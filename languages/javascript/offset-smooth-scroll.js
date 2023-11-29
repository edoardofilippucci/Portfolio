// Aggiungi uno script che gestisca lo scroll con offset solo in situazioni responsive
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      let offset = 0; // Offset predefinito
      if (window.innerWidth < 1100) {
        // Ad esempio, se la larghezza è inferiore a 1100px (sostituisci con la tua condizione)
        offset = 70; // Modifica l'offset per dispositivi con larghezza inferiore a 1100px
      }

      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Per uno scrolling fluido
      });
    }
  });
});
