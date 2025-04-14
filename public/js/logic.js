const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙";
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const checkinInput = document.querySelector('input[name="checkin"]');
  const checkoutInput = document.querySelector('input[name="checkout"]');

  const today = new Date().toISOString().split('T')[0];
  checkinInput.min = today;
  checkoutInput.min = today;

  checkinInput.addEventListener('change', () => {
    checkoutInput.min = checkinInput.value;
  });
});

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();


