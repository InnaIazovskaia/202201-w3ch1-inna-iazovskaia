import Personaje from "./Personaje.js";

class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, imgRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey, imgRey);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}

export default Rey;
