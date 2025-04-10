// Selección de elementos más robusta
const cardInputs = {
  number: document.querySelector("#cardNumber"),
  expiration: document.querySelector("#expirationDate"),
  security: document.querySelector("#securityCode"),
};

// Constantes para configuración
const CARD_NUMBER = {
  maxLength: 16,
  separator: "-",
  segmentLength: 4,
};

const EXPIRATION_DATE = {
  maxLength: 4,
  separator: "/",
  segmentLength: 2,
};

const SECURITY_CODE = {
  maxLength: 4, // típicamente 3-4 dígitos
};

cardInputs.number.addEventListener("input", (e) => {
  e.target.value = formatInput(e.target.value, CARD_NUMBER);
});

cardInputs.expiration.addEventListener("input", (e) => {
  e.target.value = formatInput(e.target.value, EXPIRATION_DATE);
});

cardInputs.security.addEventListener("input", (e) => {
  restrictToNumbers(e.target, SECURITY_CODE.maxLength);
});

function formatInput(value, config) {
  // Eliminar caracteres no numéricos (excepto el separador permitido)
  const cleaned = value.replace(
    new RegExp(`[^\\d${config.separator}]`, "g"),
    ""
  );

  const digitsOnly = cleaned.replace(new RegExp(config.separator, "g"), "");
  const truncated = digitsOnly.substring(0, config.maxLength);

  let formatted = "";
  for (let i = 0; i < truncated.length; i++) {
    if (i > 0 && i % config.segmentLength === 0) {
      formatted += config.separator;
    }
    formatted += truncated[i];
  }

  return formatted;
}

function restrictToNumbers(input, maxLength) {
  input.value = input.value.replace(/\D/g, "").substring(0, maxLength);
}
