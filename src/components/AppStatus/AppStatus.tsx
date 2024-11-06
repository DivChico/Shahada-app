import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const AppStatus = () => {
  const { appStatus } = useContext(AppContext);

  return (
    <p className=" font-Poppins mt-3  max-w-sm text-center font-medium text-[20px] leading-[28px] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[22px] lg:leading-[30px]">
      I'm {appStatus}
    </p>
  );
};

export default AppStatus;
