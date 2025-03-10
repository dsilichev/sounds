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

const sounds: HTMLAudioElement[] = [summerSound, rainSound, winterSound];

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
) => {
  if (sound.paused) {
    sound.play();
    button.children[0].src = icon.play;
  } else {
    sound.pause();
    button.children[0].src = icon.pause;
  }

  // Pause other sounds
  const otherSounds = sounds.filter((snd) => snd !== sound);
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

function btnCickHandler(e: MouseEvent, sound: HTMLAudioElement) {
  let target = e.currentTarget as Button;
  
  const icon = { play: "", pause: "" };
  if (target.id === "summer") {
    icon.play = SUN_ICON;
    icon.pause = PAUSE_ICON;
  } else if (target.id === "rain") {
    icon.play = RAIN_ICON;
    icon.pause = PAUSE_ICON;
  } else {
    icon.play = SNOW_ICON;
    icon.pause = PAUSE_ICON;
  }

  if (actualSound === sound) {
    toggleSound(sound, target, icon);
  } else {
    setBackground(actualBackground, target.id);
    actualBackground = target.id;
    restoreIcons();
    actualSound = sound;
    actualSound.volume = volume ? volume / 100 : 0.5;
    toggleSound(sound, target, icon);
  }
}

summerBtn.addEventListener("click", (e) => btnCickHandler(e, summerSound))

rainBtn.addEventListener("click", (e) => btnCickHandler(e, rainSound));

winterBtn.addEventListener("click", (e) => btnCickHandler(e, winterSound)); 
