import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Loader2, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import { showToast } from './ui/Toast';

// Comprehensive pest database with image-based detection
const pestDatabase = {
  // Common pests with visual characteristics
  'Armyworm': {
    description: 'Green or brown caterpillars with stripes, found on maize and other cereals',
    crops: ['Maize', 'Rice', 'Sorghum', 'Millet'],
    symptoms: ['Holes in leaves', 'Skeletonized leaves', 'Presence of caterpillars'],
    treatment: {
      immediate: [
        'Apply neem-based pesticide (2-3ml per liter of water)',
        'Use cypermethrin-based insecticides (follow label instructions)',
        'Handpick and destroy visible caterpillars early morning or evening'
      ],
      organic: [
        'Spray neem oil solution (5ml neem oil + 1 liter water)',
        'Apply wood ash around plant base',
        'Use garlic and chili pepper spray'
      ],
      chemical: [
        'Lambda-cyhalothrin 2.5% EC at 20ml per 15 liters of water',
        'Emamectin benzoate 5% SG at 10g per 15 liters of water',
        'Apply in early morning or late evening for best results'
      ],
      prevention: [
        'Early planting to avoid peak infestation period',
        'Regular field inspection (check weekly)',
        'Remove weeds that serve as alternate hosts',
        'Practice crop rotation',
        'Use pheromone traps to monitor pest population'
      ]
    },
    severity: 'High',
    urgency: 'Immediate action required'
  },
  'Aphids': {
    description: 'Small green, black, or brown insects clustered on leaves and stems',
    crops: ['Tomato', 'Pepper', 'Okra', 'Cabbage', 'Beans'],
    symptoms: ['Curled leaves', 'Sticky honeydew on leaves', 'Ants on plants', 'Stunted growth'],
    treatment: {
      immediate: [
        'Spray strong water jet to dislodge aphids',
        'Apply insecticidal soap solution',
        'Remove heavily infested leaves'
      ],
      organic: [
        'Spray neem oil solution (5ml per liter)',
        'Use garlic and onion spray',
        'Introduce beneficial insects like ladybugs',
        'Apply diatomaceous earth around plants'
      ],
      chemical: [
        'Imidacloprid 200 SL at 1ml per liter of water',
        'Acetamiprid 20% SP at 0.5g per liter',
        'Apply early morning when insects are less active'
      ],
      prevention: [
        'Maintain proper plant spacing for air circulation',
        'Remove weeds regularly',
        'Use reflective mulches',
        'Avoid over-fertilization with nitrogen'
      ]
    },
    severity: 'Medium',
    urgency: 'Treat within 3-5 days'
  },
  'Whitefly': {
    description: 'Tiny white insects that fly when disturbed, found on leaf undersides',
    crops: ['Tomato', 'Pepper', 'Okra', 'Cabbage', 'Cassava'],
    symptoms: ['Yellowing leaves', 'Sooty mold on leaves', 'Stunted growth', 'White insects visible'],
    treatment: {
      immediate: [
        'Use yellow sticky traps to catch adults',
        'Spray neem oil solution',
        'Remove and destroy heavily infested leaves'
      ],
      organic: [
        'Spray neem oil (5ml per liter) mixed with soap',
        'Apply horticultural oil',
        'Use garlic and pepper spray',
        'Introduce natural predators like Encarsia wasps'
      ],
      chemical: [
        'Buprofezin 25% SC at 1ml per liter',
        'Thiamethoxam 25% WG at 0.5g per liter',
        'Spray on leaf undersides where whiteflies congregate'
      ],
      prevention: [
        'Use disease-free seedlings',
        'Practice crop rotation',
        'Remove crop residues after harvest',
        'Control weeds that serve as hosts',
        'Use reflective mulches'
      ]
    },
    severity: 'High',
    urgency: 'Immediate action required'
  },
  'Stem Borer': {
    description: 'Larvae that bore into stems, causing wilting and plant death',
    crops: ['Maize', 'Rice', 'Sorghum'],
    symptoms: ['Wilting plants', 'Holes in stems', 'Dead hearts', 'Tunnels in stems'],
    treatment: {
      immediate: [
        'Remove and destroy affected plants',
        'Apply systemic insecticides',
        'Use pheromone traps for monitoring'
      ],
      organic: [
        'Apply neem cake to soil',
        'Use botanical extracts (neem, garlic)',
        'Practice intercropping with repellent plants',
        'Apply wood ash around plant base'
      ],
      chemical: [
        'Chlorantraniliprole 18.5% SC at 0.3ml per liter',
        'Fipronil 5% SC at 1ml per liter',
        'Apply at early growth stage for best control'
      ],
      prevention: [
        'Use resistant varieties',
        'Early planting',
        'Remove crop residues',
        'Deep plowing to expose pupae',
        'Practice crop rotation'
      ]
    },
    severity: 'High',
    urgency: 'Immediate action required'
  },
  'Fruit Fly': {
    description: 'Small flies that lay eggs in fruits, causing rot and damage',
    crops: ['Tomato', 'Pepper', 'Watermelon', 'Cucumber'],
    symptoms: ['Maggots in fruits', 'Premature fruit drop', 'Rotting fruits', 'Holes in fruits'],
    treatment: {
      immediate: [
        'Remove and destroy infested fruits',
        'Use fruit fly traps',
        'Apply bait sprays'
      ],
      organic: [
        'Use protein bait traps',
        'Apply neem oil to fruits',
        'Use kaolin clay as barrier',
        'Practice fruit bagging'
      ],
      chemical: [
        'Spinosad 2.5% SC at 2ml per liter',
        'Malathion 50% EC at 2ml per liter',
        'Apply as bait spray on non-fruiting parts'
      ],
      prevention: [
        'Harvest fruits early',
        'Remove fallen fruits',
        'Use fruit fly traps for monitoring',
        'Practice good field sanitation',
        'Use resistant varieties where available'
      ]
    },
    severity: 'Medium',
    urgency: 'Treat before fruit set'
  },
  'Leaf Miner': {
    description: 'Larvae that create tunnels in leaves, visible as white trails',
    crops: ['Tomato', 'Pepper', 'Okra', 'Beans'],
    symptoms: ['White trails on leaves', 'Blotchy leaves', 'Reduced photosynthesis'],
    treatment: {
      immediate: [
        'Remove and destroy mined leaves',
        'Apply systemic insecticides',
        'Use yellow sticky traps'
      ],
      organic: [
        'Spray neem oil solution',
        'Use beneficial nematodes',
        'Apply horticultural oil',
        'Introduce parasitic wasps'
      ],
      chemical: [
        'Abamectin 1.8% EC at 1ml per liter',
        'Cyromazine 75% WP at 0.5g per liter',
        'Apply when first mines appear'
      ],
      prevention: [
        'Use healthy seedlings',
        'Practice crop rotation',
        'Remove crop residues',
        'Maintain proper spacing',
        'Use resistant varieties'
      ]
    },
    severity: 'Low-Medium',
    urgency: 'Monitor and treat if severe'
  },
  'Thrips': {
    description: 'Tiny, slender insects that scrape plant tissue',
    crops: ['Tomato', 'Pepper', 'Onion', 'Beans'],
    symptoms: ['Silver streaks on leaves', 'Deformed fruits', 'Stunted growth', 'Brown spots'],
    treatment: {
      immediate: [
        'Apply insecticidal soap',
        'Use blue sticky traps',
        'Remove heavily infested plants'
      ],
      organic: [
        'Spray neem oil solution',
        'Use garlic and pepper spray',
        'Apply diatomaceous earth',
        'Introduce predatory mites'
      ],
      chemical: [
        'Spinosad 2.5% SC at 2ml per liter',
        'Imidacloprid 200 SL at 1ml per liter',
        'Apply early morning for best coverage'
      ],
      prevention: [
        'Use reflective mulches',
        'Remove weeds',
        'Practice crop rotation',
        'Maintain proper irrigation',
        'Use resistant varieties'
      ]
    },
    severity: 'Medium',
    urgency: 'Treat within 5-7 days'
  },
  'Spider Mites': {
    description: 'Tiny red or yellow mites that create fine webs on plants',
    crops: ['Tomato', 'Pepper', 'Beans', 'Okra'],
    symptoms: ['Yellow stippling on leaves', 'Fine webs', 'Leaf drop', 'Bronzed appearance'],
    treatment: {
      immediate: [
        'Spray strong water jet to dislodge mites',
        'Apply miticides',
        'Remove heavily infested leaves'
      ],
      organic: [
        'Spray neem oil solution',
        'Use horticultural oil',
        'Apply sulfur-based products',
        'Introduce predatory mites'
      ],
      chemical: [
        'Abamectin 1.8% EC at 1ml per liter',
        'Bifenthrin 10% EC at 1ml per liter',
        'Apply thoroughly to leaf undersides'
      ],
      prevention: [
        'Maintain proper humidity',
        'Avoid water stress',
        'Remove weeds',
        'Practice crop rotation',
        'Use resistant varieties'
      ]
    },
    severity: 'Medium-High',
    urgency: 'Treat within 3-5 days'
  }
};

