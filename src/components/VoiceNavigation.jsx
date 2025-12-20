import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, X } from 'lucide-react';
import { useT } from '../context/TranslationContext';

const VoiceNavigation = ({ onNavigate, onCommand }) => {
  const { t, languageCode } = useT();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState('');
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);

  // Nigerian accent-friendly command patterns
  const commandPatterns = {
    home: ['home', 'go home', 'go to home', 'main page', 'dashboard', 'main', 'home page', 'go back home', 'take me home'],
    guide: ['guide', 'crop guide', 'crops guide', 'open guide', 'show guide', 'crop', 'crops', 'planting guide', 'go to guide', 'open crop guide'],
    calendar: ['calendar', 'planting calendar', 'open calendar', 'show calendar', 'go to calendar', 'calender', 'planting calender'],
    tracker: ['tracker', 'farm tracker', 'open tracker', 'show tracker', 'go to tracker', 'farm log', 'farm logs', 'my farm', 'my crops'],
    pest: ['pest', 'pest detection', 'pest control', 'pests', 'open pest', 'show pest', 'go to pest', 'pest diagnosis', 'pest problem'],
    livestock: ['livestock', 'animals', 'animal', 'cattle', 'goats', 'sheep', 'poultry', 'open livestock', 'show livestock', 'go to livestock', 'animal production'],
    mixed: ['mixed', 'mixed farming', 'open mixed', 'show mixed', 'go to mixed', 'mixed farm'],
    settings: ['settings', 'setting', 'open settings', 'show settings', 'go to settings', 'preferences', 'config'],
    help: ['help', 'help center', 'open help', 'show help', 'go to help', 'support', 'assistance']
  };

  // Fuzzy matching function for Nigerian accents
  const fuzzyMatch = (command, patterns) => {
    const normalizedCommand = command.toLowerCase().trim();
    
    // Direct match
    for (const pattern of patterns) {
      if (normalizedCommand.includes(pattern)) {
        return true;
      }
    }
    
    // Phonetic matching for common Nigerian accent variations
    const phoneticMap = {
      'calender': 'calendar',
      'calandar': 'calendar',
      'tracka': 'tracker',
      'tracker': 'tracker',
      'pest': 'pest',
      'pests': 'pest',
      'livestock': 'livestock',
      'livestok': 'livestock',
      'animals': 'livestock',
      'animal': 'livestock',
      'guide': 'guide',
      'gide': 'guide',
      'crop': 'guide',
      'crops': 'guide'
    };
    
    // Check phonetic variations
    for (const [variant, standard] of Object.entries(phoneticMap)) {
      if (normalizedCommand.includes(variant)) {
        return patterns.some(p => p.includes(standard) || standard.includes(p));
      }
    }
    
    // Check for partial matches (for commands like "go to crop guide")
    return patterns.some(pattern => {
      const words = normalizedCommand.split(/\s+/);
      return words.some(word => pattern.includes(word) || word.includes(pattern));
    });
  };

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognition = new SpeechRecognition();
      
      // Configure for better Nigerian accent recognition
      recognition.continuous = true; // Changed to continuous for better recognition
      recognition.interimResults = true;
      recognition.maxAlternatives = 3; // Get multiple alternatives for better matching
      
      // Use Nigerian English for better accent recognition
      // Fallback to en-GB or en-US if en-NG is not available
      const langMap = {
        'en': ['en-NG', 'en-GB', 'en-US'], // Try Nigerian English first, then British, then US
        'yo': ['yo-NG', 'yo'],
        'ha': ['ha-NG', 'ha'],
        'ig': ['ig-NG', 'ig']
      };
      
      // Try preferred language codes in order
      const preferredLangs = langMap[languageCode] || ['en-NG', 'en-GB', 'en-US'];
      recognition.lang = preferredLangs[0]; // Start with first preference
      let langIndex = 0;

      recognition.onstart = () => {
        setIsListening(true);
        setError('');
        setTranscript('');
        
        // Auto-stop after 10 seconds of listening
        timeoutRef.current = setTimeout(() => {
          if (recognitionRef.current) {
            recognitionRef.current.stop();
          }
        }, 10000);
      };

      recognition.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
        // Process all results
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }
        
        // Show interim results
        if (interimTranscript) {
          setTranscript(interimTranscript);
        }
        
        // Process final results
        if (finalTranscript) {
          const cleanedTranscript = finalTranscript.trim();
          setTranscript(cleanedTranscript);
          processCommand(cleanedTranscript);
          
          // Stop after processing
          setTimeout(() => {
            if (recognitionRef.current) {
              try {
                recognitionRef.current.stop();
              } catch (e) {
                // Ignore errors when stopping
              }
            }
          }, 500);
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        
        // Try fallback language if language not supported
        if (event.error === 'language-not-supported' && langIndex < preferredLangs.length - 1) {
          langIndex++;
          recognition.lang = preferredLangs[langIndex];
          try {
            if (!isListening) {
              recognition.start();
            }
            return; // Don't show error, just try next language
          } catch (e) {
            // Continue to error handling below
          }
        }
        
        setIsListening(false);
        
        // Clear timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        let errorMessage = '';
        switch (event.error) {
          case 'no-speech':
            errorMessage = 'No speech detected. Please speak clearly.';
            break;
          case 'audio-capture':
            errorMessage = 'No microphone found. Please check your microphone.';
            break;
          case 'not-allowed':
            errorMessage = 'Microphone permission denied. Please allow microphone access.';
            break;
          case 'network':
            errorMessage = 'Network error. Please check your connection.';
            break;
          case 'language-not-supported':
            // If we've tried all languages, show error
            if (langIndex >= preferredLangs.length - 1) {
              errorMessage = 'Language not supported. Please try again.';
            }
            break;
          case 'aborted':
            // User manually stopped, don't show error
            break;
          default:
            errorMessage = `Recognition error: ${event.error}. Please try again.`;
        }
        
        if (errorMessage) {
          setError(errorMessage);
          setTimeout(() => setError(''), 5000);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        
        // Clear timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        // Clear transcript after a delay
        setTimeout(() => {
          setTranscript('');
        }, 2000);
      };

      recognitionRef.current = recognition;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Ignore errors when stopping
        }
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [languageCode]);

  const processCommand = (command) => {
    const lowerCommand = command.toLowerCase().trim();
    
    // Use fuzzy matching for better Nigerian accent recognition
    if (fuzzyMatch(lowerCommand, commandPatterns.home)) {
      onNavigate('home');
      speak('Navigating to home');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.guide)) {
      onNavigate('guide');
      speak('Opening crop guide');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.calendar)) {
      onNavigate('calendar');
      speak('Opening planting calendar');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.tracker)) {
      onNavigate('tracker');
      speak('Opening farm tracker');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.pest)) {
      onNavigate('pest');
      speak('Opening pest detection');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.livestock)) {
      onNavigate('livestock');
      speak('Opening livestock section');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.mixed)) {
      onNavigate('mixed');
      speak('Opening mixed farming section');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.settings)) {
      onNavigate('settings');
      speak('Opening settings');
    } else if (fuzzyMatch(lowerCommand, commandPatterns.help)) {
      onNavigate('help');
      speak('Opening help center');
    } else {
      // Try to find partial matches for unrecognized commands
      const words = lowerCommand.split(/\s+/);
      let matched = false;
      
      for (const word of words) {
        if (fuzzyMatch(word, commandPatterns.home)) {
          onNavigate('home');
          speak('Navigating to home');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.guide)) {
          onNavigate('guide');
          speak('Opening crop guide');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.calendar)) {
          onNavigate('calendar');
          speak('Opening planting calendar');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.tracker)) {
          onNavigate('tracker');
          speak('Opening farm tracker');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.pest)) {
          onNavigate('pest');
          speak('Opening pest detection');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.livestock)) {
          onNavigate('livestock');
          speak('Opening livestock section');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.mixed)) {
          onNavigate('mixed');
          speak('Opening mixed farming section');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.settings)) {
          onNavigate('settings');
          speak('Opening settings');
          matched = true;
          break;
        } else if (fuzzyMatch(word, commandPatterns.help)) {
          onNavigate('help');
          speak('Opening help center');
          matched = true;
          break;
        }
      }
      
      if (!matched) {
        // Pass command to parent for custom handling
        if (onCommand) {
          onCommand(lowerCommand);
        } else {
          speak(`I didn't understand "${command}". Please try saying "go to home", "open crop guide", or "show calendar".`);
        }
      }
    }
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Function to set voice
      const setVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        
        // Try to use a Nigerian English voice if available
        const nigerianVoice = voices.find(voice => 
          voice.lang.includes('en-NG') || 
          voice.lang.includes('en-GB') || 
          (voice.lang.includes('en') && voice.name.toLowerCase().includes('british'))
        );
        
        if (nigerianVoice) {
          utterance.voice = nigerianVoice;
        } else if (languageCode && languageCode !== 'en') {
          // Try to match the user's language preference
          const preferredVoice = voices.find(voice => voice.lang.includes(languageCode));
          if (preferredVoice) {
            utterance.voice = preferredVoice;
          }
        }
        
        utterance.lang = languageCode === 'en' ? 'en-NG' : (languageCode ? `${languageCode}-NG` : 'en-NG');
      };
      
      // Try to get voices immediately
      setVoice();
      
      // If voices aren't loaded yet, wait for them
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          setVoice();
          window.speechSynthesis.speak(utterance);
        };
      } else {
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        // Request microphone permission first
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(() => {
            recognitionRef.current.start();
            speak('Listening... You can say "go to home", "open crop guide", "show calendar", or "farm tracker".');
          })
          .catch((err) => {
            console.error('Microphone permission denied:', err);
            setError('Microphone permission is required for voice navigation. Please allow microphone access in your browser settings.');
            setTimeout(() => setError(''), 5000);
          });
      } catch (error) {
        console.error('Error starting recognition:', error);
        setError('Failed to start voice recognition. Please try again.');
        setTimeout(() => setError(''), 5000);
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
    <div className="fixed bottom-24 right-3 sm:right-4 z-40">
      <div className="bg-white dark:bg-green-900 rounded-2xl shadow-2xl border-2 border-green-200 dark:border-green-500 overflow-hidden max-w-xs">
        {error && (
          <div className="bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-200 px-4 py-2 text-xs border-b border-red-200 dark:border-red-500">
            <p>{error}</p>
          </div>
        )}
        
        {isListening && (
          <div className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <span className="animate-pulse">🎤</span>
              <span>{t('voice.listening') || 'Listening...'}</span>
            </span>
            <button
              onClick={stopListening}
              className="hover:bg-green-600 dark:hover:bg-green-700 rounded-full p-1 transition-all"
              aria-label="Stop listening"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        
        {transcript && (
          <div className="px-4 py-2 bg-gray-50 dark:bg-green-800 border-b border-gray-200 dark:border-green-500">
            <p className="text-xs sm:text-sm text-gray-700 dark:text-green-200 break-words">{transcript}</p>
          </div>
        )}

        <div className="p-3 flex flex-col items-center">
          <button
            onClick={isListening ? stopListening : startListening}
            className={`p-4 transition-all transform hover:scale-110 ${
              isListening 
                ? 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 animate-pulse' 
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 dark:from-green-600 dark:to-emerald-700'
            } text-white rounded-full shadow-lg`}
            title={isListening ? 'Stop listening' : 'Start voice navigation'}
            aria-label={isListening ? 'Stop listening' : 'Start voice navigation'}
          >
            {isListening ? (
              <MicOff className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>

          {!isListening && (
            <div className="px-4 py-2 bg-gray-50 dark:bg-green-800 w-full">
              <p className="text-xs text-gray-600 dark:text-green-300 text-center">
                {t('voice.tapToSpeak') || 'Tap to speak'}
              </p>
              <p className="text-[10px] text-gray-500 dark:text-green-400 text-center mt-1">
                Optimized for Nigerian accents
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceNavigation;

