// ── Brand Colors ──
export const COLORS = {
  gold:  '#F2BB3C',
  brown: '#603913',
  black: '#1A0F10',
};

export const BREAKFAST_CATEGORY_NAMES = [
  'DC Special Breakfast',
  'Pratha',
  'Omelette',
  'South Indian',
  'Curry',
  'Sat-Sun Special',
];

export const BREAKFAST_GROUP_SLUG = 'breakfast';

const slugifyCategory = (value = '') =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const getMenuSlug = (categoryName = '') => slugifyCategory(categoryName);

export const getMenuPathFromCategoryIndex = (categoryIndex = 0) => {
  const categoryName = MENU_DATA[categoryIndex]?.category;
  if (!categoryName) return '/menu';

  const breakfastIndex = BREAKFAST_CATEGORY_NAMES.indexOf(categoryName);
  // if (breakfastIndex === 0) return `/menu/${BREAKFAST_GROUP_SLUG}`;
  if (breakfastIndex !== -1) return `/menu/${BREAKFAST_GROUP_SLUG}/${getMenuSlug(categoryName)}`;

  return `/menu/${getMenuSlug(categoryName)}`;
};

export const getMenuPathFromSelection = ({ activeGroupIdx = 0, activeSubIdx = 0, currentCategoryName = '' } = {}) => {
  if (activeGroupIdx === 0) {
    const categoryName = currentCategoryName || BREAKFAST_CATEGORY_NAMES[activeSubIdx] || BREAKFAST_CATEGORY_NAMES[0];
    return `/menu/${BREAKFAST_GROUP_SLUG}/${getMenuSlug(categoryName)}`;
  }

  return `/menu/${getMenuSlug(currentCategoryName || '')}`.replace(/\/menu\/$/, '/menu');
};

export const getMenuRouteStateFromPath = (pathname = '') => {
  const cleanPath = pathname.split('?')[0].toLowerCase();
  const normalizedPath = cleanPath.replace(/\/+$/, '');
  const pathParts = normalizedPath.split('/').filter(Boolean);

  if (pathParts[0] !== 'menu') {
    return { isMenuRoute: false, initialCategory: 0, initialSubCategory: 0 };
  }

  const slug = pathParts[1];
  const nestedSlug = pathParts[2];
  const searchParams = new URLSearchParams(pathname.split('?')[1] || '');
  const legacyCat = searchParams.get('cat');

  if (!slug && legacyCat !== null) {
    return { isMenuRoute: true, initialCategory: Number(legacyCat) || 0, initialSubCategory: 0 };
  }

  if (!slug) {
    return { isMenuRoute: true, initialCategory: 0, initialSubCategory: 0 };
  }

  if (slug === BREAKFAST_GROUP_SLUG) {
    if (nestedSlug) {
      const breakfastIndex = BREAKFAST_CATEGORY_NAMES.findIndex(
        (category) => getMenuSlug(category) === nestedSlug,
      );

      if (breakfastIndex !== -1) {
        return { isMenuRoute: true, initialCategory: 0, initialSubCategory: breakfastIndex };
      }
    }

    return { isMenuRoute: true, initialCategory: 0, initialSubCategory: 0 };
  }

  const breakfastIndex = BREAKFAST_CATEGORY_NAMES.findIndex(
    (category) => getMenuSlug(category) === slug,
  );

  if (breakfastIndex !== -1) {
    return { isMenuRoute: true, initialCategory: 0, initialSubCategory: breakfastIndex };
  }

  const categoryIndex = MENU_DATA.findIndex((category) => getMenuSlug(category.category) === slug);

  if (categoryIndex !== -1) {
    return { isMenuRoute: true, initialCategory: categoryIndex + 1, initialSubCategory: 0 };
  }

  return { isMenuRoute: true, initialCategory: 0, initialSubCategory: 0 };
};

