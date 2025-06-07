import { useState } from "react";
import "7.css/dist/7.scoped.css";
import "./WaterFilter.css";

export const WaterFilter = () => {
  const [primaryWindowActive, showPrimaryWindow] = useState(true);
  const [secondWindowActive, showSecondWindow] = useState(false);
  const [thirdWindowActive, showThirdWindow] = useState(false);
  // const setVisibilityThirdWindow = () => {
  //   showThirdWindow(!secondWindowActive);
  // };
  //
  const setTimer = () => {
    const timer = setTimeout(() => {
      showSecondWindow(false);
      showThirdWindow(true);
    }, 6000);
    return () => clearTimeout(timer);
  };

  const setVisibilitySecondWindow = () => {
    showSecondWindow(true);
    setTimer();
  };

  const contaminants: string[] = ["salt", "dirt", "calcite", "uranium", "rubber"];
  // Output should be ["salt", "calcite", "rubber"]!!!
  //
  const closeWaterFilter = () => {
    showPrimaryWindow(false);
    showSecondWindow(false);
    showThirdWindow(false);
  };
  return (
    primaryWindowActive && (
      <>
        <div className="win7 background stationary-window">
          {/* Plays background music */}
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
                  {!secondWindowActive ? <button onClick={setVisibilitySecondWindow}> Yes </button> : <button disabled> Yes </button>}
                  <button onClick={closeWaterFilter}> No </button>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Water filter window */}
        {secondWindowActive && (
          <div className="win7 background floating-window">
            <div className="window glass active floating-window-additional">
              <div className="title-bar">
                <div className="title-bar-text">waterfilter.exe</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body has-space window-additional">
                {/* Window body */}
                <h4>Filtering...</h4>
                <div role="progressbar" className="marquee"></div>
              </div>
            </div>
          </div>
        )}

        {thirdWindowActive && (
          <div className="win7 background floating-window2">
            <div className="window glass active full-window-additional">
              <div className="title-bar">
                <div className="title-bar-text">waterfilter.exe</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body has-space window-additional">
                {/* Window body */}
                <h4>Filtering complete!</h4>
                <h5>Your water had the following contaminants: </h5>
                {contaminants
                  .filter((contaminant: string): boolean => contaminant == "salt" || contaminant == "calcite" || contaminant == "rubber")
                  .map((contaminant2: string) => (
                    <p>{contaminant2}</p>
                  ))}

                <h5>The following resources were obtained from the filtering:</h5>

                {contaminants
                  .filter((contaminant: string): boolean => contaminant == "dirt" || contaminant == "uranium")
                  .map((contaminant2: string) => (
                    <p>{contaminant2}</p>
                  ))}

                <section className="buttons">
                  <button onClick={closeWaterFilter}> Ok </button>
                </section>
              </div>
            </div>
          </div>
        )}
      </>
    )
  );
};
