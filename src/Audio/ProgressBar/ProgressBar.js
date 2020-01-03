import React from "react";

import "./Progressbar.css";

const ProgressBar = ({ audioWatched, audioLength, scroll }) => {
  const getFormattedTime = value => {
    const totalSeconds = Math.round(value);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    const formatSec = seconds > 9 ? seconds : "0" + seconds;
    return `${minutes}:${formatSec}`;
  };

  const progressBarPercentage = () => {
    const totalSeconds = Math.round(audioLength);
    const totalSecondsWatched = audioWatched;
    const progressPercentage = Math.round(
      (totalSeconds / 50000) * totalSecondsWatched
    );
    return progressPercentage;
  };

  const value = progressBarPercentage();
  const style = {
    backgroundImage: [
      "linear-gradient(to right,",
      " #333333 0,",
      ` #333333 ${value}%,`,
      ` #cccccc ${value}%,`,
      " #cccccc 100%)"
    ].join("")
  };

  console.log("style", style.backgroundImage);

  return (
    <div className="progress">
      <div className="progress__info">
        <p>
          <small>Listen | {getFormattedTime(audioWatched)}</small>
        </p>
        <p>
          <small>Length | {getFormattedTime(audioLength)}</small>
        </p>
      </div>
      <input
        style={style}
        type="range"
        value={Math.ceil(audioWatched)}
        max={Math.ceil(audioLength)}
        onChange={scroll}
      />
    </div>
  );
};

export default ProgressBar;
