import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
// SVG imports
import ListeningIcon from "../../assets/svg/listening.svg";
import SpeakingIcon from "../../assets/svg/speaking.svg";
import IdleIcon from "../../assets/svg/idle.svg";
import CorrectingIcon from "../../assets/svg/correcting.svg";

const Globe = () => {
  const { appStatus } = useContext(AppContext);

  const renderStatusIcon = () => {
    switch (appStatus) {
      case "listening":
        return ListeningIcon;
      case "speaking":
        return SpeakingIcon;
      case "idle":
        return IdleIcon;
      case "correcting":
        return CorrectingIcon;
      default:
        return IdleIcon;
    }
  };

  return (
    <div>
      <img src={renderStatusIcon()} className="logo" alt="Vite logo" />
    </div>
  );
};

export default Globe;
