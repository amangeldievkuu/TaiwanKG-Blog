import React, { useState } from "react";
import {
  FaSearch,
  FaRegEdit,
  FaRegBell,
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className=" flex flex-wrap items-center justify-between p-4 border-b bg-white">
      {/* Logo */}
      <a
        className="text-2xl  mt-3 md:mt-0 font-bold text-gray-800"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Kyrgyzstan
      </a>

      {/* Search Bar */}
      <div className="relative flex-1 ml-4 mt-3 md:mt-0 ">
        <input
          className="bg-gray-100  w-2/5 sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-1/4 p-2 text-sm rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="search"
          placeholder="Search..."
        />
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 mt-3 md:mt-0">
        <a
          href="#"
          className="flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <FaRegEdit className="mr-1 text-lg" />
          <span className="hidden sm:inline">Write</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaRegBell className="text-lg" />
        </a>

        {/* Dropdown */}
        <button
          onClick={toggleDropdown}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaUserCircle className="text-2xl" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
          <ul>
            <li className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-700 hover:bg-gray-100 cursor-pointer">
              <FaUser className="mr-3 text-gray-400 text-lg" />
              Profile
            </li>
            <li className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-700 hover:bg-gray-100 cursor-pointer">
              <FaCog className="mr-3 text-gray-400 text-lg" />
              Settings
            </li>
            <li className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-700 hover:bg-gray-100 cursor-pointer">
              <FaSignOutAlt className="mr-3 text-gray-400 text-lg" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
