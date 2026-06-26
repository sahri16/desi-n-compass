// ── Brand Colors ──
export const COLORS = {
  gold:  '#F2BB3C',
  brown: '#603913',
  black: '#1A0F10',
};

// ── Food Images (Unsplash – free, no key needed) ──
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
};

// ── Menu Data ──
export const MENU_DATA = [
  {
    category: 'Desi Specials',
    faIcon: 'fa-bowl-rice',
    items: [
      { name: 'Chicken Karahi',  desc: 'Wok-tossed in tomatoes & fresh spices',         price: 'AED 85',  img: FOOD_IMAGES.karahi,    tag: "Chef's Pick" },
      { name: 'Mutton Handi',    desc: 'Slow-cooked in clay pot, aromatic gravy',        price: 'AED 120', img: FOOD_IMAGES.handi,     tag: 'Signature'   },
      { name: 'Dum Biryani',     desc: 'Fragrant basmati, saffron & whole spices',       price: 'AED 75',  img: FOOD_IMAGES.biryani,   tag: 'Bestseller'  },
      { name: 'Nihari',          desc: 'Overnight-simmered slow-braised shank',          price: 'AED 95',  img: FOOD_IMAGES.nihari,    tag: 'Heritage'    },
    ],
  },
  {
    category: 'BBQ Collection',
    faIcon: 'fa-fire-burner',
    items: [
      { name: 'Seekh Kebab',   desc: 'Minced lamb with herbs, charcoal grilled',      price: 'AED 65',  img: FOOD_IMAGES.seekh,     tag: 'Bestseller' },
      { name: 'Malai Boti',    desc: 'Cream-marinated chicken, melt-in-mouth',        price: 'AED 70',  img: FOOD_IMAGES.malai,     tag: 'Must Try'   },
      { name: 'Chicken Tikka', desc: 'Tandoor-fired, smoky & bold flavours',          price: 'AED 60',  img: FOOD_IMAGES.tikka,     tag: 'Classic'    },
      { name: 'Lamb Chops',    desc: 'French rack, papaya-tenderised marinade',       price: 'AED 140', img: FOOD_IMAGES.lambchops, tag: 'Premium'    },
    ],
  },
  {
    category: 'International',
    faIcon: 'fa-earth-americas',
    items: [
      { name: 'Wagyu Steak Platter',   desc: 'Grade A5, truffle butter, garlic jus',           price: 'AED 220', img: FOOD_IMAGES.steak,   tag: 'Premium' },
      { name: 'Spiced Grilled Chicken',desc: "Za'atar rubbed, tahini & pomegranate",            price: 'AED 90',  img: FOOD_IMAGES.chicken, tag: 'Healthy' },
      { name: 'Gourmet Burger',        desc: 'Aged beef, caramelised onion, gold bun',         price: 'AED 80',  img: FOOD_IMAGES.burger,  tag: 'Popular' },
      { name: 'Truffle Pasta',         desc: 'Fresh pappardelle, black truffle, parm',         price: 'AED 95',  img: FOOD_IMAGES.pasta,   tag: 'Fusion'  },
    ],
  },
  {
    category: 'Beverages',
    faIcon: 'fa-mug-hot',
    items: [
      { name: 'Kashmiri Chai',     desc: 'Pink salt tea, cardamom & pistachios',        price: 'AED 25', img: FOOD_IMAGES.chai,         tag: 'Signature' },
      { name: 'Arabic Coffee',     desc: 'Saffron-infused, dates on the side',          price: 'AED 20', img: FOOD_IMAGES.arabicCoffee, tag: 'Authentic' },
      { name: 'Fresh Juices',      desc: 'Seasonal tropical blends, cold-pressed',      price: 'AED 30', img: FOOD_IMAGES.juice,         tag: 'Healthy'   },
      { name: 'Signature Mocktail',desc: 'Rose, lychee, mint & sparkling water',        price: 'AED 35', img: FOOD_IMAGES.mocktail,      tag: 'Special'   },
    ],
  },
];

// ── Gallery Images ──
export const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', label: 'Fine Dining Hall',  span: 2 },
  { url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80', label: 'Dum Biryani'              },
  { url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80', label: 'Live BBQ Station'          },
  { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80', label: 'Coffee Ritual'            },
  { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', label: 'Premium Grills',    span: 2 },
  { url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=500&q=80', label: 'Luxury Setting'           },
  { url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80', label: 'Tandoor Specials'         },
];

// ── Reviews ──
export const REVIEWS = [
  { name: 'Ahmed Al Rashidi', role: 'Food Critic, Dubai',    avatar: 'AA', stars: 5, text: 'An extraordinary journey through South Asian flavours presented with Michelin-level finesse. Every dish tells a story of heritage and craft.' },
  { name: 'Sophia Laurent',   role: 'Travel Blogger',        avatar: 'SL', stars: 5, text: 'Desi Compass is the definition of Dubai luxury dining. The ambience, service, and food exceeded every expectation I had.' },
  { name: 'Ravi Menon',       role: 'Corporate Executive',   avatar: 'RM', stars: 5, text: "I've dined across the globe. Rarely do you find a place that nails both authenticity and innovation. A rare gem in Dubai." },
  { name: 'Fatima Al Zaabi',  role: 'Lifestyle Influencer',  avatar: 'FZ', stars: 5, text: 'The Lamb Chops and Malai Boti are absolutely divine. The gold-lit interior feels like a palace. Will return again and again.' },
];

// ── Why Us ──
export const WHY_US = [
  { icon: 'fa-gem',              title: 'Premium Ingredients', desc: 'Hand-selected fresh produce from trusted farms and premium global suppliers.' },
  { icon: 'fa-kitchen-set',         title: 'Master Chefs',        desc: 'Expert culinary team with decades of South Asian & international expertise.' },
  { icon: 'fa-champagne-glasses',title: 'Luxury Ambience',     desc: 'Dubai-inspired fine dining blending modern elegance with warm heritage.' },
  { icon: 'fa-compass',          title: 'Authentic Taste',     desc: 'Time-honoured recipes elevated with contemporary plating & innovation.' },
];

// ── Nav Links ──
export const NAV_LINKS = [
  { label: 'Home',       id: 'home'    },
  { label: 'Menu',       id: 'menu'    },
  { label: 'Gallery',    id: 'gallery' },
  { label: 'Contact Us', id: 'contact' },
];

// ── Contact Info ──
export const CONTACT_INFO = [
  { icon: 'fa-location-dot', label: 'Location', value: 'Dubai, United Arab Emirates' },
  { icon: 'fa-envelope',     label: 'Email',    value: 'info@desincompass.com'        },
  { icon: 'fa-phone',        label: 'Phone',    value: '+971 50 XXX XXXX'             },
  { icon: 'fa-clock',        label: 'Hours',    value: 'Daily 12:00 PM – 12:00 AM'   },
];

// ── Social Links ──
export const SOCIAL_LINKS = [
  { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fa-brands fa-facebook-f',href: '#', label: 'Facebook'  },
  { icon: 'fa-brands fa-tiktok',    href: '#', label: 'TikTok'    },
  { icon: 'fa-brands fa-whatsapp',  href: '#', label: 'WhatsApp'  },
];
