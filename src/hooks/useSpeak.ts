import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useSpeak = (text, onEnd) => {
  const { setSpokenText, setAppStatus } = useContext(AppContext);

  const speak = () => {
    setSpokenText(text);
    setAppStatus("speaking");

    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);

      // utterance setings
      speech.rate = 1.7; // Speed
      speech.pitch = 0.5; // Pitch
      speech.volume = 0.5; // Volume

      speech.onend = () => {
        setAppStatus("idel");

        if (onEnd) {
          onEnd();
        }
      };

      window.speechSynthesis.speak(speech);
    } else {
      console.error("Speech synthesis not supported in this browser.");
    }
  };

  return speak;
};

export default useSpeak;
