// import GlassIcons from "./reactBits/GlassIcons/GlassIcons";
import "./DesktopIcons.css";
import Sims from "./assets/frutiger-icons/sims.png";
import PurblePlace from "./assets/frutiger-icons/purble-place.png";
import DVDMaker from "./assets/frutiger-icons/dvd-maker.png";
import FileExplorer from "./assets/frutiger-icons/file-explorer.png";
import WindowsPaint from "./assets/frutiger-icons/windows-paint.png";
import VideosLibrary from "./assets/frutiger-icons/videos-library.png";
import WaterFilter from "./assets/frutiger-icons/water-filter.png";

export const DesktopIcons = () => {
  const images = [Sims, PurblePlace, DVDMaker, FileExplorer, WindowsPaint, VideosLibrary, WaterFilter];
  return (
    <div className="desktop-icons">
      {images.map((image) => (
        <img src={image} className="icons" />
      ))}
    </div>
  );
};
