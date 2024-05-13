import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Icons from "./components/Icons";
import { useState } from "react";
import logo from "./images/nba-logo.png";
import Steph from "./images/steph-curry.png";
import Lebron from "./images/lebron-james.png";
import Luka from "./images/luka-doncic.png";
import Jovic from "./images/nikola-jokic.png";
import GSW from "./images/golden-state.png";
import Lakers from "./images/lakers.png";
import Nuggets from "./images/nuggets.png";
import Mavs from "./images/mavs.png";
import { visibleContext } from "./context/visible";

function App() {
  const icons = [
    {
      id: 1,
      icon: Steph,
      Name: "Stephen Curry",
      color: "bg-blue-500",
      logo: GSW,
      PPG: "22.6",
      APG: "5.1",
      RPG: "4.5",
    },
    {
      id: 2,
      icon: Lebron,
      Name: "Lebron James",
      color: "bg-yellow-500",
      logo: Lakers,
      PPG: "25.7",
      APG: "8.3",
      RPG: "7.3",
    },
    {
      id: 3,
      icon: Luka,
      Name: "Luka Doncic",
      color: "bg-green-700",
      logo: Mavs,
      PPG: "33.9",
      APG: "9.8",
      RPG: "9.2",
    },
    {
      id: 4,
      icon: Jovic,
      Name: "Nikola Jokic",
      color: "bg-blue-900",
      logo: Nuggets,
      PPG: "26.4",
      APG: "12.4",
      RPG: "9.0",
    },
  ];
  const [team, setTeam] = useState(logo);
  const [color, setColor] = useState("bg-red-600");
  const [visible, setVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const showStat = (player) => {
    return (
      <div>
        <div>Name:{player.Name}</div>
        <div>PPG:{player.PPG}</div>
        <div>APG:{player.APG}</div>
        <div>RPG:{player.RPG}</div>
      </div>
    );
  };

  const handleHover = (teamLogo, color) => {
    setTeam(teamLogo);
    setColor(color);
  };
  return (
    <div className={`min-h-screen ${color}`}>
      <visibleContext.Provider
        value={{ visible, setVisible, showStat, setSelectedPlayer }}
      >
        <Navbar />
        <Display logo={team} icons={icons} selectedPlayer={selectedPlayer} />
        <Icons onHover={handleHover} icons={icons} />
      </visibleContext.Provider>
    </div>
  );
}

export default App;
