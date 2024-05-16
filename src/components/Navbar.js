import { CiClock1 } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="flex justify-between p-5 font-NBA text-2xl mb-5 bg-neutral-900 text-red-50">
      <div className="ml-5 nav-hover cursor-pointer">NBA</div>
      <ul className="flex mr-7 gap-5">
        <li className="nav-hover">
          <a href="#">Home</a>
        </li>
        <li className="nav-hover flex gap-1">
          <a href="#">MVP</a>
          <CiClock1 />
        </li>
        <li className="nav-hover flex gap-1">
          <a href="#">All-Star</a>
          <CiClock1 />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
