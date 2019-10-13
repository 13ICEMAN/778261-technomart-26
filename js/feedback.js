var fblink = document.querySelector(".contacts-button");
var fbpopup = document.querySelector(".modal-feedback");
var fbclose = fbpopup.querySelector(".modal-close");
var form = fbpopup.querySelector("form");
var fullname = fbpopup.querySelector("[name=fullname]");
var email = fbpopup.querySelector("[name=email]");
var feedback = fbpopup.querySelector("[name=feedback]");

fblink.addEventListener("click", function (evt) {
  evt.preventDefault();
  fbpopup.classList.add("modal-show");
  fullname.focus();
});

fbclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  fbpopup.classList.remove("modal-show");
  fbpopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !feedback.value) {
    evt.preventDefault();
    fbpopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (fbpopup.classList.contains("modal-show")) {
      fbpopup.classList.remove("modal-show");
      fbpopup.classList.remove("modal-error");
    }
  }
});
