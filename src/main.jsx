import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { TranslationProvider } from './context/TranslationContext.jsx'
import './index.css'

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