import { useContext } from "react";
import { ClipLoader } from "react-spinners";
import { AppContext } from "../../context/AppContext";

const TranscripedText = () => {
  const { isLoading, transcribedText, isCorrect } = useContext(AppContext);
  return (
    <p
      className={` ${
        isCorrect ? "text-green-600" : " text-red-600"
      }font-Poppins mt-3  max-w-sm text-center font-medium text-[20px] leading-[28px] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[22px] lg:leading-[30px]`}
    >
      {/* {transcribedText} */}
      {isLoading ? (
        <ClipLoader
          color={localStorage.theme === "dark" ? "gray" : "olive"}
          // loading={loading}
          // cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        transcribedText
      )}
    </p>
  );
};

export default TranscripedText;
