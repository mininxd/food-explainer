/**
 * Restaurant Gastronomy Knowledge Base
 * Maps visual & culinary categories to authentic restaurant dish profiles,
 * detailed taste breakdowns, aftertaste notes, and synthesized diner reviews.
 */

const FOOD_DATABASE = {
  // 1. RAMEN / NOODLES
  ramen: {
    id: 'ramen',
    food_name: 'Spicy Tonkotsu Chashu Ramen',
    cuisine: 'Japanese / Hakata Style',
    restaurant_type: 'Ramen Izakaya & Specialty Noodle House',
    menu_section: 'Chef Special Noodle Bowls',
    price_estimate: '$17.50',
    food_description: {
      summary: 'A 16-hour slow-simmered pork bone broth layered with handmade wavy noodles, melt-in-your-mouth braised pork belly (chashu), seasoned ajitsuke tamago, nori, and roasted black garlic oil.',
      taste_profile: {
        umami: 9,
        richness: 9,
        savory: 9,
        spicy: 6,
        salty: 7,
        sweet: 3,
        acidity: 2
      },
      mouthfeel: 'Velvety, deeply collagen-rich broth that coats the palate, paired with springy al dente noodles.',
      aroma: 'Toasted black sesame, smoky caramelized pork fat, and sweet scallion aromatics.'
    },
    aftertaste: {
      description: 'Leaves a long, comforting coating of savory pork collagen on the tongue, followed by a gentle, warming tingle of chili oil and a smoky garlic finish that lingers for several minutes without cloying.',
      finish_duration: 'Long & Sustained (3-5 minutes)',
      palate_sensation: 'Warm, savory, and soothingly coated'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 328,
      consensus: 'Diners overwhelmingly praise the deep richness of the broth and the addictive, lingering chili-garlic aftertaste.',
      reviews: [
        {
          reviewer: 'Kenji S. (Local Guide)',
          rating: 5,
          date: '2 days ago',
          comment: 'The broth has that thick, lip-smacking gelatin richness you only get from all-day simmering. The aftertaste has this subtle smoky garlic finish that makes you keep scooping until the bowl is bone dry.'
        },
        {
          reviewer: 'Sarah L.',
          rating: 5,
          date: '1 week ago',
          comment: 'Chashu literally dissolves on your tongue. The spicy kick is nicely balanced by the sweet pork fat. No chemical aftertaste at all, just pure savory warmth.'
        },
        {
          reviewer: 'David M.',
          rating: 4.8,
          date: '3 weeks ago',
          comment: 'Incredible depth! The egg was perfectly jammy. You definitely feel the collagen richness even 10 minutes after finishing.'
        }
      ]
    },
    suggested_pairing: 'Iced Oolong Tea or Dry Junmai Ginjo Sake',
    dietary: ['Contains Pork', 'High Protein']
  },

  // 2. PIZZA
  pizza: {
    id: 'pizza',
    food_name: 'Wood-Fired Neapolitan Margherita Pizza',
    cuisine: 'Italian (Campania)',
    restaurant_type: 'Artisanal Pizzeria & Trattoria',
    menu_section: 'Wood-Fired Pizze',
    price_estimate: '$19.00',
    food_description: {
      summary: 'San Marzano D.O.P. tomato coulis, fresh mozzarella di bufala, fragrant hand-torn sweet basil, and a drizzle of cold-pressed extra virgin olive oil atop a blistered, leopard-spotted sourdough crust.',
      taste_profile: {
        umami: 7,
        richness: 6,
        savory: 8,
        spicy: 1,
        salty: 6,
        sweet: 4,
        acidity: 6
      },
      mouthfeel: 'Light, chewy, pillowy crust with a delicate crisp edge; succulent melt of creamy cheese and vibrant tomato juices.',
      aroma: 'Charred oak wood smoke, fresh anise-like sweet basil, and earthy fermented wheat crust.'
    },
    aftertaste: {
      description: 'A remarkably bright and clean finish: the natural acidity of volcanic tomatoes cuts through the creamy buffalo mozzarella, leaving a lingering peppery warmth from the olive oil and rustic char from the wood oven.',
      finish_duration: 'Medium & Refreshing',
      palate_sensation: 'Bright, herbaceous, and crisp'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 412,
      consensus: 'Celebrated for its authentic blistered crust, natural sweet-acidic balance, and light, non-greasy aftertaste.',
      reviews: [
        {
          reviewer: 'Marco V. (Verified Foodie)',
          rating: 5,
          date: 'Yesterday',
          comment: 'You can taste the wood fire in the char! The buffalo mozzarella is milky and fresh. Unlike heavy delivery pizza, the aftertaste here is super clean with that peppery olive oil lingering.'
        },
        {
          reviewer: 'Chloe B.',
          rating: 5,
          date: '5 days ago',
          comment: 'Tomato sauce is naturally sweet without any added sugar nonsense. The crust has the perfect chew and tang from good fermentation.'
        },
        {
          reviewer: 'Anthony R.',
          rating: 4.7,
          date: '2 weeks ago',
          comment: 'Simple perfection. The sweet basil cuts through the cheese beautifully. You can easily eat an entire pie without feeling bloated.'
        }
      ]
    },
    suggested_pairing: 'Light Chianti Classico or Sparkling San Pellegrino',
    dietary: ['Vegetarian Friendly']
  },

  // 3. BURGER
  cheeseburger: {
    id: 'cheeseburger',
    food_name: 'Smoked Angus Bacon Cheeseburger',
    cuisine: 'Modern American Bistro',
    restaurant_type: 'Gastropub & Craft Burger Bar',
    menu_section: 'Prime Angus Burgers',
    price_estimate: '$18.50',
    food_description: {
      summary: 'Smashed double dry-aged Angus beef patties, thick-cut applewood smoked bacon, melted aged sharp cheddar, caramelized shallots, house dill pickles, and signature garlic-herb aioli on a toasted buttered brioche bun.',
      taste_profile: {
        umami: 9,
        richness: 9,
        savory: 9,
        spicy: 2,
        salty: 7,
        sweet: 5,
        acidity: 4
      },
      mouthfeel: 'Juicy, tender coarse-ground beef with crispy caramelized sear edges; buttery, soft brioche that cushions the hearty crunch of bacon and pickle.',
      aroma: 'Hickory wood smoke, sizzling maillard beef crust, and sweet browning butter.'
    },
    aftertaste: {
      description: 'A bold, decadent umami resonance of dry-aged beef and cheddar fat, gently tempered by the sharp dill pickle brine and sweetness of slow-cooked shallots on the back of the palate.',
      finish_duration: 'Long & Robust',
      palate_sensation: 'Rich, savory, and satisfyingly smoky'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 275,
      consensus: 'Diners love the crispy lacy patty edges and the balance struck between salty bacon smoke and sweet caramelized onions.',
      reviews: [
        {
          reviewer: 'Tyler H. (Burger Enthusiast)',
          rating: 5,
          date: '3 days ago',
          comment: 'Top 3 burgers in the city! The aged beef flavor is phenomenal. The aftertaste has this smoky bacon-cheddar note that makes your mouth water even after the last bite.'
        },
        {
          reviewer: 'Amanda G.',
          rating: 5,
          date: '1 week ago',
          comment: 'Juices dripping down your hands in the best way possible. The house pickles are essential — they balance what could otherwise be too rich.'
        },
        {
          reviewer: 'Jason K.',
          rating: 4.8,
          date: '1 month ago',
          comment: 'Brioche bun holds up surprisingly well. The garlic aioli and caramelized shallot combo is pure genius.'
        }
      ]
    },
    suggested_pairing: 'Hazy IPA or Old Fashioned Bourbon Cocktail',
    dietary: ['Contains Dairy', 'Contains Gluten']
  },

  // 4. SUSHI / SEAFOOD
  sushi: {
    id: 'sushi',
    food_name: 'Chef Selected Nigiri & Sashimi Platter',
    cuisine: 'Japanese / Edomae Style',
    restaurant_type: 'Omakase & High-End Sushi Bar',
    menu_section: 'Seasonal Raw Bar',
    price_estimate: '$34.00',
    food_description: {
      summary: 'Pristine cuts of Bluefin Otoro, King Salmon, and Hamachi lightly brushed with aged nikiri soy, served over seasoned Akazu vinegar sushi rice with freshly grated Shizuoka wasabi and pickled ginger.',
      taste_profile: {
        umami: 8,
        richness: 7,
        savory: 7,
        spicy: 3,
        salty: 5,
        sweet: 4,
        acidity: 4
      },
      mouthfeel: 'Silky, butter-soft fish that dissolves with gentle warmth; delicate grain separation in the warm sushi rice.',
      aroma: 'Oceanic freshness, sweet cedarwood, and gentle toasted rice vinegar.'
    },
    aftertaste: {
      description: 'Starts with a sweet, oceanic fat bloom on the tongue, followed by a fleeting wasabi warmth in the sinuses, ending in a crystalline, sweet-acidic rice vinegar note that leaves the mouth completely refreshed.',
      finish_duration: 'Medium & Pristine',
      palate_sensation: 'Silky, clean, and rejuvenating'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 198,
      consensus: 'Diners rave about the zero-fishiness freshness, melt-in-your-mouth otoro, and the clean, nuanced finish.',
      reviews: [
        {
          reviewer: 'Emily W. (Omakase Lover)',
          rating: 5,
          date: '4 days ago',
          comment: 'The Otoro literally melts before you can even chew. The aftertaste is so pure — no fishy odor at all, just subtle ocean sweetness and mild wasabi fragrance.'
        },
        {
          reviewer: 'Brian K.',
          rating: 5,
          date: '2 weeks ago',
          comment: 'You can tell the chef respects the fish. The rice is served at body temperature with red vinegar. Cleanest finish of any sushi spot.'
        },
        {
          reviewer: 'Lisa N.',
          rating: 4.8,
          date: '1 month ago',
          comment: 'Freshly grated real wasabi makes a world of difference compared to the horseradish paste. Elegant from start to finish.'
        }
      ]
    },
    suggested_pairing: 'Chilled Daiginjo Sake or Sencha Green Tea',
    dietary: ['Pescatarian', 'Gluten-Free upon request']
  },

  // 5. TACOS / MEXICAN
  tacos: {
    id: 'tacos',
    food_name: 'Traditional Tacos al Pastor',
    cuisine: 'Mexican / Mexico City Street Style',
    restaurant_type: 'Taquería & Mexican Cantina',
    menu_section: 'Tacos de Trompo',
    price_estimate: '$14.00 (Order of 3)',
    food_description: {
      summary: 'Thinly shaved spit-roasted pork marinated in achiote, guajillo chiles, and warm spices, topped with caramelized roasted pineapple, minced white onions, cilantro, and roasted tomatillo salsa verde on warm hand-pressed heirloom corn tortillas.',
      taste_profile: {
        umami: 7,
        richness: 6,
        savory: 8,
        spicy: 6,
        salty: 6,
        sweet: 5,
        acidity: 7
      },
      mouthfeel: 'Tender marinated pork with crispy charred edges, contrasting with the tender, earthy chew of fresh corn tortillas and the pop of pineapple juice.',
      aroma: 'Charred citrus, toasted cumin, oregano, and earthy nixtamalized corn.'
    },
    aftertaste: {
      description: 'A vibrant tango of sweet roasted pineapple sugars and tangy lime acidity cutting through the pork fat, leaving a mild, smoky guajillo chili warmth on the palate.',
      finish_duration: 'Medium & Lively',
      palate_sensation: 'Zesty, mildly spicy, and mouthwatering'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 360,
      consensus: 'Diners love the sweet pineapple contrast against the smoky spiced pork, noting its vibrant and addictive aftertaste.',
      reviews: [
        {
          reviewer: 'Carlos D. (Food Critic)',
          rating: 5,
          date: '3 days ago',
          comment: 'The trompo meat has those crispy char bits that make al pastor legendary. The pineapple juice gives an immediate sweet contrast, then the salsa verde finish kicks in.'
        },
        {
          reviewer: 'Jessica P.',
          rating: 5,
          date: '1 week ago',
          comment: 'Tortillas made to order! The aftertaste is so lively with the cilantro and lime. You will finish three and immediately want three more.'
        },
        {
          reviewer: 'Roberto M.',
          rating: 4.7,
          date: '3 weeks ago',
          comment: 'Spices are on point — you get the clove and oregano in the marinade, finished with that roasted pineapple tang.'
        }
      ]
    },
    suggested_pairing: 'Horchata, Mezcal Paloma, or Cold Mexican Lager with Lime',
    dietary: ['Dairy Free', 'Gluten Free (Corn Tortilla)']
  },

  // 6. RISOTTO / PASTA / ITALIAN
  risotto: {
    id: 'risotto',
    food_name: 'Artisanal Truffle & Wild Mushroom Risotto',
    cuisine: 'Northern Italian / Piedmontese',
    restaurant_type: 'Fine Dining Trattoria',
    menu_section: 'Primi Piatti',
    price_estimate: '$26.00',
    food_description: {
      summary: 'Creamy Carnaroli rice slowly cooked with concentrated porcini broth, wild chantrelles, finished with 24-month Parmigiano-Reggiano mantecatura and shaved winter black truffles.',
      taste_profile: {
        umami: 10,
        richness: 8,
        savory: 9,
        spicy: 1,
        salty: 6,
        sweet: 3,
        acidity: 3
      },
      mouthfeel: 'Wave-like (all’onda) creamy suspension with toothsome, al dente rice grains and meaty mushroom bites.',
      aroma: 'Earthy black truffle, browned Normandy butter, and nutty aged cheese.'
    },
    aftertaste: {
      description: 'An exceptionally opulent and lingering forest floor fragrance: deep porcini earthiness and umami cheese crystals coat the palate, ending with a warm, buttery truffle aroma.',
      finish_duration: 'Very Long (Over 5 minutes)',
      palate_sensation: 'Velvety, luxurious, and deeply savory'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 184,
      consensus: 'Universal praise for the authentic all’onda texture and the unforgettable, luxurious truffle aroma that lingers long after dining.',
      reviews: [
        {
          reviewer: 'Sebastian F. (Sommelier)',
          rating: 5,
          date: 'Yesterday',
          comment: 'The mantecatura technique here is flawless — creamy without needing heavy cream. The truffle aftertaste lingers like a fine aged Nebbiolo.'
        },
        {
          reviewer: 'Nathalie L.',
          rating: 5,
          date: '6 days ago',
          comment: 'Every grain of rice is perfectly al dente. Rich, comforting, and the porcini depth is breathtaking.'
        },
        {
          reviewer: 'Julian T.',
          rating: 4.8,
          date: '2 weeks ago',
          comment: 'Worth every penny. The fragrance hits the table before the waiter even sets the plate down.'
        }
      ]
    },
    suggested_pairing: 'Nebbiolo d’Alba or Oak-Matured Chardonnay',
    dietary: ['Vegetarian Friendly', 'Gluten Free']
  },

  // 7. PAD THAI
  padthai: {
    id: 'padthai',
    food_name: 'Royal Pad Thai Goong (Tiger Prawn)',
    cuisine: 'Thai / Central Thailand',
    restaurant_type: 'Thai Bistro & Street Kitchen',
    menu_section: 'Wok Specialties',
    price_estimate: '$18.00',
    food_description: {
      summary: 'Chewy rice noodles stir-fried in a searing wok with jumbo tiger prawns, pressed firm tofu, preserved radish, garlic chives, egg, and our house tamarind-palm sugar reduction, topped with crushed toasted peanuts and lime.',
      taste_profile: {
        umami: 8,
        richness: 6,
        savory: 8,
        spicy: 5,
        salty: 6,
        sweet: 7,
        acidity: 7
      },
      mouthfeel: 'Chewy, elastic noodles with wok hei (breath of the wok) char; succulent snap of fresh tiger prawns and satisfying nut crunch.',
      aroma: 'Toasted peanuts, caramelized tamarind, dried shrimp umami, and smokiness.'
    },
    aftertaste: {
      description: 'A brilliant harmony of sour tamarind and sweet palm sugar that stimulates salivation, followed by a roasted nuttiness and a mild dried-chili heat that fades cleanly.',
      finish_duration: 'Medium & Refreshing',
      palate_sensation: 'Tangy, nutty, and vibrant'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 245,
      consensus: 'Diners love the authentic wok smokiness and the genuine tamarind tang rather than ketchup-based sweetness.',
      reviews: [
        {
          reviewer: 'Siriporn T.',
          rating: 5,
          date: '3 days ago',
          comment: 'Authentic Thai taste! You can immediately tell they use real sour tamarind paste, not sugary shortcuts. Prawns were huge and snappy.'
        },
        {
          reviewer: 'Liam D.',
          rating: 5,
          date: '1 week ago',
          comment: 'The wok hei is incredible. The aftertaste is sweet, sour, and nutty in perfect proportions.'
        },
        {
          reviewer: 'Rachel K.',
          rating: 4.7,
          date: '3 weeks ago',
          comment: 'Squeeze the lime over everything! The acidity cuts the richness and brings out the toasted peanuts.'
        }
      ]
    },
    suggested_pairing: 'Thai Iced Tea with Condensed Milk or Singha Beer',
    dietary: ['Contains Peanuts', 'Contains Shellfish']
  },

  // 8. STEAK / FRENCH
  steak: {
    id: 'steak',
    food_name: 'Prime Ribeye Steak Frites with Café de Paris Butter',
    cuisine: 'French Brasserie',
    restaurant_type: 'Classic French Steakhouse & Bistro',
    menu_section: 'Les Viandes',
    price_estimate: '$38.00',
    food_description: {
      summary: 'A 12oz USDA Prime bone-in ribeye char-grilled to medium-rare, crowned with melting compound herb-shallot Café de Paris butter, accompanied by double-fried hand-cut crispy frites and watercress.',
      taste_profile: {
        umami: 9,
        richness: 9,
        savory: 9,
        spicy: 2,
        salty: 7,
        sweet: 2,
        acidity: 3
      },
      mouthfeel: 'Succulent, marbled beef that gives way tenderly; crispy, airy fries perfect for dragging through herb butter juices.',
      aroma: 'Charcoal smoke, sizzling rendered beef fat, thyme, tarragon, and anchovy butter.'
    },
    aftertaste: {
      description: 'Intense, lingering dry-aged beef richness with herbal nuances of tarragon and garlic butter, finished with a pleasant peppery kick from the sear crust.',
      finish_duration: 'Long & Hearty',
      palate_sensation: 'Robust, comforting, and deeply satisfying'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 310,
      consensus: 'Acclaimed for its flawless crust-to-tender ratio and the addictive herb butter aftertaste that elevates both steak and fries.',
      reviews: [
        {
          reviewer: 'Vincent C.',
          rating: 5,
          date: '5 days ago',
          comment: 'The sear was restaurant perfection — deep dark crust with a warm pink center. The compound butter melting over it is heaven.'
        },
        {
          reviewer: 'Morgan B.',
          rating: 5,
          date: '2 weeks ago',
          comment: 'Fries are crisp and golden. The savory finish lingers on your tongue for minutes after each bite.'
        },
        {
          reviewer: 'George P.',
          rating: 4.8,
          date: '1 month ago',
          comment: 'Generous portion and superb marbling. Pairs magically with a heavy French red.'
        }
      ]
    },
    suggested_pairing: 'Full-Bodied Bordeaux or Cabernet Sauvignon',
    dietary: ['High Protein', 'Gluten Free (Steak)']
  },

  // 9. DESSERT / ICE CREAM / SWEET
  dessert: {
    id: 'dessert',
    food_name: 'Artisan Tahitian Vanilla & Pistachio Gelato',
    cuisine: 'Italian (Sicily)',
    restaurant_type: 'Pasticceria & Dessert Bar',
    menu_section: 'Dolci Artigianali',
    price_estimate: '$9.50',
    food_description: {
      summary: 'Dense, slow-churned Sicilian pistachio and Tahitian vanilla bean gelato, topped with roasted Bronte pistachio crumble, flaky Maldon sea salt, and a warm Valrhona dark chocolate drizzle.',
      taste_profile: {
        umami: 2,
        richness: 7,
        savory: 3,
        spicy: 0,
        salty: 4,
        sweet: 8,
        acidity: 2
      },
      mouthfeel: 'Silky, dense churned cream that melts slowly, contrasting with crunchy toasted pistachio praline.',
      aroma: 'Floral vanilla orchid, roasted nutty pistachio, and rich roasted cocoa.'
    },
    aftertaste: {
      description: 'A soothing, cooling finish of sweet vanilla cream balanced by a distinct toasted pistachio nuttiness and a lingering touch of Maldon sea salt that prevents cloying sweetness.',
      finish_duration: 'Medium & Refreshing',
      palate_sensation: 'Cool, nutty, and sweetly balanced'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 215,
      consensus: 'Beloved for its true nutty pistachio flavor (not almond extract) and the brilliant sea salt contrast.',
      reviews: [
        {
          reviewer: 'Hannah G.',
          rating: 5,
          date: '2 days ago',
          comment: 'Real Bronte pistachios taste completely different from supermarket gelato — deep, earthy, and nutty. The sea salt touch is brilliant.'
        },
        {
          reviewer: 'Daniel S.',
          rating: 5,
          date: '1 week ago',
          comment: 'Perfect balance of sweet and salty. The texture is so dense and stretchy, true authentic gelato.'
        },
        {
          reviewer: 'Maya R.',
          rating: 4.8,
          date: '3 weeks ago',
          comment: 'A light, refreshing finish that doesn’t leave a heavy film in your mouth. Best dessert to end a heavy dinner.'
        }
      ]
    },
    suggested_pairing: 'Double Espresso or Vin Santo',
    dietary: ['Vegetarian', 'Contains Dairy & Nuts']
  },

  // 10. SALAD / HEALTHY
  salad: {
    id: 'salad',
    food_name: 'Charred Chicken Mediterranean Bowl',
    cuisine: 'Greek & Levantine',
    restaurant_type: 'Modern Mediterranean Kitchen',
    menu_section: 'Fresh Greens & Grain Bowls',
    price_estimate: '$16.50',
    food_description: {
      summary: 'Oregano-marinated char-grilled chicken breast over baby wild arugula, organic quinoa, Persian cucumbers, Kalamata olives, creamy sheep’s milk feta, pickled red onions, and lemon-herb vinaigrette.',
      taste_profile: {
        umami: 6,
        richness: 5,
        savory: 7,
        spicy: 2,
        salty: 6,
        sweet: 3,
        acidity: 8
      },
      mouthfeel: 'Crunchy cucumber and crispy arugula contrasting with warm, juicy sliced chicken and creamy, briny feta crumbles.',
      aroma: 'Fresh lemon zest, wild Greek oregano, cold-pressed olive oil, and charred herb smoke.'
    },
    aftertaste: {
      description: 'Exceptionally crisp and revitalizing: the high-acidity lemon and herb vinaigrette cleanses the palate, leaving a lingering savory briny note from sheep’s milk feta and fresh mint.',
      finish_duration: 'Short to Medium & Crisp',
      palate_sensation: 'Clean, herbaceous, and refreshing'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 164,
      consensus: 'Diners appreciate the generous chicken portion, zesty homemade dressing, and refreshing, guilt-free finish.',
      reviews: [
        {
          reviewer: 'Claire M.',
          rating: 5,
          date: 'Yesterday',
          comment: 'The lemon vinaigrette is so bright! Chicken is surprisingly juicy and has nice grill marks. Perfect lunch that gives you energy without food coma.'
        },
        {
          reviewer: 'Tom W.',
          rating: 4.8,
          date: '4 days ago',
          comment: 'Real sheep feta makes such a huge difference. The aftertaste is clean, tangy, and leaves your palate feeling light.'
        },
        {
          reviewer: 'Zoe T.',
          rating: 4.8,
          date: '2 weeks ago',
          comment: 'Arugula adds that lovely peppery bite. Freshness in every single forkful.'
        }
      ]
    },
    suggested_pairing: 'Fresh Sparkling Lemonade or Greek Assyrtiko White Wine',
    dietary: ['Gluten Free', 'High Protein', 'Keto Friendly']
  }
};

