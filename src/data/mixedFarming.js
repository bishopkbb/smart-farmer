// Mixed farming (crop + livestock) integration data

export const mixedFarmingSystems = [
  {
    name: 'Crop-Livestock Integration',
    description: 'Combining crop farming with livestock rearing for mutual benefits',
    benefits: [
      'Livestock provide manure for crops',
      'Crop residues feed livestock',
      'Diversified income sources',
      'Better resource utilization',
      'Reduced risk of total loss'
    ],
    examples: [
      {
        crops: ['Maize', 'Sorghum'],
        livestock: ['Cattle', 'Goats'],
        integration: 'Crop residues used as feed, manure used as fertilizer'
      },
      {
        crops: ['Rice'],
        livestock: ['Ducks', 'Fish'],
        integration: 'Ducks control pests, fish in rice paddies'
      },
      {
        crops: ['Cassava', 'Yam'],
        livestock: ['Goats', 'Pigs'],
        integration: 'Tubers for human, leaves and peels for animals'
      }
    ]
  },
  {
    name: 'Agroforestry-Livestock',
    description: 'Trees, crops, and livestock in integrated system',
    benefits: [
      'Trees provide shade and fodder',
      'Improved soil fertility',
      'Diversified products',
      'Climate resilience',
      'Sustainable system'
    ],
    examples: [
      {
        crops: ['Mango', 'Cashew'],
        livestock: ['Goats', 'Sheep'],
        integration: 'Trees provide fruits and shade, animals graze underneath'
      },
      {
        crops: ['Plantain', 'Banana'],
        livestock: ['Poultry'],
        integration: 'Poultry provide manure, trees provide shade'
      }
    ]
  },
  {
    name: 'Aquaculture-Agriculture',
    description: 'Fish farming integrated with crop production',
    benefits: [
      'Fish waste fertilizes crops',
      'Water used for irrigation',
      'Dual income streams',
      'Efficient water use',
      'Protein and food security'
    ],
    examples: [
      {
        crops: ['Vegetables', 'Rice'],
        livestock: ['Fish (Tilapia, Catfish)'],
        integration: 'Fish pond water used for irrigation, fish waste as fertilizer'
      }
    ]
  }
];

export const integratedPractices = [
  {
    practice: 'Manure Management',
    description: 'Using livestock manure to fertilize crops',
    steps: [
      'Collect manure from housing areas',
      'Compost for 2-3 months',
      'Apply to fields before planting',
      'Mix with soil for better distribution',
      'Avoid fresh manure on growing crops'
    ],
    benefits: [
      'Improved soil fertility',
      'Reduced fertilizer costs',
      'Better crop yields',
      'Waste management'
    ]
  },
  {
    practice: 'Crop Residue Utilization',
    description: 'Using crop by-products as animal feed',
    steps: [
      'Collect crop residues after harvest',
      'Dry and store properly',
      'Mix with other feeds',
      'Supplement with concentrates',
      'Ensure balanced nutrition'
    ],
    benefits: [
      'Reduced feed costs',
      'Waste reduction',
      'Year-round feed availability',
      'Improved animal nutrition'
    ]
  },
  {
    practice: 'Rotational Grazing',
    description: 'Moving livestock between crop fields',
    steps: [
      'Divide farm into sections',
      'Allow livestock to graze after harvest',
      'Move to next section',
      'Allow previous section to recover',
      'Plant crops in rested sections'
    ],
    benefits: [
      'Natural fertilization',
      'Weed control',
      'Improved soil structure',
      'Reduced feed costs'
    ]
  },
  {
    practice: 'Integrated Pest Management',
    description: 'Using livestock to control pests',
    steps: [
      'Ducks in rice fields control snails',
      'Chickens control insects in vegetable gardens',
      'Goats control weeds',
      'Monitor for overgrazing',
      'Balance livestock numbers'
    ],
    benefits: [
      'Natural pest control',
      'Reduced pesticide use',
      'Cost savings',
      'Environmental benefits'
    ]
  }
];

export const seasonalPlanning = {
  'Rainy Season (April-October)': {
    crops: [
      'Plant main crops (Maize, Rice, Sorghum)',
      'Vegetable production',
      'Tree planting'
    ],
    livestock: [
      'Grazing on fresh grass',
      'Breeding season',
      'Reduced feed supplementation',
      'Monitor for diseases'
    ],
    integration: [
      'Collect and compost manure',
      'Prepare fields with manure',
      'Use crop residues as feed',
      'Plan for dry season'
    ]
  },
  'Dry Season (November-March)': {
    crops: [
      'Irrigated vegetable production',
      'Harvest and store crops',
      'Land preparation',
      'Tree maintenance'
    ],
    livestock: [
      'Supplemental feeding required',
      'Use stored crop residues',
      'Water management critical',
      'Breeding planning'
    ],
    integration: [
      'Feed stored crop residues',
      'Apply composted manure',
      'Plan integrated activities',
      'Prepare for next season'
    ]
  }
};

export const economicBenefits = {
  incomeDiversification: [
    'Multiple income streams',
    'Reduced financial risk',
    'Year-round income',
    'Better cash flow'
  ],
  costReduction: [
    'Reduced fertilizer costs (manure)',
    'Reduced feed costs (crop residues)',
    'Natural pest control',
    'Efficient resource use'
  ],
  productivity: [
    'Higher crop yields (manure)',
    'Better animal nutrition',
    'Improved soil fertility',
    'Sustainable production'
  ]
};

export const challengesAndSolutions = [
  {
    challenge: 'Space management',
    solution: 'Plan layout carefully, use rotational systems, maximize space utilization'
  },
  {
    challenge: 'Labor requirements',
    solution: 'Train family members, use efficient practices, plan activities'
  },
  {
    challenge: 'Disease management',
    solution: 'Separate areas, good hygiene, regular health checks, vaccination'
  },
  {
    challenge: 'Feed availability',
    solution: 'Store crop residues, plan feed production, supplement when needed'
  },
  {
    challenge: 'Water management',
    solution: 'Harvest rainwater, efficient irrigation, reuse water where possible'
  }
];

