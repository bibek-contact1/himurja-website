export const BRAND = {
  name: "HIMURJA",
  tagline: "Helping modern consumers simplify skincare through transparent botanical recovery.",
  secondaryTagline: "Prepare tonight. Face tomorrow.",
  description: "Premium Transparent Botanical Recovery Care",
  philosophy:
    "Modern skincare often overwhelms consumers with increasingly complicated routines, aggressive actives, and confusing ingredients. HIMURJA takes a different approach: Support the skin. Allow it to recover. Let it do what it was designed to do.",
  pillars: ["Recovery", "Transparency", "Simplicity"],
  year: 2024,
} as const;

export const PRODUCT = {
  id: "no-01",
  name: "HIMURJA No. 01",
  type: "Premium Overnight Botanical Recovery Oil",
  size: "15 ml",
  price: 1499,
  formulaSummary:
    "Jojoba 40%, Hemp Seed Oil 30%, Rosehip 29.2%, Wild Rhododendron 0.8%.",
  description:
    "A transparent, premium overnight botanical recovery oil designed to support healthier skin with fewer products. Formulated with four cold-pressed botanical oils sourced from the USA and Nepal, this single product replaces complicated multi-step routines.",
  philosophy:
    "The product supports the skin overnight while reducing routine complexity. It does not claim to cure diseases or make unrealistic promises. It simply helps your skin do what it was designed to do—recover naturally while you sleep.",
  howToUse: [
    "Cleanse your face as usual.",
    "Apply 2–3 drops of HIMURJA No. 01 to your fingertips.",
    "Gently press onto face and neck.",
    "Sleep peacefully.",
    "Wake up to refreshed, healthier-looking skin.",
  ],
  benefits: [
    "Supports natural overnight skin recovery",
    "Replaces multiple products with one",
    "Deeply nourishes without clogging pores",
    "Calms and soothes stressed skin",
    "Improves skin texture with consistent use",
    "Made with 100% cold-pressed botanical oils",
  ],
  ingredients: [
    {
      name: "Cold Pressed Jojoba Oil",
      origin: "USA (Imported)",
      botanicalName: "Simmondsia chinensis",
      function: "Deeply moisturizes and balances sebum production",
      scientificExplanation:
        "Jojoba oil is chemically similar to human sebum, allowing it to effectively regulate oil production. It is rich in vitamins E and B, as well as minerals like zinc and copper, making it highly nourishing for the skin.",
      benefits: [
        "Non-comedogenic",
        "Balances natural oil production",
        "Deeply moisturizing",
        "Vitamin-rich",
        "Anti-inflammatory",
      ],
      percentage: "40%",
    },
    {
      name: "Cold Pressed Hemp Seed Oil",
      origin: "Nepal",
      botanicalName: "Cannabis sativa",
      function: "Provides essential fatty acids for skin barrier repair",
      scientificExplanation:
        "Hemp seed oil contains the ideal 3:1 ratio of omega-6 to omega-3 fatty acids, which is optimal for human skin health. It supports the skin's natural barrier function and helps maintain moisture without clogging pores.",
      benefits: [
        "Ideal fatty acid profile",
        "Supports barrier repair",
        "Non-comedogenic",
        "Anti-inflammatory",
        "Rich in antioxidants",
      ],
      percentage: "30%",
    },
    {
      name: "Cold Pressed Rosehip Oil",
      origin: "USA (Imported)",
      botanicalName: "Rosa canina",
      function: "Supports skin regeneration and brightening",
      scientificExplanation:
        "Rosehip oil is naturally rich in trans-retinoic acid (Vitamin A) and vitamin C, which are essential for skin cell regeneration and collagen production. It also contains lycopene and beta-carotene for antioxidant protection.",
      benefits: [
        "Supports skin regeneration",
        "Promotes even skin tone",
        "Rich in vitamin A & C",
        "Antioxidant protection",
        "Helps improve skin texture",
      ],
      percentage: "29.2%",
    },
    {
      name: "Essential Wild Rhododendron Oil",
      origin: "Nepal (Himalayan Region)",
      botanicalName: "Rhododendron anthopogon",
      function: "Calms and soothes stressed skin",
      scientificExplanation:
        "Wild Rhododendron, sourced from the high altitudes of the Nepalese Himalayas, has been used in traditional Himalayan wellness for centuries. It contains unique bioactive compounds that help calm skin inflammation and provide a soothing sensory experience.",
      benefits: [
        "Calms stressed skin",
        "Traditional Himalayan ingredient",
        "Unique bioactive compounds",
        "Soothing aroma",
        "Anti-inflammatory properties",
      ],
      percentage: "0.8%",
    },
  ],
  fullIngredientsList:
    "Simmondsia Chinensis (Jojoba) Seed Oil 40%, Cannabis Sativa (Hemp) Seed Oil 30%, Rosa Canina (Rosehip) Fruit Oil 29.2%, Rhododendron Anthopogon (Wild Rhododendron) Essential Oil 0.8%. Certified cold-pressed botanical oils.",
  certifications: [
    "100% Natural Origin",
    "Cold-Pressed Oils",
    "No Synthetic Additives",
    "No Artificial Fragrances",
    "Cruelty-Free",
    "No Parabens",
    "No Silicones",
    "No Sulfates",
  ],
} as const;

