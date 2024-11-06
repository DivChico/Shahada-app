import React from "react";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header className=" flex flex-row items-center justify-between h-[48px] border">
      <p className="font-bold text-[20px] leading-[28px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
        shahada
      </p>

      <NavBar />
      <div className=" hidden  lg:block">
        <p>search icon</p>
      </div>
    </header>
  );
};

export default Header;
