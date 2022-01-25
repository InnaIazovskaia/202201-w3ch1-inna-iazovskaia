import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, "img/joffrey.jpg", 2);
const jaime = new Luchador(
  "Jaime",
  "Lannister",
  45,
  "img/jaime.jpg",
  "Espada",
  7
);
const daenerys = new Luchador(
  "Daenerys",
  "Targaryen",
  30,
  "img/daenerys.jpg",
  "Dragones",
  10
);
const tyrion = new Asesor(
  "Tyrion",
  "Lannister",
  40,
  "img/tyrion.jpg",
  daenerys
);
const bronn = new Escudero(
  "Bronn",
  "AguasNegras",
  54,
  "img/bronn.jpg",
  0,
  jaime
);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

export default personajes;
