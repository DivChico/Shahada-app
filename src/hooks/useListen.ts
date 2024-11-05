import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import useSpeak from "./useSpeak";
import { prompts } from "../utils/speek";

const useListen = () => {
  const {
    transcribedText,
    setCurrentStep,
    setTranscribedText,
    appStatus,
    setAppStatus,
    currentStep,
  } = useContext(AppContext);
  const speak = useSpeak(prompts.english[currentStep]);

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
      if (currentStep < prompts.english.length) {
        setCurrentStep((prev) => prev + 1);
        setTimeout(() => {
          speak();
        }, 1000);
      }
    };

    const handleEnd = () => {
      console.log("end listen ");
      console.log(currentStep);

      // setAppStatus("speaking");

      //   if (isListening) {
      //     recognition.start();
      //   }
    };

    const handleError = (event) => {
      console.log("handleError");

      console.error("Speech recognition error:", event.error);
      setAppStatus("idle");
      setIsListening(false);
    };

    // Start listening when appStatus is set to "listening"
    // if (appStatus === "listening" && !isListening) {
    if (appStatus === "listening") {
      console.log("start listining");

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
