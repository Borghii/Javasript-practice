const cardNumber = document.querySelector("#cardNumber");
const expirationDate = document.querySelector("#expirationDate");
const securityCode = document.querySelector("#securityCode");

cardNumber.addEventListener("input", (e) => {
  // Prevenir la adición de caracteres no numéricos (excepto guiones)
  let value = e.target.value.replace(/[^\d-]/g, "");

  // Eliminar guiones existentes para trabajar solo con números
  let digitsOnly = value.replace(/-/g, "");

  // Limitar a 16 dígitos máximo (estándar para tarjetas)
  digitsOnly = digitsOnly.substring(0, 16);

  // Formatear con guiones cada 4 dígitos
  let formattedValue = "";
  for (let i = 0; i < digitsOnly.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += "-";
    }
    formattedValue += digitsOnly[i];
  }

  // Actualizar el valor del campo
  cardNumber.value = formattedValue;
});

expirationDate.addEventListener("input", (e) => {
  let value = e.target.value.replace(/[^\d/]/g, "");

  console.log(value);

  let digitsOnly = value.replace(/\//g, "");

  digitsOnly = digitsOnly.substring(0, 4);

  let formattedValue = "";

  for (let i = 0; i < digitsOnly.length; i++) {
    if (i > 0 && i % 2 === 0) {
      formattedValue += "/";
    }
    formattedValue += digitsOnly[i];
  }

  expirationDate.value = formattedValue;
});

securityCode.addEventListener("input", () => {
  securityCode.value = securityCode.value.replace(/\D/g, ""); // borra todo lo que no sea número
});
