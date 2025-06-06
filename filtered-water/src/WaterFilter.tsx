import { useState } from "react";
import "7.css/dist/7.css";
import "./WaterFilter.css";
import ReactAudioPlayer from "react-audio-player";

export const WaterFilter = () => {
  const [isActive, setActive] = useState(false);
  const setVisibility = () => {
    setActive(!isActive);
  };

  const contaminants: string[] = ["salt", "dirt", "calcite", "uranium", "rubber"];
  // Output should be ["salt", "calcite", "rubber"]!!!
  //
  return (
    <>
      <div className="background stationary-window">
        {/* Plays background music */}
        <ReactAudioPlayer src="../public/lease.mp3" autoPlay loop />
        <div className="window glass active full-window-additional">
          <div className="title-bar">
            <div className="title-bar-text">waterfilter.exe</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body has-space window-additional">
            <h3> Welcome to the water filter </h3>
            <h4> Your water currently has:</h4>
            {contaminants.map((contaminant: string) => (
              <p>{contaminant}</p>
            ))}
            <h4> Would you like to filter your water?</h4>
            <section className="buttons">
              <div className="button-spacing">
                {!isActive ? <button onClick={setVisibility}> Yes </button> : <button disabled> Yes </button>}
                <button> No </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Water filter window */}
      {isActive && (
        <div className="background floating-window">
          <div className="window glass active full-window-additional">
            <div className="title-bar">
              <div className="title-bar-text">waterfilter.exe</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body has-space window-additional">
              <div role="progressbar" className="marquee"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