export const FAQS = [
  {
    question: "Will this oil make my skin feel greasy?",
    answer:
      "No. HIMURJA No. 01 is formulated with non-comedogenic oils that absorb quickly into the skin. Unlike heavy oils, our blend is designed to absorb within minutes, leaving your skin feeling nourished, not greasy. Apply 2–3 drops and allow a moment for absorption.",
  },
  {
    question: "Can I use this if I have acne-prone skin?",
    answer:
      "Yes. All four oils in HIMURJA No. 01 are non-comedogenic (they do not clog pores). In fact, jojoba oil helps regulate sebum production, which can be beneficial for acne-prone skin. However, every skin is different—we recommend patch testing first, just as you would with any new product.",
  },
  {
    question: "How do I use HIMURJA No. 01?",
    answer:
      "Apply 2–3 drops to clean, slightly damp skin before bed. Gently press the oil into your face and neck using upward motions. Let it absorb for a minute before lying down. Use nightly for best results. That is all. No complicated routine needed.",
  },
  {
    question: "Is this safe for sensitive skin?",
    answer:
      "HIMURJA No. 01 uses only cold-pressed botanical oils with no synthetic additives, artificial fragrances, or harsh chemicals. The formula is minimal by design—just four carefully selected ingredients. We recommend patch testing if you have known sensitivities to any botanical oils.",
  },
  {
    question: "Where do your ingredients come from?",
    answer:
      "We believe transparency is non-negotiable. Our Jojoba oil and Rosehip oil are imported from the USA, while our Hemp Seed oil and Wild Rhododendron oil are sourced from Nepal. Every batch is traceable and tested for purity.",
  },
  {
    question: "How long does one bottle last?",
    answer:
      "With nightly use of 2–3 drops, one 15ml bottle of HIMURJA No. 01 lasts approximately 2–3 months. A little goes a long way—this is intentional. We believe in products you use consistently, not excessively.",
  },
  {
    question: "Is HIMURJA cruelty-free?",
    answer:
      "Absolutely. We are 100% cruelty-free. We never test on animals, and never will. All our ingredients are sourced from ethical suppliers who share this commitment.",
  },
  {
    question: "What is the shelf life?",
    answer:
      "Our oils are best used within 12 months of opening. Store in a cool, dry place away from direct sunlight. Each bottle is packaged in UV-protective glass to preserve the integrity of the oils.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Samira P.",
    location: "Bharatpur, Nepal",
    age: 26,
    rating: 5,
    text: "I was tired of using five different products every night. HIMURJA No. 01 simplified everything. My skin looks better now than when I was using a full routine. I actually look forward to my nightly routine.",
    skinType: "Combination",
    useDuration: "3 months",
    isVerified: true,
  },
  {
    id: 2,
    name: "Anisha K.",
    location: "Kathmandu, Nepal",
    age: 31,
    rating: 5,
    text: "I was skeptical about using an oil because I have oily skin. But after researching the ingredients and understanding the science, I decided to try it. Best decision I've made for my skin. It's balanced, calm, and healthy.",
    skinType: "Oily",
    useDuration: "2 months",
    isVerified: true,
  },
  {
    id: 3,
    name: "Priya S.",
    location: "Pokhara, Nepal",
    age: 29,
    rating: 5,
    text: "The transparency won me over. I know exactly what's in this bottle and where every ingredient comes from. No marketing fluff, just honest products that work. My skin has never been this calm.",
    skinType: "Sensitive",
    useDuration: "4 months",
    isVerified: true,
  },
  {
    id: 4,
    name: "Riya M.",
    location: "Lalitpur, Nepal",
    age: 24,
    rating: 4,
    text: "I love that I only need one product at night. It fits perfectly into my busy schedule. My skin feels hydrated and looks healthy in the morning. The rhododendron scent is subtle and calming.",
    skinType: "Dry",
    useDuration: "1 month",
    isVerified: true,
  },
  {
    id: 5,
    name: "Sneha P.",
    location: "Chitwan, Nepal",
    age: 35,
    rating: 5,
    text: "After years of trying different products, I've finally found something that works without overcomplicating things. This is skincare the way it should be—simple, transparent, and effective.",
    skinType: "Normal",
    useDuration: "6 months",
    isVerified: true,
  },
];

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Ingredients", href: "/ingredients" },
  { name: "About", href: "/about" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/himurja",
  facebook: "https://facebook.com/himurja",
  twitter: "https://twitter.com/himurja",
};

