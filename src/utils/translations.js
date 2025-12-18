// Translation system for Smart Farmer App
// Supports English, Yoruba, Hausa, and Igbo

export const translations = {
  en: {
    // Common
    common: {
      welcome: 'Welcome to Smart Farmer! 🌱',
      loading: 'Loading...',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      back: 'Back',
      next: 'Next',
      search: 'Search',
      select: 'Select',
      viewAll: 'View All',
      learnMore: 'Learn more',
      getStarted: 'Get Started',
      continue: 'Continue',
      finish: 'Finish'
    },
    // Onboarding
    onboarding: {
      title: 'Smart Farmer',
      subtitle: 'Your pocket assistant for better planting and profit',
      selectRegion: 'Select Your Region',
      chooseLocation: 'Choose location...',
      farmingType: 'Farming Type',
      crop: 'Crop',
      livestock: 'Livestock',
      mixed: 'Mixed'
    },
    // Navigation
    nav: {
      home: 'Home',
      guide: 'Guide',
      calendar: 'Calendar',
      tracker: 'Tracker',
      pest: 'Pest',
      livestock: 'Livestock',
      mixed: 'Mixed Farming',
      settings: 'Settings'
    },
    // Home
    home: {
      title: 'Smart Farmer',
      todaysWeather: "Today's Weather",
      cropGuide: 'Crop Guide',
      calendar: 'Calendar',
      farmTracker: 'Farm Tracker',
      pestTips: 'Pest Tips',
      activeCrops: 'Active Crops',
      daysToHarvest: 'days to harvest',
      toHarvest: 'to harvest'
    },
    // Crop Guide
    guide: {
      title: 'Crop Guide',
      subtitle: 'Discover the best crops for your region',
      searchCrops: 'Search crops...',
      plantingMonths: 'Planting Months',
      harvestTime: 'Harvest Time',
      yield: 'Yield',
      soilType: 'Soil Type'
    },
    // Calendar
    calendar: {
      title: 'Planting Calendar',
      subtitle: 'Plan your farming activities',
      noRecommendations: 'No recommendations'
    },
    // Tracker
    tracker: {
      title: 'Farm Tracker',
      subtitle: 'Monitor your farming activities',
      addNewLog: 'Add New Log',
      noLogs: 'No farm logs yet',
      addFirstLog: 'Add Your First Log',
      planted: 'Planted',
      daysRemaining: 'days remaining',
      addFarmLog: 'Add Farm Log',
      selectCrop: 'Select Crop *',
      chooseCrop: 'Choose crop...',
      datePlanted: 'Date Planted *',
      seedQuantity: 'Seed Quantity (kg)',
      fertilizerType: 'Fertilizer Type',
      notes: 'Notes',
      addNotes: 'Add any additional notes...',
      addLog: 'Add Log',
      logAdded: 'log added successfully! 🌱'
    },
    // Pest
    pest: {
      title: 'Pest & Disease Detection',
      subtitle: 'AI-powered pest identification and treatment recommendations',
      manualDiagnosis: 'Manual Diagnosis',
      quickDiagnosis: 'Quick Diagnosis',
      selectCrop: 'Select crop...',
      selectSymptom: 'Select symptom...',
      getSolution: 'Get Solution',
      diagnosisResult: 'Diagnosis Result',
      cause: 'Cause',
      solution: 'Solution',
      prevention: 'Prevention',
      commonIssues: 'Common Issues',
      symptom: 'Symptom'
    },
    // Livestock
    livestock: {
      title: 'Animal Production',
      subtitle: 'Comprehensive guide for livestock management',
      breeds: 'Breeds',
      housingRequirements: 'Housing Requirements',
      space: 'Space',
      feeding: 'Feeding',
      dailyRequirements: 'Daily Requirements',
      tips: 'Tips',
      healthManagement: 'Health Management',
      commonDiseases: 'Common Diseases',
      symptoms: 'Symptoms',
      treatment: 'Treatment',
      prevention: 'Prevention',
      vaccinationSchedule: 'Vaccination Schedule',
      economics: 'Economics',
      initialCost: 'Initial Cost',
      monthlyFeedCost: 'Monthly Feed Cost',
      milkValue: 'Milk Value',
      meatValue: 'Meat Value',
      profitMargin: 'Profit Margin',
      weight: 'Weight',
      milk: 'Milk',
      gestation: 'Gestation',
      suitable: 'Suitable'
    },
    // Mixed Farming
    mixed: {
      title: 'Mixed Farming',
      subtitle: 'Integrated crop and livestock production systems',
      benefits: 'Benefits of Mixed Farming',
      systems: 'Mixed Farming Systems',
      examples: 'Examples',
      crops: 'Crops',
      integration: 'Integration',
      practices: 'Integrated Practices',
      steps: 'Steps',
      seasonalPlanning: 'Seasonal Planning',
      rainySeason: 'Rainy Season (April-October)',
      drySeason: 'Dry Season (November-March)'
    },
    // Settings
    settings: {
      title: 'Settings',
      profile: 'Profile',
      region: 'Region',
      farmingType: 'Farming Type',
      preferences: 'Preferences',
      notifications: 'Notifications',
      receiveReminders: 'Receive farming reminders',
      darkMode: 'Dark Mode',
      switchTheme: 'Switch to dark theme',
      language: 'Language',
      units: 'Units',
      metric: 'Metric (kg, ha)',
      imperial: 'Imperial (lb, acres)',
      saveChanges: 'Save Changes',
      changeRegion: 'Change Region',
      signOut: 'Sign Out',
      settingsSaved: 'Settings saved successfully! ✅',
      returningOnboarding: 'Returning to onboarding...',
      signedOut: 'Signed out successfully. See you soon! 👋'
    },
    // Notifications
    notifications: {
      title: 'Notifications',
      weedingDue: 'Weeding Due',
      timeToWeed: 'Time to weed your Maize farm',
      weatherAlert: 'Weather Alert',
      heavyRainExpected: 'Heavy rain expected tomorrow',
      harvestReady: 'Harvest Ready',
      tomatoReady: 'Your Tomato is ready for harvest',
      marketUpdate: 'Market Update',
      maizePriceIncrease: 'Maize prices increased by 15%'
    },
    // Weather
    weather: {
      title: 'Weather Updates',
      subtitle: 'Stay informed about weather conditions for better farming decisions',
      forecast: '7-Day Forecast',
      alerts: 'Weather Alerts',
      heavyRainExpected: 'Heavy Rain Expected',
      prepareDrainage: 'Tomorrow afternoon - Prepare drainage',
      highTemperature: 'High Temperature',
      increaseIrrigation: 'Weekend - Increase irrigation',
      recommendations: 'Farming Recommendations',
      goodPlantingTime: '✅ Good time for planting this week',
      optimalMoisture: '✅ Soil moisture levels optimal',
      planRainHarvesting: '⚠️ Plan for rain harvesting tomorrow'
    },
    // Market Prices
    market: {
      title: 'Market Prices',
      subtitle: 'Current market prices for major crops',
      perKg: 'per kg',
      marketTips: '💡 Market Tips',
      maizePriceHigh: '• Maize prices expected to remain high due to seasonal demand',
      pepperBestTime: '• Best time to sell pepper is within the next 2 weeks',
      riceImports: '• Rice imports may affect local prices next month'
    },
    // Farming Tips
    tips: {
      title: 'Farming Tips',
      subtitle: 'Expert advice for successful farming',
      soilPreparation: 'Soil Preparation',
      plantingTechniques: 'Planting Techniques',
      pestManagement: 'Pest Management',
      waterManagement: 'Water Management',
      fertilization: 'Fertilization',
      harvesting: 'Harvesting'
    },
    // Community Forum
    forum: {
      title: 'Community Forum',
      subtitle: 'Connect with fellow farmers and share experiences',
      replies: 'replies',
      startDiscussion: 'Start a New Discussion'
    },
    // Help Center
    help: {
      title: 'Help Center',
      subtitle: 'Find answers to common questions',
      gettingStarted: 'Getting Started',
      features: 'Features',
      stillNeedHelp: 'Still Need Help?',
      supportTeam: 'Our support team is here to assist you',
      emailSupport: '📧 Email Support',
      liveChat: '💬 Live Chat'
    },
    // AI Pest Detection
    aiPest: {
      title: 'AI Pest Detection',
      subtitle: 'Snap a photo of the pest or affected plant for instant identification',
      uploadPhoto: 'Upload Photo',
      takePhoto: 'Take Photo',
      tipsForBestResults: 'Tips for best results:',
      goodLighting: 'Take photo in good lighting',
      getClose: 'Get close to the affected area',
      includeBoth: 'Include both affected and healthy parts if possible',
      clearImage: 'Ensure the image is clear and in focus',
      analyzingImage: 'Analyzing Image...',
      analyzeWithAI: 'Analyze with AI',
      detected: 'Detected',
      confidence: 'Confidence',
      immediate: 'Immediate',
      organic: 'Organic',
      chemical: 'Chemical',
      treatment: 'Treatment',
      severity: 'Severity',
      urgency: 'Urgency',
      imageSizeError: 'Image size should be less than 5MB',
      selectImageFirst: 'Please select an image first',
      pestDetected: 'Pest detected',
      couldNotIdentify: 'Could not identify pest. Please try a clearer image or consult an expert.'
    },
    // Voice Navigation
    voice: {
      notSupported: 'Voice navigation is not supported in this browser. Please use Chrome or Edge.',
      listening: 'Listening...',
      tapToSpeak: 'Tap to speak',
      stopListening: 'Stop listening',
      startVoiceNav: 'Start voice navigation'
    }
  },
  
  yo: {
    // Yoruba translations
    common: {
      welcome: 'Kaabo si Smart Farmer! 🌱',
      loading: 'N ṣiṣẹ...',
      close: 'Pa',
      save: 'Fi pamọ',
      cancel: 'Fagilee',
      back: 'Pada',
      next: 'Tókàn',
      search: 'Wa',
      select: 'Yan',
      viewAll: 'Wo gbogbo',
      learnMore: 'Kọ ẹkúnrẹrẹ',
      getStarted: 'Bẹrẹ',
      continue: 'Tẹsiwaju',
      finish: 'Parí'
    },
    onboarding: {
      title: 'Smart Farmer',
      subtitle: 'Oluranlọwọ ọkọ rẹ fun gbigbin ati anfani ti o dara',
      selectRegion: 'Yan Agbegbe Rẹ',
      chooseLocation: 'Yan ibi...',
      farmingType: 'Iru Agbe',
      crop: 'Ohun ọgbin',
      livestock: 'Ẹranko',
      mixed: 'Apapọ'
    },
    nav: {
      home: 'Ile',
      guide: 'Itọsọna',
      calendar: 'Kalẹnda',
      tracker: 'Olutọpa',
      pest: 'Kokoro',
      livestock: 'Ẹranko',
      mixed: 'Agbe Apapọ',
      settings: 'Eto'
    },
    home: {
      title: 'Smart Farmer',
      todaysWeather: 'Oju-ọjọ Loni',
      cropGuide: 'Itọsọna Ohun ọgbin',
      calendar: 'Kalẹnda',
      farmTracker: 'Olutọpa Oko',
      pestTips: 'Amọran Kokoro',
      activeCrops: 'Ohun ọgbin Ti n ṣiṣẹ',
      daysToHarvest: 'ọjọ si ikore',
      toHarvest: 'si ikore'
    },
    guide: {
      title: 'Itọsọna Ohun ọgbin',
      subtitle: 'Ṣe awari awọn ohun ọgbin ti o dara julọ fun agbegbe rẹ',
      searchCrops: 'Wa awọn ohun ọgbin...',
      plantingMonths: 'Oṣu Gbigbin',
      harvestTime: 'Akoko Ikore',
      yield: 'Eso',
      soilType: 'Iru Ilẹ'
    },
    calendar: {
      title: 'Kalẹnda Gbigbin',
      subtitle: 'Ṣe iṣeduro awọn iṣẹ agbe rẹ',
      noRecommendations: 'Ko si awọn imọran'
    },
    tracker: {
      title: 'Olutọpa Oko',
      subtitle: 'Ṣe ayẹwo awọn iṣẹ agbe rẹ',
      addNewLog: 'Fi Tọka Tuntun',
      noLogs: 'Ko si awọn tọka oko sibẹsibẹ',
      addFirstLog: 'Fi Tọka Akọkọ Rẹ',
      planted: 'Ti gbin',
      daysRemaining: 'ọjọ ti o ku',
      addFarmLog: 'Fi Tọka Oko',
      selectCrop: 'Yan Ohun ọgbin *',
      chooseCrop: 'Yan ohun ọgbin...',
      datePlanted: 'Ọjọ Ti Gbin *',
      seedQuantity: 'Iye Irúgbìn (kg)',
      fertilizerType: 'Iru Ajẹ',
      notes: 'Awọn akọsilẹ',
      addNotes: 'Fi awọn akọsilẹ miiran kun...',
      addLog: 'Fi Tọka',
      logAdded: 'tọka ti fi kun ni aṣeyọri! 🌱'
    },
    pest: {
      title: 'Iwadii Kokoro & Arun',
      subtitle: 'Iwadii kokoro pẹlu AI ati awọn imọran itọjú',
      manualDiagnosis: 'Iwadii Lọwọ',
      quickDiagnosis: 'Iwadii Kẹkẹ',
      selectCrop: 'Yan ohun ọgbin...',
      selectSymptom: 'Yan aami...',
      getSolution: 'Gba Ojutu',
      diagnosisResult: 'Abajade Iwadii',
      cause: 'Idi',
      solution: 'Ojutu',
      prevention: 'Idiwọ',
      commonIssues: 'Awọn Iṣoro Wọpọ',
      symptom: 'Aami'
    },
    livestock: {
      title: 'Iṣelọpọ Ẹranko',
      subtitle: 'Itọsọna pẹlẹpẹlẹ fun iṣakoso ẹranko',
      breeds: 'Awọn Iru',
      housingRequirements: 'Awọn Ibeere Ile',
      space: 'Aaye',
      feeding: 'Bibẹ',
      dailyRequirements: 'Awọn Ibeere Ojoojumọ',
      tips: 'Awọn Amọran',
      healthManagement: 'Iṣakoso Ilera',
      commonDiseases: 'Awọn Arun Wọpọ',
      symptoms: 'Awọn Aami',
      treatment: 'Itọjú',
      prevention: 'Idiwọ',
      vaccinationSchedule: 'Ipo Alẹgbẹ',
      economics: 'Iṣowo',
      initialCost: 'Iye Owo Ibẹrẹ',
      monthlyFeedCost: 'Iye Owo Ounjẹ Oṣu',
      milkValue: 'Iye Wara',
      meatValue: 'Iye Ẹran',
      profitMargin: 'Ojulowo',
      weight: 'Iwọn',
      milk: 'Wara',
      gestation: 'Oyun',
      suitable: 'Yẹ'
    },
    mixed: {
      title: 'Agbe Apapọ',
      subtitle: 'Awọn ẹya agbe apapọ ti ohun ọgbin ati ẹranko',
      benefits: 'Awọn Anfani Agbe Apapọ',
      systems: 'Awọn ẹya Agbe Apapọ',
      examples: 'Awọn Apẹrẹ',
      crops: 'Awọn Ohun ọgbin',
      integration: 'Apapọ',
      practices: 'Awọn Iṣẹ Apapọ',
      steps: 'Awọn Igbesẹ',
      seasonalPlanning: 'Iṣeduro Oṣu',
      rainySeason: 'Oṣu Ojo (Oṣu Kẹrin-Oṣu Kẹwa)',
      drySeason: 'Oṣu Gbigbẹ (Oṣu Kọkanla-Oṣu Kẹta)'
    },
    settings: {
      title: 'Eto',
      profile: 'Profaili',
      region: 'Agbegbe',
      farmingType: 'Iru Agbe',
      preferences: 'Awọn Ifẹ',
      notifications: 'Awọn Ifitonileti',
      receiveReminders: 'Gba awọn iranti agbe',
      darkMode: 'Ara Dudu',
      switchTheme: 'Yipada si ara dudu',
      language: 'Ede',
      units: 'Awọn ẹyọ',
      metric: 'Mẹtrik (kg, ha)',
      imperial: 'Imperial (lb, acres)',
      saveChanges: 'Fi Awọn Ayipada Pamọ',
      changeRegion: 'Yipada Agbegbe',
      signOut: 'Jade',
      settingsSaved: 'Awọn eto ti fi pamọ ni aṣeyọri! ✅',
      returningOnboarding: 'N pada si ibẹrẹ...',
      signedOut: 'A jade ni aṣeyọri. A o ri ọ lẹẹkansi! 👋'
    },
    notifications: {
      title: 'Awọn Ifitonileti',
      weedingDue: 'Ojutu Ti To',
      timeToWeed: 'Akoko lati we awọn oko Maize rẹ',
      weatherAlert: 'Ikilo Oju-ọjọ',
      heavyRainExpected: 'Ojo nla ti n reti ọla',
      harvestReady: 'Ikore Ti Setan',
      tomatoReady: 'Tomato rẹ ti setan fun ikore',
      marketUpdate: 'Imudojuiwọn Ọja',
      maizePriceIncrease: 'Iye owo Maize pọ si 15%'
    },
    weather: {
      title: 'Awọn Imudojuiwọn Oju-ọjọ',
      subtitle: 'Tọpinpin nipa awọn ipo oju-ọjọ fun awọn ipinnu agbe ti o dara',
      forecast: 'Ifihan Ọjọ 7',
      alerts: 'Awọn Ikilo Oju-ọjọ',
      heavyRainExpected: 'Ojo Nla Ti N Reti',
      prepareDrainage: 'Ọla ni ọjọ - Mura fun iṣan omi',
      highTemperature: 'Ooru Giga',
      increaseIrrigation: 'Ọjọ-ori - Pọ si iṣan omi',
      recommendations: 'Awọn Imọran Agbe',
      goodPlantingTime: '✅ Akoko ti o dara fun gbigbin ni ọsẹ yii',
      optimalMoisture: '✅ Ipele ilẹ ti o dara',
      planRainHarvesting: '⚠️ Ṣe iṣeduro fun ikore ojo ọla'
    },
    market: {
      title: 'Awọn Iye Owo Ọja',
      subtitle: 'Awọn iye owo ọja lọwọlọwọ fun awọn ohun ọgbin pataki',
      perKg: 'fun kg',
      marketTips: '💡 Awọn Amọran Ọja',
      maizePriceHigh: '• Awọn iye owo Maize ti n reti lati duro giga nitori ibeere oṣu',
      pepperBestTime: '• Akoko ti o dara julọ lati ta ata ni laarin awọn ọsẹ meji ti n bọ',
      riceImports: '• Awọn owo-ọrọ Iresi le fa awọn iye owo agbegbe ni oṣu ti n bọ'
    },
    tips: {
      title: 'Awọn Amọran Agbe',
      subtitle: 'Imọran onimọ fun agbe aṣeyọri',
      soilPreparation: 'Iṣeto Ilẹ',
      plantingTechniques: 'Awọn ẹya Gbigbin',
      pestManagement: 'Iṣakoso Kokoro',
      waterManagement: 'Iṣakoso Omi',
      fertilization: 'Ajẹ',
      harvesting: 'Ikore'
    },
    forum: {
      title: 'Fọramu Agbegbe',
      subtitle: 'Kan si awọn agbe miiran ati pin awọn iriri',
      replies: 'awọn idahun',
      startDiscussion: 'Bẹrẹ Ijiroro Tuntun'
    },
    help: {
      title: 'Ile Igbala',
      subtitle: 'Wa awọn idahun si awọn ibeere wọpọ',
      gettingStarted: 'Bibẹrẹ',
      features: 'Awọn ẹya',
      stillNeedHelp: 'O Sibe Nilo Igbala?',
      supportTeam: 'Ẹgbẹ atilẹyin wa wa nibi lati ran ọ lọwọ',
      emailSupport: '📧 Atilẹyin Imẹẹli',
      liveChat: '💬 Sọrọ Lailẹ'
    },
    aiPest: {
      title: 'Iwadii Kokoro AI',
      subtitle: 'Ṣe fọto kokoro tabi ohun ọgbin ti a fura fun iwadii ni kikun',
      uploadPhoto: 'Gbe Fọto',
      takePhoto: 'Ṣe Fọto',
      tipsForBestResults: 'Awọn amọran fun awọn abajade ti o dara julọ:',
      goodLighting: 'Ṣe fọto ni imọlẹ ti o dara',
      getClose: 'Sunmọ agbegbe ti a fura',
      includeBoth: 'Fi mejeeji awọn agbegbe ti a fura ati ti o ni ilera ti o ba ṣee ṣe',
      clearImage: 'Ri daju pe fọto ti o yanju ati ni ifojusi',
      analyzingImage: 'N ṣe ayẹwo Fọto...',
      analyzeWithAI: 'Ṣe Ayẹwo Pẹlu AI',
      detected: 'Ti rii',
      confidence: 'Igbagbọ',
      immediate: 'Ni kikun',
      organic: 'Ara',
      chemical: 'Kemikali',
      treatment: 'Itọjú',
      severity: 'Iwọn',
      urgency: 'Iṣoro',
      imageSizeError: 'Iwọn fọto yẹ ki o kere ju 5MB',
      selectImageFirst: 'Jọwọ yan fọto ni akọkọ',
      pestDetected: 'Kokoro ti rii',
      couldNotIdentify: 'Ko le ṣe idanimọ kokoro. Jọwọ gbiyanju fọto ti o yanju sii tabi beere imọran lati ọdọ onimọ.'
    },
    voice: {
      notSupported: 'Irin-ajo ohun ko ni atilẹyin ni awoyewo yii. Jọwọ lo Chrome tabi Edge.',
      listening: 'N gbọ...',
      tapToSpeak: 'Tẹ lati sọrọ',
      stopListening: 'Duro Gbigbọ',
      startVoiceNav: 'Bẹrẹ irin-ajo ohun'
    }
  },
  
  ha: {
    // Hausa translations
    common: {
      welcome: 'Barka da zuwa Smart Farmer! 🌱',
      loading: 'Ana yin aiki...',
      close: 'Rufe',
      save: 'Ajiye',
      cancel: 'Soke',
      back: 'Koma',
      next: 'Na gaba',
      search: 'Nema',
      select: 'Zaɓi',
      viewAll: 'Duba duka',
      learnMore: 'Koyi ƙarin',
      getStarted: 'Fara',
      continue: 'Ci gaba',
      finish: 'Ƙare'
    },
    onboarding: {
      title: 'Smart Farmer',
      subtitle: 'Mataimakin aljihunka don shuka da riba mai kyau',
      selectRegion: 'Zaɓi Yankinku',
      chooseLocation: 'Zaɓi wuri...',
      farmingType: 'Nau\'in Noma',
      crop: 'Amfanin gona',
      livestock: 'Dabbobi',
      mixed: 'Gauraye'
    },
    nav: {
      home: 'Gida',
      guide: 'Jagora',
      calendar: 'Kalandar',
      tracker: 'Mai bin diddigin',
      pest: 'Kwaro',
      livestock: 'Dabbobi',
      mixed: 'Noma Gauraye',
      settings: 'Saituna'
    },
    home: {
      title: 'Smart Farmer',
      todaysWeather: 'Yanayin Yau',
      cropGuide: 'Jagorar Amfanin Gona',
      calendar: 'Kalandar',
      farmTracker: 'Mai Bin Diddigin Gona',
      pestTips: 'Shawarwarin Kwaro',
      activeCrops: 'Amfanin Gona Masu Aiki',
      daysToHarvest: 'kwanaki zuwa girbi',
      toHarvest: 'zuwa girbi'
    },
    guide: {
      title: 'Jagorar Amfanin Gona',
      subtitle: 'Gano mafi kyawun amfanin gona na yankinku',
      searchCrops: 'Nemo amfanin gona...',
      plantingMonths: 'Watannin Shuka',
      harvestTime: 'Lokacin Girbi',
      yield: 'Yawan Amfanin Gona',
      soilType: 'Nau\'in ƙasa'
    },
    calendar: {
      title: 'Kalandar Shuka',
      subtitle: 'Shirya ayyukanku na noma',
      noRecommendations: 'Babu shawarwari'
    },
    tracker: {
      title: 'Mai Bin Diddigin Gona',
      subtitle: 'Kula da ayyukanku na noma',
      addNewLog: 'Ƙara Sabon Rijista',
      noLogs: 'Babu rijistar gona tukuna',
      addFirstLog: 'Ƙara Rijistar Farko',
      planted: 'An shuka',
      daysRemaining: 'kwanaki da suka rage',
      addFarmLog: 'Ƙara Rijistar Gona',
      selectCrop: 'Zaɓi Amfanin Gona *',
      chooseCrop: 'Zaɓi amfanin gona...',
      datePlanted: 'Ranar da aka Shuka *',
      seedQuantity: 'Yawan Iri (kg)',
      fertilizerType: 'Nau\'in Takin',
      notes: 'Bayanan kula',
      addNotes: 'Ƙara ƙarin bayanan kula...',
      addLog: 'Ƙara Rijista',
      logAdded: 'an ƙara rijista cikin nasara! 🌱'
    },
    pest: {
      title: 'Gano Kwaro & Cututtuka',
      subtitle: 'Gano kwaro tare da AI da shawarwarin magani',
      manualDiagnosis: 'Bincike da Hannu',
      quickDiagnosis: 'Bincike Mai Sauƙi',
      selectCrop: 'Zaɓi amfanin gona...',
      selectSymptom: 'Zaɓi alama...',
      getSolution: 'Samu Magani',
      diagnosisResult: 'Sakamakon Bincike',
      cause: 'Dalili',
      solution: 'Magani',
      prevention: 'Rigakafi',
      commonIssues: 'Batutuwa na Kowa',
      symptom: 'Alama'
    },
    livestock: {
      title: 'Kiwo Dabbobi',
      subtitle: 'Jagora mai cikakke don kula da dabbobi',
      breeds: 'Iri-iri',
      housingRequirements: 'Bukatun Gidaje',
      space: 'Sarari',
      feeding: 'Ciyarwa',
      dailyRequirements: 'Bukatu na Yau da Kullum',
      tips: 'Shawarwari',
      healthManagement: 'Kula da Lafiya',
      commonDiseases: 'Cututtuka na Kowa',
      symptoms: 'Alamomi',
      treatment: 'Magani',
      prevention: 'Rigakafi',
      vaccinationSchedule: 'Jadawalin Alurar',
      economics: 'Tattalin Arziki',
      initialCost: 'Farashin Farko',
      monthlyFeedCost: 'Farashin Abinci na Wata',
      milkValue: 'Darajar Nono',
      meatValue: 'Darajar Nama',
      profitMargin: 'Riba',
      weight: 'Nauyi',
      milk: 'Nono',
      gestation: 'Ciki',
      suitable: 'Ya dace'
    },
    mixed: {
      title: 'Noma Gauraye',
      subtitle: 'Tsarin noma gauraye na amfanin gona da dabbobi',
      benefits: 'Amfanin Noma Gauraye',
      systems: 'Tsarin Noma Gauraye',
      examples: 'Misalai',
      crops: 'Amfanin Gona',
      integration: 'Haɗawa',
      practices: 'Ayyuka Gauraye',
      steps: 'Matakai',
      seasonalPlanning: 'Shirin Lokaci',
      rainySeason: 'Lokacin Ruwa (Afrilu-Oktoba)',
      drySeason: 'Lokacin Rani (Nuwamba-Marzu)'
    },
    settings: {
      title: 'Saituna',
      profile: 'Bayanan mutum',
      region: 'Yanki',
      farmingType: 'Nau\'in Noma',
      preferences: 'Zaɓuɓɓuka',
      notifications: 'Sanarwa',
      receiveReminders: 'Karɓi tunatarwa na noma',
      darkMode: 'Yanayin Duhu',
      switchTheme: 'Canza zuwa yanayin duhu',
      language: 'Harshe',
      units: 'Raka\'a',
      metric: 'Mita (kg, ha)',
      imperial: 'Imperial (lb, acres)',
      saveChanges: 'Ajiye Canje-canje',
      changeRegion: 'Canza Yanki',
      signOut: 'Fita',
      settingsSaved: 'An ajiye saituna cikin nasara! ✅',
      returningOnboarding: 'Ana komawa zuwa farawa...',
      signedOut: 'An fita cikin nasara. Za mu sake haduwa! 👋'
    },
    notifications: {
      title: 'Sanarwa',
      weedingDue: 'Lokacin Cire Ciyawa Ya Yi',
      timeToWeed: 'Lokaci ne don cire ciyawa gonar Masara',
      weatherAlert: 'Faɗakarwar Yanayi',
      heavyRainExpected: 'Ana sa ran ruwan sama mai yawa gobe',
      harvestReady: 'Girbi Ya Shiri',
      tomatoReady: 'Tumatirka ta shiri don girbi',
      marketUpdate: 'Sabunta Kasuwa',
      maizePriceIncrease: 'Farashin masara ya karu da 15%'
    },
    weather: {
      title: 'Sabunta Yanayi',
      subtitle: 'Kasance da labari game da yanayin yanayi don yanke shawara mai kyau na noma',
      forecast: 'Hasashen Kwanaki 7',
      alerts: 'Faɗakarwar Yanayi',
      heavyRainExpected: 'Ruwan Sama Mai Yawa Ana Sa Rana',
      prepareDrainage: 'Gobe da rana - Shirya magudanar ruwa',
      highTemperature: 'Zafi Mai Yawa',
      increaseIrrigation: 'Karshen mako - ƙara ban ruwa',
      recommendations: 'Shawarwarin Noma',
      goodPlantingTime: '✅ Lokaci mai kyau don shuka a wannan mako',
      optimalMoisture: '✅ Matsakaicin danshin ƙasa yana da kyau',
      planRainHarvesting: '⚠️ Shirya tara ruwan sama gobe'
    },
    market: {
      title: 'Farashin Kasuwa',
      subtitle: 'Farashin kasuwa na yau don manyan amfanin gona',
      perKg: 'ga kg',
      marketTips: '💡 Shawarwarin Kasuwa',
      maizePriceHigh: '• Ana sa ran farashin masara zai ci gaba da zama mai yawa saboda buƙatar lokaci',
      pepperBestTime: '• Mafi kyawun lokaci don sayar da barkono shine a cikin makonni biyu masu zuwa',
      riceImports: '• Shigo da shinkafa zai iya shafar farashin gida a wata mai zuwa'
    },
    tips: {
      title: 'Shawarwarin Noma',
      subtitle: 'Shawara daga masana don noma mai nasara',
      soilPreparation: 'Shirya ƙasa',
      plantingTechniques: 'Dabarun Shuka',
      pestManagement: 'Kula da Kwaro',
      waterManagement: 'Kula da Ruwa',
      fertilization: 'Taki',
      harvesting: 'Girbi'
    },
    forum: {
      title: 'Dandalin Jama\'a',
      subtitle: 'Haɗu da manoma tare da raba gogewa',
      replies: 'amsoshi',
      startDiscussion: 'Fara Sabuwar Tattaunawa'
    },
    help: {
      title: 'Cibiyar Taimako',
      subtitle: 'Nemo amsoshi ga tambayoyi na kowa',
      gettingStarted: 'Fara',
      features: 'Siffofi',
      stillNeedHelp: 'Har Yanzu Kuna Bukatar Taimako?',
      supportTeam: 'Ƙungiyar tallafinmu tana nan don taimaka muku',
      emailSupport: '📧 Tallafin Imel',
      liveChat: '💬 Tattaunawa Kai tsaye'
    },
    aiPest: {
      title: 'Gano Kwaro na AI',
      subtitle: 'Dauki hoto na kwaro ko shuka da aka shafa don gano nan take',
      uploadPhoto: 'Loda Hoto',
      takePhoto: 'Dauki Hoto',
      tipsForBestResults: 'Shawarwari don mafi kyawun sakamako:',
      goodLighting: 'Dauki hoto cikin haske mai kyau',
      getClose: 'Kusanci wurin da aka shafa',
      includeBoth: 'Haɗa duka wuraren da aka shafa da masu lafiya idan zai yiwu',
      clearImage: 'Tabbatar cewa hoton yana da haske kuma yana mai da hankali',
      analyzingImage: 'Ana Nazarin Hoto...',
      analyzeWithAI: 'Nazari Tare da AI',
      detected: 'An gano',
      confidence: 'Amincewa',
      immediate: 'Nan take',
      organic: 'Halitta',
      chemical: 'Sinadarai',
      treatment: 'Magani',
      severity: 'Matsala',
      urgency: 'Gaggawa',
      imageSizeError: 'Girman hoto yakamata ya zama ƙasa da 5MB',
      selectImageFirst: 'Da fatan zaɓi hoto da farko',
      pestDetected: 'An gano kwaro',
      couldNotIdentify: 'Ba za a iya gane kwaro ba. Da fatan gwada hoto mai haske ko neman shawara daga masani.'
    },
    voice: {
      notSupported: 'Tafiya ta murya ba ta goyan bayan wannan binciken ba. Da fatan yi amfani da Chrome ko Edge.',
      listening: 'Ana saurare...',
      tapToSpeak: 'Danna don magana',
      stopListening: 'Dakatar da Sauraro',
      startVoiceNav: 'Fara tafiya ta murya'
    }
  },
  
  ig: {
    // Igbo translations
    common: {
      welcome: 'Nnọọ na Smart Farmer! 🌱',
      loading: 'Na-arụ ọrụ...',
      close: 'Mechie',
      save: 'Chekwaa',
      cancel: 'Kagbuo',
      back: 'Laghachi',
      next: 'Nke ọzọ',
      search: 'Chọọ',
      select: 'Họrọ',
      viewAll: 'Lee ihe niile',
      learnMore: 'Mụtakwuo',
      getStarted: 'Malite',
      continue: 'Gaa n\'ihu',
      finish: 'Mechaa'
    },
    onboarding: {
      title: 'Smart Farmer',
      subtitle: 'Onye enyemaka akpa gị maka ịkụ ihe na uru ka mma',
      selectRegion: 'Họrọ Mpaghara Gị',
      chooseLocation: 'Họrọ ebe...',
      farmingType: 'Ụdị Ọrụ Ugbo',
      crop: 'Ihe ọkụkụ',
      livestock: 'Anụmanụ',
      mixed: 'Gwakọtara'
    },
    nav: {
      home: 'Ụlọ',
      guide: 'Ntuziaka',
      calendar: 'Kalenda',
      tracker: 'Onye nleba anya',
      pest: 'Ahụhụ',
      livestock: 'Anụmanụ',
      mixed: 'Ọrụ Ugbo Gwakọtara',
      settings: 'Ntọala'
    },
    home: {
      title: 'Smart Farmer',
      todaysWeather: 'Ihu Igwe Taa',
      cropGuide: 'Ntuziaka Ihe ọkụkụ',
      calendar: 'Kalenda',
      farmTracker: 'Onye Nleba Anya Ugbo',
      pestTips: 'Ndụmọdụ Ahụhụ',
      activeCrops: 'Ihe ọkụkụ Na-arụ Ọrụ',
      daysToHarvest: 'ụbọchị ruo owuwe ihe ubi',
      toHarvest: 'ruo owuwe ihe ubi'
    },
    guide: {
      title: 'Ntuziaka Ihe ọkụkụ',
      subtitle: 'Chọpụta ihe ọkụkụ kacha mma maka mpaghara gị',
      searchCrops: 'Chọọ ihe ọkụkụ...',
      plantingMonths: 'Ọnwa Ịkụ',
      harvestTime: 'Oge Owuwe Ihe Ubi',
      yield: 'Mkpụrụ',
      soilType: 'Ụdị Ala'
    },
    calendar: {
      title: 'Kalenda Ịkụ',
      subtitle: 'Hazie ọrụ ugbo gị',
      noRecommendations: 'Enweghị ndụmọdụ'
    },
    tracker: {
      title: 'Onye Nleba Anya Ugbo',
      subtitle: 'Nyochaa ọrụ ugbo gị',
      addNewLog: 'Tinye Ndekọ Ọhụrụ',
      noLogs: 'Enweghị ndekọ ugbo ma ọlị',
      addFirstLog: 'Tinye Ndekọ Mbụ Gị',
      planted: 'A kụrụ',
      daysRemaining: 'ụbọchị fọdụrụ',
      addFarmLog: 'Tinye Ndekọ Ugbo',
      selectCrop: 'Họrọ Ihe ọkụkụ *',
      chooseCrop: 'Họrọ ihe ọkụkụ...',
      datePlanted: 'Ụbọchị A Kụrụ *',
      seedQuantity: 'Ọnụọgụgụ Mkpụrụ (kg)',
      fertilizerType: 'Ụdị Fatịlaịza',
      notes: 'Ihe ndetu',
      addNotes: 'Tinye ihe ndetu ọzọ...',
      addLog: 'Tinye Ndekọ',
      logAdded: 'tinyere ndekọ nke ọma! 🌱'
    },
    pest: {
      title: 'Nchọpụta Ahụhụ & Ọrịa',
      subtitle: 'Nchọpụta ahụhụ site na AI na ndụmọdụ ọgwụgwọ',
      manualDiagnosis: 'Nchọpụta Aka',
      quickDiagnosis: 'Nchọpụta Ngwa Ngwa',
      selectCrop: 'Họrọ ihe ọkụkụ...',
      selectSymptom: 'Họrọ ihe mgbaàmà...',
      getSolution: 'Nweta Ngwọta',
      diagnosisResult: 'Nsonaazụ Nchọpụta',
      cause: 'Ihe Kpatara',
      solution: 'Ngwọta',
      prevention: 'Mgbochi',
      commonIssues: 'Nsogbu Ndị A Na-ahụkarị',
      symptom: 'Ihe Mgbaàmà'
    },
    livestock: {
      title: 'Mmepụta Anụmanụ',
      subtitle: 'Ntuziaka zuru ezu maka njikwa anụmanụ',
      breeds: 'Ụdị',
      housingRequirements: 'Ihe Achọrọ Ụlọ',
      space: 'Oghere',
      feeding: 'Inye Nri',
      dailyRequirements: 'Ihe Achọrọ Kwa Ụbọchị',
      tips: 'Ndụmọdụ',
      healthManagement: 'Njikwa Ahụike',
      commonDiseases: 'Ọrịa Ndị A Na-ahụkarị',
      symptoms: 'Ihe Mgbaàmà',
      treatment: 'Ọgwụgwọ',
      prevention: 'Mgbochi',
      vaccinationSchedule: 'Usoro Ịgba Ọgwụ',
      economics: 'Akụnụba',
      initialCost: 'Ọnụ Ego Mmalite',
      monthlyFeedCost: 'Ọnụ Ego Nri Kwa Ọnwa',
      milkValue: 'Uru Mmiri Ara Ehi',
      meatValue: 'Uru Anụ',
      profitMargin: 'Uru',
      weight: 'Ibu',
      milk: 'Mmiri Ara Ehi',
      gestation: 'Ime',
      suitable: 'Dabara'
    },
    mixed: {
      title: 'Ọrụ Ugbo Gwakọtara',
      subtitle: 'Usoro ọrụ ugbo jikọtara nke ihe ọkụkụ na anụmanụ',
      benefits: 'Uru Ọrụ Ugbo Gwakọtara',
      systems: 'Usoro Ọrụ Ugbo Gwakọtara',
      examples: 'Ihe Nlereanya',
      crops: 'Ihe ọkụkụ',
      integration: 'Njikọta',
      practices: 'Omume Jikọtara',
      steps: 'Nzọụkwụ',
      seasonalPlanning: 'Atụmatụ Oge',
      rainySeason: 'Oge Mmiri Ozuzo (Eprel-Ọktọba)',
      drySeason: 'Oge Ọkọchị (Nọvemba-Maachị)'
    },
    settings: {
      title: 'Ntọala',
      profile: 'Profaịlụ',
      region: 'Mpaghara',
      farmingType: 'Ụdị Ọrụ Ugbo',
      preferences: 'Mmasị',
      notifications: 'Ọkwa',
      receiveReminders: 'Nata ncheta ọrụ ugbo',
      darkMode: 'Ọnọdụ Ọchịchịrị',
      switchTheme: 'Gbanwee gaa na ọnọdụ ọchịchịrị',
      language: 'Asụsụ',
      units: 'Nkeji',
      metric: 'Metric (kg, ha)',
      imperial: 'Imperial (lb, acres)',
      saveChanges: 'Chekwaa Mgbanwe',
      changeRegion: 'Gbanwee Mpaghara',
      signOut: 'Pụọ',
      settingsSaved: 'E chekwara ntọala nke ọma! ✅',
      returningOnboarding: 'Na-alaghachi na mmalite...',
      signedOut: 'Pụrụ nke ọma. Anyị ga-ahụ gị ọzọ! 👋'
    },
    notifications: {
      title: 'Ọkwa',
      weedingDue: 'Oge Iwe Ihe',
      timeToWeed: 'Oge iwe ugbo ọka gị',
      weatherAlert: 'Ịdọ aka ná ntị Ihu Igwe',
      heavyRainExpected: 'A na-atụ anya nnukwu mmiri ozuzo echi',
      harvestReady: 'Owuwe Ihe Ubi Dị Njikere',
      tomatoReady: 'Tomato gị dị njikere maka owuwe ihe ubi',
      marketUpdate: 'Mmelite Ahịa',
      maizePriceIncrease: 'Ọnụ ahịa ọka mụbara 15%'
    },
    weather: {
      title: 'Mmelite Ihu Igwe',
      subtitle: 'Nọrọ na-amata banyere ọnọdụ ihu igwe maka mkpebi ọrụ ugbo ka mma',
      forecast: 'Amụma Ụbọchị 7',
      alerts: 'Ịdọ aka ná ntị Ihu Igwe',
      heavyRainExpected: 'A Na-atụ Anya Nnukwu Mmiri Ozuzo',
      prepareDrainage: 'Echi n\'ehihie - Kwadebe maka mgbapụta mmiri',
      highTemperature: 'Okpomọkụ Dị Elu',
      increaseIrrigation: 'Ngwụsị izu - Mụbaa ịgba mmiri',
      recommendations: 'Ndụmọdụ Ọrụ Ugbo',
      goodPlantingTime: '✅ Oge dị mma maka ịkụ n\'izu a',
      optimalMoisture: '✅ Ọkwa mmiri ala dị mma',
      planRainHarvesting: '⚠️ Hazie maka ịkụrụ mmiri ozuzo echi'
    },
    market: {
      title: 'Ọnụ Ahịa Ahịa',
      subtitle: 'Ọnụ ahịa ahịa dị ugbu a maka ihe ọkụkụ ndị bụ isi',
      perKg: 'kwa kg',
      marketTips: '💡 Ndụmọdụ Ahịa',
      maizePriceHigh: '• A na-atụ anya na ọnụ ahịa ọka ga-anọgide na-adị elu n\'ihi ọchịchọ oge',
      pepperBestTime: '• Oge kacha mma iji ree ose bụ n\'ime izu abụọ na-abịa',
      riceImports: '• Mbubata osikapa nwere ike imetụta ọnụ ahịa mpaghara n\'ọnwa na-abịa'
    },
    tips: {
      title: 'Ndụmọdụ Ọrụ Ugbo',
      subtitle: 'Ndụmọdụ ọkachamara maka ọrụ ugbo na-aga nke ọma',
      soilPreparation: 'Nkwadebe Ala',
      plantingTechniques: 'Usoro Ịkụ',
      pestManagement: 'Njikwa Ahụhụ',
      waterManagement: 'Njikwa Mmiri',
      fertilization: 'Fatịlaịza',
      harvesting: 'Owuwe Ihe Ubi'
    },
    forum: {
      title: 'Ụlọ Nzukọ Obodo',
      subtitle: 'Jikọọ na ndị ọrụ ugbo ibe gị ma kesaa ahụmịhe',
      replies: 'azịza',
      startDiscussion: 'Malite Mkparịta Ụka Ọhụrụ'
    },
    help: {
      title: 'Ebe Enyemaka',
      subtitle: 'Chọta azịza maka ajụjụ ndị a na-ajụkarị',
      gettingStarted: 'Ịmalite',
      features: 'Atụmatụ',
      stillNeedHelp: 'Ị Ka Chọrọ Enyemaka?',
      supportTeam: 'Ndị otu nkwado anyị nọ ebe a iji nyere gị aka',
      emailSupport: '📧 Nkwado Email',
      liveChat: '💬 Mkparịta Ụka Ndụ'
    },
    aiPest: {
      title: 'Nchọpụta Ahụhụ AI',
      subtitle: 'Were foto nke ahụhụ ma ọ bụ ihe ọkụkụ emetụtara maka nchọpụta ozugbo',
      uploadPhoto: 'Bulite Foto',
      takePhoto: 'Were Foto',
      tipsForBestResults: 'Ndụmọdụ maka nsonaazụ kacha mma:',
      goodLighting: 'Were foto na ọkụ dị mma',
      getClose: 'Bịaruo nso ebe emetụtara',
      includeBoth: 'Tinye ma ebe emetụtara na nke dị mma ma ọ bụrụ na ọ ga-ekwe omume',
      clearImage: 'Hụ na foto dị nkọ ma na-elekwasị anya',
      analyzingImage: 'Na-enyocha Foto...',
      analyzeWithAI: 'Nyochaa Site na AI',
      detected: 'Achọpụtara',
      confidence: 'Ntụkwasị obi',
      immediate: 'Ozugbo',
      organic: 'Organic',
      chemical: 'Kemịkal',
      treatment: 'Ọgwụgwọ',
      severity: 'Ike',
      urgency: 'Ngwa Ngwa',
      imageSizeError: 'Nha foto kwesịrị ịbụ ihe na-erughị 5MB',
      selectImageFirst: 'Biko họrọ foto na mbụ',
      pestDetected: 'Achọpụtara ahụhụ',
      couldNotIdentify: 'Enweghị ike ịchọpụta ahụhụ. Biko nwaa foto doro anya karịa ma ọ bụ rịọ ndụmọdụ n\'aka ọkachamara.'
    },
    voice: {
      notSupported: 'Njem olu anaghị akwado na ihe nchọgharị a. Biko jiri Chrome ma ọ bụ Edge.',
      listening: 'Na-ege ntị...',
      tapToSpeak: 'Pịa ka ị kwuo okwu',
      stopListening: 'Kwụsị Ige Ntị',
      startVoiceNav: 'Malite njem olu'
    }
  }
};

// Translation hook
export const useTranslation = (language = 'en') => {
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Fallback to English if translation not found
        let enValue = translations.en;
        for (const enK of keys) {
          enValue = enValue?.[enK];
        }
        return enValue || key;
      }
    }
    
    return value || key;
  };
  
  return { t, language };
};

// Get available languages
export const getAvailableLanguages = () => {
  return [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
    { code: 'ha', name: 'Hausa', nativeName: 'Hausa' },
    { code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo' }
  ];
};

