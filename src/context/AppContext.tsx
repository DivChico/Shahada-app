import React, { createContext, useState } from "react";

type TAppProviderProps = {
  children: React.ReactNode;
};
const AppContext = createContext({});

const AppProvider = ({ children }: TAppProviderProps) => {
  const [spokenText, setSpokenText] = useState("chico-text");
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
