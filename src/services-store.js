import { readable } from "svelte/store";

const services = readable([
  {
    title: "Rengaspalvelut",
    subServices: [
      "Renkaiden vaihto",
      "Vanteiden tasapainotus",
      "Renkaiden kausisäilytys",
    ],
    frontImage: "./img/front/Rengaspalvelut.webp",
    backImage: "./img/back/Rengaspalvelut.webp",
  },
  {
    title: "Perushuolto",
    subServices: [
      "Moottoriöljyn vaihto",
      "Öljynsuodattimien vaihto",
      "Ilmansuodattimien vaihto",
      "Jäähdytysnesteen vaihto",
      "Sytytyspuolien vaihto",
      "Sytytystulppien vaihto",
    ],
    frontImage: "./img/front/Perushuolto.webp",
    backImage: "./img/back/Perushuolto.webp",
  },
  {
    title: "Jarrujen huolto",
    subServices: [
      "Jarrupalojen vaihto",
      "Jarrulevyjen vaihto",
      "Jarrunesteen vaihto",
    ],
    frontImage: "./img/front/Jarrujen_huolto.webp",
    backImage: "./img/back/Jarrujen_huolto.webp",
  },
  {
    title: "Ajovalot",
    subServices: ["Ajovalopolttimoiden vaihto", "Lisävalon asennus"],
    frontImage: "./img/front/Ajovalot.webp",
    backImage: "./img/back/Ajovalot.webp",
  },
  {
    title: "OBD Mittaus",
    subServices: ["Vikakoodien Luku", "Vikakoodien poisto"],
    frontImage: "./img/front/OBD_Mittaus.webp",
    backImage: "./img/back/OBD_Mittaus.webp",
  },
  {
    title: "Autopesu",
    subServices: ["Autopesu ulkoa", "Autopesu sisältä"],
    frontImage: "./img/front/Autopesu.webp",
    backImage: "./img/back/Autopesu.webp",
  },
]);

export default services;
