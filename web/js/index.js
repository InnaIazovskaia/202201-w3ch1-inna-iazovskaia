import personajes from "./modules/personajes.js.js";

const cardsConteiner = document.querySelector(".characters-list");

personajes.forEach((personaje) => {
  const cardPersonaje = personaje.crearCard(personaje);
  cardsConteiner.appendChild(cardPersonaje);
});
