import { useState } from "react";
import ClickSpark from "./reactBits/ClickSpark/ClickSpark";
import { WaterFilter } from "./WaterFilter";
import { DesktopIcons } from "./DesktopIcons";
import ReactAudioPlayer from "react-audio-player";
import "./App.css";

function App() {
  const [waterFilterAppActive, openWaterFilterApp] = useState(false);
  const handleWaterFilterOpen = (bool: boolean): void => {
    openWaterFilterApp(bool);
  };

  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <main>
        <ReactAudioPlayer src="../public/lease.mp3" autoPlay loop />
        <div className="desktop-icons">
          <DesktopIcons openWF={handleWaterFilterOpen} />
        </div>
        {waterFilterAppActive && (
          <div className="water-filter">
            <WaterFilter />
          </div>
        )}
      </main>
    </ClickSpark>
  );
}

export default App;