export const TRUST_FEATURES = [
  {
    title: "100% Natural Origin",
    description: "Every ingredient is derived from natural sources, cold-pressed, and minimally processed.",
    icon: "Leaf",
  },
  {
    title: "Traceable Sourcing",
    description: "Know exactly where each ingredient comes from. Full transparency from harvest to bottle.",
    icon: "Search",
  },
  {
    title: "Third-Party Tested",
    description: "Every batch is independently tested for purity, quality, and safety.",
    icon: "Shield",
  },
  {
    title: "Cruelty-Free",
    description: "Never tested on animals. Ethical sourcing and production always.",
    icon: "Heart",
  },
  {
    title: "Minimalist Formula",
    description: "Just four ingredients. No fillers, no additives, no unnecessary extras.",
    icon: "Star",
  },
  {
    title: "Sustainable Packaging",
    description: "UV-protective glass bottles. Minimal packaging. Designed to be kept and reused.",
    icon: "Recycle",
  },
];

export const JOURNAL_POSTS = [
  {
    id: 1,
    title: "Why Less Is More: The Case for Minimalist Skincare",
    excerpt:
      "The skincare industry wants you to buy more products. We want you to buy fewer, better products. Here is why simplicity wins.",
    date: "March 15, 2024",
    category: "Philosophy",
    readTime: "5 min read",
    slug: "why-less-is-more",
  },
  {
    id: 2,
    title: "Understanding Botanical Oils: A Complete Guide",
    excerpt:
      "Not all oils are created equal. Learn about cold-pressed oils, why they matter, and how to choose the right one for your skin.",
    date: "March 10, 2024",
    category: "Education",
    readTime: "8 min read",
    slug: "understanding-botanical-oils",
  },
  {
    id: 3,
    title: "The Science of Overnight Skin Recovery",
    excerpt:
      "While you sleep, your skin goes to work. Discover the fascinating biology of nocturnal skin repair and how to support it naturally.",
    date: "March 5, 2024",
    category: "Science",
    readTime: "6 min read",
    slug: "science-of-overnight-recovery",
  },
  {
    id: 4,
    title: "From the Himalayas to Your Skin: Our Ingredient Journey",
    excerpt:
      "Follow the journey of our Wild Rhododendron oil—from the high altitudes of the Himalayas to every bottle of HIMURJA No. 01.",
    date: "February 28, 2024",
    category: "Transparency",
    readTime: "7 min read",
    slug: "from-himalayas-to-your-skin",
  },
  {
    id: 5,
    title: "How to Read an Ingredient Label Like a Pro",
    excerpt:
      "Confused by INCI names? Learn how to decode ingredient labels and make informed choices about what you put on your skin.",
    date: "February 20, 2024",
    category: "Education",
    readTime: "6 min read",
    slug: "read-ingredient-label-like-a-pro",
  },
  {
    id: 6,
    title: "The Problem with 10-Step Routines",
    excerpt:
      "We analyzed popular multi-step routines and found something surprising: more products don't mean better results. Here is what actually matters.",
    date: "February 15, 2024",
    category: "Philosophy",
    readTime: "5 min read",
    slug: "problem-with-10-step-routines",
  },
];
