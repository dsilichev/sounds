import "./index.scss";
import SUMMER_SOUND from "./assets/sounds/summer.mp3";
import RAIN_SOUND from "./assets/sounds/rain.mp3";
import WINTER_SOUND from "./assets/sounds/winter.mp3";
import PAUSE_ICON from "../public/icons/pause.svg";
import SUN_ICON from "../public/icons/sun.svg";
import RAIN_ICON from "../public/icons/cloud-rain.svg";
import SNOW_ICON from "../public/icons/cloud-snow.svg";

const summerSound = new Audio(SUMMER_SOUND) as HTMLAudioElement;
const rainSound = new Audio(RAIN_SOUND) as HTMLAudioElement;
const winterSound = new Audio(WINTER_SOUND) as HTMLAudioElement;

type Button = HTMLAnchorElement & {
  children?: HTMLImageElement[];
}

const summerBtn = document.getElementById("summer") as Button;
const rainBtn = document.getElementById("rain") as Button;
const winterBtn = document.getElementById("winter") as Button;
const volumeSlider = document.getElementById("volume") as HTMLInputElement;

let actualSound: null | HTMLAudioElement = null;
let actualBackground: string = summerBtn.id;
let volume: null | number = null;

volumeSlider.addEventListener("input", () => {
  if (actualSound) {
    volume = Number(volumeSlider.value);
    actualSound.volume = volume / 100;
  }
});

const toggleSound = (
  sound: HTMLAudioElement,
  button: Button,
  icon: any,
  otherSounds: HTMLAudioElement[] = []
) => {
  if (sound.paused) {
    sound.play();
    button.children[0].src = icon.play;
  } else {
    sound.pause();
    button.children[0].src = icon.pause;
  }

  // Pause other sounds
  otherSounds.forEach((snd) => snd.pause());
};

const restoreIcons = () => {
  summerBtn.children[0].src = SUN_ICON;
  rainBtn.children[0].src = RAIN_ICON;
  winterBtn.children[0].src = SNOW_ICON;
};

const setBackground = (currentBg : any, newBg : any) => {
  const background = document.getElementById("background") as HTMLDivElement;
  if (currentBg) {
    background.classList.replace(currentBg, newBg);
  } else {
    background.classList.add(newBg);
  }
};

summerBtn.addEventListener("click", () => {
  const icon = { play: SUN_ICON, pause: PAUSE_ICON };

  if (actualSound === summerSound) {
    toggleSound(summerSound, summerBtn, icon);
  } else {
    setBackground(actualBackground, summerBtn.id);
    actualBackground = summerBtn.id;
    restoreIcons();
    actualSound = summerSound;
    toggleSound(summerSound, summerBtn, icon, [rainSound, winterSound]);
  }
});

rainBtn.addEventListener("click", () => {
  const icon = { play: RAIN_ICON, pause: PAUSE_ICON };

  if (actualSound === rainSound) {
    toggleSound(rainSound, rainBtn, icon);
  } else {
    setBackground(actualBackground, rainBtn.id);
    actualBackground = rainBtn.id;
    restoreIcons();
    actualSound = rainSound;
    toggleSound(rainSound, rainBtn, icon, [summerSound, winterSound]);
  }
});

winterBtn.addEventListener("click", () => {
  const icon = { play: SNOW_ICON, pause: PAUSE_ICON };

  if (actualSound === winterSound) {
    toggleSound(winterSound, winterBtn, icon);
  } else {
    setBackground(actualBackground, winterBtn.id);
    actualBackground = winterBtn.id;
    restoreIcons();
    actualSound = winterSound;
    toggleSound(winterSound, winterBtn, icon, [summerSound, rainSound]);
  }
});
