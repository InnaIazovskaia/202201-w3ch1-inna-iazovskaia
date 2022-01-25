import Personaje from "./Personaje.js";

class Asesor extends Personaje {
  asesorado;
  constructor(
    nombreAsesor,
    familiaAsesor,
    edadAsesor,
    imgAsesor,
    personajeAsesorado
  ) {
    super(nombreAsesor, familiaAsesor, edadAsesor, imgAsesor);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado;
    }
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Asesor;
