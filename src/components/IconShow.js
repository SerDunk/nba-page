import nbaLogo from "../images/nba-logo.png";

function IconShow({ icon, onHover, color, logo }) {
  const handleMouseEnter = () => {
    onHover(logo, color);
  };

  const handleMouseLeave = () => {
    onHover(nbaLogo, "bg-red-500");
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-1/3 transition-transform duration-300 hover:scale-150 S"
    >
      <img src={icon} alt="icon" />
    </div>
  );
}

export default IconShow;
