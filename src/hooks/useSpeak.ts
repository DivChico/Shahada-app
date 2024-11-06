import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useSpeak = (text: string) => {
  const { setSpokenText, setAppStatus, setTranscribedText, currentStep } =
    useContext(AppContext);

  const speak = () => {
    setSpokenText(text);
    setAppStatus("speaking");
    setTranscribedText("");

    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(
        currentStep == 0 ? "repeat after me ," + text : "say," + text
      );

      // utterance setings
      speech.rate = 1.2; // Speed
      speech.pitch = 0.5; // Pitch
      speech.volume = 0.5; // Volume

      speech.onend = () => {
        console.log("end speek");
        setTimeout(() => {
          console.log("end  3s");

          setAppStatus("listening");
        }, 800);
      };

      window.speechSynthesis.speak(speech);
    } else {
      console.error("Speech synthesis not supported in this browser.");
    }
  };

  return speak;
};

export default useSpeak;
