import React from "react";
import { FaSearch, FaRegEdit, FaRegBell, FaUserCircle, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";


const handleKyrgyzstanClick = (e) => {
  e.preventDefault();
  window.location.reload();
};





const Navbar = () => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <nav className="flex p-2 border-b items-center ">
      <a className="ml-3 font-bold text-2xl cursor-pointer" style={{
        fontFamily: "Georgia, serif",
      }}
        onClick={handleKyrgyzstanClick}
      > Kyrgyzstan</a>
      <div className="relative ml-6">
        <input
          className="bg-gray-100 max-h-2 p-3.5 text-xs rounded-2xl pl-10 "
          type="search"
          id="search"
          placeholder="Search..."
        />
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex  items-center  ml-auto mr-4 ">
        <a className="ml-4 text-sm flex items-center text-gray-500" href="">
          <FaRegEdit className="mr-1 mt-1 text-gray-500 text-lg" />write
        </a>
        <a className="ml-4" href=""><FaRegBell className="mr-2 mt-1 text-gray-500 text-lg" /></a>
        <a className="ml-4 cursor-pointer" onClick={toggleDropdown}>
          <FaUserCircle className="mt-1 text-gray-400 text-2xl" />
        </a>
        {isDropdownOpen && (
          <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-4 w-52">
            <ul>
              <li className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-700"><FaUser className="mr-3 text-gray-400 text-lg" />Profile</li>
              <li className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-700"><FaCog className="mr-3 text-gray-400 text-lg" />Settings</li>
              <li className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-700"> <FaSignOutAlt className="mr-3 text-gray-400 text-lg" />Logout</li>
            </ul>
          </div>
        )}


      </div>


    </nav>



  );
};

export default Navbar;