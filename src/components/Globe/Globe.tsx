import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
// SVG imports
import ListeningIcon from "../../assets/svg/listening.svg?react";
import SpeakingIcon from "../../assets/svg/speaking.svg?react";
import IdleIcon from "../../assets/svg/idle.svg?react";
import CorrectingIcon from "../../assets/svg/correcting.svg?react";

const Globe = () => {
  const { appStatus } = useContext(AppContext);

  const renderStatusIcon = () => {
    switch (appStatus) {
      case "listening":
        return <ListeningIcon />;
      case "speaking":
        return <SpeakingIcon />;
      case "idle":
        return <IdleIcon />;
      case "correcting":
        return <CorrectingIcon />;
      default:
        return <IdleIcon />;
    }
  };

  return <div>{renderStatusIcon()}</div>;
};

export default Globe;
