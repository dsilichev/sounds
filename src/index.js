import "./index.scss";
import SUMMER_SOUND from "./assets/sounds/summer.mp3";
import RAIN_SOUND from "./assets/sounds/rain.mp3";
import WINTER_SOUND from "./assets/sounds/winter.mp3";
import PAUSE_ICON from "../public/icons/pause.svg";
import SUN_ICON from "../public/icons/sun.svg";
import RAIN_ICON from "../public/icons/cloud-rain.svg";
import SNOW_ICON from "../public/icons/cloud-snow.svg";

const summerSound = new Audio(SUMMER_SOUND);
const rainSound = new Audio(RAIN_SOUND);
const winterSound = new Audio(WINTER_SOUND);

const summerBtn = document.getElementById("summer");
const rainBtn = document.getElementById("rain");
const winterBtn = document.getElementById("winter");
const volumeSlider = document.getElementById("volume");

let actualSound = null;
let volume = null;

volumeSlider.addEventListener("input", () => {
  if (actualSound) {
    volume = volumeSlider.value;
    actualSound.volume = +volume/100;
  }
});

summerBtn.addEventListener("click", () => {
  if (actualSound === summerSound) {
    if (summerSound.paused) {
      summerSound.play();
      summerBtn.children[0].src = SUN_ICON;
      console.log("play");
    } else {
      summerSound.pause();
      summerBtn.children[0].src = PAUSE_ICON;
      console.log("pause");
    }
  } else {
    actualSound = summerSound;
    summerSound.play();
    console.log("play");
    rainSound.pause();
    winterSound.pause();
  }
});

