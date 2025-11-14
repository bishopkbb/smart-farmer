// Storage utility for Smart Farmer app
// Handles all LocalStorage operations with error handling

const STORAGE_KEYS = {
  FARM_LOGS: 'smartfarmer_logs',
  USER_PREFS: 'smartfarmer_prefs',
  SETTINGS: 'smartfarmer_settings',
  ONBOARDING: 'smartfarmer_onboarding',
};

export const storage = {
  // Farm Logs Management
  saveLogs: (logs) => {
    try {
      localStorage.setItem(STORAGE_KEYS.FARM_LOGS, JSON.stringify(logs));
      return true;
    } catch (error) {
      console.error('Failed to save farm logs:', error);
      return false;
    }
  },
  
  loadLogs: () => {
    try {
      const logs = localStorage.getItem(STORAGE_KEYS.FARM_LOGS);
      return logs ? JSON.parse(logs) : [];
    } catch (error) {
      console.error('Failed to load farm logs:', error);
      return [];
    }
  },
  
  // User Preferences (Location & Farming Type)
  savePrefs: (prefs) => {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PREFS, JSON.stringify(prefs));
      return true;
    } catch (error) {
      console.error('Failed to save preferences:', error);
      return false;
    }
  },
  
  loadPrefs: () => {
    try {
      const prefs = localStorage.getItem(STORAGE_KEYS.USER_PREFS);
      return prefs ? JSON.parse(prefs) : null;
    } catch (error) {
      console.error('Failed to load preferences:', error);
      return null;
    }
  },
  
  // Settings Management
  saveSettings: (settings) => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
      return true;
    } catch (error) {
      console.error('Failed to save settings:', error);
      return false;
    }
  },
  
  loadSettings: () => {
    try {
      const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return settings ? JSON.parse(settings) : null;
    } catch (error) {
      console.error('Failed to load settings:', error);
      return null;
    }
  },
  
  // Onboarding Status
  markOnboardingComplete: () => {
    try {
      localStorage.setItem(STORAGE_KEYS.ONBOARDING, 'complete');
      return true;
    } catch (error) {
      console.error('Failed to save onboarding status:', error);
      return false;
    }
  },
  
  hasCompletedOnboarding: () => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ONBOARDING) === 'complete';
    } catch (error) {
      return false;
    }
  },
  
  // Clear specific data
  clearLogs: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.FARM_LOGS);
      return true;
    } catch (error) {
      console.error('Failed to clear logs:', error);
      return false;
    }
  },
  
  // Clear all Smart Farmer data
  clearAll: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
      return true;
    } catch (error) {
      console.error('Failed to clear all data:', error);
      return false;
    }
  },
  
  // Export all data (for backup)
  exportData: () => {
    try {
      const data = {
        logs: storage.loadLogs(),
        prefs: storage.loadPrefs(),
        settings: storage.loadSettings(),
        exportDate: new Date().toISOString(),
      };
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Failed to export data:', error);
      return null;
    }
  },
  
  // Import data (from backup)
  importData: (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.logs) storage.saveLogs(data.logs);
      if (data.prefs) storage.savePrefs(data.prefs);
      if (data.settings) storage.saveSettings(data.settings);
      return true;
    } catch (error) {
      console.error('Failed to import data:', error);
      return false;
    }
  },
};

export default storage;