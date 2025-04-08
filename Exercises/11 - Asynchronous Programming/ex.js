// TODO: Agregá un setTimeout que imprima "Hola asincronía" después de 1 segundo

//callback
console.log("Inicio");

setTimeout(() => {
  console.log("hello Asychronous");
}, 1000);

console.log("Fin");

//promises

const saludoAsync = new Promise((resolve, reject) => {
  const operation = Math.random() > 0.5 ? true : false;

  if (operation) {
    resolve("Resolved");
  } else {
    reject("Unresolved");
  }
});

saludoAsync
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// TODO: Reusá la función `saludoAsync` del ejercicio 2
// TODO: Escribí una función async `main()` que espere el saludo y lo imprima

// async / await

async function main() {
  try {
    let result = await new Promise((resolve, reject) => {
      const operation = Math.random() > 0.5 ? true : false;

      if (operation) {
        resolve("Resolved");
      } else {
        reject("Unresolved");
      }
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();

//Objetivo: Ejecutar varias promesas al mismo tiempo.

// TODO: Escribí una función `esperar(ms)` que devuelva una promesa que se resuelve en X milisegundos

// TODO: Usá `Promise.all` para esperar 3 promesas en paralelo con distintos tiempos (ej: 1000ms, 2000ms, 1500ms)

// TODO: Imprimí un mensaje cuando todas hayan terminado

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const promesas = [esperar(1000), esperar(1500), esperar(2000)];

await Promise.all(promesas);
console.log("Listo!");

let total = 0;
const nums = [1, 2, 3];

await Promise.all(
  nums.map((n) => {
    // Simula esperar
    return esperar(1000).then(() => {
      total += n;
    });
  })
);

console.log(total); // ¿Siempre 6? no

//forma correcta

const resultados = await Promise.all(
  nums.map(async (n) => {
    await esperar(Math.random() * 1000);
    return n;
  })
);

const total1 = resultados.reduce((a, b) => a + b);

console.log(total1);
