import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const TermsOfService = ({ onBack }) => {
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
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Terms of Service</h1>
              <p className="text-gray-600 mt-2">Last updated: November 12, 2025</p>
            </div>
          </div>

          <p className="text-lg text-gray-700">
            Welcome to Smart Farmer! By using our app, you agree to these terms. Please read them carefully.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="prose max-w-none">
            
            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Smart Farmer ("the App"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">2. Description of Service</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smart Farmer provides:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Agricultural information including crop guides, planting calendars, and pest management tips</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Farm tracking and management tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Offline-first functionality for areas with limited connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Region-specific agricultural recommendations for Nigeria</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">3. User Responsibilities</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a user of Smart Farmer, you agree to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Provide accurate information when using the App</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Use the App only for lawful purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Not attempt to reverse engineer, modify, or interfere with the App's functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Not use the App to distribute malware or harmful content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Respect intellectual property rights</span>
                </li>
              </ul>
            </div>

            {/* Section 4 - Important Disclaimer */}
            <div className="mb-10">
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">4. Disclaimer of Agricultural Advice</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>IMPORTANT:</strong> The information provided by Smart Farmer is for general educational and informational purposes only. It should not be considered professional agricultural advice.
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Always consult with qualified agricultural extension officers or agronomists for specific farming decisions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Crop recommendations may vary based on local conditions, climate changes, and other factors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>We do not guarantee specific yields, profits, or outcomes from following our recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Pest and disease treatments should be verified with local agricultural authorities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Smart Farmer is provided "as is" without warranties of any kind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>We are not liable for any crop failures, financial losses, or damages resulting from the use of this App</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>We do not guarantee uninterrupted or error-free service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>We are not responsible for data loss due to device issues or browser storage limitations</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality of Smart Farmer, including but not limited to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Text, graphics, logos, and images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Software code and design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Agricultural databases and recommendations</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Are owned by Smart Farmer and protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. User Data</h2>
              <p className="text-gray-700 leading-relaxed">
                You retain all rights to the farm data you enter into the App. By using Smart Farmer, you grant us permission to store this data locally on your device to provide the service. See our <button className="text-green-600 hover:underline font-semibold">Privacy Policy</button> for more details.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                You may stop using Smart Farmer at any time by simply closing the app and clearing your browser data. We reserve the right to modify or discontinue the service at any time without notice.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service from time to time. Continued use of the App after changes constitutes acceptance of the new terms. We will update the "Last updated" date when changes are made.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in accordance with Nigerian law.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:legal@smartfarmer.ng" className="text-blue-600 hover:underline font-semibold">
                    legal@smartfarmer.ng
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Support:</strong>{' '}
                  <a href="mailto:support@smartfarmer.ng" className="text-blue-600 hover:underline font-semibold">
                    support@smartfarmer.ng
                  </a>
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <p className="text-sm text-gray-700">
                <strong>By using Smart Farmer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
              </p>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Thank you for being part of the Smart Farmer community! 🌱
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;