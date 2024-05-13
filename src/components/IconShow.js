import nbaLogo from "../images/nba-logo.png";
import { visibleContext } from "../context/visible";
import { useContext } from "react";

function IconShow({ icon, onHover, color, logo, player }) {
  const { setVisible, showStat, setSelectedPlayer } =
    useContext(visibleContext);
  const handleMouseEnter = () => {
    onHover(logo, color);
    setVisible(true);
    setSelectedPlayer(player);
    showStat(player);
  };

  const handleMouseLeave = () => {
    onHover(nbaLogo, "bg-red-500");
    setVisible(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-1/3 transition-transform duration-300 hover:scale-150 S"
    >
      <img src={icon} alt="icon" className="object-cover" />
    </div>
  );
}

export default IconShow;
