import React from "react";
import { useState } from "react";

export function App() {
  const [volume, setVolume] = useState(50);

  const summerSound = new Audio("/src/assets/sounds/summer.mp3");
  const rainSound = new Audio("/src/assets/sounds/rain.mp3");
  const winterSound = new Audio("/src/assets/sounds/winter.mp3");

  return (
    <div className="app">
      <div className="background"></div>
      <div className="content">
        <h1 className="header">Weather sounds</h1>
        <div className="sounds-panel">
          <a href="#" className="sounds-item summer" onClick={()=>summerSound.play()}></a>
          <a href="#" className="sounds-item rain"></a>
          <a href="#" className="sounds-item winter"></a>
        </div>
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
