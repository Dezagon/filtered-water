// import GlassIcons from "./reactBits/GlassIcons/GlassIcons";
import "./DesktopIcons.css";
import Sims from "./assets/frutiger-icons/sims.png";
import PurblePlace from "./assets/frutiger-icons/purble-place.png";
import DVDMaker from "./assets/frutiger-icons/dvd-maker.png";
import FileExplorer from "./assets/frutiger-icons/file-explorer.png";
import WindowsPaint from "./assets/frutiger-icons/windows-paint.png";
import VideosLibrary from "./assets/frutiger-icons/videos-library.png";
import WaterFilter from "./assets/frutiger-icons/water-filter.png";

type DesktopIconProps = {
  openWF: (bool: boolean) => void;
};

export const DesktopIcons: React.FC<DesktopIconProps> = ({ openWF }) => {
  const handleClick = (bool: boolean) => {
    openWF(bool);
  };
  const images = [Sims, PurblePlace, DVDMaker, FileExplorer, WindowsPaint, VideosLibrary];
  return (
    <div className="desktop-icons">
      {images.map((image) => (
        <button>
          <img src={image} className="icons" />
        </button>
      ))}
      <button>
        <img src={WaterFilter} className="icons" onClick={() => handleClick(true)} />
      </button>
    </div>
  );
};
