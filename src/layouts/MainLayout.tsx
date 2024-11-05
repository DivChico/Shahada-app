import React, { useContext, useState } from "react";
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
const prompts = {
  english: [
    "Hi, are you ready to say the Shahada?",
    "Say 'Allahu Akbar'.",
    "Say 'La ilaha illallah'.",
    "Say 'Muhammadur rasulullah'.",
  ],
  arabic: [
    "هل أنت مستعد لتقول الشهادة؟",
    "الله أكبر",
    "لا إله إلا الله",
    "محمد رسول الله",
  ],
};
const MainLayout = () => {
  const {
    spokenText,
    setSpokenText,
    transcribedText,
    setTranscribedText,
    appStatus,
    setAppStatus,
  } = useContext(AppContext);
  const [currentStep, setCurrentStep] = useState(0);

  const [isArabic, setIsArabic] = useState(false);

  const { isListening } = useListen();

  const handleSpeak = async () => {
    if (appStatus !== "speaking") {
      console.log("start");

      await speak(); // Trigger the speaking function
      console.log("done");
    }
  };
  const startListening = () => {
    setTranscribedText(""); //
    setAppStatus("listening");
  };

  const speak = useSpeak(prompts.english[currentStep], startListening);

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
            onClick={handleSpeak}
            className="font-medium text-[20px] leading-[28px] mt-3"
          >
            start{" "}
          </p>
          <div className="mt-20">
            <Globe />
          </div>
          <p className="font-medium text-[18px] leading-[24px] mt-20">
            {transcribedText}{" "}
          </p>
          <p
            onClick={startListening}
            className="font-medium text-[18px] leading-[24px] mt-20"
          >
            listening
          </p>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
