const cardContainerElement = document.getElementById("cards-container");

const getCharacters = async (pageNumber) => {
  const request = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNumber}`
  );

  if (request.status != 200) throw new Error("Error on get characters request");

  const data = await request.json();
  const characters = data.results;

  return characters;
};

const insertInHtml = async (data) => {
  for (let i = 0; i < data.length; i++) {
    const character = data[i];

    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "centered-card"); 
    cardElement.style = "width: 18rem";

    const url = character.image;
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.classList.add("card-img-top");
    imgElement.alt = "...";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const name = character.name;
    const h5Element = document.createElement("h5");
    h5Element.classList.add("card-title");
    h5Element.innerHTML = name;

    const specie = character.species;
    const gender = character.gender;
    const status = character.status;

    const pElement = document.createElement("p");
    pElement.classList.add("card-text");
    pElement.innerHTML = `Specie: ${specie}, Gender: ${gender}, Status: ${status}`;

    cardBody.appendChild(h5Element);
    cardBody.appendChild(pElement);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardBody);

    cardContainerElement.appendChild(cardElement);
  }
};

(async () => {
  for (let i = 1; i < 43; i++) {
    const characters = await getCharacters(i);

    insertInHtml(characters);
  }
})();
