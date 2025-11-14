import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-700 mb-6 font-semibold transition-all hover:translate-x-1"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to App
        </button>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Last updated: November 12, 2025</p>
            </div>
          </div>

          <p className="text-lg text-gray-700">
            At Smart Farmer, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="prose max-w-none">
            
            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">1. Information We Collect</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smart Farmer is designed to work offline-first and respect your privacy. We collect minimal information:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Farm Data:</strong> Crop logs, planting dates, and notes you enter are stored locally on your device.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Preferences:</strong> Your selected region and farming type to personalize your experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Settings:</strong> Language preferences, notification settings, and display preferences.</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-green-800 font-semibold">
                  ✅ All data is stored locally on your device using browser storage. We do not collect or transmit your farm data to any server.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">2. How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information stored locally on your device is used to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Provide personalized crop recommendations based on your region</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Track your farm activities and remind you of important tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Display relevant pest and disease information for your crops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Maintain your preferences across app sessions</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">3. Data Storage & Security</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your data security is our priority:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Local Storage:</strong> All your farm data is stored locally in your browser's storage.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>No Cloud Backup:</strong> We do not automatically upload your data to any cloud servers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Device-Only Access:</strong> Your data is only accessible on the device where you entered it.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>User Control:</strong> You can export, delete, or clear all your data at any time.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">4. Your Rights & Control</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have complete control over your data:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Access:</strong> View all your stored data at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Modify:</strong> Edit or update your farm logs and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Delete:</strong> Remove individual logs or all data through the Sign Out feature</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Export:</strong> Download your data for backup purposes (feature coming soon)</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smart Farmer is designed to work offline. However, when you have an internet connection, we may use:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Analytics:</strong> Anonymous usage statistics to improve the app (optional and can be disabled)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Weather APIs:</strong> To fetch real-time weather data (when available)</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These services do not have access to your farm data or personal information.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Smart Farmer is intended for users aged 13 and above. We do not knowingly collect information from children under 13.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this policy.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@smartfarmer.ng" className="text-green-600 hover:underline font-semibold">
                    privacy@smartfarmer.ng
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Support:</strong>{' '}
                  <a href="mailto:support@smartfarmer.ng" className="text-green-600 hover:underline font-semibold">
                    support@smartfarmer.ng
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            By using Smart Farmer, you agree to this Privacy Policy and our{' '}
            <button className="text-green-600 hover:underline font-semibold">
              Terms of Service
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;