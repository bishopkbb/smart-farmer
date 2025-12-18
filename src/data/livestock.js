// Comprehensive livestock data for Nigerian farmers

export const livestockTypes = [
  {
    name: 'Cattle',
    icon: '🐄',
    category: 'Ruminants',
    breeds: [
      {
        name: 'White Fulani',
        characteristics: 'Large, white with black points, good milk production',
        suitability: 'All regions, especially North',
        weight: '400-600kg',
        milkYield: '8-12 liters/day',
        gestation: '9 months'
      },
      {
        name: 'Red Bororo',
        characteristics: 'Reddish-brown, hardy, good for meat',
        suitability: 'Northern regions',
        weight: '350-500kg',
        milkYield: '5-8 liters/day',
        gestation: '9 months'
      },
      {
        name: 'N\'Dama',
        characteristics: 'Small, trypanotolerant, good for humid regions',
        suitability: 'Southern regions',
        weight: '250-350kg',
        milkYield: '3-5 liters/day',
        gestation: '9 months'
      }
    ],
    housing: {
      space: '15-20 sq meters per animal',
      requirements: [
        'Well-ventilated shed',
        'Dry, clean floor',
        'Access to clean water',
        'Shade from sun',
        'Fencing for security'
      ]
    },
    feeding: {
      daily: [
        'Fresh grass or hay: 8-10kg',
        'Concentrate feed: 2-3kg',
        'Clean water: 40-60 liters',
        'Mineral supplements'
      ],
      tips: [
        'Feed twice daily (morning and evening)',
        'Ensure constant access to clean water',
        'Provide salt lick',
        'Rotate grazing areas',
        'Supplement with legumes during dry season'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Foot and Mouth Disease',
          symptoms: 'Blisters on mouth and feet, lameness',
          treatment: 'Vaccination, isolation, veterinary care',
          prevention: 'Regular vaccination, quarantine new animals'
        },
        {
          name: 'Brucellosis',
          symptoms: 'Abortion, reduced milk production',
          treatment: 'Antibiotics, culling infected animals',
          prevention: 'Vaccination, test and cull program'
        },
        {
          name: 'Tick-borne diseases',
          symptoms: 'Fever, anemia, weight loss',
          treatment: 'Acaricides, antibiotics',
          prevention: 'Regular tick control, pasture management'
        }
      ],
      vaccination: [
        'Foot and Mouth: Every 6 months',
        'Anthrax: Annually',
        'Brucellosis: Once (heifers)',
        'Blackleg: Annually'
      ]
    },
    breeding: {
      age: '15-18 months for first breeding',
      cycle: '21 days',
      signs: 'Restlessness, mounting, clear discharge',
      gestation: '9 months',
      care: [
        'Separate pregnant cows 2 months before calving',
        'Provide extra nutrition',
        'Clean calving area',
        'Monitor for complications'
      ]
    },
    management: {
      daily: [
        'Check health and behavior',
        'Provide fresh feed and water',
        'Clean housing area',
        'Check for signs of illness'
      ],
      weekly: [
        'Inspect hooves',
        'Check body condition',
        'Monitor weight',
        'Clean feeding equipment'
      ],
      monthly: [
        'Deworming',
        'Tick control',
        'Health check',
        'Record keeping'
      ]
    },
    economics: {
      initialCost: '₦150,000 - ₦500,000 per animal',
      feedCost: '₦15,000 - ₦25,000 per month',
      milkValue: '₦500 - ₦800 per liter',
      meatValue: '₦1,200 - ₦1,800 per kg',
      profitMargin: '30-40% with good management'
    }
  },
  {
    name: 'Goats',
    icon: '🐐',
    category: 'Small Ruminants',
    breeds: [
      {
        name: 'West African Dwarf',
        characteristics: 'Small, hardy, good for meat and milk',
        suitability: 'All regions',
        weight: '20-30kg',
        milkYield: '0.5-1 liter/day',
        gestation: '5 months'
      },
      {
        name: 'Red Sokoto',
        characteristics: 'Reddish-brown, good meat quality',
        suitability: 'Northern regions',
        weight: '25-40kg',
        milkYield: '0.5-1.5 liters/day',
        gestation: '5 months'
      },
      {
        name: 'Sahel',
        characteristics: 'Large, white, good for meat',
        suitability: 'Northern regions',
        weight: '40-60kg',
        milkYield: '1-2 liters/day',
        gestation: '5 months'
      }
    ],
    housing: {
      space: '2-3 sq meters per animal',
      requirements: [
        'Raised floor (30cm above ground)',
        'Good ventilation',
        'Dry bedding',
        'Secure fencing',
        'Shelter from rain'
      ]
    },
    feeding: {
      daily: [
        'Fresh grass or browse: 3-4kg',
        'Concentrate: 0.5-1kg',
        'Clean water: 5-8 liters',
        'Mineral supplements'
      ],
      tips: [
        'Allow browsing on shrubs and trees',
        'Provide salt lick',
        'Feed kitchen waste (avoid toxic plants)',
        'Ensure clean water always available',
        'Supplement during dry season'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Peste des Petits Ruminants (PPR)',
          symptoms: 'Fever, diarrhea, respiratory issues',
          treatment: 'Vaccination, supportive care',
          prevention: 'Annual vaccination'
        },
        {
          name: 'Parasitic worms',
          symptoms: 'Weight loss, diarrhea, anemia',
          treatment: 'Deworming medication',
          prevention: 'Regular deworming every 3 months'
        },
        {
          name: 'Foot rot',
          symptoms: 'Lameness, foul smell from hooves',
          treatment: 'Foot trimming, antibiotics',
          prevention: 'Keep housing dry, regular hoof trimming'
        }
      ],
      vaccination: [
        'PPR: Annually',
        'Anthrax: Annually',
        'Tetanus: Annually'
      ]
    },
    breeding: {
      age: '8-12 months for first breeding',
      cycle: '17-21 days',
      signs: 'Tail wagging, bleating, restlessness',
      gestation: '5 months',
      care: [
        'Separate pregnant does 1 month before kidding',
        'Provide extra nutrition',
        'Clean kidding area',
        'Assist if needed during kidding'
      ]
    },
    management: {
      daily: [
        'Check health',
        'Provide feed and water',
        'Clean housing',
        'Observe behavior'
      ],
      weekly: [
        'Check hooves',
        'Monitor body condition',
        'Inspect for parasites'
      ],
      monthly: [
        'Deworming',
        'Health check',
        'Record keeping'
      ]
    },
    economics: {
      initialCost: '₦15,000 - ₦50,000 per animal',
      feedCost: '₦3,000 - ₦5,000 per month',
      milkValue: '₦600 - ₦1,000 per liter',
      meatValue: '₦2,000 - ₦3,000 per kg',
      profitMargin: '40-50% with good management'
    }
  },
  {
    name: 'Sheep',
    icon: '🐑',
    category: 'Small Ruminants',
    breeds: [
      {
        name: 'West African Dwarf',
        characteristics: 'Small, hardy, good for meat',
        suitability: 'All regions',
        weight: '25-35kg',
        milkYield: '0.3-0.5 liters/day',
        gestation: '5 months'
      },
      {
        name: 'Uda',
        characteristics: 'Large, white with black head, good meat',
        suitability: 'Northern regions',
        weight: '40-60kg',
        milkYield: '0.5-1 liter/day',
        gestation: '5 months'
      },
      {
        name: 'Balami',
        characteristics: 'Large, white, excellent meat quality',
        suitability: 'Northern regions',
        weight: '50-70kg',
        milkYield: '0.5-1.5 liters/day',
        gestation: '5 months'
      }
    ],
    housing: {
      space: '2-3 sq meters per animal',
      requirements: [
        'Raised floor',
        'Good ventilation',
        'Dry bedding',
        'Secure fencing',
        'Shelter from rain'
      ]
    },
    feeding: {
      daily: [
        'Fresh grass: 3-4kg',
        'Concentrate: 0.5-1kg',
        'Clean water: 5-8 liters',
        'Mineral supplements'
      ],
      tips: [
        'Prefer grazing over browsing',
        'Provide salt lick',
        'Feed quality hay during dry season',
        'Ensure clean water always available',
        'Supplement with legumes'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'PPR',
          symptoms: 'Fever, diarrhea, respiratory issues',
          treatment: 'Vaccination, supportive care',
          prevention: 'Annual vaccination'
        },
        {
          name: 'Internal parasites',
          symptoms: 'Weight loss, diarrhea, anemia',
          treatment: 'Deworming',
          prevention: 'Regular deworming every 3 months'
        },
        {
          name: 'Foot rot',
          symptoms: 'Lameness, foul smell',
          treatment: 'Foot trimming, antibiotics',
          prevention: 'Keep housing dry'
        }
      ],
      vaccination: [
        'PPR: Annually',
        'Anthrax: Annually',
        'Tetanus: Annually'
      ]
    },
    breeding: {
      age: '8-12 months',
      cycle: '17 days',
      signs: 'Restlessness, mounting',
      gestation: '5 months',
      care: [
        'Separate pregnant ewes',
        'Extra nutrition',
        'Clean lambing area'
      ]
    },
    management: {
      daily: [
        'Health check',
        'Feed and water',
        'Clean housing'
      ],
      weekly: [
        'Hoof check',
        'Body condition',
        'Parasite inspection'
      ],
      monthly: [
        'Deworming',
        'Health check',
        'Records'
      ]
    },
    economics: {
      initialCost: '₦20,000 - ₦60,000 per animal',
      feedCost: '₦3,000 - ₦5,000 per month',
      milkValue: '₦600 - ₦1,000 per liter',
      meatValue: '₦2,000 - ₦3,000 per kg',
      profitMargin: '35-45% with good management'
    }
  },
  {
    name: 'Poultry (Chickens)',
    icon: '🐔',
    category: 'Poultry',
    breeds: [
      {
        name: 'Local (Nigerian)',
        characteristics: 'Hardy, disease resistant, good for meat and eggs',
        suitability: 'All regions',
        weight: '1.5-2.5kg',
        eggProduction: '60-100 eggs/year',
        incubation: '21 days'
      },
      {
        name: 'Broilers',
        characteristics: 'Fast growing, good for meat',
        suitability: 'All regions',
        weight: '2-3kg (6-8 weeks)',
        eggProduction: 'Not for egg production',
        incubation: '21 days'
      },
      {
        name: 'Layers',
        characteristics: 'High egg production',
        suitability: 'All regions',
        weight: '1.5-2kg',
        eggProduction: '250-300 eggs/year',
        incubation: '21 days'
      }
    ],
    housing: {
      space: '0.3-0.5 sq meters per bird',
      requirements: [
        'Well-ventilated coop',
        'Raised floor or deep litter',
        'Nesting boxes (for layers)',
        'Perches',
        'Secure from predators',
        'Access to outdoor run'
      ]
    },
    feeding: {
      daily: [
        'Starter feed (0-6 weeks): Ad libitum',
        'Grower feed (6-18 weeks): 80-100g per bird',
        'Layer feed (18+ weeks): 100-120g per bird',
        'Clean water: Always available',
        'Grit and calcium supplements'
      ],
      tips: [
        'Feed 2-3 times daily',
        'Provide constant access to water',
        'Use feeders to reduce waste',
        'Supplement with kitchen scraps',
        'Provide greens and insects when possible'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Newcastle Disease',
          symptoms: 'Respiratory issues, nervous signs, high mortality',
          treatment: 'Vaccination, supportive care',
          prevention: 'Regular vaccination (every 3 months)'
        },
        {
          name: 'Fowl Pox',
          symptoms: 'Lesions on comb, wattles, face',
          treatment: 'Vaccination, supportive care',
          prevention: 'Vaccination at 6-8 weeks'
        },
        {
          name: 'Coccidiosis',
          symptoms: 'Bloody diarrhea, weakness',
          treatment: 'Anticoccidial drugs',
          prevention: 'Good hygiene, medicated feed'
        }
      ],
      vaccination: [
        'Newcastle: Every 3 months',
        'Fowl Pox: Once at 6-8 weeks',
        'Gumboro: At 2-3 weeks',
        'Marek\'s: Day 1 (hatchery)'
      ]
    },
    breeding: {
      age: '20-24 weeks for first eggs',
      cycle: 'Daily (layers)',
      signs: 'Nesting behavior, egg laying',
      incubation: '21 days',
      care: [
        'Provide nesting boxes',
        'Collect eggs daily',
        'Maintain proper lighting (14-16 hours)',
        'Keep nesting area clean'
      ]
    },
    management: {
      daily: [
        'Check health and behavior',
        'Provide feed and water',
        'Collect eggs (layers)',
        'Clean water containers',
        'Observe for signs of illness'
      ],
      weekly: [
        'Deep clean housing',
        'Check for parasites',
        'Monitor egg production',
        'Inspect equipment'
      ],
      monthly: [
        'Vaccination schedule',
        'Health check',
        'Record keeping',
        'Equipment maintenance'
      ]
    },
    economics: {
      initialCost: '₦500 - ₦2,000 per bird',
      feedCost: '₦150 - ₦300 per bird per month',
      eggValue: '₦50 - ₦100 per egg',
      meatValue: '₦1,500 - ₦3,000 per bird',
      profitMargin: '50-60% with good management'
    }
  },
  {
    name: 'Pigs',
    icon: '🐷',
    category: 'Swine',
    breeds: [
      {
        name: 'Local (Nigerian)',
        characteristics: 'Hardy, disease resistant, good for meat',
        suitability: 'All regions',
        weight: '60-100kg',
        gestation: '3 months, 3 weeks, 3 days'
      },
      {
        name: 'Large White',
        characteristics: 'Large, white, good meat quality',
        suitability: 'All regions',
        weight: '200-300kg',
        gestation: '114 days'
      },
      {
        name: 'Landrace',
        characteristics: 'Long body, good for bacon',
        suitability: 'All regions',
        weight: '200-280kg',
        gestation: '114 days'
      }
    ],
    housing: {
      space: '3-5 sq meters per pig',
      requirements: [
        'Concrete or raised floor',
        'Good drainage',
        'Wallow area for cooling',
        'Separate areas for feeding and sleeping',
        'Secure fencing',
        'Shade from sun'
      ]
    },
    feeding: {
      daily: [
        'Starter feed (piglets): Ad libitum',
        'Grower feed: 2-3kg per pig',
        'Breeder feed: 2.5-3.5kg per pig',
        'Clean water: 10-15 liters per pig',
        'Kitchen waste (well-cooked)'
      ],
      tips: [
        'Feed 2-3 times daily',
        'Provide constant access to water',
        'Avoid feeding raw meat',
        'Supplement with greens',
        'Use feed troughs to reduce waste'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'African Swine Fever',
          symptoms: 'High fever, red skin, high mortality',
          treatment: 'No effective treatment, prevention only',
          prevention: 'Strict biosecurity, avoid contact with wild pigs'
        },
        {
          name: 'Porcine Respiratory Disease',
          symptoms: 'Coughing, difficulty breathing',
          treatment: 'Antibiotics, improve ventilation',
          prevention: 'Good housing, vaccination'
        },
        {
          name: 'Parasites',
          symptoms: 'Weight loss, poor growth',
          treatment: 'Deworming medication',
          prevention: 'Regular deworming, clean housing'
        }
      ],
      vaccination: [
        'Erysipelas: Annually',
        'Parvovirus: Before breeding',
        'Deworming: Every 3 months'
      ]
    },
    breeding: {
      age: '6-8 months for first breeding',
      cycle: '21 days',
      signs: 'Restlessness, mounting, standing heat',
      gestation: '114 days (3 months, 3 weeks, 3 days)',
      care: [
        'Separate pregnant sows',
        'Provide extra nutrition',
        'Clean farrowing area',
        'Assist during farrowing if needed'
      ]
    },
    management: {
      daily: [
        'Health check',
        'Feed and water',
        'Clean housing',
        'Observe behavior'
      ],
      weekly: [
        'Deep cleaning',
        'Check body condition',
        'Monitor growth'
      ],
      monthly: [
        'Deworming',
        'Health check',
        'Record keeping'
      ]
    },
    economics: {
      initialCost: '₦15,000 - ₦50,000 per pig',
      feedCost: '₦8,000 - ₦15,000 per month',
      meatValue: '₦1,500 - ₦2,500 per kg',
      profitMargin: '40-50% with good management'
    }
  },
  {
    name: 'Rabbits',
    icon: '🐰',
    category: 'Small Animals',
    breeds: [
      {
        name: 'New Zealand White',
        characteristics: 'White, good for meat',
        suitability: 'All regions',
        weight: '4-5kg',
        gestation: '30 days'
      },
      {
        name: 'California',
        characteristics: 'White with black points',
        suitability: 'All regions',
        weight: '3.5-4.5kg',
        gestation: '30 days'
      },
      {
        name: 'Local (Nigerian)',
        characteristics: 'Hardy, small, good for meat',
        suitability: 'All regions',
        weight: '2-3kg',
        gestation: '30 days'
      }
    ],
    housing: {
      space: '0.5-1 sq meter per rabbit',
      requirements: [
        'Wire mesh cages (raised)',
        'Good ventilation',
        'Dry, clean floor',
        'Nesting box for does',
        'Protection from predators and weather'
      ]
    },
    feeding: {
      daily: [
        'Fresh grass or hay: Ad libitum',
        'Concentrate pellets: 100-150g',
        'Clean water: Always available',
        'Fresh vegetables (carrots, cabbage)'
      ],
      tips: [
        'Feed twice daily',
        'Provide constant access to water',
        'Avoid sudden diet changes',
        'Provide hay for fiber',
        'Supplement with greens'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Snuffles (Pasteurellosis)',
          symptoms: 'Sneezing, nasal discharge',
          treatment: 'Antibiotics, improve ventilation',
          prevention: 'Good hygiene, reduce stress'
        },
        {
          name: 'Coccidiosis',
          symptoms: 'Diarrhea, weight loss',
          treatment: 'Anticoccidial drugs',
          prevention: 'Clean housing, medicated feed'
        },
        {
          name: 'Mites',
          symptoms: 'Hair loss, scratching',
          treatment: 'Acaricides',
          prevention: 'Regular cleaning, check new rabbits'
        }
      ],
      vaccination: [
        'No routine vaccinations required',
        'Focus on good hygiene and management'
      ]
    },
    breeding: {
      age: '5-6 months for first breeding',
      cycle: 'Variable',
      signs: 'Restlessness, mounting',
      gestation: '30 days',
      care: [
        'Separate pregnant does',
        'Provide nesting box',
        'Extra nutrition',
        'Monitor during kindling'
      ]
    },
    management: {
      daily: [
        'Health check',
        'Feed and water',
        'Clean cages',
        'Check for kits'
      ],
      weekly: [
        'Deep cleaning',
        'Check body condition',
        'Inspect for health issues'
      ],
      monthly: [
        'Health check',
        'Record keeping',
        'Breeding records'
      ]
    },
    economics: {
      initialCost: '₦3,000 - ₦8,000 per rabbit',
      feedCost: '₦1,500 - ₦2,500 per month',
      meatValue: '₦2,000 - ₦3,000 per kg',
      profitMargin: '50-60% with good management'
    }
  },
  {
    name: 'Ducks',
    icon: '🦆',
    category: 'Poultry',
    breeds: [
      {
        name: 'Muscovy',
        characteristics: 'Large, good for meat, less noisy',
        suitability: 'All regions',
        weight: '3-5kg',
        eggProduction: '60-100 eggs/year',
        incubation: '35 days'
      },
      {
        name: 'Pekin',
        characteristics: 'White, good for meat and eggs',
        suitability: 'All regions',
        weight: '2.5-4kg',
        eggProduction: '150-200 eggs/year',
        incubation: '28 days'
      },
      {
        name: 'Khaki Campbell',
        characteristics: 'Excellent egg layers',
        suitability: 'All regions',
        weight: '2-3kg',
        eggProduction: '250-300 eggs/year',
        incubation: '28 days'
      }
    ],
    housing: {
      space: '0.5-1 sq meter per bird',
      requirements: [
        'Water access for swimming',
        'Shelter from rain and predators',
        'Nesting boxes',
        'Secure fencing',
        'Access to pond or water container'
      ]
    },
    feeding: {
      daily: [
        'Layer feed: 120-150g per bird',
        'Clean water: Always available',
        'Greens and vegetables',
        'Insects and small fish (if available)'
      ],
      tips: [
        'Provide constant access to water',
        'Feed 2-3 times daily',
        'Supplement with kitchen scraps',
        'Allow access to pond or water for swimming',
        'Provide grit for digestion'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Duck Plague',
          symptoms: 'High mortality, diarrhea, nasal discharge',
          treatment: 'Vaccination, supportive care',
          prevention: 'Vaccination at 2-3 weeks'
        },
        {
          name: 'Botulism',
          symptoms: 'Paralysis, weakness',
          treatment: 'Antitoxin, supportive care',
          prevention: 'Keep water clean, remove dead animals'
        },
        {
          name: 'Aspergillosis',
          symptoms: 'Respiratory issues, weakness',
          treatment: 'Antifungal medication',
          prevention: 'Keep bedding dry, good ventilation'
        }
      ],
      vaccination: [
        'Duck Plague: At 2-3 weeks',
        'Newcastle: Every 3 months',
        'Avian Influenza: As recommended'
      ]
    },
    breeding: {
      age: '20-24 weeks for first eggs',
      cycle: 'Daily (layers)',
      signs: 'Nesting behavior, egg laying',
      incubation: '28-35 days depending on breed',
      care: [
        'Provide nesting boxes',
        'Collect eggs daily',
        'Maintain proper lighting',
        'Keep nesting area clean'
      ]
    },
    management: {
      daily: [
        'Check health and behavior',
        'Provide feed and water',
        'Collect eggs',
        'Clean water containers',
        'Observe for signs of illness'
      ],
      weekly: [
        'Deep clean housing',
        'Check for parasites',
        'Monitor egg production',
        'Inspect equipment'
      ],
      monthly: [
        'Vaccination schedule',
        'Health check',
        'Record keeping'
      ]
    },
    economics: {
      initialCost: '₦1,000 - ₦3,000 per bird',
      feedCost: '₦200 - ₦400 per bird per month',
      eggValue: '₦60 - ₦120 per egg',
      meatValue: '₦2,000 - ₦4,000 per bird',
      profitMargin: '45-55% with good management'
    }
  },
  {
    name: 'Turkeys',
    icon: '🦃',
    category: 'Poultry',
    breeds: [
      {
        name: 'Broad Breasted White',
        characteristics: 'Large, fast growing, good for meat',
        suitability: 'All regions',
        weight: '8-15kg (males), 5-8kg (females)',
        eggProduction: '80-100 eggs/year',
        incubation: '28 days'
      },
      {
        name: 'Bronze',
        characteristics: 'Hardy, good for meat',
        suitability: 'All regions',
        weight: '10-18kg (males), 6-10kg (females)',
        eggProduction: '60-80 eggs/year',
        incubation: '28 days'
      },
      {
        name: 'Local (Nigerian)',
        characteristics: 'Hardy, disease resistant',
        suitability: 'All regions',
        weight: '5-10kg (males), 3-6kg (females)',
        eggProduction: '50-70 eggs/year',
        incubation: '28 days'
      }
    ],
    housing: {
      space: '1-2 sq meters per bird',
      requirements: [
        'Well-ventilated coop',
        'Raised floor or deep litter',
        'Nesting boxes',
        'Perches',
        'Secure from predators',
        'Access to outdoor run'
      ]
    },
    feeding: {
      daily: [
        'Starter feed (0-8 weeks): Ad libitum',
        'Grower feed (8-16 weeks): 200-300g per bird',
        'Breeder feed (16+ weeks): 250-350g per bird',
        'Clean water: Always available',
        'Grit and calcium supplements'
      ],
      tips: [
        'Feed 2-3 times daily',
        'Provide constant access to water',
        'Use feeders to reduce waste',
        'Supplement with greens',
        'Provide adequate space for feeding'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Blackhead Disease',
          symptoms: 'Yellow droppings, listlessness',
          treatment: 'Antibiotics, supportive care',
          prevention: 'Keep separate from chickens, good hygiene'
        },
        {
          name: 'Newcastle Disease',
          symptoms: 'Respiratory issues, nervous signs',
          treatment: 'Vaccination, supportive care',
          prevention: 'Regular vaccination every 3 months'
        },
        {
          name: 'Fowl Pox',
          symptoms: 'Lesions on head and body',
          treatment: 'Vaccination, supportive care',
          prevention: 'Vaccination at 6-8 weeks'
        }
      ],
      vaccination: [
        'Newcastle: Every 3 months',
        'Fowl Pox: Once at 6-8 weeks',
        'Blackhead: Preventive medication'
      ]
    },
    breeding: {
      age: '28-32 weeks for first breeding',
      cycle: 'Seasonal (spring/summer)',
      signs: 'Strutting, gobbling, nesting behavior',
      incubation: '28 days',
      care: [
        'Provide nesting boxes',
        'Collect eggs daily',
        'Maintain proper lighting',
        'Keep nesting area clean'
      ]
    },
    management: {
      daily: [
        'Check health and behavior',
        'Provide feed and water',
        'Collect eggs',
        'Clean water containers',
        'Observe for signs of illness'
      ],
      weekly: [
        'Deep clean housing',
        'Check for parasites',
        'Monitor egg production',
        'Inspect equipment'
      ],
      monthly: [
        'Vaccination schedule',
        'Health check',
        'Record keeping'
      ]
    },
    economics: {
      initialCost: '₦2,000 - ₦5,000 per bird',
      feedCost: '₦500 - ₦1,000 per bird per month',
      eggValue: '₦100 - ₦200 per egg',
      meatValue: '₦5,000 - ₦15,000 per bird',
      profitMargin: '40-50% with good management'
    }
  },
  {
    name: 'Guinea Fowl',
    icon: '🐦',
    category: 'Poultry',
    breeds: [
      {
        name: 'Helmeted Guinea Fowl',
        characteristics: 'Hardy, good for meat and eggs',
        suitability: 'All regions',
        weight: '1.5-2kg',
        eggProduction: '80-120 eggs/year',
        incubation: '26-28 days'
      },
      {
        name: 'Local (Nigerian)',
        characteristics: 'Very hardy, disease resistant',
        suitability: 'All regions',
        weight: '1-1.5kg',
        eggProduction: '60-100 eggs/year',
        incubation: '26-28 days'
      }
    ],
    housing: {
      space: '0.5-1 sq meter per bird',
      requirements: [
        'Secure coop (they can fly)',
        'Raised floor or deep litter',
        'Nesting boxes',
        'Perches',
        'Protection from predators',
        'Access to outdoor run'
      ]
    },
    feeding: {
      daily: [
        'Layer feed: 100-120g per bird',
        'Clean water: Always available',
        'Greens and vegetables',
        'Insects (they forage well)',
        'Grit supplements'
      ],
      tips: [
        'Allow free-range foraging when possible',
        'Feed 2 times daily',
        'Provide constant access to water',
        'Supplement with kitchen scraps',
        'They are excellent foragers'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Newcastle Disease',
          symptoms: 'Respiratory issues, nervous signs',
          treatment: 'Vaccination, supportive care',
          prevention: 'Regular vaccination every 3 months'
        },
        {
          name: 'Fowl Pox',
          symptoms: 'Lesions on head and body',
          treatment: 'Vaccination, supportive care',
          prevention: 'Vaccination at 6-8 weeks'
        },
        {
          name: 'Parasites',
          symptoms: 'Weight loss, poor growth',
          treatment: 'Deworming, external parasite control',
          prevention: 'Regular deworming, clean housing'
        }
      ],
      vaccination: [
        'Newcastle: Every 3 months',
        'Fowl Pox: Once at 6-8 weeks'
      ]
    },
    breeding: {
      age: '20-24 weeks for first eggs',
      cycle: 'Seasonal (rainy season)',
      signs: 'Nesting behavior, egg laying',
      incubation: '26-28 days',
      care: [
        'Provide nesting boxes',
        'Collect eggs daily',
        'Keep nesting area clean',
        'They are good mothers if allowed to hatch'
      ]
    },
    management: {
      daily: [
        'Check health and behavior',
        'Provide feed and water',
        'Collect eggs',
        'Observe for signs of illness'
      ],
      weekly: [
        'Deep clean housing',
        'Check for parasites',
        'Monitor egg production'
      ],
      monthly: [
        'Vaccination schedule',
        'Health check',
        'Record keeping'
      ]
    },
    economics: {
      initialCost: '₦1,500 - ₦3,000 per bird',
      feedCost: '₦200 - ₦350 per bird per month',
      eggValue: '₦80 - ₦150 per egg',
      meatValue: '₦2,500 - ₦4,000 per bird',
      profitMargin: '50-60% with good management'
    }
  },
  {
    name: 'Fish (Aquaculture)',
    icon: '🐟',
    category: 'Aquaculture',
    breeds: [
      {
        name: 'Catfish (Clarias)',
        characteristics: 'Hardy, fast growing, good for meat',
        suitability: 'All regions',
        weight: '1-2kg (harvest size)',
        growthTime: '4-6 months',
        waterType: 'Freshwater'
      },
      {
        name: 'Tilapia',
        characteristics: 'Fast growing, good for meat',
        suitability: 'All regions',
        weight: '0.5-1kg (harvest size)',
        growthTime: '4-5 months',
        waterType: 'Freshwater'
      },
      {
        name: 'Mudfish',
        characteristics: 'Very hardy, can survive low oxygen',
        suitability: 'All regions',
        weight: '0.5-1.5kg (harvest size)',
        growthTime: '5-7 months',
        waterType: 'Freshwater'
      }
    ],
    housing: {
      space: '1000-2000 fish per cubic meter (depending on size)',
      requirements: [
        'Concrete or earthen pond',
        'Water depth: 1-1.5 meters',
        'Water quality management',
        'Aeration system',
        'Feeding platform',
        'Drainage system',
        'Protection from predators'
      ]
    },
    feeding: {
      daily: [
        'Commercial fish feed: 3-5% of body weight',
        'Feed 2-3 times daily',
        'Supplement with kitchen waste (well-processed)',
        'Monitor feeding response'
      ],
      tips: [
        'Feed at same times daily',
        'Adjust feed based on water temperature',
        'Remove uneaten feed after 30 minutes',
        'Provide adequate aeration',
        'Monitor water quality regularly'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Bacterial Infections',
          symptoms: 'Ulcers, fin rot, lethargy',
          treatment: 'Antibiotics, water treatment',
          prevention: 'Good water quality, proper stocking density'
        },
        {
          name: 'Parasites',
          symptoms: 'Excessive mucus, scratching, weight loss',
          treatment: 'Antiparasitic medication',
          prevention: 'Quarantine new fish, good water quality'
        },
        {
          name: 'Fungal Infections',
          symptoms: 'White cotton-like growth',
          treatment: 'Antifungal medication, salt bath',
          prevention: 'Good water quality, reduce stress'
        }
      ],
      vaccination: [
        'No routine vaccinations',
        'Focus on water quality and biosecurity'
      ]
    },
    breeding: {
      age: '6-8 months for first breeding',
      cycle: 'Continuous (warm water)',
      signs: 'Spawning behavior, nest building',
      incubation: '24-48 hours (hatching)',
      care: [
        'Provide spawning areas',
        'Separate breeding stock',
        'Monitor water quality',
        'Protect fry from adults'
      ]
    },
    management: {
      daily: [
        'Check water quality (pH, temperature, oxygen)',
        'Feed fish',
        'Observe fish behavior',
        'Check for dead fish',
        'Monitor water level'
      ],
      weekly: [
        'Test water parameters',
        'Partial water change (10-20%)',
        'Clean feeding platform',
        'Check equipment'
      ],
      monthly: [
        'Full water quality test',
        'Harvest and restock',
        'Record keeping',
        'Equipment maintenance'
      ]
    },
    economics: {
      initialCost: '₦50,000 - ₦200,000 (pond setup)',
      feedCost: '₦15,000 - ₦30,000 per 1000 fish per month',
      fingerlingCost: '₦10 - ₦30 per fingerling',
      meatValue: '₦800 - ₦1,500 per kg',
      profitMargin: '40-50% with good management'
    }
  },
  {
    name: 'Snails',
    icon: '🐌',
    category: 'Small Animals',
    breeds: [
      {
        name: 'Giant African Land Snail',
        characteristics: 'Large, fast growing, good for meat',
        suitability: 'All regions',
        weight: '150-200g (harvest size)',
        growthTime: '6-8 months',
        shellType: 'Large, brown'
      },
      {
        name: 'Achatina Achatina',
        characteristics: 'Very large, high meat yield',
        suitability: 'Southern regions',
        weight: '200-300g (harvest size)',
        growthTime: '8-10 months',
        shellType: 'Large, striped'
      }
    ],
    housing: {
      space: '50-100 snails per square meter',
      requirements: [
        'Enclosed pen or container',
        'Moist soil substrate (10-15cm deep)',
        'Cover to maintain humidity',
        'Protection from direct sun',
        'Good ventilation',
        'Secure lid (they can escape)'
      ]
    },
    feeding: {
      daily: [
        'Fresh vegetables: Cabbage, lettuce, cucumber',
        'Fruits: Pawpaw, banana, plantain',
        'Calcium source: Eggshells, limestone',
        'Clean water: Shallow container',
        'Avoid salt and citrus'
      ],
      tips: [
        'Feed in evening (they are nocturnal)',
        'Remove uneaten food daily',
        'Provide constant calcium source',
        'Maintain high humidity (80-90%)',
        'Keep substrate moist but not wet'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Shell Damage',
          symptoms: 'Cracked or broken shell',
          treatment: 'Isolate, provide extra calcium',
          prevention: 'Handle carefully, provide adequate calcium'
        },
        {
          name: 'Dehydration',
          symptoms: 'Retracted into shell, inactive',
          treatment: 'Increase humidity, provide water',
          prevention: 'Maintain proper humidity levels'
        },
        {
          name: 'Parasites',
          symptoms: 'Weight loss, inactivity',
          treatment: 'Clean environment, isolate affected snails',
          prevention: 'Good hygiene, quarantine new snails'
        }
      ],
      vaccination: [
        'No vaccinations required',
        'Focus on good management and hygiene'
      ]
    },
    breeding: {
      age: '6-8 months for first breeding',
      cycle: 'Continuous (warm, humid conditions)',
      signs: 'Mating behavior, egg laying',
      incubation: '14-21 days (in soil)',
      care: [
        'Provide nesting areas with moist soil',
        'Protect eggs from disturbance',
        'Maintain proper humidity',
        'Separate hatchlings from adults'
      ]
    },
    management: {
      daily: [
        'Check humidity levels',
        'Provide fresh food',
        'Clean water containers',
        'Observe snail activity',
        'Remove dead snails'
      ],
      weekly: [
        'Deep clean housing',
        'Check substrate moisture',
        'Inspect for health issues',
        'Record keeping'
      ],
      monthly: [
        'Harvest mature snails',
        'Separate by size',
        'Health check',
        'Equipment maintenance'
      ]
    },
    economics: {
      initialCost: '₦50 - ₦200 per snail',
      feedCost: '₦500 - ₦1,000 per 100 snails per month',
      meatValue: '₦1,500 - ₦3,000 per kg',
      profitMargin: '60-70% with good management'
    }
  },
  {
    name: 'Grasscutter',
    icon: '🐀',
    category: 'Small Animals',
    breeds: [
      {
        name: 'Greater Cane Rat',
        characteristics: 'Large, good for meat, herbivorous',
        suitability: 'All regions',
        weight: '3-5kg (harvest size)',
        growthTime: '8-10 months',
        gestation: '5 months'
      },
      {
        name: 'Local (Nigerian)',
        characteristics: 'Hardy, disease resistant',
        suitability: 'All regions',
        weight: '2-4kg (harvest size)',
        growthTime: '7-9 months',
        gestation: '5 months'
      }
    ],
    housing: {
      space: '1-2 sq meters per animal',
      requirements: [
        'Secure concrete or wire mesh pen',
        'Raised floor (30cm above ground)',
        'Good ventilation',
        'Shelter from rain and sun',
        'Nesting box',
        'Feeding and watering equipment'
      ]
    },
    feeding: {
      daily: [
        'Fresh grass: Ad libitum',
        'Concentrate feed: 100-150g',
        'Fresh vegetables: Cabbage, lettuce',
        'Clean water: Always available',
        'Mineral supplements'
      ],
      tips: [
        'Feed twice daily',
        'Provide constant access to water',
        'Feed fresh grass in evening',
        'Supplement with kitchen waste',
        'Ensure adequate fiber in diet'
      ]
    },
    health: {
      commonDiseases: [
        {
          name: 'Respiratory Infections',
          symptoms: 'Sneezing, nasal discharge, difficulty breathing',
          treatment: 'Antibiotics, improve ventilation',
          prevention: 'Good ventilation, clean housing'
        },
        {
          name: 'Diarrhea',
          symptoms: 'Watery droppings, dehydration',
          treatment: 'Antibiotics, rehydration',
          prevention: 'Clean feed and water, avoid sudden diet changes'
        },
        {
          name: 'Parasites',
          symptoms: 'Weight loss, poor growth',
          treatment: 'Deworming medication',
          prevention: 'Regular deworming, clean housing'
        }
      ],
      vaccination: [
        'No routine vaccinations',
        'Focus on good management and biosecurity'
      ]
    },
    breeding: {
      age: '6-8 months for first breeding',
      cycle: 'Continuous',
      signs: 'Mating behavior, nesting',
      gestation: '5 months',
      care: [
        'Separate pregnant females',
        'Provide nesting box',
        'Extra nutrition',
        'Monitor during birth'
      ]
    },
    management: {
      daily: [
        'Check health and behavior',
        'Provide feed and water',
        'Clean housing',
        'Observe for signs of illness'
      ],
      weekly: [
        'Deep cleaning',
        'Check body condition',
        'Inspect for health issues'
      ],
      monthly: [
        'Deworming',
        'Health check',
        'Record keeping'
      ]
    },
    economics: {
      initialCost: '₦5,000 - ₦15,000 per animal',
      feedCost: '₦2,000 - ₦4,000 per animal per month',
      meatValue: '₦2,500 - ₦4,000 per kg',
      profitMargin: '50-60% with good management'
    }
  }
];

export const getLivestockByName = (name) => {
  return livestockTypes.find(livestock => livestock.name === name);
};

export const getLivestockByCategory = (category) => {
  return livestockTypes.filter(livestock => livestock.category === category);
};

