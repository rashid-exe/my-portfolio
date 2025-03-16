import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <Link
          to="/"
          className="text-2xl font-semibold text-white tracking-wider hover:text-gray-400 transition duration-300 hover:scale-110 "
        >
          Rashid Reyaz
        </Link>
        <div className="space-x-8 flex items-center">
          <Link
            to="/"
            className="text-lg font-medium text-white hover:text-gray-400 transition duration-300 hover:scale-110 "
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-lg font-medium text-white hover:text-gray-400 transition duration-300 hover:scale-110 "
          >
            Projects
          </Link>
          <Link
            to="/future-projects"
            className="text-lg font-medium text-white hover:text-gray-400 transition duration-300 hover:scale-110"
          >
            Future Projects
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium text-white hover:text-gray-400 transition duration-300 hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;