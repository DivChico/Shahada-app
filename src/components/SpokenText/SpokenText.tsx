import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SpokenText = () => {
  const { spokenText } = useContext(AppContext);
  return (
    <p className=" font-Poppins mt-3  max-w-sm text-center font-medium   text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[22px] lg:leading-[30px]">
      {spokenText}
    </p>
  );
};

export default SpokenText;
