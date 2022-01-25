import Component from "./Component.js";

export default class CardImagen extends Component {
  constructor(elementoPadre, classNombre, src, alt) {
    super(elementoPadre, classNombre, "img");
    this.src = src;
    this.alt = alt;

    this.elemento.src = this.src;
    this.elemento.alt = this.alt;
  }
}
