import Component from "./Component.js";

export default class Emoji extends Component {
  constructor(elementoPadre, classNombre, text) {
    super(elementoPadre, classNombre, "i");
    this.text = text;

    this.elemento.textContent = this.text;
  }
}
