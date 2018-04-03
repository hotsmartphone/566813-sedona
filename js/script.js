var link = document.querySelector(".button-search");
var form = document.querySelector(".search-hotels-form");
var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=date-of-departure]");
var adults = form.querySelector("[name=adult]");
var childrens = form.querySelector("[name=children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildrens = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildrens = localStorage.getItem("childrens");
} catch (err) {
  isStorageSupport = false;
}

form.classList.toggle("search-form-hide");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-hide");
  if (form.classList.contains("search-form-error")) {
    form.classList.remove("search-form-error");
  }

  if (storageAdults) {
    adults.value = storageAdults;
  }
  if (storageChildrens) {
    childrens.value = storageChildrens;
  }
  arrivalDate.focus();
});

form.addEventListener("submit", function(evt) {
  if (!arrivalDate.value || !departureDate.value || !adults.value || !childrens.value) {
    evt.preventDefault();
    if (form.classList.contains("search-form-error")) {
      form.classList.remove("search-form-error");
    }
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("childrens", childrens.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!form.classList.contains("search-form-hide")) {
      form.classList.add("search-form-hide");
      if (form.classList.contains("search-form-error")) {
        form.classList.remove("search-form-error");
      }
    }
  }
});
