import Personaje from "./Personaje.js";

class Rey extends Personaje {
  anyosReinado;

  constructor(
    nombreRey,
    familiaRey,
    edadRey,
    imgRey,
    emojiRey,
    anyosReinadoRey
  ) {
    super(nombreRey, familiaRey, edadRey, imgRey, emojiRey);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}

export default Rey;
