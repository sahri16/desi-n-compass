import { FOOD_IMAGES } from './constants';

export const BLOGS = [
  {
    id: 1,
    slug: 'discover-desi-compass',
    title: 'Discover Desi Compass: A Culinary Journey',
    summary: 'An introduction to Desi Compass, its flavors, and the inspiration behind the menu.',
    date: '2026-07-03',
    image: FOOD_IMAGES.biryani,
    content: `Welcome to Desi Compass — where traditional recipes meet contemporary dining.

Our chefs draw from classic South Asian techniques and fresh, locally-sourced ingredients to bring out bold, comforting flavors. Whether you favor slow-cooked gravies or smoky tandoor specials, our menu aims to transport you home through every bite.

We also focus on warm hospitality and a relaxed atmosphere where family and friends can gather. Join us for a meal and discover why Desi Compass is quickly becoming a favorite in the neighborhood.`,
  },
  {
    id: 2,
    slug: 'chefs-specials-explained',
    title: "Chef's Specials: The Stories Behind the Dishes",
    summary: 'A behind-the-scenes look at our chef’s signature dishes and techniques.',
    date: '2026-07-03',
    image: FOOD_IMAGES.karahi,
    content: `Our chef curates a rotating list of specials drawing on seasonal produce and traditional family recipes.

From the flame-kissed Seekh Kebab to the slow-simmered Mutton Handi, each dish is designed to highlight a unique combination of spice, texture, and aroma. We share the stories behind a few favorites and tips for enjoying them at their best.`,
  },
  {
    id: 3,
    slug: 'bbq-and-grill-guide',
    title: 'BBQ & Grill Guide: How We Get the Perfect Char',
    summary: 'Techniques and marinades that give our grills their signature flavour.',
    date: '2026-07-03',
    image: FOOD_IMAGES.lambchops,
    content: `Charcoal grilling is an art. We explain our approach to marination, resting times, and the small techniques that turn good meat into unforgettable dishes.

Learn why we choose specific cuts, how we balance spice and smoke, and why a short rest can transform texture and juiciness.`,
  },
  {
    id: 4,
    slug: 'desserts-and-beverages',
    title: 'Desserts & Beverages: Sweet Finishes and Signature Sips',
    summary: 'From Kashmiri chai to modern mocktails — pairing sweets and sips.',
    date: '2026-07-03',
    image: FOOD_IMAGES.chai,
    content: `Finish your meal with a balance of sweet and refreshing beverages. We highlight our popular Kashmiri Chai, signature mocktails, and desserts crafted to pair perfectly with your main course.

Expect aromatic spices, subtle sweetness, and a touch of nostalgia in every cup and plate.`,
  },
];

export default BLOGS;
