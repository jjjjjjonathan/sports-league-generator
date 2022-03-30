import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
      <ul className="flex flex-col cursor-pointer  md:flex-row md:items-center ">
        <Link to="/">
          <img
            src="/images/Nav_Logo.png"
            alt="ez-league-logo"
            className="w-20"
          />
        </Link>

        <li className="md:mx-4 hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="md:mx-4 hover:text-gray-400">
          <Link to="/standing">League Table</Link>
        </li>
        <li className="md:mx-4 hover:text-gray-400">
          <Link to="/teamform">Team Form</Link>
        </li>
        <li className="md:mx-4 hover:text-gray-400">
          <Link to="/leagueform">Create a New League</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
