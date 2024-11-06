import { createContext, useState } from "react";

type TAppProviderProps = {
  children: React.ReactNode;
};

interface TAppContext {
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
  isDark: boolean;
  setIsDark: (correct: boolean) => void;
  isFinish: boolean;
  setIsFinish: (correct: boolean) => void;
}

const AppContext = createContext<any>({});

const AppProvider = ({ children }: TAppProviderProps) => {
  const [spokenText, setSpokenText] = useState(
    "Your first step on your path to Islam, click on the globe to start"
  );
  const [transcribedText, setTranscribedText] = useState("");
  const [appStatus, setAppStatus] = useState("idle");
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const value: TAppContext = {
    isFinish,
    setIsFinish,
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
    isDark,
    setIsDark,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