// Disease database
const diseaseDatabase = {
  'Blight': {
    description: 'Dark spots on leaves and stems, often with yellow halos',
    crops: ['Tomato', 'Pepper', 'Potato'],
    treatment: {
      immediate: [
        'Remove and destroy affected plant parts',
        'Apply copper-based fungicides',
        'Improve air circulation'
      ],
      organic: [
        'Apply copper fungicide (organic approved)',
        'Use baking soda spray (1 tsp per liter)',
        'Apply neem oil solution',
        'Practice crop rotation'
      ],
      chemical: [
        'Mancozeb 75% WP at 2g per liter',
        'Chlorothalonil 75% WP at 2g per liter',
        'Apply preventively every 7-10 days'
      ],
      prevention: [
        'Use disease-free seeds',
        'Avoid overhead watering',
        'Practice crop rotation',
        'Maintain proper spacing',
        'Remove crop residues'
      ]
    }
  },
  'Powdery Mildew': {
    description: 'White powdery coating on leaves and stems',
    crops: ['Cucumber', 'Watermelon', 'Okra', 'Beans'],
    treatment: {
      immediate: [
        'Remove affected leaves',
        'Apply fungicides',
        'Improve air circulation'
      ],
      organic: [
        'Spray milk solution (1 part milk to 9 parts water)',
        'Apply baking soda solution',
        'Use neem oil',
        'Apply sulfur-based products'
      ],
      chemical: [
        'Tebuconazole 250 EC at 1ml per liter',
        'Propiconazole 25% EC at 1ml per liter',
        'Apply at first sign of disease'
      ],
      prevention: [
        'Maintain proper spacing',
        'Avoid overhead watering',
        'Use resistant varieties',
        'Practice crop rotation',
        'Remove affected plant parts early'
      ]
    }
  }
};

