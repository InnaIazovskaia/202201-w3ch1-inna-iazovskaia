import Component from "./Component.js";

export default class CardImagen extends Component {
  constructor(elementoPadre, classNombre, personaje) {
    super(elementoPadre, classNombre, "img");

    this.elemento.src = personaje.img;
    this.elemento.alt = `${personaje.nombre} ${personaje.familia}`;
  }
}
