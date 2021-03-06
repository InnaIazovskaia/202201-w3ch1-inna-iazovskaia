import Personaje from "./Personaje.js";

export default class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edadLuchador,
    imgLuchador,
    emojiLuchador,
    armaLuchador,
    valorDestreza
  ) {
    super(
      nombreLuchador,
      familiaLuchador,
      edadLuchador,
      imgLuchador,
      emojiLuchador
    );
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
  }

  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    }
    if (valorDestreza > 10) {
      return 10;
    }
    return valorDestreza;
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}
