/**
 * Restaurant Gastronomy Knowledge Base
 * Maps visual & culinary categories to authentic restaurant dish profiles,
 * detailed taste breakdowns, aftertaste notes, and synthesized diner reviews.
 * Includes 30 premier international restaurant dishes.
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
      taste_profile: { umami: 9, richness: 9, savory: 9, spicy: 6, salty: 7, sweet: 3, acidity: 2 },
      mouthfeel: 'Velvety, deeply collagen-rich broth that coats the palate, paired with springy al dente noodles.',
      aroma: 'Toasted black sesame, smoky caramelized pork fat, and sweet scallion aromatics.'
    },
    aftertaste: {
      description: 'Leaves a long, comforting coating of savory pork collagen on the tongue, followed by a gentle, warming tingle of chili oil and a smoky garlic finish that lingers for several minutes without cloying.',
      finish_duration: 'Long & Sustained (3–5 minutes)',
      palate_sensation: 'Warm, savory, and soothingly coated'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 328,
      consensus: 'Diners overwhelmingly praise the deep richness of the broth and the addictive, lingering chili-garlic aftertaste.',
      reviews: [
        { reviewer: 'Kenji S. (Local Guide)', rating: 5, date: '2 days ago', comment: 'The broth has that thick, lip-smacking gelatin richness you only get from all-day simmering. The aftertaste has this subtle smoky garlic finish that makes you keep scooping until the bowl is bone dry.' },
        { reviewer: 'Sarah L.', rating: 5, date: '1 week ago', comment: 'Chashu literally dissolves on your tongue. The spicy kick is nicely balanced by the sweet pork fat. No chemical aftertaste at all, just pure savory warmth.' },
        { reviewer: 'David M.', rating: 4.8, date: '3 weeks ago', comment: 'Incredible depth! The egg was perfectly jammy. You definitely feel the collagen richness even 10 minutes after finishing.' }
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
      taste_profile: { umami: 7, richness: 6, savory: 8, spicy: 1, salty: 6, sweet: 4, acidity: 6 },
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
        { reviewer: 'Marco V. (Verified Foodie)', rating: 5, date: 'Yesterday', comment: 'You can taste the wood fire in the char! The buffalo mozzarella is milky and fresh. Unlike heavy delivery pizza, the aftertaste here is super clean with that peppery olive oil lingering.' },
        { reviewer: 'Chloe B.', rating: 5, date: '5 days ago', comment: 'Tomato sauce is naturally sweet without any added sugar nonsense. The crust has the perfect chew and tang from good fermentation.' },
        { reviewer: 'Anthony R.', rating: 4.7, date: '2 weeks ago', comment: 'Simple perfection. The sweet basil cuts through the cheese beautifully. You can easily eat an entire pie without feeling bloated.' }
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
      taste_profile: { umami: 9, richness: 9, savory: 9, spicy: 2, salty: 7, sweet: 5, acidity: 4 },
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
        { reviewer: 'Tyler H. (Burger Enthusiast)', rating: 5, date: '3 days ago', comment: 'Top 3 burgers in the city! The aged beef flavor is phenomenal. The aftertaste has this smoky bacon-cheddar note that makes your mouth water even after the last bite.' },
        { reviewer: 'Amanda G.', rating: 5, date: '1 week ago', comment: 'Juices dripping down your hands in the best way possible. The house pickles are essential — they balance what could otherwise be too rich.' },
        { reviewer: 'Jason K.', rating: 4.8, date: '1 month ago', comment: 'Brioche bun holds up surprisingly well. The garlic aioli and caramelized shallot combo is pure genius.' }
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
      taste_profile: { umami: 8, richness: 7, savory: 7, spicy: 3, salty: 5, sweet: 4, acidity: 4 },
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
        { reviewer: 'Emily W. (Omakase Lover)', rating: 5, date: '4 days ago', comment: 'The Otoro literally melts before you can even chew. The aftertaste is so pure — no fishy odor at all, just subtle ocean sweetness and mild wasabi fragrance.' },
        { reviewer: 'Brian K.', rating: 5, date: '2 weeks ago', comment: 'You can tell the chef respects the fish. The rice is served at body temperature with red vinegar. Cleanest finish of any sushi spot.' },
        { reviewer: 'Lisa N.', rating: 4.8, date: '1 month ago', comment: 'Freshly grated real wasabi makes a world of difference compared to the horseradish paste. Elegant from start to finish.' }
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
      taste_profile: { umami: 7, richness: 6, savory: 8, spicy: 6, salty: 6, sweet: 5, acidity: 7 },
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
        { reviewer: 'Carlos D. (Food Critic)', rating: 5, date: '3 days ago', comment: 'The trompo meat has those crispy char bits that make al pastor legendary. The pineapple juice gives an immediate sweet contrast, then the salsa verde finish kicks in.' },
        { reviewer: 'Jessica P.', rating: 5, date: '1 week ago', comment: 'Tortillas made to order! The aftertaste is so lively with the cilantro and lime. You will finish three and immediately want three more.' },
        { reviewer: 'Roberto M.', rating: 4.7, date: '3 weeks ago', comment: 'Spices are on point — you get the clove and oregano in the marinade, finished with that roasted pineapple tang.' }
      ]
    },
    suggested_pairing: 'Horchata, Mezcal Paloma, or Cold Mexican Lager with Lime',
    dietary: ['Dairy Free', 'Gluten Free (Corn Tortilla)']
  },

  // 6. RISOTTO / ITALIAN
  risotto: {
    id: 'risotto',
    food_name: 'Artisanal Truffle & Wild Mushroom Risotto',
    cuisine: 'Northern Italian / Piedmontese',
    restaurant_type: 'Fine Dining Trattoria',
    menu_section: 'Primi Piatti',
    price_estimate: '$26.00',
    food_description: {
      summary: 'Creamy Carnaroli rice slowly cooked with concentrated porcini broth, wild chantrelles, finished with 24-month Parmigiano-Reggiano mantecatura and shaved winter black truffles.',
      taste_profile: { umami: 10, richness: 8, savory: 9, spicy: 1, salty: 6, sweet: 3, acidity: 3 },
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
        { reviewer: 'Sebastian F. (Sommelier)', rating: 5, date: 'Yesterday', comment: 'The mantecatura technique here is flawless — creamy without needing heavy cream. The truffle aftertaste lingers like a fine aged Nebbiolo.' },
        { reviewer: 'Nathalie L.', rating: 5, date: '6 days ago', comment: 'Every grain of rice is perfectly al dente. Rich, comforting, and the porcini depth is breathtaking.' }
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
      taste_profile: { umami: 8, richness: 6, savory: 8, spicy: 5, salty: 6, sweet: 7, acidity: 7 },
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
      consensus: 'Diners love the authentic wok smokiness and genuine tamarind tang.',
      reviews: [
        { reviewer: 'Siriporn T.', rating: 5, date: '3 days ago', comment: 'Authentic Thai taste! You can immediately tell they use real sour tamarind paste, not sugary shortcuts.' },
        { reviewer: 'Liam D.', rating: 5, date: '1 week ago', comment: 'The wok hei is incredible. The aftertaste is sweet, sour, and nutty in perfect proportions.' }
      ]
    },
    suggested_pairing: 'Thai Iced Tea or Cold Singha Lager',
    dietary: ['Contains Peanuts', 'Contains Shellfish']
  },

  // 8. STEAK FRITES
  steak: {
    id: 'steak',
    food_name: 'Prime Ribeye Steak Frites with Café de Paris Butter',
    cuisine: 'French Brasserie',
    restaurant_type: 'Classic French Steakhouse & Bistro',
    menu_section: 'Les Viandes',
    price_estimate: '$38.00',
    food_description: {
      summary: 'A 12oz USDA Prime bone-in ribeye char-grilled to medium-rare, crowned with melting compound herb-shallot Café de Paris butter, accompanied by double-fried hand-cut crispy frites and watercress.',
      taste_profile: { umami: 9, richness: 9, savory: 9, spicy: 2, salty: 7, sweet: 2, acidity: 3 },
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
      consensus: 'Acclaimed for its flawless crust-to-tender ratio and the addictive herb butter aftertaste.',
      reviews: [
        { reviewer: 'Vincent C.', rating: 5, date: '5 days ago', comment: 'The sear was restaurant perfection — deep dark crust with a warm pink center. The compound butter melting over it is heaven.' }
      ]
    },
    suggested_pairing: 'Full-Bodied Bordeaux or Cabernet Sauvignon',
    dietary: ['High Protein', 'Gluten Free (Steak)']
  },

  // 9. DESSERT
  dessert: {
    id: 'dessert',
    food_name: 'Artisan Tahitian Vanilla & Pistachio Gelato',
    cuisine: 'Italian (Sicily)',
    restaurant_type: 'Pasticceria & Dessert Bar',
    menu_section: 'Dolci Artigianali',
    price_estimate: '$9.50',
    food_description: {
      summary: 'Dense, slow-churned Sicilian pistachio and Tahitian vanilla bean gelato, topped with roasted Bronte pistachio crumble, flaky Maldon sea salt, and a warm Valrhona dark chocolate drizzle.',
      taste_profile: { umami: 2, richness: 7, savory: 3, spicy: 0, salty: 4, sweet: 8, acidity: 2 },
      mouthfeel: 'Silky, dense churned cream that melts slowly, contrasting with crunchy toasted pistachio praline.',
      aroma: 'Floral vanilla orchid, roasted nutty pistachio, and rich roasted cocoa.'
    },
    aftertaste: {
      description: 'A soothing, cooling finish of sweet vanilla cream balanced by a distinct toasted pistachio nuttiness and a lingering touch of Maldon sea salt.',
      finish_duration: 'Medium & Refreshing',
      palate_sensation: 'Cool, nutty, and sweetly balanced'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 215,
      consensus: 'Beloved for its true nutty pistachio flavor and the brilliant sea salt contrast.',
      reviews: [
        { reviewer: 'Hannah G.', rating: 5, date: '2 days ago', comment: 'Real Bronte pistachios taste completely different from supermarket gelato — deep, earthy, and nutty.' }
      ]
    },
    suggested_pairing: 'Double Espresso or Vin Santo',
    dietary: ['Vegetarian', 'Contains Dairy & Nuts']
  },

  // 10. SALAD
  salad: {
    id: 'salad',
    food_name: 'Charred Chicken Mediterranean Bowl',
    cuisine: 'Greek & Levantine',
    restaurant_type: 'Modern Mediterranean Kitchen',
    menu_section: 'Fresh Greens & Grain Bowls',
    price_estimate: '$16.50',
    food_description: {
      summary: 'Oregano-marinated char-grilled chicken breast over baby wild arugula, organic quinoa, Persian cucumbers, Kalamata olives, creamy sheep’s milk feta, pickled red onions, and lemon-herb vinaigrette.',
      taste_profile: { umami: 6, richness: 5, savory: 7, spicy: 2, salty: 6, sweet: 3, acidity: 8 },
      mouthfeel: 'Crunchy cucumber and crispy arugula contrasting with warm, juicy sliced chicken and creamy, briny feta crumbles.',
      aroma: 'Fresh lemon zest, wild Greek oregano, cold-pressed olive oil, and charred herb smoke.'
    },
    aftertaste: {
      description: 'Exceptionally crisp and revitalizing: the high-acidity lemon and herb vinaigrette cleanses the palate, leaving a lingering savory briny note from sheep’s milk feta.',
      finish_duration: 'Short to Medium & Crisp',
      palate_sensation: 'Clean, herbaceous, and refreshing'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 164,
      consensus: 'Diners appreciate the generous chicken portion, zesty homemade dressing, and refreshing, guilt-free finish.',
      reviews: [
        { reviewer: 'Claire M.', rating: 5, date: 'Yesterday', comment: 'The lemon vinaigrette is so bright! Chicken is surprisingly juicy and has nice grill marks.' }
      ]
    },
    suggested_pairing: 'Fresh Sparkling Lemonade or Greek Assyrtiko White Wine',
    dietary: ['Gluten Free', 'High Protein', 'Keto Friendly']
  },

  // 11. DIM SUM
  dimsum: {
    id: 'dimsum',
    food_name: 'Steamed Cantonese Siu Mai & Har Gow Duo',
    cuisine: 'Cantonese / Hong Kong',
    restaurant_type: 'Traditional Dim Sum Teahouse',
    menu_section: 'Handcrafted Steam Baskets',
    price_estimate: '$12.50',
    food_description: {
      summary: 'Hand-pleated crystal prawn dumplings (Har Gow) and open-topped Berkshire pork & black mushroom dumplings (Siu Mai) topped with orange tobiko caviar, served with aged black vinegar and chili crisp.',
      taste_profile: { umami: 8, richness: 6, savory: 8, spicy: 3, salty: 6, sweet: 4, acidity: 3 },
      mouthfeel: 'Delicate translucent skin yielding to crunchy sweet prawn meat; juicy, coarse-ground pork bursting with mushroom broth.',
      aroma: 'Fragrant bamboo steaming basket, toasted sesame oil, and ginger.'
    },
    aftertaste: {
      description: 'Pure, sweet oceanic prawn finish balanced by earthy shiitake notes, with a clean ginger warmth and subtle acidity from the dipping vinegar.',
      finish_duration: 'Medium & Delicate',
      palate_sensation: 'Succulent, savory, and light'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 280,
      consensus: 'Hailed for the snappy freshness of the prawns and the delicate, non-doughy dumpling wrappers.',
      reviews: [
        { reviewer: 'Wai-Lun C.', rating: 5, date: '3 days ago', comment: 'The Har Gow skin is paper thin yet holds together perfectly. Prawns snap with freshness.' },
        { reviewer: 'Mei K.', rating: 5, date: '1 week ago', comment: 'Authentic Hong Kong standard. The Siu Mai juices burst as you bite down.' }
      ]
    },
    suggested_pairing: 'Hot Jasmine Tea or Pu-erh Fermented Tea',
    dietary: ['Contains Shellfish', 'Contains Pork']
  },

  // 12. PHO
  pho: {
    id: 'pho',
    food_name: 'Traditional Hanoi Beef Pho Bo',
    cuisine: 'Vietnamese / Northern Hanoi',
    restaurant_type: 'Vietnamese Noodle Parlor',
    menu_section: 'Specialty Pho Bowls',
    price_estimate: '$16.00',
    food_description: {
      summary: 'A 24-hour beef marrow broth simmered with charred star anise, cinnamon quills, cloves, and ginger, poured over silky flat rice noodles, rare thinly sliced Angus eye of round, braised brisket, Thai basil, and lime.',
      taste_profile: { umami: 9, richness: 7, savory: 8, spicy: 3, salty: 6, sweet: 4, acidity: 4 },
      mouthfeel: 'Crystal-clear, aromatic broth that warms the chest; silky, slip-through flat rice noodles and tender beef.',
      aroma: 'Charred star anise, sweet Saigon cinnamon, roasted onions, and fresh torn Thai basil.'
    },
    aftertaste: {
      description: 'An intricate, soothing spiced warmth: sweet star anise and cinnamon notes bloom on the back of the palate, cleansed by the citrusy burst of fresh lime juice.',
      finish_duration: 'Long & Comforting',
      palate_sensation: 'Soul-warming, aromatic, and restorative'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 340,
      consensus: 'Acclaimed for the clarity and depth of the broth without relying on heavy sodium or MSG.',
      reviews: [
        { reviewer: 'Nguyen T.', rating: 5, date: '2 days ago', comment: 'The broth is pure gold — clear, fragrant with star anise, and not excessively sweet. True Hanoi flavor.' },
        { reviewer: 'Rebecca F.', rating: 5, date: '1 week ago', comment: 'Best cure for a cold. The aromatic finish stays with you like a warm embrace.' }
      ]
    },
    suggested_pairing: 'Vietnamese Iced Coffee (Ca Phe Sua Da) or Fresh Coconut Water',
    dietary: ['Gluten Free (Rice Noodles)', 'High Protein']
  },

  // 13. BUTTER CHICKEN
  butterchicken: {
    id: 'butterchicken',
    food_name: 'Mughlai Murgh Makhani (Butter Chicken)',
    cuisine: 'Northern Indian / Punjabi',
    restaurant_type: 'Royal Indian Dining',
    menu_section: 'Clay Oven Curries',
    price_estimate: '$21.00',
    food_description: {
      summary: 'Tandoor-charred chicken thigh tikka simmered in a velvety sauce of ripe tomatoes, crushed cashews, aromatic dried fenugreek leaves (kasoori methi), Kashmiri chili, and cultured butter, served with blistered garlic naan.',
      taste_profile: { umami: 8, richness: 9, savory: 8, spicy: 5, salty: 6, sweet: 5, acidity: 4 },
      mouthfeel: 'Silky, luxurious gravy that clings effortlessly to warm, pillowy tandoor garlic naan.',
      aroma: 'Smoky clay-oven charcoal, sweet aromatic fenugreek, toasted cardamom, and browned butter.'
    },
    aftertaste: {
      description: 'A comforting, velvety coating on the palate that gently transitions from sweet tomato richness to a smoky tandoori char, finishing with the distinctive herbal perfume of kasoori methi.',
      finish_duration: 'Long & Opulent',
      palate_sensation: 'Velvety, warming, and deeply aromatic'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 295,
      consensus: 'Diners rave about the balance between sweet tomato butteriness and the smoky clay-oven chicken char.',
      reviews: [
        { reviewer: 'Arjun S.', rating: 5, date: 'Yesterday', comment: 'The kasoori methi aroma is what sets this apart from average curry spots. Silky smooth gravy.' },
        { reviewer: 'Priya N.', rating: 5, date: '4 days ago', comment: 'The chicken is so tender it falls apart. The garlic naan dipped in this sauce is perfection.' }
      ]
    },
    suggested_pairing: 'Mango Lassi or Masala Chai',
    dietary: ['Contains Dairy', 'Contains Nuts (Cashews)']
  },

  // 14. TOM YUM GOONG
  tomyum: {
    id: 'tomyum',
    food_name: 'Royal Tom Yum Goong (Hot & Sour Prawn Soup)',
    cuisine: 'Thai / Central & Southern',
    restaurant_type: 'Authentic Thai Bistro',
    menu_section: 'Soups & Broths',
    price_estimate: '$17.00',
    food_description: {
      summary: 'A fiery, fragrant broth infused with bruised lemongrass stalks, fresh galangal roots, makrut lime leaves, bird’s eye chilis, straw mushrooms, and sweet river prawns finished with roasted chili jam (nam prik pao) and fresh lime juice.',
      taste_profile: { umami: 8, richness: 5, savory: 7, spicy: 8, salty: 6, sweet: 3, acidity: 9 },
      mouthfeel: 'Light, steaming broth that shocks the senses with immediate citrus brightness and deep savory prawn essence.',
      aroma: 'Fresh citrusy makrut lime, crushed pungent galangal, and roasted smoky chili jam.'
    },
    aftertaste: {
      description: 'An electric, tingling crescendo: intense sour lime acidity gives way to a lingering fiery chili heat at the throat, balanced by a deep, savory crustacean sweetness.',
      finish_duration: 'Long & Invigorating',
      palate_sensation: 'Electrifying, citrus-sharp, and warming'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 210,
      consensus: 'Celebrated for its unapologetic, authentic heat and the aromatic explosion of fresh herbs.',
      reviews: [
        { reviewer: 'Adisorn P.', rating: 5, date: '3 days ago', comment: 'Finally a restaurant that does not dumb down the spice or lime! Lemongrass and galangal are so fragrant.' }
      ]
    },
    suggested_pairing: 'Chilled Coconut Water or Thai Singha Beer',
    dietary: ['Contains Shellfish', 'Gluten Free']
  },

  // 15. BIRYANI
  biryani: {
    id: 'biryani',
    food_name: 'Hyderabadi Spiced Lamb Dum Biryani',
    cuisine: 'Hyderabadi / Indian',
    restaurant_type: 'Mughlai & Biryani Specialty House',
    menu_section: 'Heritage Rice Specialties',
    price_estimate: '$23.00',
    food_description: {
      summary: 'Fragrant aged extra-long basmati rice slow-cooked in a sealed clay handi (dum method) with tender bone-in spiced lamb, saffron strands, caramelized fried onions (birista), mint leaves, and kewra water, served with cooling mint raita and salan.',
      taste_profile: { umami: 9, richness: 8, savory: 9, spicy: 7, salty: 6, sweet: 4, acidity: 3 },
      mouthfeel: 'Fluffy, separate grains of fragrant rice infused with meat juices; meltingly tender lamb that pulls off the bone.',
      aroma: 'Kashmiri saffron, green cardamom pods, sweet rosewater/kewra, and caramelized onions.'
    },
    aftertaste: {
      description: 'An expansive bouquet of royal whole spices lingering on the palate: saffron sweetness and warm cardamom warmth persist, beautifully countered by the cooling mint raita.',
      finish_duration: 'Very Long & Fragrant',
      palate_sensation: 'Deeply aromatic, regal, and gently spiced'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 360,
      consensus: 'Diners love the fluffy, non-greasy rice grains and the intense aromatics of true handi dum cooking.',
      reviews: [
        { reviewer: 'Farhan K.', rating: 5, date: '2 days ago', comment: 'Every single grain of rice has flavor. The lamb is melt-in-your-mouth tender.' }
      ]
    },
    suggested_pairing: 'Sweet Lassi or Cardamom Spiced Tea',
    dietary: ['Halal Certified', 'Gluten Free']
  },

  // 16. PAELLA
  paella: {
    id: 'paella',
    food_name: 'Valencian Saffron Seafood Paella',
    cuisine: 'Spanish / Valencian',
    restaurant_type: 'Iberian Tapas & Paella Restaurant',
    menu_section: 'Arroces Tradicionales',
    price_estimate: '$32.00 (Serves 1–2)',
    food_description: {
      summary: 'Bomba rice simmered in rich shrimp & fish stock with Spanish saffron, jumbo tiger prawns, blue mussels, calamari rings, sweet smoked pimentón, and green beans, cooked to achieve the legendary caramelized crispy bottom crust (socarrat).',
      taste_profile: { umami: 9, richness: 6, savory: 8, spicy: 2, salty: 7, sweet: 3, acidity: 4 },
      mouthfeel: 'Toothsome, plump rice grains bursting with seafood juices, contrasting with the delightful crunch of the caramelized socarrat.',
      aroma: 'Pungent floral saffron, smoked Spanish paprika, and sea breeze shellfish broth.'
    },
    aftertaste: {
      description: 'A lingering celebration of oceanic sweetness and saffron warmth, underscored by the satisfying, nutty toastiness of the crispy socarrat.',
      finish_duration: 'Long & Hearty',
      palate_sensation: 'Savory, toasted, and rich with seafood umami'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 220,
      consensus: 'Diners rave about the crispy socarrat and the authentic golden saffron depth.',
      reviews: [
        { reviewer: 'Mateo R.', rating: 5, date: '1 week ago', comment: 'The socarrat crust on the bottom of the pan is absolutely legendary. Authentic Spanish cooking!' }
      ]
    },
    suggested_pairing: 'Spanish Albariño White Wine or Red Sangria',
    dietary: ['Contains Shellfish', 'Gluten Free']
  },

  // 17. FISH AND CHIPS
  fishandchips: {
    id: 'fishandchips',
    food_name: 'Crispy Beer-Battered Atlantic Cod & Chips',
    cuisine: 'British Gastro',
    restaurant_type: 'Seaside Brasserie & Pub',
    menu_section: 'Classic British Entrees',
    price_estimate: '$19.50',
    food_description: {
      summary: 'Wild Atlantic cod fillet dipped in light craft pale ale batter and fried to golden perfection, accompanied by triple-cooked chunky Maris Piper chips, minted mushy peas, and homemade caper-dill tartar sauce with malt vinegar.',
      taste_profile: { umami: 7, richness: 7, savory: 8, spicy: 1, salty: 6, sweet: 2, acidity: 5 },
      mouthfeel: 'Super-crispy, shattering batter shell giving way to steaming, pearlescent flaky fish; fluffy potato interiors with crunchy golden exteriors.',
      aroma: 'Toasted malt beer yeast, clean sea salt, and fresh lemon-caper dill.'
    },
    aftertaste: {
      description: 'Clean and remarkably light: sweet flaked cod freshness cuts through the crisp fried batter, finished with a bright malt vinegar zing and tangy caper tartar.',
      finish_duration: 'Medium & Satisfying',
      palate_sensation: 'Crispy, tangy, and comforting'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 178,
      consensus: 'Praise for non-greasy batter and juicy, thick cuts of fresh wild cod.',
      reviews: [
        { reviewer: 'Oliver B.', rating: 5, date: '5 days ago', comment: 'The batter shatters like glass! Cod was steaming hot and completely moist inside.' }
      ]
    },
    suggested_pairing: 'Crisp British Cider or English Pale Ale',
    dietary: ['Pescatarian']
  },

  // 18. BIBIMBAP
  bibimbap: {
    id: 'bibimbap',
    food_name: 'Sizzling Dolsot Bibimbap with Bulgogi Beef',
    cuisine: 'Korean / Jeonju Style',
    restaurant_type: 'Korean Table & BBQ House',
    menu_section: 'Hot Stone Specialties',
    price_estimate: '$18.00',
    food_description: {
      summary: 'Served in a scorching hot granite stone bowl: short-grain white rice developing a golden crispy crust (nurungji), topped with marinated thinly sliced ribeye bulgogi, seasoned namul vegetables (spinach, bean sprouts, shiitake, carrots), a raw egg yolk, and house fermented gochujang chili paste.',
      taste_profile: { umami: 8, richness: 6, savory: 8, spicy: 5, salty: 6, sweet: 5, acidity: 3 },
      mouthfeel: 'Crunchy crackling bottom rice paired with tender beef and crisp seasonal vegetables, bound together by the luscious egg yolk.',
      aroma: 'Sizzling toasted sesame oil, sweet soy beef marinade, and fermented red pepper gochujang.'
    },
    aftertaste: {
      description: 'A deeply addictive harmony of sweet fermented chili paste and nutty sesame oil, punctuated by the savory crunch of the roasted rice crust.',
      finish_duration: 'Medium to Long & Hearty',
      palate_sensation: 'Nutty, savory, and comfortably spicy'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 240,
      consensus: 'Diners love mixing the stone bowl at the table and eating the crunchy golden rice at the bottom.',
      reviews: [
        { reviewer: 'Ji-Hoon K.', rating: 5, date: 'Yesterday', comment: 'The stone bowl stays sizzling hot until the last bite. The nurungji crust was crunchy perfection.' }
      ]
    },
    suggested_pairing: 'Korean Boricha (Barley Tea) or Chilled Soju',
    dietary: ['High Fiber', 'Contains Sesame']
  },

  // 19. POKE
  poke: {
    id: 'poke',
    food_name: 'Hawaiian Ahi Tuna Poke Bowl',
    cuisine: 'Hawaiian / Polynesian',
    restaurant_type: 'Island Fish House & Raw Bar',
    menu_section: 'Hawaiian Poke Bowls',
    price_estimate: '$17.50',
    food_description: {
      summary: 'Fresh sashimi-grade yellowfin tuna cubes tossed in sesame shoyu, sweet Maui onions, scallions, ogo seaweed, and toasted macadamia nuts over warm sushi rice with sliced avocado and furikake.',
      taste_profile: { umami: 8, richness: 6, savory: 7, spicy: 2, salty: 6, sweet: 4, acidity: 3 },
      mouthfeel: 'Velvety, clean sashimi tuna with rich buttery avocado, contrasting with crunchy sweet onion and buttery macadamia bits.',
      aroma: 'Pure toasted sesame oil, ocean seaweed, and sweet scallions.'
    },
    aftertaste: {
      description: 'Clean, sweet ocean freshness coated in nutty toasted sesame and roasted macadamia oil, finishing with a pleasant umami soy sweetness.',
      finish_duration: 'Medium & Refreshing',
      palate_sensation: 'Fresh, buttery, and clean'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 195,
      consensus: 'Celebrated for the pristine freshness of the tuna and the authentic traditional sesame-shoyu marinade.',
      reviews: [
        { reviewer: 'Keanu L.', rating: 5, date: '3 days ago', comment: 'Authentic island poke! No heavy mayonnaise disguising the tuna, just clean, fresh fish with sesame and Maui onions.' }
      ]
    },
    suggested_pairing: 'Passionfruit Iced Green Tea or Kona Brewing Longboard Lager',
    dietary: ['Pescatarian', 'Dairy Free']
  },

  // 20. FALAFEL
  falafel: {
    id: 'falafel',
    food_name: 'Crispy Herbed Levantine Falafel Platter',
    cuisine: 'Middle Eastern / Levantine',
    restaurant_type: 'Levantine Mezze & Grill',
    menu_section: 'Traditional Mezze',
    price_estimate: '$15.50',
    food_description: {
      summary: 'Golden-fried spiced chickpea and fava croquettes packed with fresh parsley, cilantro, toasted cumin, and coriander, served over silky lemon tahini, pickled wild pink turnips, Israeli salad, and warm stone-baked pita.',
      taste_profile: { umami: 6, richness: 6, savory: 7, spicy: 2, salty: 5, sweet: 3, acidity: 6 },
      mouthfeel: 'Deeply crunchy exterior crust giving way to an aromatic, fluffy, vibrant green herb interior; creamy nutty tahini dip.',
      aroma: 'Toasted cumin seed, crushed coriander, fresh parsley, and sesame paste.'
    },
    aftertaste: {
      description: 'A bright, herbaceous finish: nutty sesame tahini sweetness cuts through the crisp fried crust, leaving a tangy pickled turnip freshness on the tongue.',
      finish_duration: 'Medium & Crisp',
      palate_sensation: 'Herbaceous, nutty, and vibrant'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 230,
      consensus: 'Diners praise the moist, vibrant green herb interior and non-greasy crunchy crust.',
      reviews: [
        { reviewer: 'Tariq A.', rating: 5, date: '4 days ago', comment: 'You know falafel is authentic when the inside is bright green from fresh herbs, not dry yellow powder. Incredible tahini.' }
      ]
    },
    suggested_pairing: 'Mint Lemonade (Limonana) or Turkish Black Tea',
    dietary: ['Vegan Friendly', 'Dairy Free']
  },

  // 21. LASAGNA
  lasagna: {
    id: 'lasagna',
    food_name: 'Traditional Bolognese & Béchamel Lasagna',
    cuisine: 'Italian / Emilia-Romagna',
    restaurant_type: 'Classic Italian Trattoria',
    menu_section: 'Pasta al Forno',
    price_estimate: '$22.00',
    food_description: {
      summary: 'Eight delicate layers of handmade egg pasta sheets baked with slow-simmered beef & pork ragù alla Bolognese, velvety nutmeg-infused béchamel sauce, and generous aged Parmigiano-Reggiano, baked until blistered and golden.',
      taste_profile: { umami: 9, richness: 8, savory: 9, spicy: 1, salty: 6, sweet: 4, acidity: 4 },
      mouthfeel: 'Tender, melt-in-the-mouth pasta layers enveloped in silky white cream sauce and hearty, slow-cooked meat ragù.',
      aroma: 'Caramelized cheese crust, slow-cooked mirepoix aromatics, red wine ragù, and sweet nutmeg.'
    },
    aftertaste: {
      description: 'Deep, comforting savory richness: the sweetness of cooked tomatoes and wine ragù lingers alongside nutty baked parmesan and warm nutmeg cream.',
      finish_duration: 'Long & Hearty',
      palate_sensation: 'Comforting, rich, and savory'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 265,
      consensus: 'Praised for using real creamy béchamel instead of heavy ricotta shortcuts, yielding a delicate, velvety texture.',
      reviews: [
        { reviewer: 'Gianna M.', rating: 5, date: '2 days ago', comment: 'Real Bolognese style with béchamel! Layers are delicate and tender, not heavy or stodgy.' }
      ]
    },
    suggested_pairing: 'Sangiovese di Romagna or Lambrusco Grasparossa',
    dietary: ['Contains Dairy', 'Contains Gluten']
  },

  // 22. CROISSANT
  croissant: {
    id: 'croissant',
    food_name: 'Artisanal French Butter Croissant & Café',
    cuisine: 'French Patisserie',
    restaurant_type: 'Artisan Bakery & Café',
    menu_section: 'Viennoiserie',
    price_estimate: '$6.50',
    food_description: {
      summary: 'A 72-hour slow-fermented laminated pastry made with high-fat Normandy Charentes-Poitou butter, displaying honeycomb honeycomb interior open crumb and a golden, paper-thin flaked crust, served with fresh espresso.',
      taste_profile: { umami: 4, richness: 8, savory: 5, spicy: 0, salty: 4, sweet: 5, acidity: 2 },
      mouthfeel: 'Delicate, shattering outer crust that scatters into buttery flakes, yielding to an elastic, cloud-soft, moist honeycomb interior.',
      aroma: 'Toasted browning butter, caramelized milk solids, and subtle fermented yeast sweetness.'
    },
    aftertaste: {
      description: 'A luxurious, clean sweetness of cultured butter and caramelized pastry crust that leaves the mouth feeling delicately glazed rather than heavy.',
      finish_duration: 'Medium & Elegant',
      palate_sensation: 'Buttery, warm, and sweet'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 310,
      consensus: 'Diners rave about the honeycomb open crumb and true cultured Normandy butter richness.',
      reviews: [
        { reviewer: 'Emilie D.', rating: 5, date: 'Yesterday', comment: 'You can hear the crunch across the room! The butter aroma hits you as soon as you tear it in half.' }
      ]
    },
    suggested_pairing: 'Double Shot Flat White or French Roast Café au Lait',
    dietary: ['Vegetarian Friendly', 'Contains Dairy']
  },

  // 23. TIRAMISU
  tiramisu: {
    id: 'tiramisu',
    food_name: 'Traditional Venetian Espresso Tiramisù',
    cuisine: 'Italian / Veneto',
    restaurant_type: 'Trattoria & Dessert Osteria',
    menu_section: 'Dolci',
    price_estimate: '$11.00',
    food_description: {
      summary: 'Airy Italian savoiardi ladyfingers lightly soaked in freshly pulled dark espresso and Marsala wine, layered with whipped zabaglione and mascarpone cream, finished with a blanket of Dutch dark cocoa powder.',
      taste_profile: { umami: 3, richness: 8, savory: 3, spicy: 0, salty: 2, sweet: 7, acidity: 3 },
      mouthfeel: 'Cloud-like, pillow-soft cream that dissolves instantly on the tongue; tender, espresso-infused ladyfingers with zero sogginess.',
      aroma: 'Roasted dark espresso beans, rich Dutch cocoa, sweet Marsala wine, and sweet cream.'
    },
    aftertaste: {
      description: 'A sophisticated balance: the bitter, roasted notes of dark espresso and cocoa cut through the rich mascarpone cream, leaving a subtle warm aroma of Marsala wine.',
      finish_duration: 'Long & Elegant',
      palate_sensation: 'Bittersweet, velvety, and refreshing'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 245,
      consensus: 'Universal love for the lightness of the mascarpone and the bold, non-sugary espresso punch.',
      reviews: [
        { reviewer: 'Matteo B.', rating: 5, date: '4 days ago', comment: 'Not overly sweet at all — the espresso has real character and the mascarpone cream is light as air.' }
      ]
    },
    suggested_pairing: 'Espresso Ristretto or Amaretto Liqueur',
    dietary: ['Vegetarian', 'Contains Dairy & Eggs']
  },

  // 24. CHURROS
  churros: {
    id: 'churros',
    food_name: 'Crispy Cinnamon Churros con Chocolate',
    cuisine: 'Spanish & Mexican',
    restaurant_type: 'Churrería & Café',
    menu_section: 'Postres Artesanales',
    price_estimate: '$9.00',
    food_description: {
      summary: 'Hand-extruded star-ridged pastry dough fried to order until golden crisp, rolled in Ceylon cinnamon sugar, served with a cup of thick, bittersweet Spanish dark dipping chocolate spiced with a touch of chili.',
      taste_profile: { umami: 2, richness: 7, savory: 3, spicy: 2, salty: 2, sweet: 8, acidity: 1 },
      mouthfeel: 'Audibly crunchy ridged exterior with a soft, steaming, custardy dough center; decadent, pudding-thick dipping chocolate.',
      aroma: 'Warm Ceylon cinnamon, caramelized sugar, and deep roasted dark cocoa.'
    },
    aftertaste: {
      description: 'A comforting blend of sweet cinnamon warmth and intense bittersweet chocolate that coats the back of the throat with cozy spice.',
      finish_duration: 'Medium & Indulgent',
      palate_sensation: 'Warm, sweet, and comforting'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 185,
      consensus: 'Diners love that they are fried fresh to order and that the dipping chocolate is thick and rich, not watery syrup.',
      reviews: [
        { reviewer: 'Sofia G.', rating: 5, date: '3 days ago', comment: 'Served piping hot! Dipping into that thick dark chocolate is the ultimate comfort food experience.' }
      ]
    },
    suggested_pairing: 'Café con Leche or Spiced Mexican Hot Chocolate',
    dietary: ['Vegetarian Friendly']
  },

  // 25. PEKING DUCK
  pekingduck: {
    id: 'pekingduck',
    food_name: 'Imperial Crispy Roast Peking Duck',
    cuisine: 'Chinese / Beijing Imperial',
    restaurant_type: 'Traditional Roast Duck House',
    menu_section: 'Imperial Roast Meats',
    price_estimate: '$38.00 (Half Duck)',
    food_description: {
      summary: 'Air-dried and fruitwood-roasted duck carved tableside: glass-crisp lacquered skin and tender sliced meat, served with handmade steamed lotus leaf wrappers, fresh cucumber batons, scallions, and aged sweet bean hoisin sauce.',
      taste_profile: { umami: 9, richness: 9, savory: 9, spicy: 1, salty: 6, sweet: 6, acidity: 2 },
      mouthfeel: 'Glass-crisp skin that crackles and melts between the teeth; tender succulent duck wrapped in warm, paper-thin steamed pancakes.',
      aroma: 'Roasted fruitwood smoke, maltose sugar glaze, star anise, and sweet fermented bean hoisin.'
    },
    aftertaste: {
      description: 'A deeply opulent roast duck fat flavor tempered by the crisp freshness of cucumber, ending with a sweet, fermented hoisin savoriness.',
      finish_duration: 'Very Long & Luxurious',
      palate_sensation: 'Savory, rich, and mouth-coating'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 275,
      consensus: 'Legendary for the crackling, candy-like crisp skin and tableside carving presentation.',
      reviews: [
        { reviewer: 'Zhi-Ming H.', rating: 5, date: '1 week ago', comment: 'The skin is like glass! Dip it in a little sugar first as the chef recommends — it literally dissolves on your tongue.' }
      ]
    },
    suggested_pairing: 'Tie Guan Yin Oolong Tea or Pinot Noir',
    dietary: ['High Protein', 'Dairy Free']
  },

  // 26. CEVICHE
  ceviche: {
    id: 'ceviche',
    food_name: 'Peruvian Classic Sea Bass Ceviche',
    cuisine: 'Peruvian / Limeño',
    restaurant_type: 'Cevichería & Coastal Kitchen',
    menu_section: 'Ceviches Tradicionales',
    price_estimate: '$19.00',
    food_description: {
      summary: 'Pristine cubes of wild sea bass flash-cured in freshly squeezed lime leche de tigre with red onions, fiery rocoto and aji amarillo chilis, served with glazed sweet potato (camote) and crunchy toasted corn kernels (cancha).',
      taste_profile: { umami: 7, richness: 4, savory: 7, spicy: 6, salty: 6, sweet: 4, acidity: 10 },
      mouthfeel: 'Firm, springy cured sea bass bites exploding with cold citrus juices, contrasting with the crunch of toasted corn.',
      aroma: 'Electric lime zest, fresh oceanic sea breeze, pungent cilantro, and fruity Peruvian aji chilis.'
    },
    aftertaste: {
      description: 'An exhilarating burst of tart lime acidity and fiery chili heat that cleanses the palate completely, followed by lingering sweet corn and ocean sweetness.',
      finish_duration: 'Medium & High-Voltage Refreshing',
      palate_sensation: 'Tingling, electric, and rejuvenating'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 190,
      consensus: 'Diners praise the mouthwatering acidity of the leche de tigre and the premium sashimi-grade fish quality.',
      reviews: [
        { reviewer: 'Mariana C.', rating: 5, date: '2 days ago', comment: 'The leche de tigre makes your mouth water instantly! You could drink the citrus marinade straight from the bowl.' }
      ]
    },
    suggested_pairing: 'Classic Pisco Sour or Chicha Morada (Spiced Purple Corn Drink)',
    dietary: ['Gluten Free', 'Pescatarian', 'Dairy Free']
  },

  // 27. SHAKSHUKA
  shakshuka: {
    id: 'shakshuka',
    food_name: 'North African Spiced Shakshuka with Feta',
    cuisine: 'North African & Levantine',
    restaurant_type: 'Artisan Brunch & Mediterranean Bistro',
    menu_section: 'Skillet Breakfast & Brunch',
    price_estimate: '$15.00',
    food_description: {
      summary: 'Organic pasture-raised eggs gently poached in a bubbling cast-iron skillet of crushed San Marzano tomatoes, roasted bell peppers, garlic, cumin, smoked paprika, and harissa paste, crowned with sheep’s milk feta and fresh cilantro, served with warm crusty challah bread.',
      taste_profile: { umami: 7, richness: 6, savory: 8, spicy: 5, salty: 6, sweet: 4, acidity: 6 },
      mouthfeel: 'Velvety, runny egg yolks blending into thick, chunky, slow-cooked tomato-pepper stew; crunchy bread crust for dipping.',
      aroma: 'Toasted cumin, smoky paprika, roasted bell peppers, and bubbling tomato acidity.'
    },
    aftertaste: {
      description: 'A comforting warmth of roasted cumin and smoked chili pepper, balanced by the bright tang of cooked tomatoes and creamy briny feta cheese.',
      finish_duration: 'Medium & Warming',
      palate_sensation: 'Savory, comforting, and mildly spicy'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 215,
      consensus: 'Diners love the rich, spicy tomato sauce and the runny egg yolks perfect for tearing into warm bread.',
      reviews: [
        { reviewer: 'Noah B.', rating: 5, date: 'Yesterday', comment: 'The best brunch skillet in town. Yolk was perfectly runny and the harissa has just enough kick.' }
      ]
    },
    suggested_pairing: 'Fresh Squeezed Orange Juice or Spiced Mint Tea',
    dietary: ['Vegetarian Friendly']
  },

  // 28. GYOZA
  gyoza: {
    id: 'gyoza',
    food_name: 'Pan-Seared Hanetsuki Pork & Garlic Chive Gyoza',
    cuisine: 'Japanese / Utsunomiya Style',
    restaurant_type: 'Izakaya & Gyoza Specialty Bar',
    menu_section: 'House Gyoza Skillets',
    price_estimate: '$11.00 (Plate of 6)',
    food_description: {
      summary: 'Japanese dumplings filled with minced Berkshire pork, napa cabbage, garlic chives (nira), and grated ginger, pan-seared to create a delicate lacy crispy wing (hanetsuki) bottom while steaming the tender top wrapper, served with rayu chili vinegar soy.',
      taste_profile: { umami: 8, richness: 6, savory: 8, spicy: 4, salty: 6, sweet: 3, acidity: 4 },
      mouthfeel: 'Shattering, paper-thin crispy bottom lattice giving way to tender steamed dough and hot, savory pork juices.',
      aroma: 'Sizzling sesame oil, pungent garlic chives, and caramelized dumpling skin.'
    },
    aftertaste: {
      description: 'A burst of savory ginger-pork juices followed by the crisp toasty savor of browned sesame oil and a zesty chili-vinegar finish.',
      finish_duration: 'Medium & Addictive',
      palate_sensation: 'Crispy, savory, and juicy'
    },
    user_reviews: {
      overall_rating: 4.8,
      review_count: 245,
      consensus: 'Diners rave about the crispy lacy wing bottom and the juicy ginger pork filling.',
      reviews: [
        { reviewer: 'Takeshi Y.', rating: 5, date: '3 days ago', comment: 'The hanetsuki wing is crispy like a potato chip! Inside is super juicy with plenty of garlic chives.' }
      ]
    },
    suggested_pairing: 'Ice-Cold Sapporo Draft Beer or Highball',
    dietary: ['Contains Pork']
  },

  // 29. KATSU CURRY
  katsucurry: {
    id: 'katsucurry',
    food_name: 'Crispy Kurobuta Pork Katsu with Japanese Curry',
    cuisine: 'Japanese / Yoshoku Style',
    restaurant_type: 'Japanese Curry House',
    menu_section: 'Katsu & Curry Plates',
    price_estimate: '$18.50',
    food_description: {
      summary: 'Panko-breaded, deep-fried Kurobuta pork loin cutlet sliced over steaming Koshihikari short-grain rice, drenched in our house slow-simmered 48-hour Japanese curry sauce with caramelized apples, onions, and carrots, accompanied by pickled red fukujinzuke.',
      taste_profile: { umami: 9, richness: 8, savory: 9, spicy: 4, salty: 6, sweet: 5, acidity: 3 },
      mouthfeel: 'Crunchy, airy panko crust that crackles audibly over tender, juicy pork loin, bathed in thick, comforting, velvety curry gravy.',
      aroma: 'Toasted panko breadcrumbs, caramelized onions, sweet apples, and mild turmeric curry spices.'
    },
    aftertaste: {
      description: 'A comforting, warm hug of sweet caramelized onion curry and savory pork juices, with the tart fukujinzuke pickles providing a cleansing crunch.',
      finish_duration: 'Long & Hearty',
      palate_sensation: 'Deeply comforting, sweet-savory, and warm'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 310,
      consensus: 'Loved for the thick, comforting curry gravy and the cutlet that stays crispy even under the sauce.',
      reviews: [
        { reviewer: 'Ken A.', rating: 5, date: '1 week ago', comment: 'Pork loin is super juicy with zero dryness. The curry has that authentic Japanese sweetness from caramelized apples and onions.' }
      ]
    },
    suggested_pairing: 'Cold Mugicha (Barley Tea) or Japanese Ramune',
    dietary: ['Contains Pork', 'Contains Gluten']
  },

  // 30. BASQUE CHEESECAKE
  cheesecake: {
    id: 'cheesecake',
    food_name: 'San Sebastián Basque Burnt Caramel Cheesecake',
    cuisine: 'Spanish / Basque Country',
    restaurant_type: 'Artisan Dessert Bar & Pintxos',
    menu_section: 'Postres de la Casa',
    price_estimate: '$10.50',
    food_description: {
      summary: 'Baked at intense heat to create a deeply caramelized, scorched dark top while keeping the interior center extraordinarily creamy, custardy, and molten, infused with Madagascar vanilla beans and sea salt.',
      taste_profile: { umami: 3, richness: 9, savory: 3, spicy: 0, salty: 3, sweet: 7, acidity: 3 },
      mouthfeel: 'Pleasantly bitter caramelized outer top giving way to a rich, oozy, molten cream cheese center that melts like warm custard.',
      aroma: 'Deep toasted caramel, browned butter, sweet vanilla bean, and baked cream cheese.'
    },
    aftertaste: {
      description: 'The caramelized, almost smoky bitterness of the burnt top beautifully balances the rich, tangy cream cheese center, leaving a smooth, sweet vanilla finish.',
      finish_duration: 'Long & Indulgent',
      palate_sensation: 'Velvety, bittersweet, and decadent'
    },
    user_reviews: {
      overall_rating: 4.9,
      review_count: 290,
      consensus: 'Celebrated for its molten gooey center and the bitter caramel crust that prevents it from being too sweet.',
      reviews: [
        { reviewer: 'Iñaki G.', rating: 5, date: '2 days ago', comment: 'True San Sebastián style! The center is almost runny like custard and the burnt top has that toffee caramel flavor.' }
      ]
    },
    suggested_pairing: 'Sherry Wine (Pedro Ximénez) or Double Espresso',
    dietary: ['Vegetarian Friendly', 'Gluten Free (Crustless)']
  }
};

/**
 * Intelligent matcher that connects ImageNet / MobileNet vision labels
 * and visual palette cues to our comprehensive restaurant gastronomy profiles.
 */
