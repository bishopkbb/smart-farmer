import React, { useState, useEffect } from 'react';
import { Leaf, Calendar, BookOpen, Bug, TrendingUp, Menu, X, Sun, Cloud, Droplets, ThermometerSun, ChevronRight, Search, Plus, Bell, Settings, Home, Heart, Mail, Github, Twitter, Linkedin, Sparkles } from 'lucide-react';
import Toaster, { showToast } from './components/ui/Toast';
import { storage } from './utils/storage';
import { SkeletonWeather, SkeletonAction, SkeletonFarmLog, SkeletonCropCard, SkeletonMonthCard, SkeletonGrid, SkeletonList } from './components/ui/SkeletonLoader';
import { HomePageSEO, CropGuideSEO, CalendarSEO, TrackerSEO, PestSEO } from './components/SEO';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import OnboardingTour from './components/OnboardingTour';
import VoiceNavigation from './components/VoiceNavigation';
import AIPestDetection from './components/AIPestDetection';
import { livestockTypes } from './data/livestock';
import { mixedFarmingSystems, integratedPractices, seasonalPlanning } from './data/mixedFarming';
import { useT } from './context/TranslationContext';

const SmartFarmerApp = () => {
  const { t } = useT();
  const [activeTab, setActiveTab] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(() => {
    const prefs = storage.loadPrefs();
    return !prefs;
  });
  const [userLocation, setUserLocation] = useState(() => {
    const prefs = storage.loadPrefs();
    return prefs?.location || '';
  });
  const [farmingType, setFarmingType] = useState(() => {
    const prefs = storage.loadPrefs();
    return prefs?.farmingType || '';
  });
  const [showAddLogModal, setShowAddLogModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [showWeatherUpdates, setShowWeatherUpdates] = useState(false);
  const [showMarketPrices, setShowMarketPrices] = useState(false);
  const [showFarmingTips, setShowFarmingTips] = useState(false);
  const [showCommunityForum, setShowCommunityForum] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false);
  const [showTour, setShowTour] = useState(() => {
    return !localStorage.getItem('tourCompleted');
  });
  const [farmLogs, setFarmLogs] = useState(() => {
    const savedLogs = storage.loadLogs();
    return savedLogs.length > 0 ? savedLogs : [
      { crop: 'Maize', datePlanted: '2025-04-15', status: 'Growing', daysLeft: 45 },
      { crop: 'Tomato', datePlanted: '2025-03-20', status: 'Flowering', daysLeft: 20 }
    ];
  });
  
  const [newLog, setNewLog] = useState({
    crop: '',
    datePlanted: '',
    seedQuantity: '',
    fertilizer: '',
    notes: ''
  });
  
  const [selectedPestCrop, setSelectedPestCrop] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [pestSolution, setPestSolution] = useState(null);
  const [selectedLivestock, setSelectedLivestock] = useState(null);
  const [showAIPestDetection, setShowAIPestDetection] = useState(false);

  const notifications = [
    { id: 1, type: 'reminder', title: 'Weeding Due', message: 'Time to weed your Maize farm', time: '2 hours ago', read: false },
    { id: 2, type: 'alert', title: 'Weather Alert', message: 'Heavy rain expected tomorrow', time: '5 hours ago', read: false },
    { id: 3, type: 'success', title: 'Harvest Ready', message: 'Your Tomato is ready for harvest', time: '1 day ago', read: true },
    { id: 4, type: 'info', title: 'Market Update', message: 'Maize prices increased by 15%', time: '2 days ago', read: true }
  ];

  const { language, changeLanguage } = useT();
  const [settings, setSettings] = useState(() => {
    const savedSettings = storage.loadSettings();
    return savedSettings || {
      notifications: true,
      darkMode: false,
      language: language || 'English',
      units: 'Metric'
    };
  });

  const [weatherData, setWeatherData] = useState({
    temp: '28°C',
    condition: 'Partly Cloudy',
    humidity: '75%',
    rainfall: '12mm',
    loading: false
  });

  useEffect(() => {
    storage.saveLogs(farmLogs);
  }, [farmLogs]);

  useEffect(() => {
    if (userLocation && farmingType) {
      storage.savePrefs({ location: userLocation, farmingType });
    }
  }, [userLocation, farmingType]);

  useEffect(() => {
    storage.saveSettings(settings);
    
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!navigator.onLine) return;
      setWeatherData(prev => ({ ...prev, loading: true }));

      try {
        setTimeout(() => {
          const temps = ['25°C', '26°C', '27°C', '28°C', '29°C', '30°C'];
          const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'];
          const humidities = ['70%', '72%', '75%', '78%', '80%'];
          
          setWeatherData({
            temp: temps[Math.floor(Math.random() * temps.length)],
            condition: conditions[Math.floor(Math.random() * conditions.length)],
            humidity: humidities[Math.floor(Math.random() * humidities.length)],
            rainfall: `${Math.floor(Math.random() * 20)}mm`,
            loading: false
          });
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch weather:', error);
        setWeatherData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTourFinish = () => {
    localStorage.setItem('tourCompleted', 'true');
    setShowTour(false);
    showToast.success('Welcome aboard! You\'re all set! 🎉');
  };

  const pestDatabase = {
    'Maize': {
      'Yellowing leaves': {
        cause: 'Nitrogen deficiency',
        solution: 'Apply Urea fertilizer at 50kg per hectare',
        prevention: 'Regular soil testing and balanced fertilization'
      },
      'Holes in leaves': {
        cause: 'Armyworm infestation',
        solution: 'Apply neem-based pesticide or cypermethrin',
        prevention: 'Early planting and regular field inspection'
      },
      'Wilting': {
        cause: 'Stem borer or drought stress',
        solution: 'Ensure adequate watering and apply appropriate insecticide',
        prevention: 'Use resistant varieties and maintain soil moisture'
      }
    },
    'Tomato': {
      'Brown spots': {
        cause: 'Tomato blight (fungal disease)',
        solution: 'Remove affected plants and apply copper-based fungicide',
        prevention: 'Proper spacing, crop rotation, and avoid overhead watering'
      },
      'Yellowing leaves': {
        cause: 'Nutrient deficiency or root damage',
        solution: 'Apply balanced NPK fertilizer and check for root pests',
        prevention: 'Regular feeding and proper drainage'
      },
      'Wilting': {
        cause: 'Bacterial wilt or root rot',
        solution: 'Remove infected plants, improve drainage',
        prevention: 'Use disease-free seedlings and rotate crops'
      }
    },
    'Pepper': {
      'Spots on leaves': {
        cause: 'Bacterial leaf spot',
        solution: 'Apply copper-based bactericide',
        prevention: 'Use certified seeds and avoid working with wet plants'
      },
      'Stunted growth': {
        cause: 'Pepper weevil or nutrient deficiency',
        solution: 'Apply appropriate insecticide and boost soil nutrients',
        prevention: 'Regular monitoring and balanced fertilization'
      }
    },
    'Cassava': {
      'Yellowing leaves': {
        cause: 'Cassava mosaic disease or nutrient deficiency',
        solution: 'Remove and destroy infected plants, use resistant varieties',
        prevention: 'Plant disease-free cuttings and control whitefly vectors'
      },
      'Wilting': {
        cause: 'Root rot or poor drainage',
        solution: 'Improve drainage and avoid waterlogged conditions',
        prevention: 'Plant on ridges or mounds'
      }
    },
    'Rice': {
      'Yellowing leaves': {
        cause: 'Nitrogen deficiency or tungro virus',
        solution: 'Apply urea fertilizer or remove infected plants',
        prevention: 'Balanced fertilization and control green leafhoppers'
      },
      'Spots on leaves': {
        cause: 'Rice blast disease',
        solution: 'Apply fungicides like tricyclazole',
        prevention: 'Use resistant varieties and avoid excessive nitrogen'
      }
    },
    'Yam': {
      'Wilting': {
        cause: 'Yam beetle or anthracnose',
        solution: 'Apply appropriate insecticide or fungicide',
        prevention: 'Use healthy seed yams and practice crop rotation'
      },
      'Stunted growth': {
        cause: 'Nematode infestation',
        solution: 'Soil fumigation or use of nematode-resistant varieties',
        prevention: 'Crop rotation and organic matter addition'
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  const crops = [
    { name: 'Maize', icon: '🌽', plantingMonths: ['April', 'May', 'June'], harvestTime: '3 months', yield: '3 tons/ha', soilType: 'Loamy' },
    { name: 'Rice', icon: '🌾', plantingMonths: ['May', 'June', 'July'], harvestTime: '4 months', yield: '2.5 tons/ha', soilType: 'Clay' },
    { name: 'Cassava', icon: '🥔', plantingMonths: ['March', 'April', 'May'], harvestTime: '10 months', yield: '15 tons/ha', soilType: 'Sandy' },
    { name: 'Tomato', icon: '🍅', plantingMonths: ['March', 'April', 'September'], harvestTime: '2 months', yield: '8 tons/ha', soilType: 'Loamy' },
    { name: 'Pepper', icon: '🌶️', plantingMonths: ['April', 'May', 'June'], harvestTime: '3 months', yield: '4 tons/ha', soilType: 'Sandy loam' },
    { name: 'Yam', icon: '🍠', plantingMonths: ['March', 'April'], harvestTime: '8 months', yield: '12 tons/ha', soilType: 'Loamy' },
    { name: 'Okra', icon: '🥒', plantingMonths: ['March', 'April', 'May', 'September'], harvestTime: '2 months', yield: '5 tons/ha', soilType: 'Sandy loam' },
    { name: 'Beans', icon: '🫘', plantingMonths: ['April', 'May', 'June'], harvestTime: '2.5 months', yield: '1.5 tons/ha', soilType: 'Loamy' },
    { name: 'Groundnut', icon: '🥜', plantingMonths: ['May', 'June', 'July'], harvestTime: '4 months', yield: '2 tons/ha', soilType: 'Sandy' },
    { name: 'Sorghum', icon: '🌾', plantingMonths: ['May', 'June', 'July'], harvestTime: '4 months', yield: '2.5 tons/ha', soilType: 'Loamy' },
    { name: 'Millet', icon: '🌾', plantingMonths: ['June', 'July', 'August'], harvestTime: '3 months', yield: '1.5 tons/ha', soilType: 'Sandy' },
    { name: 'Cowpea', icon: '🫘', plantingMonths: ['May', 'June', 'July', 'August'], harvestTime: '2.5 months', yield: '1.2 tons/ha', soilType: 'Sandy loam' },
    { name: 'Sweet Potato', icon: '🍠', plantingMonths: ['March', 'April', 'May'], harvestTime: '4 months', yield: '10 tons/ha', soilType: 'Sandy loam' },
    { name: 'Cocoyam', icon: '🥔', plantingMonths: ['March', 'April', 'May'], harvestTime: '7 months', yield: '8 tons/ha', soilType: 'Loamy' },
    { name: 'Plantain', icon: '🍌', plantingMonths: ['March', 'April', 'May'], harvestTime: '10 months', yield: '15 tons/ha', soilType: 'Loamy' },
    { name: 'Banana', icon: '🍌', plantingMonths: ['All year'], harvestTime: '9 months', yield: '20 tons/ha', soilType: 'Loamy' },
    { name: 'Watermelon', icon: '🍉', plantingMonths: ['March', 'April', 'October', 'November'], harvestTime: '3 months', yield: '20 tons/ha', soilType: 'Sandy loam' },
    { name: 'Cucumber', icon: '🥒', plantingMonths: ['March', 'April', 'September', 'October'], harvestTime: '2 months', yield: '15 tons/ha', soilType: 'Loamy' },
    { name: 'Cabbage', icon: '🥬', plantingMonths: ['September', 'October', 'November'], harvestTime: '3 months', yield: '40 tons/ha', soilType: 'Loamy' },
    { name: 'Onion', icon: '🧅', plantingMonths: ['October', 'November', 'December'], harvestTime: '4 months', yield: '15 tons/ha', soilType: 'Sandy loam' },
  ];

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getRecommendedCrops = (month) => {
    return crops.filter(crop => crop.plantingMonths.includes(month));
  };

  const filteredCrops = crops.filter(crop => 
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddLog = () => {
    if (!newLog.crop || !newLog.datePlanted) {
      showToast.error('Please fill in required fields');
      return;
    }

    const cropInfo = crops.find(c => c.name === newLog.crop);
    const harvestMonths = parseInt(cropInfo?.harvestTime) || 3;
    const daysLeft = harvestMonths * 30;
    
    setFarmLogs([...farmLogs, {
      crop: newLog.crop,
      datePlanted: newLog.datePlanted,
      seedQuantity: newLog.seedQuantity || '',
      fertilizer: newLog.fertilizer || '',
      notes: newLog.notes || '',
      status: 'Planted',
      daysLeft: daysLeft
    }]);
    
    showToast.success(`${newLog.crop} log added successfully! 🌱`);
    setNewLog({ crop: '', datePlanted: '', seedQuantity: '', fertilizer: '', notes: '' });
    setShowAddLogModal(false);
  };

  const handleGetSolution = () => {
    if (selectedPestCrop && selectedSymptom) {
      const solution = pestDatabase[selectedPestCrop]?.[selectedSymptom];
      if (solution) {
        setPestSolution(solution);
        showToast.success('Solution found! Check below for details 📋');
      } else {
        setPestSolution({
          cause: 'Information not available',
          solution: 'Please consult with a local agricultural extension officer',
          prevention: 'Practice good farm hygiene and regular monitoring'
        });
        showToast.info('Limited information available for this symptom');
      }
    } else {
      showToast.error('Please select both crop and symptom');
    }
  };
  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <Toaster />
        <HomePageSEO />
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('onboarding.title')}</h1>
            <p className="text-gray-600">{t('onboarding.subtitle')}</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('onboarding.selectRegion')}</label>
              <select 
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
              >
                <option value="">{t('onboarding.chooseLocation')}</option>
                <option value="northeast">North-East Nigeria</option>
                <option value="northwest">North-West Nigeria</option>
                <option value="northcentral">North-Central Nigeria</option>
                <option value="southwest">South-West Nigeria</option>
                <option value="southsouth">South-South Nigeria</option>
                <option value="southeast">South-East Nigeria</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('onboarding.farmingType')}</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'crop', label: t('onboarding.crop') },
                  { key: 'livestock', label: t('onboarding.livestock') },
                  { key: 'mixed', label: t('onboarding.mixed') }
                ].map((type) => (
                  <button
                    key={type.key}
                    onClick={() => setFarmingType(type.key)}
                    className={`py-3 rounded-xl font-medium transition-all ${
                      farmingType === type.key
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (userLocation && farmingType) {
                  setShowOnboarding(false);
                  storage.savePrefs({ location: userLocation, farmingType });
                  showToast.success(t('common.welcome'));
                }
              }}
              disabled={!userLocation || !farmingType}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {t('common.getStarted')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={() => setShowPrivacyPolicy(false)} />;
  }

  if (showTermsOfService) {
    return <TermsOfService onBack={() => setShowTermsOfService(false)} />;
  }

  if (showCookiePolicy) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setShowCookiePolicy(false)}
            className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold transition-all"
          >
            <X className="w-5 h-5 mr-2" />
            Back to App
          </button>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Cookie Policy</h1>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Smart Farmer uses minimal cookies and local storage to provide you with the best experience.
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">What We Store</h2>
              <ul className="text-gray-700 space-y-2 list-disc ml-6">
                <li>Your farm logs and preferences (stored locally on your device)</li>
                <li>App settings and display preferences</li>
                <li>Tour completion status</li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not use third-party cookies for tracking or advertising. All data stays on your device.
              </p>
              <div className="bg-green-50 p-6 rounded-xl mt-6">
                <p className="text-sm text-green-800 font-semibold">
                  ✅ You can clear all stored data at any time by signing out or clearing your browser data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showWeatherUpdates) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setShowWeatherUpdates(false)}
            className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold transition-all"
          >
            <X className="w-5 h-5 mr-2" />
            Back to App
          </button>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('weather.title')}</h1>
            <p className="text-gray-600 mb-8">{t('weather.subtitle')}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">7-Day Forecast</h3>
                <div className="space-y-3">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/10 p-3 rounded-lg">
                      <span>{day}</span>
                      <div className="flex items-center space-x-2">
                        <Cloud className="w-5 h-5" />
                        <span>{25 + idx}°C</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Weather Alerts</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                      <p className="font-semibold text-gray-800">Heavy Rain Expected</p>
                      <p className="text-sm text-gray-600">Tomorrow afternoon - Prepare drainage</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="font-semibold text-gray-800">High Temperature</p>
                      <p className="text-sm text-gray-600">Weekend - Increase irrigation</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Farming Recommendations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✅ Good time for planting this week</li>
                    <li>✅ Soil moisture levels optimal</li>
                    <li>⚠️ Plan for rain harvesting tomorrow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showMarketPrices) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setShowMarketPrices(false)}
            className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold transition-all"
          >
            <X className="w-5 h-5 mr-2" />
            Back to App
          </button>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('market.title')}</h1>
            <p className="text-gray-600 mb-8">{t('market.subtitle')}</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { crop: 'Maize', icon: '🌽', price: '₦180', unit: 'per kg', trend: 'up', change: '+15%' },
                { crop: 'Rice', icon: '🌾', price: '₦350', unit: 'per kg', trend: 'up', change: '+8%' },
                { crop: 'Tomato', icon: '🍅', price: '₦250', unit: 'per kg', trend: 'down', change: '-5%' },
                { crop: 'Pepper', icon: '🌶️', price: '₦400', unit: 'per kg', trend: 'up', change: '+12%' },
                { crop: 'Yam', icon: '🍠', price: '₦200', unit: 'per kg', trend: 'stable', change: '0%' },
                { crop: 'Beans', icon: '🫘', price: '₦280', unit: 'per kg', trend: 'up', change: '+6%' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{item.crop}</h3>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-2xl font-bold text-green-600">{item.price}</span>
                    <span className="text-sm text-gray-600">{item.unit}</span>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm font-semibold ${
                    item.trend === 'up' ? 'text-green-600' : 
                    item.trend === 'down' ? 'text-red-600' : 
                    'text-gray-600'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${item.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span>{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-2xl">
              <h3 className="font-bold text-gray-800 mb-3">💡 Market Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Maize prices expected to remain high due to seasonal demand</li>
                <li>• Best time to sell pepper is within the next 2 weeks</li>
                <li>• Rice imports may affect local prices next month</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showFarmingTips) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setShowFarmingTips(false)}
            className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold transition-all"
          >
            <X className="w-5 h-5 mr-2" />
            Back to App
          </button>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('tips.title')}</h1>
            <p className="text-gray-600 mb-8">{t('tips.subtitle')}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Soil Preparation',
                  icon: '🌱',
                  tips: [
                    'Test soil pH before planting',
                    'Add organic matter to improve fertility',
                    'Ensure proper drainage',
                    'Remove weeds and debris'
                  ]
                },
                {
                  title: 'Planting Techniques',
                  icon: '🌾',
                  tips: [
                    'Plant at optimal spacing',
                    'Use quality seeds',
                    'Plant at right depth',
                    'Water immediately after planting'
                  ]
                },
                {
                  title: 'Pest Management',
                  icon: '🐛',
                  tips: [
                    'Regular field inspection',
                    'Use integrated pest management',
                    'Apply organic pesticides when possible',
                    'Practice crop rotation'
                  ]
                },
                {
                  title: 'Water Management',
                  icon: '💧',
                  tips: [
                    'Water early morning or evening',
                    'Use drip irrigation for efficiency',
                    'Mulch to retain moisture',
                    'Monitor soil moisture levels'
                  ]
                },
                {
                  title: 'Fertilization',
                  icon: '🌿',
                  tips: [
                    'Apply fertilizer based on soil test',
                    'Use balanced NPK ratios',
                    'Split applications for better uptake',
                    'Combine organic and inorganic fertilizers'
                  ]
                },
                {
                  title: 'Harvesting',
                  icon: '🧺',
                  tips: [
                    'Harvest at right maturity',
                    'Use clean tools',
                    'Handle produce carefully',
                    'Store properly to reduce losses'
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-4xl">{section.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showCommunityForum) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setShowCommunityForum(false)}
            className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold transition-all"
          >
            <X className="w-5 h-5 mr-2" />
            Back to App
          </button>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('forum.title')}</h1>
            <p className="text-gray-600 mb-8">{t('forum.subtitle')}</p>
            
            <div className="space-y-4">
              {[
                {
                  author: 'Emeka Okafor',
                  topic: 'Best practices for maize farming in rainy season',
                  replies: 23,
                  time: '2 hours ago',
                  category: 'Crop Management'
                },
                {
                  author: 'Fatima Abubakar',
                  topic: 'Dealing with armyworm infestation',
                  replies: 15,
                  time: '5 hours ago',
                  category: 'Pest Control'
                },
                {
                  author: 'Chioma Nwankwo',
                  topic: 'Where to get quality tomato seedlings?',
                  replies: 8,
                  time: '1 day ago',
                  category: 'Resources'
                },
                {
                  author: 'Ibrahim Yusuf',
                  topic: 'Organic fertilizer alternatives',
                  replies: 31,
                  time: '2 days ago',
                  category: 'Soil Health'
                },
                {
                  author: 'Grace Adebayo',
                  topic: 'Market prices for pepper this week',
                  replies: 12,
                  time: '3 days ago',
                  category: 'Market Info'
                }
              ].map((post, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-gray-800 text-lg mt-2">{post.topic}</h3>
                      <p className="text-sm text-gray-600 mt-1">Posted by {post.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>💬 {post.replies} replies</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">
              Start a New Discussion
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showHelpCenter) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setShowHelpCenter(false)}
            className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold transition-all"
          >
            <X className="w-5 h-5 mr-2" />
            Back to App
          </button>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('help.title')}</h1>
            <p className="text-gray-600 mb-8">{t('help.subtitle')}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Getting Started</h3>
                <div className="space-y-3">
                  {[
                    'How to set up your profile',
                    'Adding your first farm log',
                    'Understanding the crop guide',
                    'Using the planting calendar'
                  ].map((item, idx) => (
                    <button key={idx} className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all">
                      <p className="font-semibold text-gray-800">{item}</p>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Features</h3>
                <div className="space-y-3">
                  {[
                    'Weather updates explained',
                    'Tracking your crops',
                    'Pest diagnosis tool',
                    'Market price information'
                  ].map((item, idx) => (
                    <button key={idx} className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all">
                      <p className="font-semibold text-gray-800">{item}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="mb-6">Our support team is here to assist you</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-all">
                  📧 Email Support
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
                  💬 Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <OnboardingTour run={showTour && !showOnboarding} onFinish={handleTourFinish} />
      
      {activeTab === 'home' && <HomePageSEO />}
      {activeTab === 'guide' && <CropGuideSEO />}
      {activeTab === 'calendar' && <CalendarSEO />}
      {activeTab === 'tracker' && <TrackerSEO />}
      {activeTab === 'pest' && <PestSEO />}
      
      <Toaster />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 20 ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">Smart Farmer</h1>
                <p className="text-xs text-gray-600">{userLocation ? userLocation.replace(/^\w/, c => c.toUpperCase()) + ' ' + t('settings.region') : ''}</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {[
                { name: t('nav.home'), icon: Home, tab: 'home' },
                { name: t('nav.guide'), icon: BookOpen, tab: 'guide' },
                { name: t('nav.calendar'), icon: Calendar, tab: 'calendar' },
                { name: t('nav.tracker'), icon: Leaf, tab: 'tracker' },
                { name: t('nav.pest'), icon: Bug, tab: 'pest' },
                ...(farmingType === 'livestock' || farmingType === 'mixed' ? [
                  { name: t('nav.livestock'), icon: Heart, tab: 'livestock' }
                ] : []),
                ...(farmingType === 'mixed' ? [
                  { name: t('nav.mixed'), icon: Sparkles, tab: 'mixed' }
                ] : [])
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    activeTab === item.tab 
                      ? 'bg-green-100 text-green-600 font-semibold' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.name}</span>
                </button>
              ))}
            </nav>

            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
              <div className="flex justify-around py-3">
                {[
                  { name: 'Home', icon: Home, tab: 'home' },
                  { name: 'Guide', icon: BookOpen, tab: 'guide' },
                  { name: 'Calendar', icon: Calendar, tab: 'calendar' },
                  { name: 'Tracker', icon: Leaf, tab: 'tracker' },
                  { name: 'Pest', icon: Bug, tab: 'pest' },
                  ...(farmingType === 'livestock' || farmingType === 'mixed' ? [
                    { name: 'Livestock', icon: Heart, tab: 'livestock' }
                  ] : []),
                  ...(farmingType === 'mixed' ? [
                    { name: 'Mixed', icon: Sparkles, tab: 'mixed' }
                  ] : [])
                ].map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => setActiveTab(item.tab)}
                    className={`flex flex-col items-center space-y-1 transition-all ${
                      activeTab === item.tab ? 'text-green-600' : 'text-gray-500'
                    }`}
                  >
                    <item.icon className={`w-6 h-6 ${activeTab === item.tab ? 'scale-110' : ''} transition-transform`} />
                    <span className="text-xs font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="notification-btn p-2 hover:bg-gray-100 rounded-full transition-all relative"
              >
                <Bell className="w-5 h-5 text-gray-700" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                )}
              </button>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="settings-btn p-2 hover:bg-gray-100 rounded-full transition-all"
              >
                <Settings className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-8 md:pb-8 px-4 max-w-7xl mx-auto">
        {activeTab === 'home' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-2xl transform hover:scale-[1.02] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90">{t('home.todaysWeather')}</p>
                  <h2 className="text-4xl font-bold">{weatherData.temp}</h2>
                  <p className="text-sm opacity-90 mt-1">{weatherData.condition}</p>
                </div>
                <Cloud className="w-16 h-16 opacity-80" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5" />
                  <span className="text-sm">Humidity: {weatherData.humidity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThermometerSun className="w-5 h-5" />
                  <span className="text-sm">Rainfall: {weatherData.rainfall}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: t('home.cropGuide'), icon: BookOpen, tab: 'guide', color: 'from-green-500 to-emerald-600' },
                { name: t('home.calendar'), icon: Calendar, tab: 'calendar', color: 'from-orange-500 to-amber-600' },
                { name: t('home.farmTracker'), icon: Leaf, tab: 'tracker', color: 'from-purple-500 to-violet-600' },
                { name: t('home.pestTips'), icon: Bug, tab: 'pest', color: 'from-red-500 to-pink-600' },
                ...(farmingType === 'livestock' || farmingType === 'mixed' ? [
                  { name: t('nav.livestock'), icon: Heart, tab: 'livestock', color: 'from-blue-500 to-indigo-600' }
                ] : []),
                ...(farmingType === 'mixed' ? [
                  { name: t('nav.mixed'), icon: Sparkles, tab: 'mixed', color: 'from-teal-500 to-cyan-600' }
                ] : [])
              ].map((action) => (
                <button
                  key={action.name}
                  onClick={() => setActiveTab(action.tab)}
                  className={`bg-gradient-to-br ${action.color} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all`}
                >
                  <action.icon className="w-8 h-8 mb-3" />
                  <p className="font-semibold">{action.name}</p>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{t('home.activeCrops')}</h3>
                <button 
                  onClick={() => setActiveTab('tracker')}
                  className="text-green-600 text-sm font-semibold"
                >
                  {t('common.viewAll')}
                </button>
              </div>
              <div className="space-y-3">
                {farmLogs.slice(0, 3).map((log, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-md transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-2xl">{crops.find(c => c.name === log.crop)?.icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{log.crop}</p>
                        <p className="text-sm text-gray-600">{log.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-green-600">{log.daysLeft} {t('home.daysToHarvest')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('guide.title')}</h2>
              <p className="text-gray-600">{t('guide.subtitle')}</p>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('guide.searchCrops')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg focus:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredCrops.map((crop, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCrop(crop)}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all text-left"
                >
                  <div className="text-5xl mb-3">{crop.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-1">{crop.name}</h3>
                  <p className="text-sm text-gray-600">{crop.soilType} soil</p>
                  <div className="mt-3 flex items-center text-green-600 text-sm font-semibold">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </button>
              ))}
            </div>

            {selectedCrop && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedCrop(null)}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{selectedCrop.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedCrop.name}</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-2xl">
                      <p className="text-sm font-semibold text-gray-700 mb-1">{t('guide.plantingMonths')}</p>
                      <p className="text-green-600 font-semibold">{selectedCrop.plantingMonths.join(', ')}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-2xl">
                        <p className="text-sm font-semibold text-gray-700 mb-1">{t('guide.harvestTime')}</p>
                        <p className="text-blue-600 font-semibold">{selectedCrop.harvestTime}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-2xl">
                        <p className="text-sm font-semibold text-gray-700 mb-1">{t('guide.yield')}</p>
                        <p className="text-purple-600 font-semibold">{selectedCrop.yield}</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-2xl">
                      <p className="text-sm font-semibold text-gray-700 mb-1">{t('guide.soilType')}</p>
                      <p className="text-orange-600 font-semibold">{selectedCrop.soilType}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCrop(null)}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {t('common.close')}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{t('calendar.title')}</h2>
              <p className="text-sm sm:text-base text-gray-600">{t('calendar.subtitle')}</p>
            </div>

            {isLoading ? (
              <SkeletonGrid count={12} Component={SkeletonMonthCard} columns={4} />
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {months.map((month, idx) => {
                const recommendedCrops = getRecommendedCrops(month);
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedMonth(month)}
                    className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all text-left"
                  >
                    <h3 className="font-bold text-gray-800 mb-2">{month}</h3>
                    <div className="flex flex-wrap gap-1">
                      {recommendedCrops.slice(0, 3).map((crop, i) => (
                        <span key={i} className="text-xl">{crop.icon}</span>
                      ))}
                      {recommendedCrops.length > 3 && (
                        <span className="text-sm text-gray-500">+{recommendedCrops.length - 3}</span>
                      )}
                    </div>
                    {recommendedCrops.length === 0 && (
                      <p className="text-sm text-gray-400">{t('calendar.noRecommendations')}</p>
                    )}
                  </button>
                );
              })}
            </div>
            )}

            {selectedMonth && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedMonth(null)}>
                <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedMonth}</h2>
                  <div className="space-y-3">
                    {getRecommendedCrops(selectedMonth).map((crop, idx) => (
                      <div key={idx} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                        <span className="text-4xl">{crop.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800">{crop.name}</h3>
                          <p className="text-sm text-gray-600">{crop.harvestTime} to harvest</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedMonth(null)}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {t('common.close')}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'tracker' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('tracker.title')}</h2>
              <p className="text-gray-600">{t('tracker.subtitle')}</p>
            </div>

            <button className="w-full mb-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2" onClick={() => setShowAddLogModal(true)}>
              <Plus className="w-5 h-5" />
              <span>{t('tracker.addNewLog')}</span>
            </button>

            <div className="space-y-4">
              {farmLogs.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                  <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">{t('tracker.noLogs')}</p>
                  <button 
                    onClick={() => setShowAddLogModal(true)}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                  >
                    {t('tracker.addFirstLog')}
                  </button>
                </div>
              ) : (
                farmLogs.map((log, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl">{crops.find(c => c.name === log.crop)?.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{log.crop}</h3>
                        <p className="text-sm text-gray-600">{t('tracker.planted')}: {new Date(log.datePlanted).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {log.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all"
                      style={{width: `${((90 - log.daysLeft) / 90) * 100}%`}}
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-right">{log.daysLeft} {t('tracker.daysRemaining')}</p>
                </div>
              ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'pest' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('pest.title')}</h2>
              <p className="text-gray-600">{t('pest.subtitle')}</p>
            </div>

            <div className="mb-6">
              <AIPestDetection 
                onPestDetected={(pestName, confidence) => {
                  showToast.success(`Pest detected: ${pestName} (${confidence}% confidence)`);
                }}
              />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h3 className="font-bold text-gray-800 mb-4">{t('pest.manualDiagnosis')}</h3>
              <div className="space-y-4">
                <select 
                  value={selectedPestCrop}
                  onChange={(e) => {
                    setSelectedPestCrop(e.target.value);
                    setSelectedSymptom('');
                    setPestSolution(null);
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                >
                  <option value="">{t('pest.selectCrop')}</option>
                  {crops.map((crop, idx) => (
                    <option key={idx} value={crop.name}>{crop.name}</option>
                  ))}
                </select>
                
                <select 
                  value={selectedSymptom}
                  onChange={(e) => {
                    setSelectedSymptom(e.target.value);
                    setPestSolution(null);
                  }}
                  disabled={!selectedPestCrop}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">{t('pest.selectSymptom')}</option>
                  {selectedPestCrop && pestDatabase[selectedPestCrop] && 
                    Object.keys(pestDatabase[selectedPestCrop]).map((symptom, idx) => (
                      <option key={idx} value={symptom}>{symptom}</option>
                    ))
                  }
                </select>
                
                <button 
                  onClick={handleGetSolution}
                  disabled={!selectedPestCrop || !selectedSymptom}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Get Solution
                </button>

                {pestSolution && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 animate-scaleIn">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bug className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{t('pest.diagnosisResult')}</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">🔍 {t('pest.cause')}:</p>
                            <p className="text-gray-800">{pestSolution.cause}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">💊 {t('pest.solution')}:</p>
                            <p className="text-gray-800">{pestSolution.solution}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">🛡️ {t('pest.prevention')}:</p>
                            <p className="text-gray-800">{pestSolution.prevention}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-4">
              <h3 className="font-bold text-gray-800 text-lg">{t('pest.commonIssues')}</h3>
              {[
                { title: 'Armyworm on Maize', symptom: 'Holes in leaves', solution: 'Apply neem-based pesticide' },
                { title: 'Tomato Blight', symptom: 'Brown spots', solution: 'Remove affected plants' },
                { title: 'Root Rot', symptom: 'Wilting plants', solution: 'Improve drainage' }
              ].map((pest, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-bold text-gray-800 mb-2">{pest.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{t('pest.symptom')}: {pest.symptom}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">{pest.solution}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'livestock' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('livestock.title')}</h2>
              <p className="text-gray-600">{t('livestock.subtitle')}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {livestockTypes.map((livestock, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLivestock(livestock)}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all text-left"
                >
                  <div className="text-5xl mb-3">{livestock.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-1">{livestock.name}</h3>
                  <p className="text-sm text-gray-600">{livestock.category}</p>
                  <div className="mt-3 flex items-center text-green-600 text-sm font-semibold">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </button>
              ))}
            </div>

            {selectedLivestock && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedLivestock(null)}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-4xl w-full shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{selectedLivestock.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedLivestock.name}</h2>
                    <p className="text-gray-600">{selectedLivestock.category}</p>
                  </div>

                  <div className="space-y-6">
                    {selectedLivestock.breeds && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{t('livestock.breeds')}</h3>
                        <div className="space-y-3">
                          {selectedLivestock.breeds.map((breed, idx) => (
                            <div key={idx} className="bg-green-50 p-4 rounded-xl border border-green-200">
                              <h4 className="font-bold text-gray-800 mb-2">{breed.name}</h4>
                              <p className="text-sm text-gray-700 mb-2">{breed.characteristics}</p>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                {breed.weight && <p><span className="font-semibold">{t('livestock.weight')}:</span> {breed.weight}</p>}
                                {breed.milkYield && <p><span className="font-semibold">{t('livestock.milk')}:</span> {breed.milkYield}</p>}
                                {breed.gestation && <p><span className="font-semibold">{t('livestock.gestation')}:</span> {breed.gestation}</p>}
                                {breed.suitability && <p><span className="font-semibold">{t('livestock.suitable')}:</span> {breed.suitability}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedLivestock.housing && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{t('livestock.housingRequirements')}</h3>
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="font-semibold text-gray-800 mb-2">{t('livestock.space')}: {selectedLivestock.housing.space}</p>
                          <ul className="space-y-1">
                            {selectedLivestock.housing.requirements.map((req, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {selectedLivestock.feeding && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{t('livestock.feeding')}</h3>
                        <div className="bg-yellow-50 p-4 rounded-xl mb-3">
                          <h4 className="font-semibold text-gray-800 mb-2">{t('livestock.dailyRequirements')}:</h4>
                          <ul className="space-y-1">
                            {selectedLivestock.feeding.daily.map((item, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start">
                                <span className="text-yellow-600 mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl">
                          <h4 className="font-semibold text-gray-800 mb-2">{t('livestock.tips')}:</h4>
                          <ul className="space-y-1">
                            {selectedLivestock.feeding.tips.map((tip, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {selectedLivestock.health && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{t('livestock.healthManagement')}</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">{t('livestock.commonDiseases')}:</h4>
                            {selectedLivestock.health.commonDiseases.map((disease, idx) => (
                              <div key={idx} className="bg-red-50 p-4 rounded-xl mb-3 border border-red-200">
                                <h5 className="font-bold text-gray-800 mb-1">{disease.name}</h5>
                                <p className="text-sm text-gray-700 mb-2"><strong>{t('livestock.symptoms')}:</strong> {disease.symptoms}</p>
                                <p className="text-sm text-gray-700 mb-2"><strong>{t('livestock.treatment')}:</strong> {disease.treatment}</p>
                                <p className="text-sm text-gray-700"><strong>{t('livestock.prevention')}:</strong> {disease.prevention}</p>
                              </div>
                            ))}
                          </div>
                          <div className="bg-purple-50 p-4 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-2">{t('livestock.vaccinationSchedule')}:</h4>
                            <ul className="space-y-1">
                              {selectedLivestock.health.vaccination.map((vaccine, idx) => (
                                <li key={idx} className="text-sm text-gray-700 flex items-start">
                                  <span className="text-purple-600 mr-2">•</span>
                                  <span>{vaccine}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedLivestock.economics && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{t('livestock.economics')}</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-xl">
                            <p className="text-sm text-gray-600">{t('livestock.initialCost')}</p>
                            <p className="font-bold text-green-600">{selectedLivestock.economics.initialCost}</p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-xl">
                            <p className="text-sm text-gray-600">{t('livestock.monthlyFeedCost')}</p>
                            <p className="font-bold text-blue-600">{selectedLivestock.economics.feedCost}</p>
                          </div>
                          {selectedLivestock.economics.milkValue && (
                            <div className="bg-yellow-50 p-4 rounded-xl">
                              <p className="text-sm text-gray-600">{t('livestock.milkValue')}</p>
                              <p className="font-bold text-yellow-600">{selectedLivestock.economics.milkValue}</p>
                            </div>
                          )}
                          <div className="bg-purple-50 p-4 rounded-xl">
                            <p className="text-sm text-gray-600">{t('livestock.profitMargin')}</p>
                            <p className="font-bold text-purple-600">{selectedLivestock.economics.profitMargin}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedLivestock(null)}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {t('common.close')}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'mixed' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('mixed.title')}</h2>
              <p className="text-gray-600">{t('mixed.subtitle')}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('mixed.benefits')}</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Livestock provide manure for crops',
                    'Crop residues feed livestock',
                    'Diversified income sources',
                    'Better resource utilization',
                    'Reduced risk of total loss',
                    'Sustainable farming practices'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('mixed.systems')}</h3>
                <div className="space-y-4">
                  {mixedFarmingSystems.map((system, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                      <h4 className="font-bold text-gray-800 text-lg mb-2">{system.name}</h4>
                      <p className="text-sm text-gray-600 mb-4">{system.description}</p>
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Benefits:</h5>
                        <ul className="space-y-1">
                          {system.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">{t('mixed.examples')}:</h5>
                        {system.examples.map((example, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-xl mb-2">
                            <p className="text-sm text-gray-700">
                              <strong>{t('mixed.crops')}:</strong> {example.crops.join(', ')}
                            </p>
                            <p className="text-sm text-gray-700">
                              <strong>{t('nav.livestock')}:</strong> {example.livestock.join(', ')}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <strong>{t('mixed.integration')}:</strong> {example.integration}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('mixed.practices')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {integratedPractices.map((practice, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                      <h4 className="font-bold text-gray-800 mb-2">{practice.practice}</h4>
                      <p className="text-sm text-gray-600 mb-4">{practice.description}</p>
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2 text-sm">{t('mixed.steps')}:</h5>
                        <ol className="space-y-1 list-decimal list-inside text-sm text-gray-700">
                          {practice.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2 text-sm">Benefits:</h5>
                        <ul className="space-y-1">
                          {practice.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('mixed.seasonalPlanning')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(seasonalPlanning).map(([season, activities]) => (
                    <div key={season} className="bg-white p-6 rounded-2xl shadow-lg">
                      <h4 className="font-bold text-gray-800 mb-4">{season}</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2 text-sm">{t('mixed.crops')}:</h5>
                          <ul className="space-y-1">
                            {activities.crops.map((activity, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-green-600 mr-2">🌾</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2 text-sm">{t('nav.livestock')}:</h5>
                          <ul className="space-y-1">
                            {activities.livestock.map((activity, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-blue-600 mr-2">🐄</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2 text-sm">{t('mixed.integration')}:</h5>
                          <ul className="space-y-1">
                            {activities.integration.map((activity, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-purple-600 mr-2">🔗</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <VoiceNavigation 
        onNavigate={(tab) => {
          setActiveTab(tab);
          if (tab === 'settings') setShowSettings(true);
          if (tab === 'help') setShowHelpCenter(true);
        }}
        onCommand={(command) => {
          // Handle custom voice commands
          console.log('Voice command:', command);
        }}
      />

      <footer className="bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="animate-slideInLeft">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Smart Farmer</h3>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                Empowering Nigerian farmers with smart, localized agricultural insights for better yields and sustainable farming practices.
              </p>
            </div>

            <div className="animate-slideInLeft" style={{animationDelay: '0.1s'}}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', tab: 'home' },
                  { name: 'Crop Guide', tab: 'guide' },
                  { name: 'Calendar', tab: 'calendar' },
                  { name: 'Farm Tracker', tab: 'tracker' },
                  { name: 'Pest Tips', tab: 'pest' }
                ].map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => setActiveTab(link.tab)}
                      className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowWeatherUpdates(true)}
                    className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block"
                  >
                    Weather Updates
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowMarketPrices(true)}
                    className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block"
                  >
                    Market Prices
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowFarmingTips(true)}
                    className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block"
                  >
                    Farming Tips
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowCommunityForum(true)}
                    className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block"
                  >
                    Community Forum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowHelpCenter(true)}
                    className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block"
                  >
                    Help Center
                  </button>
                </li>
              </ul>
            </div>

            <div className="animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3 mb-4">
                <a href="mailto:smartfarmer121@gmail.com" className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors text-sm group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>smartfarmer121@gmail.com</span>
                </a>
              </div>
              <div className="flex space-x-3">
                {[
                  { icon: Twitter, href: 'https://x.com/smartfarmer121' },
                  { icon: Linkedin, href: 'https://linkedin.com/smartfarmer' },
                  { icon: Github, href: 'https://github.com/bishopkbb/smart-farmer' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-green-100 text-sm text-center md:text-left">
                © 2025 Smart Farmer. All rights reserved. Built with <Heart className="w-4 h-4 inline text-red-400 animate-pulse" /> for Nigerian farmers.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-green-100">
                <button 
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button 
                  onClick={() => setShowTermsOfService(true)}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <span>•</span>
                <button 
                  onClick={() => setShowCookiePolicy(true)}
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-green-200 text-xs">
              Developed by <span className="font-semibold">Ajibade Tosin Francis, Omoyeni Naomi, Sandra Ogechi Ezeugonna & Tolough Nelson Aondongu</span>
            </p>
          </div>
        </div>
      </footer>

      <div className="md:hidden h-20"></div>

      {showNotifications && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setShowNotifications(false)}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scaleIn max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Bell className="w-6 h-6 mr-2 text-green-600" />
                {t('notifications.title')}
              </h2>
              <button onClick={() => setShowNotifications(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3">
              {notifications.map((notif) => (
                <div key={notif.id} className={`p-4 rounded-2xl border-2 transition-all hover:shadow-md ${
                  !notif.read ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        notif.type === 'alert' ? 'bg-red-100 text-red-600' :
                        notif.type === 'success' ? 'bg-green-100 text-green-600' :
                        notif.type === 'reminder' ? 'bg-orange-100 text-orange-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        <Bell className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-sm">{notif.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
                      </div>
                    </div>
                    {!notif.read && (
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowNotifications(false)}
              className="w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {t('common.close')}
            </button>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setShowSettings(false)}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scaleIn max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-green-600" />
                Settings
              </h2>
              <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Region</label>
                    <p className="font-semibold text-gray-800">{userLocation.replace(/^\w/, c => c.toUpperCase())} Nigeria</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Farming Type</label>
                    <p className="font-semibold text-gray-800">{farmingType.replace(/^\w/, c => c.toUpperCase())}</p>
                  </div>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Notifications</p>
                      <p className="text-xs text-gray-600">Receive farming reminders</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, notifications: !settings.notifications})}
                      className={`w-12 h-6 rounded-full transition-all ${
                        settings.notifications ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                        settings.notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Dark Mode</p>
                      <p className="text-xs text-gray-600">Switch to dark theme</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, darkMode: !settings.darkMode})}
                      className={`w-12 h-6 rounded-full transition-all ${
                        settings.darkMode ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                        settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Language</label>
                    <select
                      value={settings.language}
                      onChange={(e) => setSettings({...settings, language: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                    >
                      <option>English</option>
                      <option>Hausa</option>
                      <option>Yoruba</option>
                      <option>Igbo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Units</label>
                    <select
                      value={settings.units}
                      onChange={(e) => setSettings({...settings, units: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                    >
                      <option>Metric (kg, ha)</option>
                      <option>Imperial (lb, acres)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => {
                    storage.saveSettings(settings);
                    showToast.success('Settings saved successfully! ✅');
                    setShowSettings(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Save Changes
                </button>
                <button 
                  onClick={() => {
                    storage.clearAll();
                    setShowOnboarding(true);
                    setShowSettings(false);
                    showToast.info('Returning to onboarding...');
                  }}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Change Region
                </button>
                <button 
                  onClick={() => {
                    storage.clearAll();
                    showToast.success('Signed out successfully. See you soon! 👋');
                    setTimeout(() => {
                      setShowOnboarding(true);
                      setShowSettings(false);
                      window.location.reload();
                    }, 1000);
                  }}
                  className="w-full py-3 text-red-600 font-semibold hover:bg-red-50 rounded-xl transition-all"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddLogModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setShowAddLogModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Add Farm Log</h2>
              <button onClick={() => setShowAddLogModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Crop *</label>
                <select
                  value={newLog.crop}
                  onChange={(e) => setNewLog({...newLog, crop: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                >
                  <option value="">Choose crop...</option>
                  {crops.map((crop, idx) => (
                    <option key={idx} value={crop.name}>{crop.icon} {crop.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date Planted *</label>
                <input
                  type="date"
                  value={newLog.datePlanted}
                  onChange={(e) => setNewLog({...newLog, datePlanted: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Seed Quantity (kg)</label>
                <input
                  type="number"
                  value={newLog.seedQuantity}
                  onChange={(e) => setNewLog({...newLog, seedQuantity: e.target.value})}
                  placeholder="e.g., 25"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fertilizer Type</label>
                <input
                  type="text"
                  value={newLog.fertilizer}
                  onChange={(e) => setNewLog({...newLog, fertilizer: e.target.value})}
                  placeholder="e.g., NPK 15:15:15"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label>
                <textarea
                  value={newLog.notes}
                  onChange={(e) => setNewLog({...newLog, notes: e.target.value})}
                  placeholder="Add any additional notes..."
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all resize-none"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddLogModal(false)}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddLog}
                  disabled={!newLog.crop || !newLog.datePlanted}
                  className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Log
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartFarmerApp;