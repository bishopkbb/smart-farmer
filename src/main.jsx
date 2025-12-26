import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { TranslationProvider } from './context/TranslationContext.jsx'
import './index.css'

// Clear old service worker caches on load and force update
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // Get all service worker registrations
      const registrations = await navigator.serviceWorker.getRegistrations();
      
      // Unregister all old service workers
      for (let registration of registrations) {
        await registration.unregister();
      }
      
      // Clear all caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map((cacheName) => {
            // Delete all old cache versions
            if (cacheName.includes('static-resources-cache') && !cacheName.includes('v4')) {
              return caches.delete(cacheName);
            }
            // Delete old HTML cache versions
            if (cacheName.includes('html-cache') && !cacheName.includes('v2')) {
              return caches.delete(cacheName);
            }
            // Also delete workbox caches that might be outdated
            if (cacheName.includes('workbox') || cacheName.includes('precache')) {
              return caches.delete(cacheName);
            }
            return Promise.resolve();
          })
        );
      }
      
      // Force reload to get new service worker
      if (registrations.length > 0) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error clearing service worker cache:', error);
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