// Oggetto contenente le traduzioni
var traduzioni = {
  en: {
    presentation: "Hi, I'm Edoardo, Freelancer",
  },
  it: {
    presentation: "Ciao, Sono Edoardo, Freelancer",
  },
};

// Funzione per impostare la lingua nel localStorage
function impostaLingua(lingua) {
  localStorage.setItem("lingua", lingua);
  cambiaTraduzione(lingua);
}

// Funzione per cambiare le traduzioni sulla pagina
function cambiaTraduzione(lingua) {
  var elementiTradotti = document.querySelectorAll("[data-translate]");

  elementiTradotti.forEach(function (elemento) {
    var chiave = elemento.getAttribute("data-translate");
    elemento.textContent = traduzioni[lingua][chiave];
  });
}

// Funzione per gestire il clic sulla lingua
function cambiaLingua() {
  var elemento = document.getElementById("cliccabile");
  var linguaCorrente = elemento.innerText;

  // Traduci il testo nella lingua opposta quando viene cliccato
  if (linguaCorrente === "EN") {
    elemento.innerText = "IT";
    cambiaTraduzione("en");
  } else {
    elemento.innerText = "EN";
    cambiaTraduzione("it");
  }
  impostaLingua(elemento.innerText);
}

// Carica la lingua salvata, se presente, all'avvio della pagina
window.onload = function () {
  var lingua = localStorage.getItem("lingua");
  var elemento = document.getElementById("cliccabile");

  if (lingua === "it") {
    elemento.innerText = "IT";
  } else {
    elemento.innerText = "EN";
  }

  cambiaTraduzione(lingua || "en");
};

// Aggiungi l'evento di clic all'elemento per cambiare la lingua
document.getElementById("cliccabile").addEventListener("click", cambiaLingua);
