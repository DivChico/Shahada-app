import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useSpeak = () => {
  const { setSpokenText, setAppStatus } = useContext(AppContext);

  const speak = (text) => {
    // Set the application status to 'speaking'
    setAppStatus("speaking");
    setSpokenText(text);

    // Check if the browser supports speech synthesis
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      // Optional: Set properties for the utterance
      utterance.rate = 1.5; // Speed of speech
      utterance.pitch = 0.5; // Pitch of voice
      utterance.volume = 0.5; // Volume (0 to 1)

      // When the speaking ends, reset the status
      utterance.onend = () => {
        setAppStatus("idle"); // Reset status after speaking
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech synthesis not supported in this browser.");
    }
  };

  return { speak };
};

export default useSpeak;
