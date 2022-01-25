class Component {
  elemento;

  constructor(elementoPadre, classNombre, htmlTag) {
    this.elemento = document.createElement(htmlTag);
    this.elemento.classList = classNombre;

    elementoPadre.append(this.elemento);
  }
}
