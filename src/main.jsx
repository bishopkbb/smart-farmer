import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { TranslationProvider } from './context/TranslationContext.jsx'
import './index.css'

// Clear old service worker caches on load
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.update();
      }
    });
    
    // Clear old caches
    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (cacheName.includes('static-resources-cache') && !cacheName.includes('v3')) {
            caches.delete(cacheName);
          }
        });
      });
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <TranslationProvider>
          <App />
        </TranslationProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>,
)