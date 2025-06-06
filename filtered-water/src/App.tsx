import ClickSpark from "./reactBits/ClickSpark/ClickSpark";
import { WaterFilter } from "./WaterFilter";
import { DesktopIcons } from "./DesktopIcons";
import "./App.css";

function App() {
  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <main>
        <div className="desktop-icons">
          <DesktopIcons />
        </div>
        <div className="water-filter">
          <WaterFilter />
        </div>
      </main>
    </ClickSpark>
  );
}

export default App;
