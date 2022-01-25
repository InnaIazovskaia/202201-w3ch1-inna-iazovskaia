import Component from "./components/Component.js";
import personajes from "./personajes/personajes.js";
import CardImagen from "./components/CardImagen.js";
import CardCuerpo from "./components/CardCuerpo.js";

const cardsContenedor = document.querySelector(".characters-list");

personajes.map((personaje) => {
  const cardContenedor = new Component(cardsContenedor, "character col", "li");

  const card = new Component(
    cardContenedor.elemento,
    "card character__card",
    "div"
  );

  new CardImagen(card, "character__picture card-img-to", personaje);
});
