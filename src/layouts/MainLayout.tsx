import { useContext } from "react";
//svg
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
import { prompts } from "../constants";

// utils
import { handleDarkLightMode } from "../utils";
// icons
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const MainLayout = () => {
  useListen();
  const { currentStep, setIsDark, isDark } = useContext(AppContext);
  const speak = useSpeak(prompts[currentStep]);

  const handleSpeak = () => {
    speak();
  };

  return (
    <>
      <div className="lg:max-w-5xl mx-auto p-8 min-h-screen flex flex-col font-Tajawal">
        <Header />
        <div className="flex items-center flex-col justify-center flex-grow  ">
          <h1 className=" uppercase font-bold  text-[48px] leading-[60px] md:text-[56px] md:leading-[70px] lg:text-[64px] lg:leading-[80px]">
            shahada
          </h1>

          <SpokenText />

          <div onClick={handleSpeak} className="mt-2 max-w-52 lg:mt-20 ">
            <Globe />
          </div>
          <TranscripedText />
          <AppStatus />
        </div>
        <button
          onClick={() => {
            handleDarkLightMode();
            setIsDark(!isDark);
          }}
          className=" fixed flex items-center justify-center  text-sm h-5  w-5 bottom-10 right-10 bg-black dark:bg-white rounded-full text-white dark:text-black font-semibold"
        >
          {isDark ? <CiLight size={20} /> : <MdDarkMode size={20} />}
        </button>
      </div>
    </>
  );
};

export default MainLayout;
