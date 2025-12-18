import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, X } from 'lucide-react';
import { useT } from '../context/TranslationContext';

const VoiceNavigation = ({ onNavigate, onCommand }) => {
  const { t, languageCode } = useT();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      // Set language based on user preference
      const langMap = {
        'en': 'en-US',
        'yo': 'yo-NG',
        'ha': 'ha-NG',
        'ig': 'ig-NG'
      };
      recognition.lang = langMap[languageCode] || 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript;
        setTranscript(transcriptText);

        // Process command when final result
        if (event.results[current].isFinal) {
          processCommand(transcriptText);
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'no-speech') {
          setTranscript('No speech detected. Please try again.');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        setTranscript('');
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const processCommand = (command) => {
    const lowerCommand = command.toLowerCase().trim();
    
    // Navigation commands
    if (lowerCommand.includes('home') || lowerCommand.includes('go home')) {
      onNavigate('home');
      speak('Navigating to home');
    } else if (lowerCommand.includes('guide') || lowerCommand.includes('crop guide')) {
      onNavigate('guide');
      speak('Opening crop guide');
    } else if (lowerCommand.includes('calendar') || lowerCommand.includes('planting calendar')) {
      onNavigate('calendar');
      speak('Opening planting calendar');
    } else if (lowerCommand.includes('tracker') || lowerCommand.includes('farm tracker')) {
      onNavigate('tracker');
      speak('Opening farm tracker');
    } else if (lowerCommand.includes('pest') || lowerCommand.includes('pest detection')) {
      onNavigate('pest');
      speak('Opening pest detection');
    } else if (lowerCommand.includes('livestock') || lowerCommand.includes('animals')) {
      onNavigate('livestock');
      speak('Opening livestock section');
    } else if (lowerCommand.includes('mixed') || lowerCommand.includes('mixed farming')) {
      onNavigate('mixed');
      speak('Opening mixed farming section');
    } else if (lowerCommand.includes('settings')) {
      onNavigate('settings');
      speak('Opening settings');
    } else if (lowerCommand.includes('help') || lowerCommand.includes('help center')) {
      onNavigate('help');
      speak('Opening help center');
    } else {
      // Pass command to parent for custom handling
      if (onCommand) {
        onCommand(lowerCommand);
      }
    }
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
        speak('Listening... Say a command like "go to home" or "open crop guide"');
      } catch (error) {
        console.error('Error starting recognition:', error);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      setTranscript('');
    }
  };

  if (!isSupported) {
    return (
      <div className="fixed bottom-24 right-4 z-40">
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-4 shadow-lg max-w-xs">
          <p className="text-sm text-yellow-800">
            {t('voice.notSupported')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-4 z-40">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-green-200 overflow-hidden">
        {isListening && (
          <div className="bg-green-500 text-white px-4 py-2 text-sm font-semibold flex items-center justify-between">
            <span>🎤 {t('voice.listening')}</span>
            <button
              onClick={stopListening}
              className="hover:bg-green-600 rounded-full p-1 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        
        {transcript && (
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <p className="text-sm text-gray-700">{transcript}</p>
          </div>
        )}

        <button
          onClick={isListening ? stopListening : startListening}
          className={`p-4 transition-all transform hover:scale-110 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
          } text-white rounded-full shadow-lg`}
          title={isListening ? 'Stop listening' : 'Start voice navigation'}
        >
          {isListening ? (
            <MicOff className="w-6 h-6" />
          ) : (
            <Mic className="w-6 h-6" />
          )}
        </button>

        {!isListening && (
          <div className="px-4 py-2 bg-gray-50">
            <p className="text-xs text-gray-600 text-center">
              Tap to speak
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceNavigation;