// ── Food Images (Unsplash) ──
export const FOOD_IMAGES = {
  karahi:       'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80',
  handi:        'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80',
  biryani:      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
  nihari:       'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&q=80',
  seekh:        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80',
  malai:        'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80',
  tikka:        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
  lambchops:    'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
  steak:        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
  chicken:      'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&q=80',
  burger:       'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
  pasta:        'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80',
  chai:         'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
  arabicCoffee: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
  juice:        'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80',
  mocktail:     'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80',
  // breakfast images
  fullBreakfast:  '/assets/full-breakfast.png',
  healthyBowl:    '/assets/healthyBowl.png',
  customBreakfast:'/assets/customBreakfast.png',
  royalBreakfast: '/assets/royalBreakfast.png',
  breakfastSpecialt:'/assets/breakfastSpecialt.png',
  proteinBreakfast:'/assets/proteinBreakfast.png',
  omelette:       '/assets/omelette.png',
  megaOmelette:   '/assets/megaOmelette.png',
  toast:          '/assets/toast.png',
  // pratha images
  plainPratha:    '/assets/plainPratha.png',
  AlooPratha:     '/assets/AlooPratha.png',
  OnionPratha:    '/assets/OnionPratha.png',
  GobiPratha:     '/assets/GobiPratha.png',
  PaneerPratha:   '/assets/PaneerPratha.png',
  EggPratha:      '/assets/EggPratha.png',
  MuttonKeemaPratha:'/assets/MuttonKeemaPratha.png',
  ChickenKeemaPratha:'/assets/ChickenKeemaPratha.png',
ChickenKeemaPrathaKeemaGravy:'/assets/ChickenKeemaPrathaKeemaGravy.png',
MuttonKeemaPrathaKeemaGravy:'/assets/MuttonKeemaPrathaKeemaGravy.png',
  CholleyBhaturey:'/assets/CholleyBhaturey.png',
  CholleyPuri:    '/assets/CholleyPuri.png',

  // omelette images
  PlainOmelette:      '/assets/PlainOmelette.png',
  MasalaOmelette:     '/assets/MasalaOmelette.png',
  CheeseOmelette:     '/assets/CheeseOmelette.png',
  ScrambledOmelette:  '/assets/ScrambledOmelette.png',
  HalfFriedEgg:       '/assets/HalfFriedEgg.png',
  EggBhuri:           '/assets/EggBhuri.png',
  
  // south indian images  
  PlainDosa:          '/assets/PlainDosa.png',
  MasalaDosa:         '/assets/PlainDosa.png',
  OnionDosa:          '/assets/PlainDosa.png',
  GheeRoast:          '/assets/PlainDosa.png',
  RavaMasalaDosa:     '/assets/RavaMasalaDosa.png',
  Idali:              '/assets/Idali.png',
  SetVadaIdali:       '/assets/SetVadaIdali.png',
  SambharVada:        '/assets/SambharVada.png',
  OnionUttapam:       '/assets/OnionUttapam.png',
  MixUttapam:         '/assets/MixUttapam.png',
  Pona:               '/assets/Pona.png',

  // curry images
  ChanaMasala:        '/assets/ChanaMasala.png',
  AlooBhaji:          '/assets/AlooBhaji.png',
  ChickenKeema:       '/assets/ChickenKeema.png',
  KeemaMutton:        '/assets/KeemaMutton.png',
  EggCurry:           '/assets/EggCurry.png',
  FishCurry:          '/assets/FishCurry.png',
  ChickenCurry:       '/assets/ChickenCurry.png',
  YellowDal:          '/assets/YellowDal.png',
  MixVeg:             '/assets/MixVeg.png',

  // sat-sun special images
  AlooKulcha:         '/assets/AlooKulcha.png',
  MixVegKulcha:       '/assets/MixVegKulcha.png',
  ChickenKulcha:      '/assets/ChickenKulcha.png',
};