/**
 * Intelligent matcher that connects ImageNet / MobileNet vision labels
 * and visual palette cues to restaurant gastronomy profiles.
 */
function findBestFoodMatch(predictions = [], palette = null) {
  const labels = predictions.map(p => (p.className || '').toLowerCase());
  const combined = labels.join(' ');

  // Direct label mapping
  if (combined.includes('pizza')) return FOOD_DATABASE.pizza;
  if (combined.includes('cheeseburger') || combined.includes('hamburger')) return FOOD_DATABASE.cheeseburger;
  if (combined.includes('ramen') || combined.includes('noodle') || combined.includes('soup bowl') || combined.includes('consomme')) return FOOD_DATABASE.ramen;
  if (combined.includes('sushi') || combined.includes('nigiri') || combined.includes('sashimi') || combined.includes('fish') || combined.includes('seafood')) return FOOD_DATABASE.sushi;
  if (combined.includes('taco') || combined.includes('burrito') || combined.includes('guacamole') || combined.includes('tortilla')) return FOOD_DATABASE.tacos;
  if (combined.includes('risotto') || combined.includes('rice') || combined.includes('mushroom') || combined.includes('potpie')) return FOOD_DATABASE.risotto;
  if (combined.includes('pad thai') || combined.includes('wok') || combined.includes('shrimp') || combined.includes('lobster') || combined.includes('prawn')) return FOOD_DATABASE.padthai;
  if (combined.includes('steak') || combined.includes('beef') || combined.includes('meat loaf') || combined.includes('grill')) return FOOD_DATABASE.steak;
  if (combined.includes('ice cream') || combined.includes('dessert') || combined.includes('chocolate') || combined.includes('bakery') || combined.includes('confectionery')) return FOOD_DATABASE.dessert;
  if (combined.includes('salad') || combined.includes('cucumber') || combined.includes('vegetable') || combined.includes('broccoli') || combined.includes('cauliflower')) return FOOD_DATABASE.salad;

  // Fallback to palette cues if label is generic (like "plate" or "dish")
  if (palette && palette.visual_tone) {
    if (palette.visual_tone === 'rich_tomato_or_chili') return FOOD_DATABASE.pizza;
    if (palette.visual_tone === 'golden_fried_or_baked') return FOOD_DATABASE.cheeseburger;
    if (palette.visual_tone === 'fresh_herb_or_vegetable') return FOOD_DATABASE.salad;
    if (palette.visual_tone === 'deep_roasted_or_sauced') return FOOD_DATABASE.steak;
    if (palette.visual_tone === 'savory_caramelized_warm') return FOOD_DATABASE.ramen;
  }

  // Default to Ramen or Pizza
  return FOOD_DATABASE.ramen;
}

module.exports = {
  FOOD_DATABASE,
  findBestFoodMatch
};
