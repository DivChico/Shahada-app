import React, { useContext, useEffect, useState } from "react";
//svg
import Listening from "../../src/assets/svg/listening.svg?react";
// context
import { AppContext } from "../context/AppContext";
// hooks
import useSpeak from "../hooks/useSpeak";

//components
import {
  AppStatus,
  Globe,
  Header,
  SpokenText,
  TranscripedText,
} from "../components";
import useListen from "../hooks/useListen";
// constants
import { prompts } from "../utils/speek";
//spinner
import ClipLoader from "react-spinners/ClipLoader";

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
  const speak = useSpeak(prompts[currentStep]);

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
      <div className="lg:max-w-5xl mx-auto p-8 min-h-screen flex flex-col font-Tajawal">
        <Header />
        <div className="flex items-center flex-col justify-center flex-grow  border">
          <p className=" uppercase font-bold  text-[48px] leading-[60px] md:text-[56px] md:leading-[70px] lg:text-[64px] lg:leading-[80px]">
            shahada
          </p>

          <SpokenText />

          <div onClick={handleSpeak} className="mt-2 max-w-52 lg:mt-20 ">
            <Globe />
          </div>
          <TranscripedText />
          <AppStatus />
        </div>
        <button
          onClick={handleDarkLightMode}
          className=" fixed lg:w-16 lg:h-16 w-10 text-sm h-10 bottom-10 right-10 bg-black dark:bg-white rounded-full text-white dark:text-black font-semibold"
        >
          {localStorage.theme === "dark" ? "light" : "dark "}
        </button>
      </div>
    </>
  );
};

export default MainLayout;
