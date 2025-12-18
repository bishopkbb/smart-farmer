# Weather API Setup Guide

## Getting Live Weather Updates

Smart Farmer now supports live weather data from OpenWeatherMap API. Follow these steps to enable it:

### Step 1: Get Your Free API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Click "Sign Up" (it's free!)
3. Complete the registration
4. Go to your API keys section
5. Copy your API key

### Step 2: Add API Key to Your Project

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add your API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

3. Restart your development server

### Step 3: Verify It's Working

- The weather card on the home page will now show real-time weather data
- Weather updates automatically every 30 minutes
- If the API key is not set, the app will use mock data as fallback

### Free Tier Limits

- **60 calls per minute**
- **1,000,000 calls per month**
- More than enough for personal use!

### Troubleshooting

- If weather doesn't update, check your browser console for errors
- Make sure your API key is correct
- Verify the `.env` file is in the project root
- Restart the dev server after adding the API key

### Note

The app works perfectly fine without an API key - it will use realistic mock data. The API key is only needed for live weather updates.

