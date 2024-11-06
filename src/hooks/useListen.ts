import { useContext, useEffect, useState } from "react";
//context
import { AppContext } from "../context/AppContext";
// custom hooks
import useSpeak from "./useSpeak";
//constants
import { prompts } from "../constants";
// library
import leven from "leven";

const useListen = () => {
  const {
    setCurrentStep,
    setTranscribedText,
    appStatus,
    setAppStatus,
    currentStep,
    setSpokenText,
    setIsLoading,
    setIsCorrect,
  } = useContext(AppContext);
  const speak = useSpeak(prompts[currentStep]);
  const mistake = useSpeak(
    " close , but repeat after me " + prompts[currentStep]
  );

  const [isListening, setIsListening] = useState(false);
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;

  useEffect(() => {
    const handleResult = (event) => {
      console.log("handleResult");

      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      console.log(transcript);

      setTranscribedText(transcript);
      console.log(prompts[currentStep]);
      setIsLoading(false);

      if (leven(transcript, prompts[currentStep]) >= 10) {
        // it means that the prenouncing is wrong
        console.log("prenouncing is wrong");
        setIsCorrect(true);

        mistake();
      } else {
        // means the preouncing is correct
        setIsCorrect(false);

        console.log("preouncing is correct");

        if (currentStep < prompts.length) {
          if (currentStep == 0) {
            setCurrentStep((prev) => prev + 1);
          } else {
            setCurrentStep((prev) => prev + 1);

            setTimeout(() => {
              speak();
            }, 500);
          }
        }
      }
      setAppStatus("idle");
    };

    const handleEnd = () => {
      console.log("end listen ");
      setIsLoading(false);

      setSpokenText("no speach detected , please press again to start");
      setAppStatus("idle");
    };

    const handleError = (event) => {
      console.log("handleError");
      setIsLoading(false);

      console.error("Speech recognition error:", event.error);
      setAppStatus("idle");
      setIsListening(false);

      setAppStatus("idle");
    };

    if (appStatus === "listening") {
      console.log("start listining");
      setIsLoading(true);

      recognition.start();
      setIsListening(true);
    }

    // Event listeners for recognition events
    recognition.addEventListener("result", handleResult);
    recognition.addEventListener("end", handleEnd);
    recognition.addEventListener("error", handleError);

    // Cleanup event listeners and stop recognition on unmount
    return () => {
      recognition.removeEventListener("result", handleResult);
      recognition.removeEventListener("end", handleEnd);
      recognition.removeEventListener("error", handleError);
      recognition.stop();
    };
  }, [appStatus, isListening, setTranscribedText, setAppStatus]);

  return { recognition };
};

export default useListen;
