function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-red-600">
      <div className="ml-5">NBA</div>
      <ul className="flex mr-7 gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">MVP</a>
        </li>
        <li>
          <a href="#">All Star</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
