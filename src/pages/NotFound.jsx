import React from 'react';
import { Home, ArrowLeft, Search, Leaf } from 'lucide-react';

const NotFound = ({ onNavigateHome, onGoBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="text-center max-w-lg animate-fadeIn">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 animate-bounce">
            404
          </div>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Leaf className="w-8 h-8 text-green-500 animate-float" />
            <Leaf className="w-6 h-6 text-emerald-500 animate-float" style={{ animationDelay: '0.2s' }} />
            <Leaf className="w-8 h-8 text-green-600 animate-float" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Oops! Looks like this crop didn't grow here. 🌱
          </p>
          <p className="text-gray-500">
            The page you're looking for might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex items-center space-x-3 text-gray-600 mb-3">
            <Search className="w-5 h-5" />
            <span className="font-semibold">Looking for something specific?</span>
          </div>
          <p className="text-sm text-gray-500">
            Try our Crop Guide, Planting Calendar, or Farm Tracker from the homepage.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onGoBack}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
          <button
            onClick={onNavigateHome}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </button>
        </div>

        {/* Help Link */}
        <div className="mt-8 text-sm text-gray-500">
          Need help?{' '}
          <a href="mailto:support@smartfarmer.ng" className="text-green-600 hover:underline font-semibold">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;