import React, { useContext } from "react";
//svg
import Listening from "../../src/assets/svg/aura.svg?react";
// context
import { AppContext } from "../context/AppContext";
// hooks
import useSpeak from "../hooks/useSpeak";

//components
import { Header } from "../components";
const MainLayout = () => {
  const { speak } = useSpeak();
  const handleStart = () => {
    speak("Welcome! Would you like to start?");
  };
  const {
    spokenText,
    setSpokenText,
    transcribedText,
    setTranscribedText,
    appStatus,
    setAppStatus,
  } = useContext(AppContext);

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
            {spokenText}{" "}
          </p>
          <p
            onClick={handleStart}
            className="font-medium text-[20px] leading-[28px] mt-3"
          >
            start{" "}
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
