import getPlayers from "../api";

function Icon() {
  const handleClick = async () => {
    const response = await getPlayers();
    console.log(response);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Icon;
