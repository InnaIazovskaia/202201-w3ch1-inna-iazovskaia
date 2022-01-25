import Component from "./components/Component.js";
import personajes from "./personajes/personajes.js";

new Component(document.body, "app conteiner", "div");

const cardsConteiner = document.querySelector(".characters-list");

personajes.forEach((personaje) => {
  const cardPersonaje = personaje.crearCard(personaje);
  cardsConteiner.appendChild(cardPersonaje);
});
