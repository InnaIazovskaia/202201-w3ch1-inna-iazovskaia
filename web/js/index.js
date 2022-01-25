import Component from "./components/Component.js";
import personajes from "./personajes/personajes.js";
import CardImagen from "./components/CardImagen.js";
import CardCuerpo from "./components/CardCuerpo.js";
import Emoji from "./components/Emoji.js";

const cardsContenedor = document.querySelector(".characters-list");

personajes.forEach((personaje) => {
  const cardContenedor = new Component(cardsContenedor, "character col", "li");

  const card = new Component(
    cardContenedor.elemento,
    "card character__card",
    "div"
  );

  new CardImagen(card.elemento, "character__picture card-img-to", personaje);

  new CardCuerpo(
    card.elemento,
    "card-body",
    personaje.nombre,
    personaje.familia,
    personaje.edad
  );

  new Emoji(card.elemento, "emoji", personaje.emoji);
});