// ── Menu Data ──
export const MENU_DATA = [
  // ─────────────────────────────────────
  // BREAKFAST MENU
  // ─────────────────────────────────────
  {
    category: 'DC Special Breakfast',
    faIcon: 'fa-sun',
    items: [
      { name: 'Special Compass Breakfast', desc: 'Eggs, sausage, baked beans, hash brown, toast & butter', price: 'AED 17', img: FOOD_IMAGES.fullBreakfast,   tag: 'Special'  },
      { name: 'Healthy By Compass',        desc: 'Fresh fruits, oats, yoghurt, protein, granola & berries', price: 'AED 18', img: FOOD_IMAGES.healthyBowl,    tag: 'Healthy'  },
      { name: 'My Own Breakfast',          desc: 'Build your own breakfast with eggs, toast & sides', price: 'AED 20', img: FOOD_IMAGES.customBreakfast, tag: 'Custom'   },
      { name: 'Royal Breakfast',           desc: 'Eggs, sausage, baked beans, hash brown, toast, fresh juice & tea', price: 'AED 20', img: FOOD_IMAGES.royalBreakfast, tag: 'Premium'  },
      { name: 'Breakfast Special',         desc: 'Paratha, eggs, salad, chutney, tea & fresh juice', price: 'AED 14', img: FOOD_IMAGES.breakfastSpecialt, tag: 'Popular'  },
      { name: 'Protein Packed Breakfast',  desc: 'Eggs, chicken, tomato, cucumber, avocado, bread & juice', price: 'AED 14', img: FOOD_IMAGES.proteinBreakfast, tag: 'Fitness'  },
      { name: 'Omelette Hub',              desc: 'Eggs omelette made your way with fillings of choice', price: 'AED 10', img: FOOD_IMAGES.omelette,        tag: 'Classic'  },
      { name: 'Drak and Tost',             desc: 'Eggs, cheese, toast, butter & jam', price: 'AED 10', img: FOOD_IMAGES.toast,           tag: 'Simple'   },
      { name: 'The Mega Omelette',         desc: 'Big omelette with mushrooms, peppers, cheese, onions & toast', price: 'AED 17', img: FOOD_IMAGES.megaOmelette,   tag: 'Mega'     },
    ],
  },
  {
    category: 'Pratha',
    faIcon: 'fa-bread-slice',
    items: [
      { name: 'Plain Pratha',                           desc: 'Freshly made plain paratha with butter & chutney', price: 'AED 1.50',  img: FOOD_IMAGES.plainPratha,     tag: 'Classic'     },
      { name: 'Aloo Pratha',                            desc: 'Stuffed potato paratha, crispy outside, soft inside', price: 'AED 6',  img: FOOD_IMAGES.AlooPratha,     tag: 'Popular'     },
      { name: 'Onion Pratha',                           desc: 'Paratha filled with spiced onion mixture', price: 'AED 6',  img: FOOD_IMAGES.OnionPratha,     tag: 'Desi'        },
      { name: 'Gobi Pratha',                            desc: 'Cauliflower stuffed paratha, lightly spiced', price: 'AED 7',  img: FOOD_IMAGES.GobiPratha,    tag: 'Veg'         },
      { name: 'Paneer Pratha',                          desc: 'Fresh cottage cheese stuffed paratha, pan-fried golden', price: 'AED 9',  img: FOOD_IMAGES.PaneerPratha,    tag: 'Favourite'   },
      { name: 'Egg Pratha',                             desc: 'Egg layered paratha, crispy and flavourful', price: 'AED 7',  img: FOOD_IMAGES.EggPratha,  tag: 'Protein'     },
      { name: 'Mutton Keema Pratha',                    desc: 'Minced mutton stuffed paratha, spiced to perfection', price: 'AED 10', img: FOOD_IMAGES.MuttonKeemaPratha,     tag: 'Special'     },
      { name: 'Chicken Keema Pratha',                   desc: 'Minced chicken stuffed paratha with fresh herbs', price: 'AED 8',  img: FOOD_IMAGES.ChickenKeemaPratha,     tag: 'Must Try'    },
      { name: 'Chicken Keema Pratha + Keema Gravey',    desc: 'Stuffed chicken paratha served with rich keema gravy', price: 'AED 12', img: FOOD_IMAGES.ChickenKeemaPrathaKeemaGravy,    tag: 'Premium'     },
      {name: 'Mutton Keema Pratha + Keema Gravey', desc: 'Stuffed mutton paratha served with rich keema gravy', price: 'AED 14', img: FOOD_IMAGES.MuttonKeemaPrathaKeemaGravy, tag: 'Premium' },
      { name: 'Cholley Bhaturey',                       desc: 'Fluffy bhatura with spiced chickpea curry', price: 'AED 12', img: FOOD_IMAGES.CholleyBhaturey,     tag: 'North Indian'},
      { name: 'Cholley Puri',                           desc: 'Crispy puri served with classic chhole masala', price: 'AED 10',  img: FOOD_IMAGES.CholleyPuri,     tag: 'Desi'        },
    ],
  },
  {
    category: 'Omelette',
    faIcon: 'fa-egg',
    items: [
      { name: 'Plain Omelette',    desc: 'Simple fluffy omelette, lightly seasoned', price: 'AED 6',  img: FOOD_IMAGES.PlainOmelette,    tag: 'Classic' },
      { name: 'Masala Omelette',   desc: 'Spiced omelette with onion, tomato & green chilli', price: 'AED 7',  img: FOOD_IMAGES.MasalaOmelette, tag: 'Desi'    },
      { name: 'Cheese Omelette',   desc: 'Fluffy omelette loaded with melted cheese', price: 'AED 9',  img: FOOD_IMAGES.CheeseOmelette,        tag: 'Cheesy'  },
      { name: 'Scrambled Omelette',desc: 'Soft scrambled eggs cooked to creamy perfection', price: 'AED 6',  img: FOOD_IMAGES.ScrambledOmelette,    tag: 'Soft'    },
      { name: 'Half Fried Egg',    desc: 'Sunny side up egg, yolk perfectly runny', price: 'AED 5',  img: FOOD_IMAGES.HalfFriedEgg,    tag: 'Simple'  },
      { name: 'Egg Bhuri',         desc: 'Desi style scrambled eggs with spices and herbs', price: 'AED 7',  img: FOOD_IMAGES.EggBhuri,    tag: 'Spicy'   },
    ],
  },
  {
    category: 'South Indian',
    faIcon: 'fa-utensils',
    items: [
      { name: 'Plain Dosa',               desc: 'Crispy rice crepe with sambar & coconut chutney', price: 'AED 7',  img: FOOD_IMAGES.PlainDosa,   tag: 'Classic'     },
      { name: 'Masala Dosa',              desc: 'Crispy dosa stuffed with spiced potato filling', price: 'AED 9',  img: FOOD_IMAGES.MasalaDosa,   tag: 'Popular'     },
      { name: 'Onion Dosa',               desc: 'Crispy dosa topped with caramelised onions', price: 'AED 8',  img: FOOD_IMAGES.OnionDosa,   tag: 'Desi'        },
      { name: 'Ghee Roast',               desc: 'Crispy dosa roasted in pure ghee until golden', price: 'AED 10', img: FOOD_IMAGES.GheeRoast,   tag: 'Rich'        },
      { name: 'Rava Masala Dosa',         desc: 'Semolina dosa with spiced potato masala filling', price: 'AED 10', img: FOOD_IMAGES.RavaMasalaDosa,   tag: 'Special'     },
      { name: 'Idali',                    desc: 'Soft steamed rice cakes with sambar & chutney', price: 'AED 8',  img: FOOD_IMAGES.Idali, tag: 'Healthy'     },
      { name: 'Set Vada + Idali (×2)',    desc: 'Crispy vada & soft idali combo with sambar & chutneys', price: 'AED 12', img: FOOD_IMAGES.SetVadaIdali, tag: 'Combo'       },
      { name: 'Sambhar Vada',             desc: 'Crispy lentil doughnuts soaked in hot sambar', price: 'AED 8',  img: FOOD_IMAGES.SambharVada,  tag: 'Comfort'     },
      { name: 'Onion Uttapam',            desc: 'Thick rice pancake topped with caramelised onions', price: 'AED 8',  img: FOOD_IMAGES.OnionUttapam,   tag: 'Soft'        },
      { name: 'Mix Uttapam',              desc: 'Thick pancake topped with mixed vegetables & spices', price: 'AED 8',  img: FOOD_IMAGES.MixUttapam,   tag: 'Veg'         },
      { name: 'Pona',                     desc: 'Traditional South Indian rice dish with tempering', price: 'AED 8',  img: FOOD_IMAGES.Pona, tag: 'Traditional' },
    ],
  },
  {
    category: 'Curry',
    faIcon: 'fa-bowl-rice',
    items: [
      { name: 'Chana Masala',  desc: 'Spiced chickpea curry in tangy tomato gravy', price: 'AED 6',  img: FOOD_IMAGES.ChanaMasala,   tag: 'Veg'     },
      { name: 'Aloo Bhaji',    desc: 'Classic spiced potato curry, perfect with puri', price: 'AED 5',  img: FOOD_IMAGES.AlooBhaji,  tag: 'Classic' },
      { name: 'Chicken Keema', desc: 'Minced chicken with onions, tomatoes & spices', price: 'AED 7',  img: FOOD_IMAGES.ChickenKeema,   tag: 'Protein' },
      { name: 'Keema Mutton',  desc: 'Slow-cooked minced mutton in rich spiced gravy', price: 'AED 9', img: FOOD_IMAGES.KeemaMutton,   tag: 'Rich'    },
      { name: 'Egg Curry',     desc: 'Boiled eggs in spiced onion-tomato gravy', price: 'AED 6',  img: FOOD_IMAGES.EggCurry,  tag: 'Comfort' },
      { name: 'Fish Curry',    desc: 'Fresh fish in South Indian coconut-based curry', price: 'AED 8', img: FOOD_IMAGES.FishCurry, tag: 'Seafood' },
      {name: 'Chicken Curry', desc: 'Tender chicken pieces in aromatic curry sauce', price: 'AED 8', img: FOOD_IMAGES.ChickenCurry, tag: 'Classic' },
      {name: 'Yellow Dal', desc: 'Yellow lentils cooked with spices and tempered with ghee', price: 'AED 6', img: FOOD_IMAGES.YellowDal, tag: 'Veg' },
      {name: 'Mix Veg', desc: 'Seasonal vegetables cooked in a flavorful curry sauce', price: 'AED 6', img: FOOD_IMAGES.MixVeg, tag: 'Veg' },
    ],
  },
  {
    category: 'Sat-Sun Special',
    faIcon: 'fa-calendar-week',
    items: [
      { name: 'Aloo Kulcha',    desc: 'Stuffed potato kulcha — weekends only', price: 'AED 16', img: FOOD_IMAGES.AlooKulcha, tag: 'Weekend' },
      { name: 'Mix Veg Kulcha', desc: 'Mixed vegetable stuffed kulcha, crispy & flavourful', price: 'AED 18', img: FOOD_IMAGES.MixVegKulcha, tag: 'Weekend' },
      { name: 'Chicken Kulcha', desc: 'Spiced chicken stuffed kulcha — a weekend favourite', price: 'AED 20', img: FOOD_IMAGES.ChickenKulcha, tag: 'Weekend' },
    ],
  },

  // ─────────────────────────────────────
  // BBQ COLLECTION
  // ─────────────────────────────────────
  // {
  //   category: 'BBQ Collection',
  //   faIcon: 'fa-fire-burner',
  //   items: [
  //     { name: 'Seekh Kebab',   desc: 'Minced lamb with herbs, charcoal grilled',   price: 'AED 65',  img: FOOD_IMAGES.seekh,     tag: 'Bestseller' },
  //     { name: 'Malai Boti',    desc: 'Cream-marinated chicken, melt-in-mouth',     price: 'AED 70',  img: FOOD_IMAGES.malai,     tag: 'Must Try'   },
  //     { name: 'Chicken Tikka', desc: 'Tandoor-fired, smoky & bold flavours',       price: 'AED 60',  img: FOOD_IMAGES.tikka,     tag: 'Classic'    },
  //     { name: 'Lamb Chops',    desc: 'French rack, papaya-tenderised marinade',    price: 'AED 140', img: FOOD_IMAGES.lambchops, tag: 'Premium'    },
  //   ],
  // },

  // ─────────────────────────────────────
  // DESI SPECIALS
  // ─────────────────────────────────────
  // {
  //   category: 'Desi Specials',
  //   faIcon: 'fa-bowl-food',
  //   items: [
  //     { name: 'Chicken Karahi', desc: 'Wok-tossed in tomatoes & fresh spices',          price: 'AED 85',  img: FOOD_IMAGES.karahi,  tag: "Chef's Pick" },
  //     { name: 'Mutton Handi',   desc: 'Slow-cooked in clay pot, aromatic gravy',        price: 'AED 120', img: FOOD_IMAGES.handi,   tag: 'Signature'   },
  //     { name: 'Dum Biryani',    desc: 'Fragrant basmati, saffron & whole spices',       price: 'AED 75',  img: FOOD_IMAGES.biryani, tag: 'Bestseller'  },
  //     { name: 'Nihari',         desc: 'Overnight-simmered slow-braised shank',          price: 'AED 95',  img: FOOD_IMAGES.nihari,  tag: 'Heritage'    },
  //   ],
  // },

  // ─────────────────────────────────────
  // INTERNATIONAL
  // ─────────────────────────────────────
  // {
  //   category: 'International',
  //   faIcon: 'fa-earth-americas',
  //   items: [
  //     { name: 'Wagyu Steak Platter',    desc: 'Grade A5, truffle butter, garlic jus',    price: 'AED 220', img: FOOD_IMAGES.steak,   tag: 'Premium' },
  //     { name: 'Spiced Grilled Chicken', desc: "Za'atar rubbed, tahini & pomegranate",    price: 'AED 90',  img: FOOD_IMAGES.chicken, tag: 'Healthy' },
  //     { name: 'Gourmet Burger',         desc: 'Aged beef, caramelised onion, gold bun',  price: 'AED 80',  img: FOOD_IMAGES.burger,  tag: 'Popular' },
  //     { name: 'Truffle Pasta',          desc: 'Fresh pappardelle, black truffle, parm',  price: 'AED 95',  img: FOOD_IMAGES.pasta,   tag: 'Fusion'  },
  //   ],
  // },

  // ─────────────────────────────────────
  // BEVERAGES
  // ─────────────────────────────────────
  // {
  //   category: 'Beverages',
  //   faIcon: 'fa-mug-hot',
  //   items: [
  //     { name: 'Kashmiri Chai',      desc: 'Pink salt tea, cardamom & pistachios',   price: 'AED 25', img: FOOD_IMAGES.chai,         tag: 'Signature' },
  //     { name: 'Arabic Coffee',      desc: 'Saffron-infused, dates on the side',     price: 'AED 20', img: FOOD_IMAGES.arabicCoffee, tag: 'Authentic' },
  //     { name: 'Fresh Juices',       desc: 'Seasonal tropical blends, cold-pressed', price: 'AED 30', img: FOOD_IMAGES.juice,         tag: 'Healthy'   },
  //     { name: 'Signature Mocktail', desc: 'Rose, lychee, mint & sparkling water',   price: 'AED 35', img: FOOD_IMAGES.mocktail,      tag: 'Special'   },
  //   ],
  // },
];

