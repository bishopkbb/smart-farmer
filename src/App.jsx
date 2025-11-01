import React, { useState, useEffect } from 'react';
import { Leaf, Calendar, BookOpen, Bug, TrendingUp, Menu, X, Sun, Cloud, Droplets, ThermometerSun, ChevronRight, Search, Plus, Bell, Settings, Home, Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const SmartFarmerApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [userLocation, setUserLocation] = useState('');
  const [farmingType, setFarmingType] = useState('');
  const [showAddLogModal, setShowAddLogModal] = useState(false);
  const [farmLogs, setFarmLogs] = useState([
    { crop: 'Maize', datePlanted: '2025-04-15', status: 'Growing', daysLeft: 45 },
    { crop: 'Tomato', datePlanted: '2025-03-20', status: 'Flowering', daysLeft: 20 }
  ]);
  const [newLog, setNewLog] = useState({
    crop: '',
    datePlanted: '',
    seedQuantity: '',
    fertilizer: '',
    notes: ''
  });
  
  // Pest diagnosis state
  const [selectedPestCrop, setSelectedPestCrop] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [pestSolution, setPestSolution] = useState(null);

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
        cause: 'Cassava mosaic disease',
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

  const crops = [
    { name: 'Maize', icon: '🌽', plantingMonths: ['April', 'May', 'June'], harvestTime: '3 months', yield: '3 tons/ha', soilType: 'Loamy' },
    { name: 'Rice', icon: '🌾', plantingMonths: ['May', 'June', 'July'], harvestTime: '4 months', yield: '2.5 tons/ha', soilType: 'Clay' },
    { name: 'Cassava', icon: '🥔', plantingMonths: ['March', 'April', 'May'], harvestTime: '10 months', yield: '15 tons/ha', soilType: 'Sandy' },
    { name: 'Tomato', icon: '🍅', plantingMonths: ['March', 'April', 'September'], harvestTime: '2 months', yield: '8 tons/ha', soilType: 'Loamy' },
    { name: 'Pepper', icon: '🌶️', plantingMonths: ['April', 'May', 'June'], harvestTime: '3 months', yield: '4 tons/ha', soilType: 'Sandy loam' },
    { name: 'Yam', icon: '🍠', plantingMonths: ['March', 'April'], harvestTime: '8 months', yield: '12 tons/ha', soilType: 'Loamy' }
  ];

  const weatherData = {
    temp: '28°C',
    condition: 'Partly Cloudy',
    humidity: '75%',
    rainfall: '12mm'
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getRecommendedCrops = (month) => {
    return crops.filter(crop => crop.plantingMonths.includes(month));
  };

  const filteredCrops = crops.filter(crop => 
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Add Log
  const handleAddLog = () => {
    if (newLog.crop && newLog.datePlanted) {
      const cropInfo = crops.find(c => c.name === newLog.crop);
      const harvestMonths = parseInt(cropInfo?.harvestTime) || 3;
      const daysLeft = harvestMonths * 30; // Approximate days
      
      setFarmLogs([...farmLogs, {
        ...newLog,
        status: 'Planted',
        daysLeft: daysLeft
      }]);
      
      setNewLog({
        crop: '',
        datePlanted: '',
        seedQuantity: '',
        fertilizer: '',
        notes: ''
      });
      setShowAddLogModal(false);
    }
  };

  // Handle Pest Diagnosis
  const handleGetSolution = () => {
    if (selectedPestCrop && selectedSymptom) {
      const solution = pestDatabase[selectedPestCrop]?.[selectedSymptom];
      if (solution) {
        setPestSolution(solution);
      } else {
        setPestSolution({
          cause: 'Information not available',
          solution: 'Please consult with a local agricultural extension officer',
          prevention: 'Practice good farm hygiene and regular monitoring'
        });
      }
    }
  };

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Smart Farmer</h1>
            <p className="text-gray-600">Your pocket assistant for better planting and profit</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your Region</label>
              <select 
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
              >
                <option value="">Choose location...</option>
                <option value="northeast">North-East Nigeria</option>
                <option value="northwest">North-West Nigeria</option>
                <option value="northcentral">North-Central Nigeria</option>
                <option value="southwest">South-West Nigeria</option>
                <option value="southsouth">South-South Nigeria</option>
                <option value="southeast">South-East Nigeria</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Farming Type</label>
              <div className="grid grid-cols-3 gap-3">
                {['Crop', 'Livestock', 'Mixed'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFarmingType(type.toLowerCase())}
                    className={`py-3 rounded-xl font-medium transition-all ${
                      farmingType === type.toLowerCase()
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => userLocation && farmingType && setShowOnboarding(false)}
              disabled={!userLocation || !farmingType}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Combined Header with Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 20 ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">Smart Farmer</h1>
                <p className="text-xs text-gray-600">{userLocation.replace(/^\w/, c => c.toUpperCase())} Region</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { name: 'Home', icon: Home, tab: 'home' },
                { name: 'Guide', icon: BookOpen, tab: 'guide' },
                { name: 'Calendar', icon: Calendar, tab: 'calendar' },
                { name: 'Tracker', icon: Leaf, tab: 'tracker' },
                { name: 'Pest', icon: Bug, tab: 'pest' }
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

            {/* Mobile Navigation - Bottom Tabs */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
              <div className="flex justify-around py-3">
                {[
                  { name: 'Home', icon: Home, tab: 'home' },
                  { name: 'Guide', icon: BookOpen, tab: 'guide' },
                  { name: 'Calendar', icon: Calendar, tab: 'calendar' },
                  { name: 'Tracker', icon: Leaf, tab: 'tracker' },
                  { name: 'Pest', icon: Bug, tab: 'pest' }
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

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <Bell className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8 md:pb-8 px-4 max-w-7xl mx-auto">
        {activeTab === 'home' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Weather Card with Modern Design */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-2xl transform hover:scale-[1.02] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90">Today's Weather</p>
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

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Crop Guide', icon: BookOpen, tab: 'guide', color: 'from-green-500 to-emerald-600' },
                { name: 'Calendar', icon: Calendar, tab: 'calendar', color: 'from-orange-500 to-amber-600' },
                { name: 'Farm Tracker', icon: Leaf, tab: 'tracker', color: 'from-purple-500 to-violet-600' },
                { name: 'Pest Tips', icon: Bug, tab: 'pest', color: 'from-red-500 to-pink-600' }
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

            {/* Active Farm Logs */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Active Crops</h3>
                <button className="text-green-600 text-sm font-semibold">View All</button>
              </div>
              <div className="space-y-3">
                {farmLogs.map((log, idx) => (
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
                      <p className="text-sm font-semibold text-green-600">{log.daysLeft} days</p>
                      <p className="text-xs text-gray-500">to harvest</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Crop Guide</h2>
              <p className="text-gray-600">Discover the best crops for your region</p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search crops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg focus:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Crop Grid */}
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

            {/* Crop Detail Modal */}
            {selectedCrop && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedCrop(null)}>
                <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{selectedCrop.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedCrop.name}</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-2xl">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Planting Months</p>
                      <p className="text-green-600 font-semibold">{selectedCrop.plantingMonths.join(', ')}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-2xl">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Harvest Time</p>
                        <p className="text-blue-600 font-semibold">{selectedCrop.harvestTime}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-2xl">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Yield</p>
                        <p className="text-purple-600 font-semibold">{selectedCrop.yield}</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-2xl">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Soil Type</p>
                      <p className="text-orange-600 font-semibold">{selectedCrop.soilType}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCrop(null)}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Planting Calendar</h2>
              <p className="text-gray-600">Plan your farming activities</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                      <p className="text-sm text-gray-400">No recommendations</p>
                    )}
                  </button>
                );
              })}
            </div>

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
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'tracker' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Farm Tracker</h2>
              <p className="text-gray-600">Monitor your farming activities</p>
            </div>

            <button className="w-full mb-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2" onClick={() => setShowAddLogModal(true)}>
              <Plus className="w-5 h-5" />
              <span>Add New Log</span>
            </button>

            <div className="space-y-4">
              {farmLogs.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                  <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">No farm logs yet</p>
                  <button 
                    onClick={() => setShowAddLogModal(true)}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                  >
                    Add Your First Log
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
                        <p className="text-sm text-gray-600">Planted: {new Date(log.datePlanted).toLocaleDateString()}</p>
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
                  <p className="text-sm text-gray-600 text-right">{log.daysLeft} days remaining</p>
                </div>
              ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'pest' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Pest & Disease Tips</h2>
              <p className="text-gray-600">Identify and solve crop problems</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h3 className="font-bold text-gray-800 mb-4">Quick Diagnosis</h3>
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
                  <option value="">Select crop...</option>
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
                  <option value="">Select symptom...</option>
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

                {/* Solution Display */}
                {pestSolution && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 animate-scaleIn">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bug className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">Diagnosis Result</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">🔍 Cause:</p>
                            <p className="text-gray-800">{pestSolution.cause}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">💊 Solution:</p>
                            <p className="text-gray-800">{pestSolution.solution}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">🛡️ Prevention:</p>
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
              <h3 className="font-bold text-gray-800 text-lg">Common Issues</h3>
              {[
                { title: 'Armyworm on Maize', symptom: 'Holes in leaves', solution: 'Apply neem-based pesticide' },
                { title: 'Tomato Blight', symptom: 'Brown spots', solution: 'Remove affected plants' },
                { title: 'Root Rot', symptom: 'Wilting plants', solution: 'Improve drainage' }
              ].map((pest, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-bold text-gray-800 mb-2">{pest.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">Symptom: {pest.symptom}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">{pest.solution}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
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

            {/* Quick Links */}
            <div className="animate-slideInLeft" style={{animationDelay: '0.1s'}}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Crop Guide', 'Calendar', 'Farm Tracker', 'Pest Tips'].map((link) => (
                  <li key={link}>
                    <button className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Weather Updates', 'Market Prices', 'Farming Tips', 'Community Forum', 'Help Center'].map((resource) => (
                  <li key={resource}>
                    <button className="text-green-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform inline-block">
                      {resource}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3 mb-4">
                <a href="mailto:info@smartfarmer.ng" className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors text-sm group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>info@smartfarmer.ng</span>
                </a>
              </div>
              <div className="flex space-x-3">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Github, href: '#' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-green-100 text-sm text-center md:text-left">
                © 2025 Smart Farmer. All rights reserved. Built with <Heart className="w-4 h-4 inline text-red-400 animate-pulse" /> for Nigerian farmers.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-green-100">
                <button className="hover:text-white transition-colors">Privacy Policy</button>
                <span>•</span>
                <button className="hover:text-white transition-colors">Terms of Service</button>
                <span>•</span>
                <button className="hover:text-white transition-colors">Cookie Policy</button>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="mt-8 text-center">
            <p className="text-green-200 text-xs">
              Developed by <span className="font-semibold">Ajibade Tosin Francais, Omoyeni Naomi, Sandra Ogechi Ezeugonna & Tolough Nelson Aondongu</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Padding */}
      <div className="md:hidden h-20"></div>

      {/* Add Log Modal */}
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