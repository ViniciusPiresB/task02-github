const getCharacters = async () => {
  const request = await fetch("https://rickandmortyapi.com/api/character");

  if (request.status != 200) throw new Error("Error on get characters request");

  const data = await request.json();

  const characters = data.results;

  console.log(characters);
};
