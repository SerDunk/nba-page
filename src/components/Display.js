import Stats from "./Stats";

function Display({ logo, icons, onHover }) {
  return (
    <div className="flex flex-col justify-center items-center mb-10 sm:flex-row ">
      <img src={logo} alt="nba-logo" className="w-1/3 pt-10" />
      <Stats icons={icons} onHover={onHover} />
    </div>
  );
}

export default Display;
