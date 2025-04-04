const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const printNumbers = (x) => {
  for (const item of range(1, x)) {
    console.log(item);
  }
};

// Si no devuelve nada, no hace falta loguear la función:
printNumbers(10);
