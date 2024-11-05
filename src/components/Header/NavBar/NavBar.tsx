import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li className=" uppercase font-semibold text-[14px] leading-[22px]">
          home
        </li>
        <li className=" uppercase font-semibold text-[14px] leading-[22px]">
          about us
        </li>
        <li className=" uppercase font-semibold text-[14px] leading-[22px]">
          blog
        </li>
        <li className=" uppercase font-semibold text-[14px] leading-[22px]">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
