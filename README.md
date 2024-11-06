# Voice-Based Word Recitation App

a responsive and interactive web application using
React.js that allows users to recite the Shahada, with the application providing
visual feedback for audio input

## Tech Stack

- **Frontend**: React with Tailwind CSS for styling and React Icons for iconography.
- **State Management**: context for managing app-wide states like word progress and user preferences.
- **Speech Recognition**: Custom hooks leveraging Web Speech API.
- **Similarity Matching**: Levenshtein algorithm via the `leven` library to measure accuracy of user’s recitation.

## Features

- **Voice Input Matching**: Users recite words, and the app checks for accuracy before moving to the next word.
- **Dark/Light Mode**: Theme toggle for user preference.
- **Responsive Design**: Fully responsive with Tailwind CSS.
- **High Performance**: Optimized for smooth interaction and minimal delay.
- **Dark/Light Mode Toggle**: theme customization.

## Custom Hooks

- **useSpeak**: Plays a specific word or string as a voice output.
- **useListen**: Listens for user input, transcribes it, and compares it to the target word.

## Design Patterns

1. **Custom Hooks**: `useSpeak` and `useListen` are reusable hooks that separate concerns and simplify component logic.
2. **Separation of Concerns**: Functions are modular, focusing on specific tasks to enhance maintainability and readability.

## Known Bugs

1. **Double Command Execution**: The app repeats the initial command twice, which will be fixed in future updates.
