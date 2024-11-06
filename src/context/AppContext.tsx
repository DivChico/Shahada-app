import React, { createContext, useState } from "react";

type TAppProviderProps = {
  children: React.ReactNode;
};

type TAppContext = {
  spokenText: string;
  setSpokenText: (text: string) => void;
  transcribedText: string;
  setTranscribedText: (text: string) => void;
  appStatus: string;
  setAppStatus: (status: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isCorrect: boolean;
  setIsCorrect: (correct: boolean) => void;
};

// Initial context value
const AppContext = createContext<TAppContext | undefined>(undefined);

const AppProvider = ({ children }: TAppProviderProps) => {
  const [spokenText, setSpokenText] = useState(
    "Your first step on your path to Islam, click on the globe to start"
  );
  const [transcribedText, setTranscribedText] = useState("");
  const [appStatus, setAppStatus] = useState("idle");
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const value = {
    spokenText,
    setSpokenText,
    transcribedText,
    setTranscribedText,
    appStatus,
    setAppStatus,
    currentStep,
    setCurrentStep,
    isLoading,
    setIsLoading,
    isCorrect,
    setIsCorrect,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
