import Component from "./Component.js";

export default class CardButton extends Component {
  constructor(elementoPadre, classNombre, text) {
    super(elementoPadre, classNombre, "button", text);
    this.text = text;

    this.elemento.textContent = this.text;
  }
}
