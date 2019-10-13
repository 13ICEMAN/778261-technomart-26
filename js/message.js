var meslink = document.querySelector(".buy");
var mespopup = document.querySelector(".modal-message");
var mesclose = mespopup.querySelector(".modal-close");

meslink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mespopup.classList.add("modal-show");
});

mesclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mespopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mespopup.classList.contains("modal-show")) {
      mespopup.classList.remove("modal-show");
    }
  }
});