var fbLink = document.querySelector(".contacts-button");
var fbPopup = document.querySelector(".modal-feedback");
var fbClose = fbPopup.querySelector(".modal-close");
var form = fbPopup.querySelector("form");
var fullName = fbPopup.querySelector("[name=fullname]");
var email = fbPopup.querySelector("[name=email]");
var feedback = fbPopup.querySelector("[name=feedback]");

fbLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  fbPopup.classList.add("modal-show");
  fullName.focus();
});

fbClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  fbPopup.classList.remove("modal-show");
  fbPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !feedback.value) {
    evt.preventDefault();
    fbPopup.classList.remove("modal-error");
    fbPopup.offsetWidth = fbPopup.offsetWidth;
    fbPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (fbPopup.classList.contains("modal-show")) {
      fbPopup.classList.remove("modal-show");
      fbPopup.classList.remove("modal-error");
    }
  }
});
