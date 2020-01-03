import React from "react";

const AudioHeader = ({ isPlaying, label, pause, play }) => {
  return (
    <div className="audio__header">
      <div>
        {isPlaying ? (
          <button
            className="audio__button audio__button--pause"
            onClick={pause}
          >
            Pause
          </button>
        ) : (
          <button className="audio__button audio__button--play" onClick={play}>
            Play
          </button>
        )}
      </div>
      <div className="audio__header-title">
        <p>
          Women at Work / <strong>Season 3, Episode 10</strong>
        </p>
        <h1>{label}</h1>
      </div>
    </div>
  );
};

export default AudioHeader;
