import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
// icons
import { IoNewspaperSharp } from "react-icons/io5";

const Certificate = () => {
  const { isFinish } = useContext(AppContext);
  return (
    <div
      className={`${
        isFinish ? "" : " hidden"
      } flex flex-col space-y-4 items-center mt-2 lg:mt-6 `}
    >
      <button className="bg-black w-60 dark:bg-white text-white dark:text-black py-2 px-4 rounded-md">
        <div className="flex items-center justify-center gap-2">
          <IoNewspaperSharp color="white" />
          your certificate{" "}
        </div>
      </button>
      <button className="bg-white w-60 dark:bg-black  text-black dark:text-white border border-black py-2 px-4 rounded-md">
        White Button
      </button>
    </div>
  );
};

export default Certificate;
