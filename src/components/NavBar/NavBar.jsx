import { Link } from "react-router-dom";

export const NavBar = () => {
  // const navigate = useNavigate()
  return (
    <ul className="navbar flex flex-row self-center justify-around bg-blue-300 p-10 rounded-3xl text-3xl shadow-xl ">
      <li className="navbar-item">
        <Link to="/">HOME</Link>
      </li>
      <li className="navbar-item">
        <Link to="/Ships">SHIPS</Link>
      </li>
      <li className="navbar-item">
        <Link to="/Haulers">HAULERS</Link>
      </li>
      <li className="navbar-item">
        <Link to="/Docks">DOCKS</Link>
      </li>
    </ul>
  );
};
