import Personaje from "./Personaje.js";
import Luchador from "./Luchador.js";

class Escudero extends Personaje {
  sirveA;
  pelotismo;

  constructor(
    nombreEscudero,
    familiaEscudero,
    edadEscudero,
    imgEscudero,
    emojiEscudero,
    valorPelotismo,
    personajeSirve
  ) {
    super(
      nombreEscudero,
      familiaEscudero,
      edadEscudero,
      imgEscudero,
      emojiEscudero
    );
    this.pelotismo = this.filtrarPelotismo(valorPelotismo);
    if (personajeSirve instanceof Luchador) {
      this.sirveA = personajeSirve;
    }
  }

  filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    }
    if (gradoPelotismo > 10) {
      return 10;
    }
    return gradoPelotismo;
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}

export default Escudero;
