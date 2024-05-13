import { useContext } from "react";
import { visibleContext } from "../context/visible";
function Stats() {
  const { visible } = useContext(visibleContext);
  if (visible) {
    return (
      <div>
        <div>Name:</div>
        <div>PPG:</div>
        <div>APG:</div>
        <div>RPG:</div>
      </div>
    );
  } else {
    return null;
  }
}

export default Stats;
