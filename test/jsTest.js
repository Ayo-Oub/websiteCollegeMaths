// Récupérer les éléments nécessaires
const openPopupBtn = document.getElementById("openPopupBtn");
const popupContainer = document.getElementById("popupContainer");
const closeBtn = document.querySelector(".close-btn");

// Ouvrir la pop-up quand l'utilisateur clique sur le bouton
openPopupBtn.addEventListener("click", function () {
  popupContainer.style.display = "flex";
});

// Fermer la pop-up quand l'utilisateur clique sur le bouton de fermeture
closeBtn.addEventListener("click", function () {
  popupContainer.style.display = "none";
});

// Fermer la pop-up si l'utilisateur clique en dehors de la pop-up
window.addEventListener("click", function (event) {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});
