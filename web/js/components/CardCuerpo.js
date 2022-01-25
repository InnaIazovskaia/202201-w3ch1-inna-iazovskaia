import Component from "./Component.js";

export default class CardCuerpo extends Component {
  constructor(elementoPadre, classNombre, nombre, familia, edad) {
    super(elementoPadre, classNombre, "div");
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.generarHTML();
  }

  generarHTML() {
    this.elemento.innerHTML = `
    <div class="card-body">
              <h2 class="character__name card-title h4">${this.nombre} ${this.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
    `;
  }
}
