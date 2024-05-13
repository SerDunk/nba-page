import IconShow from "./IconShow";

function Icon({ onHover, icons }) {
  const displayIcons = icons.map((item, index) => (
    <IconShow
      key={item.id}
      icon={item.icon}
      color={item.color}
      onHover={onHover}
      logo={item.logo}
      player={item}
    />
  ));
  return (
    <div className="flex flex-col justify-center items-center gap-5 sm:flex-row bottom-0 absolute overflow-hidden pt-20">
      {displayIcons}
    </div>
  );
}

export default Icon;
