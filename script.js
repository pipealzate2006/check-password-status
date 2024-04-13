const input = document.querySelector("#input");
const feedbackUppercase = document.querySelector("#password");
const view = document.querySelector(".view");

view.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
    view.classList.toggle('fa-eye')
  }
});

function checkPasswordStrength() {
  const userInput = input.value.trim();
  const caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  let hasUppercase = false;
  let hasWeirdCaracter = false;
  let hasTenCaracters = false;

  for (let char of userInput) {
    if (char.toUpperCase() === char && char !== " ") {
      hasUppercase = true;
    }
    if (caracteresEspeciales.test(char)) {
      hasWeirdCaracter = true;
    }

    if (userInput.length >= 10) {
      hasTenCaracters = true;
    }
  }

  if (hasUppercase && hasWeirdCaracter && hasTenCaracters) {
    feedbackUppercase.textContent = "CONTRASEÑA BUENA";
    feedbackUppercase.classList.remove("bad");
    feedbackUppercase.classList.add("good");
  } else if (hasUppercase && hasWeirdCaracter && !hasTenCaracters) {
    feedbackUppercase.textContent =
      "La contraseña debe tener al menos 10 caracteres.";
    feedbackUppercase.classList.remove("good");
    feedbackUppercase.classList.add("bad");
  } else if (hasUppercase && !hasWeirdCaracter) {
    feedbackUppercase.textContent =
      "La contraseña debe tener al menos un carácter especial.";
    feedbackUppercase.classList.remove("good");
    feedbackUppercase.classList.add("bad");
  } else {
    feedbackUppercase.textContent =
      "La contraseña debe tener al menos una letra mayúscula.";
    feedbackUppercase.classList.remove("good");
    feedbackUppercase.classList.add("bad");
  }
}
input.addEventListener("keyup", checkPasswordStrength);
