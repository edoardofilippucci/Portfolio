var password = "ciao";

function passcheck() {
  if (document.getElementById("pass1").value != password) {
    alert("Password Errata, Riprova!");
    return false;
  }
  if (document.getElementById("pass1").value == password) {
    alert("Password Corretta. Premi OK per entarre nel Sito Web");
  }
}
