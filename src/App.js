import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Icons from "./components/Icons";
import { useState } from "react";
import logo from "./images/nba-logo.png";

function App() {
  const [team, setTeam] = useState(logo);
  const [color, setColor] = useState("bg-red-600");
  const handleHover = (teamLogo, color) => {
    setTeam(teamLogo);
    setColor(color);
  };
  return (
    <div className={`min-h-screen ${color}`}>
      <Navbar />
      <Display logo={team} />
      <Icons onHover={handleHover} />
    </div>
  );
}

export default App;
