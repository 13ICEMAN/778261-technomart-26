var fbLink = document.querySelector(".contacts-button");
var fbPopup = document.querySelector(".modal-feedback");
var fbClose = fbPopup.querySelector(".modal-close");
var form = fbPopup.querySelector("form");
var fullName = fbPopup.querySelector("[name=fullname]");
var email = fbPopup.querySelector("[name=email]");
var feedback = fbPopup.querySelector("[name=feedback]");
var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("fullName");
} catch (err) {
  isStorageSupport = false;
}

fbLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  fbPopup.classList.add("modal-show");
  if (storage) {
    fullName.value = storage;
    email.focus();
  } else {
    fullName.focus();
  }
});

fbClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  fbPopup.classList.remove("modal-show");
  fbPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!fullName.value || !email.value || !feedback.value) {
    evt.preventDefault();
    fbPopup.classList.remove("modal-error");
    fbPopup.offsetWidth = fbPopup.offsetWidth;
    fbPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fullname", fullname.value);
    }
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
