import logo from "../images/nba-logo.png";

function Display() {
  return (
    <div className="flex justify-center align-middle bg-red-500">
      <img src={logo} alt="nba-logo" />
    </div>
  );
}

export default Display;
