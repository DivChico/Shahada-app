import React, { createContext, useState } from "react";

type TAppProviderProps = {
  children: React.ReactNode;
};
const AppContext = createContext({});

const AppProvider = ({ children }: TAppProviderProps) => {
  const [spokenText, setSpokenText] = useState(
    "Your first step on your path to Islam , click on the globe to start"
  );
  const [transcribedText, setTranscribedText] = useState("");
  const [appStatus, setAppStatus] = useState("idle"); // possible states: 'idle', 'listening', 'speaking', etc.
  const [currentStep, setCurrentStep] = useState(0);
  // Context value to be provided to children
  const value = {
    spokenText,
    setSpokenText,
    transcribedText,
    setTranscribedText,
    appStatus,
    setAppStatus,
    currentStep,
    setCurrentStep,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
