import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useT } from '../context/TranslationContext';

const TextToSpeech = ({ text, className = '' }) => {
  const { language, languageCode } = useT();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef(null);

  useEffect(() => {
    // Check if browser supports speech synthesis
    setIsSupported('speechSynthesis' in window);
  }, []);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = () => {
    if (!isSupported || !text) return;

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode || 'en-NG';
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;
    utterance.volume = 1;

    // Set voice based on language
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => {
      if (language === 'Yoruba' || language === 'Hausa' || language === 'Igbo') {
        return voice.lang.startsWith('en'); // Fallback to English for Nigerian languages
      }
      return voice.lang.startsWith(languageCode || 'en');
    });
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (error) => {
      console.error('Speech synthesis error:', error);
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  if (!isSupported) {
    return null; // Don't show button if not supported
  }

  return (
    <button
      onClick={isSpeaking ? stop : speak}
      className={`p-2 rounded-full transition-all hover:bg-green-100 dark:hover:bg-green-800 ${
        isSpeaking 
          ? 'bg-green-200 dark:bg-green-700 text-green-700 dark:text-green-200' 
          : 'bg-gray-100 dark:bg-green-900 text-gray-600 dark:text-green-300'
      } ${className}`}
      title={isSpeaking ? 'Stop reading' : 'Read aloud'}
      aria-label={isSpeaking ? 'Stop reading' : 'Read aloud'}
    >
      {isSpeaking ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
};

export default TextToSpeech;

