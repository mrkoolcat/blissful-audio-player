import React from "react";
import ReactDOM from "react-dom";
import Audio from "./Audio/Audio";

import "./styles.css";

function App() {
  const audioFile =
    "https://audio.hbr.org/women-at-work/20190617113753-SisterhoodIsTrust.mp3";
  return (
    <div className="App">
      <Audio
        layout="default"
        label="Why Things Aren't Better, Yet"
        audioFile={audioFile}
      />
      <Audio
        layout="fixed"
        label="Why Things Aren't Better, Yet"
        audioFile={audioFile}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
