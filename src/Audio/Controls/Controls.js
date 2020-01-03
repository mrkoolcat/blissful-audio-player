import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

const Controls = ({
  isPlaying,
  timeWatched,
  audioLength,
  scroll,
  goBackward,
  goForward
}) => {
  return (
    <div className="audio__controls">
      <ProgressBar
        audioWatched={timeWatched}
        audioLength={audioLength}
        scroll={scroll}
      />
      <button
        className="audio__button audio__button--backward"
        disabled={!isPlaying}
        onClick={goBackward}
      >
        Backward 15 seconds
      </button>
      <button
        className="audio__button audio__button--forward"
        disabled={!isPlaying}
        onClick={goForward}
      >
        Foward 15 seconds
      </button>
    </div>
  );
};

export default Controls;
