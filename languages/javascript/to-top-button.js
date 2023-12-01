var scrollButton = document.getElementById("scrollButton");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Aggiunta dello smooth scroll
  });
});
