function Display({ logo }) {
  return (
    <div className="flex justify-center items-center">
      <img src={logo} alt="nba-logo" className="w-1/4" />
    </div>
  );
}

export default Display;
