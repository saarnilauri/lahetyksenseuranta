import React, { useRef, useReducer } from "react";
import ReactPlayer from "react-player";
import Img from "gatsby-image";

import playerReducer from "../reducers/playerReducer";

import IconPlay from "./icon-play";
import IconPause from "./icon-pause";
import IconSpeed1 from "./icon-speed-1";
import IconSpeed15 from "./icon-speed-1-5";
import IconSpeed2 from "./icon-speed-2";
import IconVolume from "./icon-volume";
import Duration from "./duration";
import SROnly from "./sr-only-text";

const initialState = {
  url: "",
  pip: false,
  playing: false,
  controls: false,
  light: false,
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
};

const Player = ({ url, image, title }) => {
  const [state, dispatch] = useReducer(playerReducer, {
    ...initialState,
    ...{ url },
  });

  let playerRef = useRef(null);

  const handleProgress = (newState) => {
    // We only want to update time slider if we are not currently seeking
    if (!state.seeking) {
      dispatch({ type: "PROGRESS", payload: newState });
    }
  };

  const nextRate = state.playbackRate === 2 ? 1 : state.playbackRate + 0.5;

  return (
    <div className="flex flex-col md:flex-row justify-center content-center player">
      <div className="w-full md:w-1/3 lg:w-2/4 bg-red-500 player-image">
        <Img className="player-image" alt={title} fluid={image.fluid} />
      </div>
      <section className="flex flex-col w-full bg-gray-900 md:w-2/3 lg:w-2/4 justify-center player-section">
        <div className="player-wrapper">
          <ReactPlayer
            width={0}
            height={0}
            ref={playerRef}
            url={state.url}
            pip={state.pip}
            playing={state.playing}
            controls={state.controls}
            light={state.light}
            loop={state.loop}
            playbackRate={state.playbackRate}
            volume={state.volume}
            muted={state.muted}
            onEnded={() => dispatch({ type: "PLAY_ENDS" })}
            onDuration={(duration) =>
              dispatch({ type: "DURATION", payload: duration })
            }
            onProgress={handleProgress}
          />
        </div>
        <div className="flex justify-center content-center items-center my-5 player-controls">
          <div className="flex justify-center content-center w-1/4 volume-wrapper">
            <div className="pr-2">
              <IconVolume />
              <SROnly>Äänenvoimakkuus</SROnly>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={state.volume}
              onChange={(e) =>
                dispatch({ type: "VOLUME", payload: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center mx-5 md:mx-10 play-button-wrapper">
            <button onClick={() => dispatch({ type: "TOGGLE_PLAY_PAUSE" })}>
              {!state.playing && <IconPlay />}
              {state.playing && <IconPause />}
              <SROnly>{state.playing ? "Pause" : "Play"}</SROnly>
            </button>
          </div>
          <div className="flex justify-center w-1/4 speed-button-wrapper">
            <button
              onClick={(e) => {
                dispatch({
                  type: "SET_PLAYBACK_RATE",
                  payload: e.currentTarget.value,
                });
              }}
              value={nextRate}
            >
              {state.playbackRate === 1.0 && <IconSpeed1 />}
              {state.playbackRate === 1.5 && <IconSpeed15 />}
              {state.playbackRate === 2 && <IconSpeed2 />}
              <SROnly>Toistonopeus {state.playbackRate}</SROnly>
            </button>
          </div>
        </div>
        <div className="flex justify-center content-center mb-10">
          <div className="w-1/6 text-right	duration-progress">
            <SROnly>Toistettu </SROnly>
            <Duration seconds={state.duration * state.played} />
          </div>
          <div className="relative w-4/6 h-2 mx-5 md:mx-10 mt-2 play-slider">
            <progress
              className="absolute left-0 top-0 rounded-full bg-gray-700 load-progress"
              max={1}
              value={state.loaded}
            />
            <progress
              className="absolute left-0 top-0 rounded-full bg-transparent play-progress"
              max={1}
              value={state.played}
            />
            <input
              className="absolute left-0 top-0 rounded-full play-range"
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={state.played}
              onMouseDown={() => dispatch({ type: "ENABLE_SEEK" })}
              onChange={(e) =>
                dispatch({ type: "SEEK", payload: e.target.value })
              }
              onMouseUp={(e) => {
                dispatch({ type: "DISABLE_SEEK" });
                playerRef.current.seekTo(parseFloat(e.target.value));
              }}
            />
          </div>
          <div className="w-1/6 text-left	duration-remaining">
            <SROnly>Jäljellä </SROnly>
            <Duration seconds={state.duration * (1 - state.played)} />
          </div>
        </div>
        {/*</div>
        <Duration seconds={state.duration} /> -
        <Duration seconds={state.duration * state.played} /> -
          */}
      </section>
    </div>
  );
};

export default Player;