// ── Gallery Images ──
export const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', label: 'Fine Dining Hall',  span: 2 },
  { url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80', label: 'Dum Biryani'               },
  { url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80', label: 'Live BBQ Station'           },
  { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80', label: 'Coffee Ritual'             },
  { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', label: 'Premium Grills',    span: 2 },
  { url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=500&q=80', label: 'Luxury Setting'            },
  { url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80', label: 'Tandoor Specials'          },
];

// ── Reviews ──
export const REVIEWS = [
  { name: 'Shaheer Zaki',   avatar: 'SZ', stars: 4, text: 'Recently visited Desi Compass and had a really pleasant experience. The environment and ambiance were excellent, very comfortable, clean, and enjoyable for dining with family or friends. We ordered a chicken wrap and orange juice, and both tasted really good. The papdi chaat was absolutely delicious, full of flavor, and very well presented.' },
  { name: 'Anne',           avatar: 'AN', stars: 5, text: 'The ambiance is awesome and the food is very tasty. From the moment we arrived, we felt welcomed by the friendly staff. The restaurant has a beautiful and cozy atmosphere, and the quality of the food exceeded our expectations. We will surely recommend this place to others and visit again soon.' },
  { name: 'Jasmeen Kaur',   avatar: 'JK', stars: 5, text: 'Food was so good. I find my home food here. Best best north indian food. In barsha this is my first time I find so good food. Recommend to all — visit Desi Compass!' },
  { name: 'Raymond Selwyn', avatar: 'RS', stars: 3, text: 'I ordered the Paneer Butter Masala and it was absolutely delicious. The taste and texture of the food were excellent and very satisfying. The ambience was pleasant and comfortable. The staff served with a warm smile and great service throughout. I also appreciated the complimentary drink. Will definitely visit again!' },
];

// ── Why Us ──
export const WHY_US = [
  { icon: 'fa-kitchen-set',      title: 'Freshly Made to Order',  desc: 'Every meal is prepared after your order, ensuring authentic taste, freshness, and quality in every bite.'                                                                   },
  { icon: 'fa-earth-americas',   title: 'Diverse Global Flavors', desc: 'From Pakistani and Indian favorites to BBQ, Arabic, Continental, Filipino, and Indo-Chinese cuisine, all in one destination.'                                              },
  { icon: 'fa-pepper-hot',       title: 'Authentic Desi Taste',   desc: 'Traditional recipes, premium spices, and home-style cooking come together to deliver unforgettable flavors.'                                                                },
  { icon: 'fa-heart',            title: 'Warm Hospitality',       desc: 'A welcoming space where families, friends, and food lovers gather to enjoy great food and create lasting memories.'                                                         },
];

// ── Nav Links ──
export const NAV_LINKS = [
  { label: 'Home',       id: 'home'    },
  { label: 'Menu',       id: 'menu'    },
  { label: 'Gallery',    id: 'gallery' },
  { label: 'Blog',       id: 'blog'    },
  { label: 'Contact Us', id: 'contact' },
];

// ── Contact Info ──
export const CONTACT_INFO = [
  { icon: 'fa-location-dot', label: 'Location', value: 'B8 Building - Al Barsha First - Al Barsha - Dubai' },
  { icon: 'fa-envelope',     label: 'Email',    value: 'desicompass1@gmail.com'                             },
  { icon: 'fa-phone',        label: 'Phone',    value: '+971 55 221 4549'                                   },
  { icon: 'fa-clock',        label: 'Hours',    value: 'Daily 7:00 AM – 2:00 AM'                            },
];

// ── Social Links ──
export const SOCIAL_LINKS = [
  { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/desi.compass/',                                           label: 'Instagram' },
  { icon: 'fa-brands fa-facebook-f',href: 'https://www.facebook.com/desicompass',                                              label: 'Facebook'  },
  { icon: 'fa-brands fa-tiktok',    href: 'https://www.tiktok.com/@desicompass_restaurant?_r=1&_t=ZS-97aDjRZjMyD',            label: 'TikTok'    },
  { icon: 'fa-brands fa-whatsapp',  href: 'https://wa.me/971552214549',                                                        label: 'WhatsApp'  },
];