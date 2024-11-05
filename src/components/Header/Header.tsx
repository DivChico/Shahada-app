import React from "react";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header className=" flex flex-row items-center justify-between h-[48px] border">
      <div>
        <p className="font-bold uppercase text-[20px] leading-[28px]">
          shahada
        </p>
      </div>

      <NavBar />
      <p>search icon</p>
    </header>
  );
};

export default Header;
