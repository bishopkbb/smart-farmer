// Weather service using OpenWeatherMap API
// Free tier: 60 calls/minute, 1,000,000 calls/month

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

// Map Nigerian regions to cities for weather lookup
const regionToCity = {
  'northeast': { lat: 11.7463, lon: 11.9607, city: 'Maiduguri' },
  'northwest': { lat: 12.0022, lon: 8.5167, city: 'Kano' },
  'northcentral': { lat: 9.0765, lon: 7.3986, city: 'Abuja' },
  'southwest': { lat: 6.5244, lon: 3.3792, city: 'Lagos' },
  'southsouth': { lat: 4.8156, lon: 7.0498, city: 'Port Harcourt' },
  'southeast': { lat: 6.4474, lon: 7.5133, city: 'Enugu' }
};

// Get weather icon based on condition
const getWeatherIcon = (condition) => {
  const iconMap = {
    'clear': '☀️',
    'clouds': '☁️',
    'rain': '🌧️',
    'drizzle': '🌦️',
    'thunderstorm': '⛈️',
    'snow': '❄️',
    'mist': '🌫️',
    'fog': '🌫️'
  };
  
  const conditionLower = condition.toLowerCase();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (conditionLower.includes(key)) {
      return icon;
    }
  }
  return '☀️';
};

// Get weather condition in readable format
const getWeatherCondition = (weatherMain) => {
  const conditionMap = {
    'Clear': 'Sunny',
    'Clouds': 'Partly Cloudy',
    'Rain': 'Rainy',
    'Drizzle': 'Light Rain',
    'Thunderstorm': 'Thunderstorm',
    'Snow': 'Snowy',
    'Mist': 'Misty',
    'Fog': 'Foggy',
    'Haze': 'Hazy'
  };
  return conditionMap[weatherMain] || weatherMain;
};

export const weatherService = {
  // Get current weather for a region
  async getCurrentWeather(region) {
    // Check if offline
    if (!navigator.onLine) {
      console.log('[Weather Service] Offline - using cached/mock data');
      return this.getMockWeather();
    }

    if (!WEATHER_API_KEY) {
      // Fallback to mock data if no API key
      return this.getMockWeather();
    }

    const location = regionToCity[region];
    if (!location) {
      return this.getMockWeather();
    }

    try {
      const response = await fetch(
        `${WEATHER_API_URL}/weather?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_API_KEY}&units=metric`,
        { cache: 'default' }
      );

      if (!response.ok) {
        throw new Error('Weather API error');
      }

      const data = await response.json();
      
      return {
        temp: `${Math.round(data.main.temp)}°C`,
        condition: getWeatherCondition(data.weather[0].main),
        icon: getWeatherIcon(data.weather[0].main.toLowerCase()),
        humidity: `${data.main.humidity}%`,
        rainfall: data.rain ? `${(data.rain['1h'] || 0).toFixed(1)}mm` : '0mm',
        windSpeed: `${(data.wind?.speed * 3.6 || 0).toFixed(1)} km/h`,
        feelsLike: `${Math.round(data.main.feels_like)}°C`,
        pressure: `${data.main.pressure} hPa`,
        visibility: data.visibility ? `${(data.visibility / 1000).toFixed(1)} km` : 'N/A',
        loading: false,
        lastUpdated: new Date().toISOString()
      };
    } catch (error) {
      console.error('Weather fetch error:', error);
      // Return mock data on error (works offline)
      return this.getMockWeather();
    }
  },

  // Get 7-day forecast
  async getForecast(region) {
    // Check if offline
    if (!navigator.onLine) {
      console.log('[Weather Service] Offline - using cached/mock forecast');
      return this.getMockForecast();
    }

    if (!WEATHER_API_KEY) {
      return this.getMockForecast();
    }

    const location = regionToCity[region];
    if (!location) {
      return this.getMockForecast();
    }

    try {
      const response = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_API_KEY}&units=metric`,
        { cache: 'default' }
      );

      if (!response.ok) {
        throw new Error('Forecast API error');
      }

      const data = await response.json();
      
      // Group forecasts by day
      const dailyForecasts = {};
      data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toLocaleDateString('en-US', { weekday: 'long' });
        
        if (!dailyForecasts[dayKey] || new Date(item.dt * 1000).getHours() === 12) {
          dailyForecasts[dayKey] = {
            day: dayKey,
            temp: `${Math.round(item.main.temp)}°C`,
            condition: getWeatherCondition(item.weather[0].main),
            icon: getWeatherIcon(item.weather[0].main.toLowerCase()),
            humidity: `${item.main.humidity}%`,
            windSpeed: `${(item.wind?.speed * 3.6 || 0).toFixed(1)} km/h`
          };
        }
      });

      return Object.values(dailyForecasts).slice(0, 7);
    } catch (error) {
      console.error('Forecast fetch error:', error);
      return this.getMockForecast();
    }
  },

  // Mock weather data for fallback
  getMockWeather() {
    const temps = [25, 26, 27, 28, 29, 30, 31, 32];
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'];
    const humidities = [70, 72, 75, 78, 80];
    
    const temp = temps[Math.floor(Math.random() * temps.length)];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    
    return {
      temp: `${temp}°C`,
      condition: condition,
      icon: getWeatherIcon(condition.toLowerCase()),
      humidity: `${humidities[Math.floor(Math.random() * humidities.length)]}%`,
      rainfall: `${Math.floor(Math.random() * 20)}mm`,
      windSpeed: `${(Math.random() * 15 + 5).toFixed(1)} km/h`,
      feelsLike: `${temp}°C`,
      pressure: `${(Math.random() * 20 + 1000).toFixed(0)} hPa`,
      visibility: `${(Math.random() * 5 + 5).toFixed(1)} km`,
      loading: false,
      lastUpdated: new Date().toISOString()
    };
  },

  // Mock forecast data
  getMockForecast() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map((day, idx) => ({
      day,
      temp: `${25 + idx}°C`,
      condition: idx % 3 === 0 ? 'Sunny' : idx % 3 === 1 ? 'Partly Cloudy' : 'Cloudy',
      icon: idx % 3 === 0 ? '☀️' : idx % 3 === 1 ? '⛅' : '☁️',
      humidity: `${70 + idx * 2}%`,
      windSpeed: `${(5 + idx * 1.5).toFixed(1)} km/h`
    }));
  }
};

