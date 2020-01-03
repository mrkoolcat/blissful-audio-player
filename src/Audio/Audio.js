import React, { Component, createRef } from "react";
import AudioHeader from "./Header/Header";
import Controls from "./Controls/Controls";
import AudioFooter from "./Footer/Footer";

import "./Audio.css";

class Audio extends Component {
  constructor(props) {
    super(props);
    this.audioPlay = createRef();
    this.state = {
      timeWatched: 0,
      isPlaying: false
    };
  }

  setCurrentTime = value => {
    this.audioPlay.current.currentTime = value;
    this.setState({ timeWatched: value });
  };

  play = () => {
    this.setState({ isPlaying: true }, () => {
      this.audioPlay.current.play();
    });
  };

  pause = () => {
    this.setState({ isPlaying: false }, () => {
      this.audioPlay.current.pause();
    });
  };

  goForward = () => {
    const jumpInSeconds = 15;
    const currTime = this.audioPlay.current.currentTime;
    this.setCurrentTime(currTime + jumpInSeconds);
  };

  goBackward = () => {
    const jumpInSeconds = 15;
    const currTime = this.audioPlay.current.currentTime;
    this.setCurrentTime(currTime - jumpInSeconds);
  };

  scroll = event => {
    if (this.setState.isPlaying) {
      this.pause();
    }
    console.log("test", event.target.value);
    this.setCurrentTime(event.target.value);
  };

  componentDidMount = () => {
    if (this.audioPlay.current) {
      this.displayPosition();
    }
  };

  displayPosition = () => {
    this.audioPlay.current.addEventListener("timeupdate", () => {
      const timeWatched = this.audioPlay.current.currentTime;
      this.setState({ timeWatched });
    });
  };

  render() {
    const { layout, audioFile, label } = this.props;
    const { timeWatched, isPlaying } = this.state;

    let audioLength = 0;
    if (this.audioPlay.current) {
      audioLength = this.audioPlay.current.duration;
    }

    return (
      <div
        className={
          layout === "default" ? "audio audio--default" : "audio audio--fixed"
        }
      >
        <audio
          className="audio__tag"
          controls
          ref={this.audioPlay}
          src={audioFile}
        />
        <div className="audio__container">
          <AudioHeader
            isPlaying={isPlaying}
            label={label}
            pause={this.pause}
            play={this.play}
          />
          <Controls
            isPlaying={isPlaying}
            timeWatched={timeWatched}
            audioLength={audioLength}
            scroll={this.scroll}
            goBackward={this.goBackward}
            goForward={this.goForward}
          />
          {layout === "default" && <AudioFooter />}
        </div>
      </div>
    );
  }
}

export default Audio;
