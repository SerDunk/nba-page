import Steph from "../images/steph-curry.png";
import Lebron from "../images/lebron-james.png";
import Luka from "../images/luka-doncic.png";
import Jovic from "../images/nikola-jokic.png";
import IconShow from "./IconShow";
import GSW from "../images/golden-state.png";
import Lakers from "../images/lakers.png";
import Nuggets from "../images/nuggets.png";
import Mavs from "../images/mavs.png";
function Icon({ onHover }) {
  const icons = [
    { icon: Steph, color: "bg-blue-500", logo: GSW },
    { icon: Lebron, color: "bg-yellow-500", logo: Lakers },
    { icon: Luka, color: "bg-green-500", logo: Mavs },
    { icon: Jovic, color: "bg-purple-500", logo: Nuggets },
  ];

  const displayIcons = icons.map((item, index) => (
    <IconShow
      key={index}
      icon={item.icon}
      color={item.color}
      onHover={onHover}
      logo={item.logo}
    />
  ));
  return (
    <div className="flex flex-col justify-center items-center mb-1 gap-5 sm:flex-row bottom-0 absolute overflow-hidden pt-10">
      {displayIcons}
    </div>
  );
}

export default Icon;