function findBestFoodMatch(predictions = [], palette = null) {
  const labels = predictions.map(p => (p.className || '').toLowerCase());
  const combined = labels.join(' ');

  // 1. Direct label mapping across 30 premier dishes
  if (combined.includes('pizza')) return FOOD_DATABASE.pizza;
  if (combined.includes('cheeseburger') || combined.includes('hamburger')) return FOOD_DATABASE.cheeseburger;
  if (combined.includes('ramen') || combined.includes('noodle') || combined.includes('soup bowl') || combined.includes('consomme')) return FOOD_DATABASE.ramen;
  if (combined.includes('sushi') || combined.includes('nigiri') || combined.includes('sashimi')) return FOOD_DATABASE.sushi;
  if (combined.includes('taco') || combined.includes('burrito') || combined.includes('tortilla') || combined.includes('guacamole')) return FOOD_DATABASE.tacos;
  if (combined.includes('risotto') || combined.includes('mushroom') || combined.includes('potpie')) return FOOD_DATABASE.risotto;
  if (combined.includes('pad thai') || combined.includes('wok') || combined.includes('prawn') || combined.includes('shrimp')) return FOOD_DATABASE.padthai;
  if (combined.includes('steak') || combined.includes('beef') || combined.includes('meat loaf') || combined.includes('grill')) return FOOD_DATABASE.steak;
  if (combined.includes('ice cream') || combined.includes('gelato')) return FOOD_DATABASE.dessert;
  if (combined.includes('salad') || combined.includes('cucumber') || combined.includes('vegetable') || combined.includes('broccoli') || combined.includes('cauliflower')) return FOOD_DATABASE.salad;
  
  if (combined.includes('dim sum') || combined.includes('dumpling') || combined.includes('wonton') || combined.includes('potsticker') || combined.includes('bao')) return FOOD_DATABASE.dimsum;
  if (combined.includes('pho') || combined.includes('vietnamese') || combined.includes('broth')) return FOOD_DATABASE.pho;
  if (combined.includes('butter chicken') || combined.includes('tikka') || combined.includes('tandoori') || combined.includes('masala')) return FOOD_DATABASE.butterchicken;
  if (combined.includes('tom yum') || combined.includes('hot and sour') || combined.includes('sour soup')) return FOOD_DATABASE.tomyum;
  if (combined.includes('biryani') || combined.includes('pilaf') || combined.includes('spiced rice')) return FOOD_DATABASE.biryani;
  if (combined.includes('paella') || combined.includes('saffron') || combined.includes('mussel') || combined.includes('crayfish') || combined.includes('crab')) return FOOD_DATABASE.paella;
  if (combined.includes('fish and chips') || combined.includes('cod') || combined.includes('fried fish')) return FOOD_DATABASE.fishandchips;
  if (combined.includes('bibimbap') || combined.includes('korean')) return FOOD_DATABASE.bibimbap;
  if (combined.includes('poke') || combined.includes('raw fish') || combined.includes('tuna')) return FOOD_DATABASE.poke;
  if (combined.includes('falafel') || combined.includes('chickpea') || combined.includes('pita') || combined.includes('hummus')) return FOOD_DATABASE.falafel;
  if (combined.includes('lasagna') || combined.includes('pasta') || combined.includes('casserole')) return FOOD_DATABASE.lasagna;
  if (combined.includes('croissant') || combined.includes('pastry') || combined.includes('baguette') || combined.includes('french loaf') || combined.includes('bakery')) return FOOD_DATABASE.croissant;
  if (combined.includes('tiramisu') || combined.includes('sponge cake') || combined.includes('mascarpone')) return FOOD_DATABASE.tiramisu;
  if (combined.includes('churros') || combined.includes('cinnamon') || combined.includes('fried dough') || combined.includes('chocolate')) return FOOD_DATABASE.churros;
  if (combined.includes('peking duck') || combined.includes('duck') || combined.includes('roast fowl')) return FOOD_DATABASE.pekingduck;
  if (combined.includes('ceviche') || combined.includes('lime') || combined.includes('cured fish')) return FOOD_DATABASE.ceviche;
  if (combined.includes('shakshuka') || combined.includes('egg') || combined.includes('skillet') || combined.includes('scrambled')) return FOOD_DATABASE.shakshuka;
  if (combined.includes('gyoza') || combined.includes('pan seared')) return FOOD_DATABASE.gyoza;
  if (combined.includes('curry') || combined.includes('katsu')) return FOOD_DATABASE.katsucurry;
  if (combined.includes('cheesecake') || combined.includes('cake') || combined.includes('tart') || combined.includes('pie')) return FOOD_DATABASE.cheesecake;

  // 2. Palette-based fallback for generic classifications (like "plate" or "dish")
  if (palette && palette.visual_tone) {
    if (palette.visual_tone === 'rich_tomato_or_chili') return FOOD_DATABASE.pizza;
    if (palette.visual_tone === 'golden_fried_or_baked') return FOOD_DATABASE.katsucurry;
    if (palette.visual_tone === 'fresh_herb_or_vegetable') return FOOD_DATABASE.salad;
    if (palette.visual_tone === 'deep_roasted_or_sauced') return FOOD_DATABASE.steak;
    if (palette.visual_tone === 'savory_caramelized_warm') return FOOD_DATABASE.ramen;
  }

  // Default to Ramen
  return FOOD_DATABASE.ramen;
}

module.exports = {
  FOOD_DATABASE,
  findBestFoodMatch
};
