import personajes from "./modules/personajes.js";

console.log(personajes);

const cardsConteiner = document.querySelector(".characters-list");

personajes.forEach((personaje) => {
  console.log(personajes[personaje]);
  const cardPersonaje = personaje.crearCard(personaje);
  cardsConteiner.appendChild(cardPersonaje);
});
