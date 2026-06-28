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
      { name: 'Karahi',  desc: 'Wok-tossed in tomatoes & fresh spices',         price: 'AED 85',  img: FOOD_IMAGES.karahi,    tag: "Chef's Pick" },
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
  { name: 'Shaheer Zaki', avatar: 'SZ', stars: 4, text: 'Recently visited Desi Compass and had a really pleasant experience. The environment and ambiance were excellent , very comfortable, clean, and enjoyable for dining with family or friends. We ordered a chicken wrap and orange juice, and both tasted really good. The chicken wrap was fresh, flavorful, and well-prepared, while the orange juice was refreshing and perfectly balanced. The highlight of the visit was definitely the papdi chaat. It was absolutely delicious, full of flavor, and very well presented. The plate size was quite large, which looked impressive, but the quantity served was a bit less. It would be even better if they increased the portion size. The mango lassi, however, was slightly disappointing. It tasted more like artificial mango flavoring rather than fresh mango, so it did not feel very authentic. Overall, it was a good experience with tasty food, a beautiful atmosphere, and friendly vibes. Definitely a nice place to visit, especially for desi food lovers.' },

  { name: 'Anne',   avatar: 'AN', stars: 5, text: 'The ambiance is awesome and the food is very tasty. From the moment we arrived, we felt welcomed by the friendly staff. The restaurant has a beautiful and cozy atmosphere, and the quality of the food exceeded our expectations. We appreciate the good service and the effort of the team. We will surely recommend this place to others and visit again soon.' },
  { name: 'Jasmeen Kaur',    avatar: 'JK', stars: 5, text: "Food was so good. I find my home food here. Best best north indian food. In barsha this is my first time I find so good food. Recommend to all visit to Desi compas" },
  { name: 'Raymond Selwyn',   avatar: 'RS', stars: 3, text: 'I ordered the Paneer Butter Masala and it was absolutely delicious. The taste and texture of the food were excellent and very satisfying. The ambience was pleasant and comfortable, making the dining experience even better. The staff served with a warm smile and provided great service throughout. I also appreciated the complimentary drink that was served. Overall, it was a wonderful experience and I would definitely visit again. Will try non veg..it was really tempting.' },
];

// ── Why Us ──
export const WHY_US = [
  { icon: 'fa-kitchen-set',              title: 'Freshly Made to Order', desc: 'Every meal is prepared after your order, ensuring authentic taste, freshness, and quality taste in every bite. ' },
  { icon: 'fa-solid fa-earth-americas',         title: 'Diverse Global Flavors',        desc: 'From Pakistani and Indian favorites to BBQ, Arabic, Continental, Filipino, and Indo-Chinese cuisine, all in one destination.' },
  { icon: 'fa-solid fa-pepper-hot',title: ' Authentic Desi Taste',     desc: 'Traditional recipes, premium spices, and home-style cooking come together to deliver unforgettable flavors.' },
  { icon: 'fa-solid fa-heart',          title: 'Warm Hospitality',     desc: 'A welcoming space where families, friends, and food lovers gather to enjoy great food and create lasting memories.' },
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
  { icon: 'fa-location-dot', label: 'Location', value: 'B8 Building - Al Barsha First - Al Barsha - Dubai' },
  { icon: 'fa-envelope',     label: 'Email',    value: 'desicompass1@gmail.com'        },
  { icon: 'fa-phone',        label: 'Phone',    value: '+97155 221 4549'             },
  { icon: 'fa-clock',        label: 'Hours',    value: 'Daily 7:00 AM – 2:00 AM'   },
];

// ── Social Links ──
export const SOCIAL_LINKS = [
  { icon: 'fa-brands fa-instagram', href: ' https://www.instagram.com/desi.compass/', label: 'Instagram' },
  { icon: 'fa-brands fa-facebook-f',href: ' https://www.facebook.com/desicompass/', label: 'Facebook'  },
  { icon: 'fa-brands fa-tiktok',    href: ' https://www.tiktok.com/@desicompass_restaurant?_r=1&_t=ZS-97aDjRZjMyD', label: 'TikTok'    },
  { icon: 'fa-brands fa-whatsapp',  href: ' https://wa.me/971552214549', label: 'WhatsApp'  },
];
