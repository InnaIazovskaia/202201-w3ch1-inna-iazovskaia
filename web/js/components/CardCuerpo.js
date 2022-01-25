import Component from "./Component.js";

export default class CardCuerpo extends Component {
  constructor(elementoPadre, classNombre, personaje) {
    super(elementoPadre, classNombre, "div");

    const cardCuerpoTitulo = new Component(this.elemento, classNombre, "h2");
    cardCuerpoTitulo.textContent = `${personaje.nombre} ${personaje.familia}`;
  }
}
