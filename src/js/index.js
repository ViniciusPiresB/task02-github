//const cardContainerElement = document.getElementById("cards-container");

const getCharacters = async () => {
  const request = await fetch("https://rickandmortyapi.com/api/character");

  if (request.status != 200) throw new Error("Error on get characters request");

  const data = await request.json();

  const characters = data.results;

  console.log(characters);
};

const insertInHtml = (data) => {
  for (let i = 0; i < data.length; i++) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style = "width: 18rem";

    const url = data[i].image;
    const imgElement = document.createElement("img");
    imgElement.src = url;
  }
};

(async () => {
  await getCharacters();
})();