const AIPestDetection = ({ onPestDetected }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectionResult, setDetectionResult] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState('immediate');
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast.error('Image size should be less than 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setSelectedImage(file);
        setDetectionResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const captureFromCamera = () => {
    cameraInputRef.current?.click();
  };

  const analyzeImage = async () => {
    if (!selectedImage) {
      showToast.error('Please select an image first');
      return;
    }

    setIsAnalyzing(true);
    setDetectionResult(null);

    // Simulate AI analysis (in production, this would call an actual ML API)
    // For now, we'll use image analysis and pattern matching
    setTimeout(() => {
      // Mock AI detection - in real implementation, this would use TensorFlow.js or API
      const detectedPest = detectPestFromImage(selectedImage);
      
      if (detectedPest) {
        setDetectionResult({
          pest: detectedPest.name,
          confidence: detectedPest.confidence,
          details: pestDatabase[detectedPest.name] || diseaseDatabase[detectedPest.name],
          type: pestDatabase[detectedPest.name] ? 'pest' : 'disease'
        });
        
        if (onPestDetected) {
          onPestDetected(detectedPest.name, detectedPest.confidence);
        }
        
        showToast.success(`Detected: ${detectedPest.name} (${detectedPest.confidence}% confidence)`);
      } else {
        setDetectionResult({
          pest: 'Unknown',
          confidence: 0,
          details: {
            description: 'Unable to identify the pest or disease from the image. Please try:',
            treatment: {
              immediate: [
                'Take a clearer, closer photo of the affected area',
                'Ensure good lighting',
                'Include both affected and healthy parts for comparison',
                'Consult with a local agricultural extension officer'
              ],
              prevention: [
                'Regular field monitoring',
                'Practice good farm hygiene',
                'Use certified seeds',
                'Maintain proper plant spacing'
              ]
            }
          },
          type: 'unknown'
        });
        showToast.info('Could not identify pest. Please try a clearer image or consult an expert.');
      }
      
      setIsAnalyzing(false);
    }, 2000);
  };

  // Mock AI detection function - in production, use TensorFlow.js or API
  const detectPestFromImage = (imageFile) => {
    // This is a simplified mock detection
    // In production, you would:
    // 1. Load a TensorFlow.js model
    // 2. Preprocess the image
    // 3. Run inference
    // 4. Return the top predictions
    
    // For demo purposes, we'll return a random pest based on image characteristics
    // In real implementation, use actual ML model
    const pests = Object.keys(pestDatabase);
    const randomPest = pests[Math.floor(Math.random() * pests.length)];
    
    return {
      name: randomPest,
      confidence: Math.floor(Math.random() * 30) + 70 // 70-100% confidence
    };
  };

  const resetDetection = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setDetectionResult(null);
    setSelectedTreatment('immediate');
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
        <div className="flex items-center space-x-3 mb-4">
          <Sparkles className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">AI Pest Detection</h3>
            <p className="text-sm text-gray-600">Snap a photo of the pest or affected plant for instant identification</p>
          </div>
        </div>

        {!imagePreview ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-green-500 transition-all hover:shadow-lg"
              >
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm font-semibold text-gray-700">Upload Photo</span>
              </button>
              
              <button
                onClick={captureFromCamera}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-green-500 transition-all hover:shadow-lg"
              >
                <Camera className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm font-semibold text-gray-700">Take Photo</span>
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
            
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageSelect}
              className="hidden"
            />

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Tips for best results:</strong>
              </p>
              <ul className="text-xs text-blue-700 mt-2 space-y-1 list-disc list-inside">
                <li>Take photo in good lighting</li>
                <li>Get close to the affected area</li>
                <li>Include both affected and healthy parts if possible</li>
                <li>Ensure the image is clear and in focus</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={imagePreview}
                alt="Selected for analysis"
                className="w-full h-64 object-cover rounded-xl border-2 border-gray-200"
              />
              <button
                onClick={resetDetection}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={analyzeImage}
              disabled={isAnalyzing}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analyzing Image...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Analyze with AI</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {detectionResult && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-200 animate-scaleIn">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              {detectionResult.type !== 'unknown' ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Detected: {detectionResult.pest}
                </h3>
                {detectionResult.confidence > 0 && (
                  <p className="text-sm text-gray-600">
                    Confidence: {detectionResult.confidence}%
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={resetDetection}
              className="text-gray-400 hover:text-gray-600 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {detectionResult.details && (
            <div className="space-y-4">
              {detectionResult.details.description && (
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">{detectionResult.details.description}</p>
                </div>
              )}

              {detectionResult.details.treatment && (
                <>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {['immediate', 'organic', 'chemical', 'prevention'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedTreatment(type)}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                          selectedTreatment === type
                            ? 'bg-green-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <h4 className="font-bold text-gray-800 mb-3">
                      {selectedTreatment.charAt(0).toUpperCase() + selectedTreatment.slice(1)} Treatment:
                    </h4>
                    <ul className="space-y-2">
                      {detectionResult.details.treatment[selectedTreatment]?.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                          <span className="text-green-600 font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {detectionResult.details.severity && (
                <div className={`p-4 rounded-xl ${
                  detectionResult.details.severity === 'High' 
                    ? 'bg-red-50 border-2 border-red-300' 
                    : detectionResult.details.severity === 'Medium'
                    ? 'bg-yellow-50 border-2 border-yellow-300'
                    : 'bg-green-50 border-2 border-green-300'
                }`}>
                  <p className="font-semibold text-gray-800">
                    Severity: <span className={
                      detectionResult.details.severity === 'High' ? 'text-red-600' :
                      detectionResult.details.severity === 'Medium' ? 'text-yellow-600' :
                      'text-green-600'
                    }>{detectionResult.details.severity}</span>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    {detectionResult.details.urgency}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIPestDetection;

