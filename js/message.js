var mesLink = document.querySelectorAll(".buy");
var mesPopup = document.querySelector(".modal-message");
var mesClose = mesPopup.querySelector(".modal-close");

for (i = 0; i < mesLink.length; ++i) {
  mesLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    mesPopup.classList.add("modal-show");
});
}

mesClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mesPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mesPopup.classList.contains("modal-show")) {
      mesPopup.classList.remove("modal-show");
    }
  }
});
