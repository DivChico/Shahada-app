import React from "react";
//svg
import Listening from "../../src/assets/svg/aura.svg?react";
//components
import { Header } from "../components";
const MainLayout = () => {
  function handleDarkLightMode() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  return (
    <>
      <div className="max-w-5xl mx-auto p-8 min-h-screen flex flex-col">
        <Header />
        <div className="flex items-center flex-col justify-center flex-grow  border">
          <p className=" uppercase font-bold text-[64px] leading-[80px]">
            shahadas
          </p>
          <p className="font-medium text-[20px] leading-[28px] mt-3">
            Your first step on your path to Islam.
          </p>
          <div className="mt-20">
            <Listening />
          </div>
          <p className="font-medium text-[18px] leading-[24px] mt-20">
            i’m listening
          </p>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
