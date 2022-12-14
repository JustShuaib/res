const form = document.getElementById("form-container");
const email = document.getElementById("email");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", displayError);

function displayError(e) {
  inputs.forEach((input) => {
    const errLogo = input.nextElementSibling;
    const errPara = errLogo.nextElementSibling;
    if (input.value.length === 0) {
      input.classList.add("error");
      errLogo.classList.remove("hidden");
      errPara.classList.remove("hidden");
    }
    if (input.value.length > 0) {
      input.classList.remove("error");
      errLogo.classList.add("hidden");
      errPara.classList.add("hidden");
    }
    if (!(email.value.includes("@") && email.value.includes("."))) {
      email.nextElementSibling.classList.remove("hidden");
      email.nextElementSibling.nextElementSibling.classList.remove("hidden");
    }
  });
  e.preventDefault();
}
