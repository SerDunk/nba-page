import logo from "../images/nba-logo.png";
import Steph from "../images/steph-curry.png";
import Lebron from "../images/lebron-james.png";
import Luka from "../images/luka-doncic.png";
import Jovic from "../images/nikola-jokic.png";
import IconShow from "./IconShow";

function Display() {
  const icons = [Steph, Lebron, Luka, Jovic];
  const displayIcons = icons.map((icon) => {
    return <IconShow icon={icon} />;
  });
  return (
    <div className="flex flex-col justify-center items-center bg-red-600 relative">
      <img src={logo} alt="nba-logo" className="w-1/2 mb-6" />
      <div className="flex justify-center align-middle absolute bottom-0 left-0 w-full h-auto z-1">
        {displayIcons}
      </div>
    </div>
  );
}

export default Display;
