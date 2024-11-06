import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4  ">
      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Links */}
      <ul
        className={`gap-4 uppercase font-semibold text-[14px] leading-[22px] lg:flex ${
          isOpen
            ? "flex flex-col mt-4 lg:mt-0 p-5 bg-gray-100 shadow-md  absolute top-14   right-8"
            : "hidden"
        }`}
      >
        <li className="hover:text-gray-500">home</li>
        <li className="hover:text-gray-500">about us</li>
        <li className="hover:text-gray-500">blog</li>
        <li className="hover:text-gray-500">contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
