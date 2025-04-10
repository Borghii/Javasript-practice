const url = "https://pokeapi.co/api/v2/pokemon/";
const form = document.querySelector("#form");
const img = document.querySelector("#imagePokemon");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);


  const urlImage = await fetchData(data.get("namePokemon"));
  img.setAttribute("src", urlImage);
});

async function fetchData(pokemon) {
  try {
    const response = await fetch(url + pokemon.toLowerCase());

    if (!response.ok) {
      throw new Error("Couldn't fetch data");
    }

    const data = await response.json();
    console.log(data);

    return data.sprites.front_default;
  } catch (error) {
    console.log(error);
    return "https://edteam-media.s3.amazonaws.com/blogs/big/2ab53939-9b50-47dd-b56e-38d4ba3cc0f0.png"; // Imagen alternativa en caso de error
  }
}
