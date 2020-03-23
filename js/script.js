
  var button = document.querySelector(".login-link");
  var buy_click_form = document.querySelector(".main-catalog-list-wrapper");
  var popup = document.querySelector(".section-form");
  var map = document.querySelector(".modal-map");
  var contacts = document.querySelector(".contacts");
  var close = popup.querySelector(".modal-close");
  var close_two =map.querySelector(".modal-close");
  var click_map = contacts.querySelector(".map");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var email = popup.querySelector("[name=email]");
  var isStorageSupport = true;

  var buy_click = buy_click_form.querySelector(".buy-product");

  var storage = "";




  try {
    storage = localStorage.getItem("login");
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");


    if (storage) {
      login.value = storage;
      email.value = storage;

    }
  });

  close.addEventListener("click", function (evt) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  close_two.addEventListener("click", function (evt) {
    map.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {

    if (!login.value||!email) {

      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {

        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
      if (map.classList.contains("modal-show")) {
        map.classList.remove("modal-show");
      }
    }
  });
  click_map.addEventListener("click", function (evt) {
     map.classList.add("modal-show");
  });




