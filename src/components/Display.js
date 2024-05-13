import { useContext } from "react";
import { visibleContext } from "../context/visible";

function Display({ logo, icons, onHover, selectedPlayer }) {
  const { visible, showStat } = useContext(visibleContext);
  return (
    <div className="flex flex-col justify-center items-center mb-10 sm:flex-row ">
      <img src={logo} alt="nba-logo" className="w-1/3 pt-10" />
      {visible && selectedPlayer && showStat(selectedPlayer)}
    </div>
  );
}

export default Display;
