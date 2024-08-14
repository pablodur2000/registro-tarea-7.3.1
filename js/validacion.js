function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

function removeAlertError() {
  document.getElementById("alert-danger").classList.remove("show");
}

const validador = () => {
  const username = document.getElementById("nombre").value;
  const usersurname = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const checkbox = document.getElementById("terminos");
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  removeAlertError();

  // La contraseña debe tener al menos 6 caracteres.
  if (password1.length < 6) {
    return showAlertError();
  }

  // Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.
  if (password1 !== password2) {
    return showAlertError();
  }

  // Ningun campo puede estae vacio.
  if (
    username === "" ||
    usersurname === "" ||
    email === "" ||
    password1 === "" ||
    password2 === ""
  ) {
    console.log("Hay uno o mas vacio/s");
    return showAlertError();
  }

  if (!checkbox.checked) {
    return showAlertError();
  }

  return showAlertSuccess();
};

const button = document.getElementById("regBtn").addEventListener("click", validador);
