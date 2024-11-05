import React, { useContext, useEffect, useState } from "react";
//svg
import Listening from "../../src/assets/svg/listening.svg?react";
// context
import { AppContext } from "../context/AppContext";
// hooks
import useSpeak from "../hooks/useSpeak";

//components
import { Globe, Header } from "../components";
import useListen from "../hooks/useListen";
// constants
import { prompts } from "../utils/speek";
const MainLayout = () => {
  useListen();
  const {
    spokenText,
    setSpokenText,
    transcribedText,
    setTranscribedText,
    appStatus,
    setAppStatus,
    currentStep,
    setCurrentStep,
  } = useContext(AppContext);
  const speak = useSpeak(prompts.english[currentStep]);

  const startListening = () => {
    setTranscribedText("");
    setAppStatus("listening");
  };

  const handleSpeak = () => {
    speak();
  };

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
            shahada
          </p>

          <p className="font-medium  max-w-sm text-center text-[20px] leading-[28px] mt-3">
            {spokenText}
          </p>

          <div onClick={handleSpeak} className="mt-20">
            <Globe />
          </div>
          <p className="font-medium text-[18px] leading-[24px] mt-20">
            I'm {appStatus}
          </p>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
