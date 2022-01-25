export default class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, img, emoji) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.img = img;
    this.emoji = emoji;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}
