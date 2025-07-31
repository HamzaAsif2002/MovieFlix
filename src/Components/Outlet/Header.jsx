import { NavLink } from "react-router-dom";

export const Header = () => {
  const handleActive = ({ isActive }) => {
    return isActive
      ? "text-red-500 transition"
      : "hover:text-gray-300 transition";
  };
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center w-[80%]">
        {/* Left Side */}
        <div className="text-2xl font-bold">Hamza Flix</div>

        {/* Right Side */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <NavLink to="/" className={handleActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Movies" className={handleActive}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={handleActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={handleActive}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
