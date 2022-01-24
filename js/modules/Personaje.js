class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, img) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.img = img;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }

  crearCard(personaje) {
    const cardLi = document.createElement("li");
    cardLi.classList.add("character", "col");

    const cardConteiner = document.createElement("div");
    cardConteiner.classList.add("card", "character__card");
    cardLi.append(cardConteiner);

    const cardImg = document.createElement("img");
    cardImg.src = this.img;
    cardImg.alt = `${this.nombre} ${this.familia}`;
    cardImg.classList.add("character__picture", "card-img-top");
    cardConteiner.append(cardImg);

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    cardConteiner.append(divCardBody);
    const divCardBodyHeader = document.createElement("h2");
    divCardBodyHeader.classList.add("character__name", "card-title", "h4");
    divCardBodyHeader.textContent = `${this.nombre} ${this.familia}`;
    divCardBody.append(divCardBodyHeader);

    const info = document.createElement("div");
    info.classList.add(".character__info");
    divCardBody.append(info);

    const infoList = document.createElement("ul");
    infoList.classList.add("list-unstyled");
    info.append(infoList);

    const liInfoList = document.createElement("li");
    liInfoList.textContent = "Edad: 16 años";
    infoList.append(liInfoList);

    const cardEmoji = document.createElement("i");
    cardEmoji.classList.add("emoji");
    cardConteiner.append(cardEmoji);

    return cardLi;
  }
}

export default Personaje;
