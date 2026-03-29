export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  specifications: Record<string, string>;
}

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Books",
  "Fitness",
  "Beauty",
];

export const products: Product[] = [
  // ── Electronics ──
  {
    id: "1",
    name: "Sony WF-1000XM5 Wireless Earbuds - Active Noise Cancellation",
    price: 16149,
    originalPrice: 18999,
    description: "Premium wireless earbuds with industry-leading noise cancellation, 8-hour battery life, and superior sound quality. Perfect for music lovers and professionals.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg",
      "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg",
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg"
    ],
    rating: 4.8,
    reviewCount: 2450,
    inStock: true,
    specifications: { Brand: "Sony", "Noise Cancellation": "ANC", Battery: "8 hours", Waterproof: "IPX4", Features: "Multipoint" }
  },
  {
    id: "2",
    name: "Apple Watch Series 9 - 41mm Aluminum",
    price: 38699,
    originalPrice: 42999,
    description: "Advanced smartwatch with always-on display, health monitoring, and seamless iPhone integration. Track fitness and stay connected all day.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg",
      "https://images.pexels.com/photos/1136589/pexels-photo-1136589.jpeg",
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg"
    ],
    rating: 4.7,
    reviewCount: 3210,
    inStock: true,
    specifications: { Brand: "Apple", Display: "Retina", Health: "Complete monitoring", Water: "Resistant" }
  },
  {
    id: "3",
    name: "Dell XPS 13 Plus Laptop - Intel i7, 512GB SSD",
    price: 105599,
    originalPrice: 119999,
    description: "Ultra-thin laptop with cutting-edge Intel processor, stunning OLED display, and lightning-fast performance. Ideal for professionals and creators.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg"
    ],
    rating: 4.6,
    reviewCount: 1840,
    inStock: true,
    specifications: { Processor: "Intel i7", RAM: "16GB", SSD: "512GB", Display: "OLED" }
  },
  {
    id: "4",
    name: "Canon EOS R6 Mark II - Professional Mirrorless Camera",
    price: 289800,
    originalPrice: 315000,
    description: "Professional-grade mirrorless camera with 20MP sensor, 6K video capability, and advanced autofocus. Perfect for photographers and videographers.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/3878617/pexels-photo-3878617.jpeg",
      "https://images.pexels.com/photos/31453948/pexels-photo-31453948.jpeg",
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg"
    ],
    rating: 4.9,
    reviewCount: 920,
    inStock: true,
    specifications: { Brand: "Canon", Sensor: "20MP", Video: "6K", Autofocus: "Advanced" }
  },
  {
    id: "5",
    name: "JBL Flip 6 Portable Bluetooth Speaker",
    price: 7999,
    originalPrice: 9999,
    description: "Compact waterproof speaker with 360-degree sound, 12-hour battery, and rugged design. Great for outdoor adventures and travel.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg",
      "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg",
      "https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg"
    ],
    rating: 4.5,
    reviewCount: 2100,
    inStock: true,
    specifications: { Brand: "JBL", Sound: "360-degree", Battery: "12 hours", Waterproof: "IPX7" }
  },
  {
    id: "6",
    name: "Samsung Galaxy Buds2 Pro - Premium Earbuds",
    price: 13939,
    originalPrice: 16999,
    description: "Premium earbuds with Intelligent Active Noise Cancellation and premium sound quality. Seamless Android integration.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg",
      "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg",
      "https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg"
    ],
    rating: 4.6,
    reviewCount: 1950,
    inStock: true,
    specifications: { Brand: "Samsung", ANC: "Intelligent", Audio: "Hi-Fi", Waterproof: "IPX7" }
  },
  {
    id: "7",
    name: "Wireless Charging Pad - Fast Charging",
    price: 2399,
    originalPrice: 2999,
    description: "Fast wireless charging pad for smartphones and devices. Sleek design with non-slip surface.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg"
    ],
    rating: 4.5,
    reviewCount: 1560,
    inStock: true,
    specifications: { Brand: "Belkin", Charging: "15W Fast", Surface: "Non-slip", Universal: "Yes" }
  },
  {
    id: "8",
    name: "USB-C Hub - Multi-Port Adapter",
    price: 1439,
    originalPrice: 1999,
    description: "Versatile USB-C hub with multiple ports for seamless connectivity. Perfect for laptops and tablets.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg",
      "https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.6,
    reviewCount: 1890,
    inStock: true,
    specifications: { Brand: "Anker", Ports: "7-in-1", Transfer: "Fast data", Video: "4K" }
  },
  {
    id: "9",
    name: "Phone Protective Case - Military Grade",
    price: 1229,
    originalPrice: 1499,
    description: "Heavy-duty protective phone case with military-grade protection. Drop-tested and durability guaranteed.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg"
    ],
    rating: 4.7,
    reviewCount: 2340,
    inStock: true,
    specifications: { Brand: "OtterBox", Protection: "Military-grade", Slim: "Design", Warranty: "Lifetime" }
  },
  {
    id: "10",
    name: "Screen Protector - Tempered Glass",
    price: 449,
    originalPrice: 599,
    description: "Premium tempered glass screen protector with crystal-clear clarity. Easy installation with alignment kit.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg",
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.6,
    reviewCount: 2890,
    inStock: true,
    specifications: { Brand: "Spigen", Material: "Tempered glass", Hardness: "9H", Installation: "Easy" }
  },
  {
    id: "11",
    name: "Portable Power Bank - 30000mAh",
    price: 2399,
    originalPrice: 2999,
    description: "High-capacity power bank for long-lasting device charging. Dual ports for simultaneous charging.",
    category: "Electronics",
    images: [
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg"
    ],
    rating: 4.7,
    reviewCount: 3120,
    inStock: true,
    specifications: { Brand: "Anker", Capacity: "30000mAh", Ports: "Dual USB", Display: "LED" }
  },
  // ── Fashion ──
  {
    id: "12",
    name: "Premium Cotton T-Shirt - Modern Casual Wear",
    price: 1049,
    originalPrice: 1499,
    description: "Classic cotton t-shirt with modern fit and premium quality. Comfortable for everyday wear with excellent durability.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg",
      "https://images.pexels.com/photos/5869617/pexels-photo-5869617.jpeg"
    ],
    rating: 4.4,
    reviewCount: 3450,
    inStock: true,
    specifications: { Brand: "Levi's", Material: "100% Cotton", Fit: "Modern", Sizes: "S-XXL" }
  },
  {
    id: "13",
    name: "Running Sneakers - Professional Athletic Shoes",
    price: 6749,
    originalPrice: 8999,
    description: "Professional-grade running shoes with advanced cushioning technology and breathable mesh. Perfect for athletes and casual runners.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg",
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg"
    ],
    rating: 4.7,
    reviewCount: 2890,
    inStock: true,
    specifications: { Brand: "Nike", Cushioning: "Air Max", Breathable: "Mesh", Support: "Ergonomic" }
  },
  {
    id: "14",
    name: "Classic Denim Jeans - Slim Fit",
    price: 2274,
    originalPrice: 3499,
    description: "Timeless denim jeans with premium fabric and comfortable slim fit. Versatile for any occasion.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg",
      "https://images.pexels.com/photos/5869617/pexels-photo-5869617.jpeg"
    ],
    rating: 4.3,
    reviewCount: 2100,
    inStock: true,
    specifications: { Brand: "Wrangler", Material: "100% Cotton", Fit: "Slim", Sizes: "28-40" }
  },
  {
    id: "15",
    name: "Hoodie Sweatshirt - Cozy Comfort",
    price: 1799,
    originalPrice: 2999,
    description: "Comfortable hoodie with soft fleece lining and modern design. Perfect for casual outings and lounging.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/5869617/pexels-photo-5869617.jpeg"
    ],
    rating: 4.5,
    reviewCount: 1850,
    inStock: true,
    specifications: { Brand: "H&M", Material: "Fleece", Pocket: "Kangaroo", Comfortable: "Yes" }
  },
  {
    id: "16",
    name: "Premium Leather Handbag - Sophisticated Style",
    price: 12799,
    originalPrice: 15999,
    description: "Elegant leather handbag with sophisticated design and premium craftsmanship. Ideal for work and leisure.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg",
      "https://images.pexels.com/photos/31453948/pexels-photo-31453948.jpeg",
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg"
    ],
    rating: 4.6,
    reviewCount: 1450,
    inStock: true,
    specifications: { Brand: "Coach", Material: "Genuine Leather", Strap: "Adjustable", Compartments: "Multiple" }
  },
  {
    id: "17",
    name: "Travel Backpack - Durable and Spacious",
    price: 5459,
    originalPrice: 6999,
    description: "Spacious travel backpack with multiple compartments and ergonomic design. Perfect for daily commute and travel.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/31453948/pexels-photo-31453948.jpeg",
      "https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg"
    ],
    rating: 4.7,
    reviewCount: 2340,
    inStock: true,
    specifications: { Brand: "North Face", Capacity: "30L", Water: "Resistant", Comfort: "Ergonomic" }
  },
  {
    id: "18",
    name: "Classic Wristwatch - Timeless Elegance",
    price: 6749,
    originalPrice: 8999,
    description: "Classic analog watch with elegant design and premium quality. Suitable for any formal or casual occasion.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/1136589/pexels-photo-1136589.jpeg",
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg",
      "https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg"
    ],
    rating: 4.4,
    reviewCount: 1680,
    inStock: true,
    specifications: { Brand: "Fossil", Movement: "Quartz", Resistance: "Water-resistant", Material: "Stainless steel" }
  },
  {
    id: "19",
    name: "UV Protection Sunglasses - Stylish Summer Essential",
    price: 6799,
    originalPrice: 7999,
    description: "Premium sunglasses with 100% UV protection and timeless design. Essential for outdoor activities.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg",
      "https://images.pexels.com/photos/1136589/pexels-photo-1136589.jpeg",
      "https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg"
    ],
    rating: 4.6,
    reviewCount: 2450,
    inStock: true,
    specifications: { Brand: "Ray-Ban", UV: "100%", Lens: "Polarized", Frame: "Classic" }
  },
  {
    id: "20",
    name: "Premium Denim Jacket - Casual Style",
    price: 4319,
    originalPrice: 5999,
    description: "Classic denim jacket with premium fabric and timeless style. Versatile for any wardrobe.",
    category: "Fashion",
    images: [
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg",
      "https://images.pexels.com/photos/5869617/pexels-photo-5869617.jpeg"
    ],
    rating: 4.5,
    reviewCount: 1680,
    inStock: true,
    specifications: { Brand: "Levi's", Material: "100% Cotton", Style: "Classic", Pockets: "Multiple" }
  },
  // ── Fitness ──
  {
    id: "21",
    name: "Premium Yoga Mat - Non-Slip Exercise Mat",
    price: 3279,
    originalPrice: 3999,
    description: "Professional-grade yoga mat with superior grip and comfort. Perfect for yoga, pilates, and general fitness.",
    category: "Fitness",
    images: [
      "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg",
      "https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg",
      "https://images.pexels.com/photos/28731770/pexels-photo-28731770.jpeg"
    ],
    rating: 4.8,
    reviewCount: 2100,
    inStock: true,
    specifications: { Brand: "Liforme", Thickness: "6mm", Material: "Eco-friendly", Portable: "Yes" }
  },
  {
    id: "22",
    name: "Adjustable Dumbbells Set - Home Gym Essential",
    price: 21999,
    originalPrice: 24999,
    description: "Versatile adjustable dumbbells set for complete strength training at home. Easy to adjust and store.",
    category: "Fitness",
    images: [
      "https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg",
      "https://images.pexels.com/photos/28731770/pexels-photo-28731770.jpeg",
      "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg"
    ],
    rating: 4.7,
    reviewCount: 1890,
    inStock: true,
    specifications: { Brand: "Powerblocks", Weight: "5-30kg", Adjustment: "Quick", Space: "Saving" }
  },
  {
    id: "23",
    name: "Fitness Tracker Watch - Health Monitor",
    price: 7999,
    originalPrice: 9999,
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and daily activity goals. Perfect health companion.",
    category: "Fitness",
    images: [
      "https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg",
      "https://images.pexels.com/photos/28731770/pexels-photo-28731770.jpeg",
      "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg"
    ],
    rating: 4.5,
    reviewCount: 2340,
    inStock: true,
    specifications: { Brand: "Fitbit", Monitor: "Heart rate", Battery: "7 days", Water: "Resistant" }
  },
  {
    id: "24",
    name: "Resistance Bands Set - Full Body Workout",
    price: 1299,
    originalPrice: 1999,
    description: "Complete set of resistance bands for full-body workouts. Portable and effective for muscle building and rehabilitation.",
    category: "Fitness",
    images: [
      "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg",
      "https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg",
      "https://images.pexels.com/photos/28731770/pexels-photo-28731770.jpeg"
    ],
    rating: 4.4,
    reviewCount: 1560,
    inStock: true,
    specifications: { Brand: "TheraBand", Levels: "5", Material: "Latex", Portable: "Yes" }
  },
  {
    id: "25",
    name: "Treadmill - Home Cardio Machine",
    price: 46749,
    originalPrice: 54999,
    description: "Advanced treadmill with interactive training programs and ergonomic design. Perfect for home cardio workouts.",
    category: "Fitness",
    images: [
      "https://images.pexels.com/photos/28731770/pexels-photo-28731770.jpeg",
      "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg",
      "https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg"
    ],
    rating: 4.6,
    reviewCount: 980,
    inStock: true,
    specifications: { Brand: "NordicTrack", Motor: "3HP", Programs: "22", Display: "Interactive" }
  },
  {
    id: "26",
    name: "Kettlebell Weight - 16kg Premium Cast Iron",
    price: 3149,
    originalPrice: 3499,
    description: "Professional-grade kettlebell for versatile strength and conditioning workouts. Durable cast iron construction.",
    category: "Fitness",
    images: [
      "https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg",
      "https://images.pexels.com/photos/28731770/pexels-photo-28731770.jpeg",
      "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg"
    ],
    rating: 4.7,
    reviewCount: 1340,
    inStock: true,
    specifications: { Brand: "Rogue", Weight: "16kg", Material: "Cast Iron", Handle: "Wide" }
  },
  {
    id: "27",
    name: "Resistance Loop Bands - Set of 5",
    price: 1049,
    originalPrice: 1499,
    description: "Set of 5 resistance loop bands for strength training. Perfect for home workouts and physical therapy.",
    category: "Fitness",
    images: [
      "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg",
      "https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg",
      "https://images.pexels.com/photos/28731770/pexels-photo-28731770.jpeg"
    ],
    rating: 4.6,
    reviewCount: 2100,
    inStock: true,
    specifications: { Brand: "Fit Simplify", Levels: "5", Material: "Latex", Guide: "Instruction" }
  },
  // ── Home & Kitchen ──
  {
    id: "28",
    name: "Espresso Coffee Machine - Automatic Brew",
    price: 20999,
    originalPrice: 24999,
    description: "Premium automatic espresso machine with built-in grinder. Perfect for espresso lovers and daily use.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg",
      "https://images.pexels.com/photos/32103303/pexels-photo-32103303.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.6,
    reviewCount: 1230,
    inStock: true,
    specifications: { Brand: "De'Longhi", Grinder: "Built-in", Temperature: "Adjustable", Frother: "Milk" }
  },
  {
    id: "29",
    name: "Non-Stick Cookware Set - 10 Pieces",
    price: 5759,
    originalPrice: 7999,
    description: "Complete non-stick cookware set with pans, pots, and lids. Perfect for healthy cooking and easy cleanup.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/32103303/pexels-photo-32103303.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.5,
    reviewCount: 2100,
    inStock: true,
    specifications: { Brand: "T-Fal", Coating: "Non-stick", Pieces: "10", OvenSafe: "Yes" }
  },
  {
    id: "30",
    name: "Stainless Steel Refrigerator - 650L Capacity",
    price: 71999,
    originalPrice: 89999,
    description: "Energy-efficient refrigerator with advanced cooling technology and spacious design. Perfect for large families.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg",
      "https://images.pexels.com/photos/8996054/pexels-photo-8996054.jpeg",
      "https://images.pexels.com/photos/32103303/pexels-photo-32103303.jpeg"
    ],
    rating: 4.7,
    reviewCount: 890,
    inStock: true,
    specifications: { Brand: "LG", Capacity: "650L", Compressor: "Inverter", Door: "Double" }
  },
  {
    id: "31",
    name: "Microwave Oven - 30L Convection",
    price: 10659,
    originalPrice: 12999,
    description: "Convection microwave with multiple cooking modes and modern design. Great for reheating and cooking.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/32103303/pexels-photo-32103303.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.4,
    reviewCount: 1450,
    inStock: true,
    specifications: { Brand: "Samsung", Capacity: "30L", Mode: "Convection", Display: "Digital" }
  },
  {
    id: "32",
    name: "Electric Kettle - 1.7L Stainless Steel",
    price: 1949,
    originalPrice: 2499,
    description: "Fast-boiling electric kettle with auto shut-off and temperature control. Perfect for tea and coffee lovers.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/32103303/pexels-photo-32103303.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.6,
    reviewCount: 2340,
    inStock: true,
    specifications: { Brand: "Philips", Capacity: "1.7L", ShutOff: "Auto", Cordless: "Yes" }
  },
  {
    id: "33",
    name: "Modern LED Desk Lamp - Adjustable Brightness",
    price: 5099,
    originalPrice: 5999,
    description: "Smart LED desk lamp with adjustable brightness and color temperature. Perfect for work and study.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg",
      "https://images.pexels.com/photos/32103303/pexels-photo-32103303.jpeg"
    ],
    rating: 4.7,
    reviewCount: 1890,
    inStock: true,
    specifications: { Brand: "Philips Hue", Technology: "LED", USB: "Charging port", Touch: "Control" }
  },
  {
    id: "34",
    name: "Air Purifier - HEPA Filter Technology",
    price: 30099,
    originalPrice: 34999,
    description: "Advanced air purifier with HEPA filter for clean air quality. Reduces pollutants and allergens effectively.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/8996054/pexels-photo-8996054.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg"
    ],
    rating: 4.8,
    reviewCount: 1560,
    inStock: true,
    specifications: { Brand: "Dyson", Filter: "HEPA", Particles: "99.97%", Auto: "Mode" }
  },
  {
    id: "35",
    name: "Blender - 1500W Professional Smoothie Maker",
    price: 17999,
    originalPrice: 19999,
    description: "Powerful professional blender for smoothies, soups, and sauces. Durable and efficient for daily use.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/32103303/pexels-photo-32103303.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.8,
    reviewCount: 1340,
    inStock: true,
    specifications: { Brand: "Vitamix", Motor: "1500W", Warranty: "10 years", Material: "Stainless" }
  },
  {
    id: "36",
    name: "Pillow - Memory Foam",
    price: 7919,
    originalPrice: 8999,
    description: "Premium memory foam pillow for optimal neck support and comfort. Perfect for quality sleep.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/8996054/pexels-photo-8996054.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg"
    ],
    rating: 4.8,
    reviewCount: 2100,
    inStock: true,
    specifications: { Brand: "Tempur", Material: "Memory Foam", Support: "Neck", Cooling: "Gel" }
  },
  {
    id: "37",
    name: "Bed Sheet Set - Egyptian Cotton",
    price: 8599,
    originalPrice: 9999,
    description: "Luxurious Egyptian cotton bed sheets with superior softness and durability. Perfect for quality sleep.",
    category: "Home & Kitchen",
    images: [
      "https://images.pexels.com/photos/8996054/pexels-photo-8996054.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg",
      "https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg"
    ],
    rating: 4.7,
    reviewCount: 1560,
    inStock: true,
    specifications: { Brand: "Brooklinen", Cotton: "Egyptian", ThreadCount: "400", Pockets: "Deep" }
  },
  // ── Beauty ──
  {
    id: "38",
    name: "Advanced Skincare Serum - Vitamin C Formula",
    price: 4399,
    originalPrice: 4999,
    description: "Premium skincare serum with vitamin C for brightening and anti-aging. Smooth and radiant skin guaranteed.",
    category: "Beauty",
    images: [
      "https://images.pexels.com/photos/24602077/pexels-photo-24602077.jpeg",
      "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg",
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg"
    ],
    rating: 4.7,
    reviewCount: 2340,
    inStock: true,
    specifications: { Brand: "Dermalogica", Formula: "Vitamin C", AntiAging: "Yes", CrueltyFree: "Yes" }
  },
  {
    id: "39",
    name: "Moisturizing Face Cream - Hydration Boost",
    price: 1199,
    originalPrice: 1499,
    description: "Lightweight moisturizer for daily hydration and skin nourishment. Suitable for all skin types.",
    category: "Beauty",
    images: [
      "https://images.pexels.com/photos/24602077/pexels-photo-24602077.jpeg",
      "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg"
    ],
    rating: 4.6,
    reviewCount: 3120,
    inStock: true,
    specifications: { Brand: "Cetaphil", Acid: "Hyaluronic", Texture: "Light", Greasy: "Non-greasy" }
  },
  {
    id: "40",
    name: "Facial Clay Mask - Deep Cleansing",
    price: 449,
    originalPrice: 599,
    description: "Powerful clay mask for deep pore cleansing and detoxification. Great for acne-prone and oily skin.",
    category: "Beauty",
    images: [
      "https://images.pexels.com/photos/24602077/pexels-photo-24602077.jpeg",
      "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg"
    ],
    rating: 4.5,
    reviewCount: 2560,
    inStock: true,
    specifications: { Brand: "Aztec Secret", Natural: "100%", Cleansing: "Deep", OilControl: "Yes" }
  },
  {
    id: "41",
    name: "Eye Cream - Anti-Wrinkle Formula",
    price: 1639,
    originalPrice: 1999,
    description: "Specialized eye cream for reducing fine lines and dark circles. Delicate formula for sensitive eye area.",
    category: "Beauty",
    images: [
      "https://images.pexels.com/photos/24602077/pexels-photo-24602077.jpeg",
      "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg",
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg"
    ],
    rating: 4.4,
    reviewCount: 1890,
    inStock: true,
    specifications: { Brand: "Olay", Formula: "Anti-wrinkle", DarkCircles: "Reduces", FastAbsorbing: "Yes" }
  },
  {
    id: "42",
    name: "Lip Balm - Nourishing Hydration",
    price: 244,
    originalPrice: 349,
    description: "Long-lasting lip balm with SPF protection and moisturizing formula. Keep lips soft and healthy.",
    category: "Beauty",
    images: [
      "https://images.pexels.com/photos/24602077/pexels-photo-24602077.jpeg",
      "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg"
    ],
    rating: 4.6,
    reviewCount: 3450,
    inStock: true,
    specifications: { Brand: "Carmex", SPF: "15", Moisturizing: "Yes", Portable: "Yes" }
  },
  {
    id: "43",
    name: "Hair Shampoo - Volumizing Formula",
    price: 162,
    originalPrice: 249,
    description: "Volumizing shampoo for thick and healthy hair. Gentle formula for daily use.",
    category: "Beauty",
    images: [
      "https://images.pexels.com/photos/24602077/pexels-photo-24602077.jpeg",
      "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg"
    ],
    rating: 4.5,
    reviewCount: 4230,
    inStock: true,
    specifications: { Brand: "Pantene", Formula: "Volumizing", SulfateFree: "Yes", Affordable: "Yes" }
  },
  {
    id: "44",
    name: "Sunscreen SPF 50 - UV Protection",
    price: 623,
    originalPrice: 799,
    description: "Broad-spectrum sunscreen for maximum UV protection. Water-resistant and lightweight formula.",
    category: "Beauty",
    images: [
      "https://images.pexels.com/photos/24602077/pexels-photo-24602077.jpeg",
      "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg",
      "https://images.pexels.com/photos/32677227/pexels-photo-32677227.jpeg"
    ],
    rating: 4.7,
    reviewCount: 2890,
    inStock: true,
    specifications: { Brand: "Neutrogena", SPF: "50", WaterResistant: "Yes", Lightweight: "Yes" }
  },
  // ── Books ──
  {
    id: "45",
    name: "The Midnight Library - Fiction Novel",
    price: 299,
    originalPrice: 499,
    description: "Bestselling fiction novel about alternate lives and second chances. A captivating and inspiring read for all ages.",
    category: "Books",
    images: [
      "https://images.pexels.com/photos/8207315/pexels-photo-8207315.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg"
    ],
    rating: 4.7,
    reviewCount: 5240,
    inStock: true,
    specifications: { Author: "Matt Haig", Pages: "384", Format: "Hardcover", Award: "Bestseller" }
  },
  {
    id: "46",
    name: "Atomic Habits - Self-Improvement Book",
    price: 389,
    originalPrice: 599,
    description: "Transform your habits and build a better life. Practical strategies for creating lasting change and success.",
    category: "Books",
    images: [
      "https://images.pexels.com/photos/8207315/pexels-photo-8207315.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg"
    ],
    rating: 4.8,
    reviewCount: 6890,
    inStock: true,
    specifications: { Author: "James Clear", Pages: "320", Format: "Paperback", Techniques: "Practical" }
  },
  {
    id: "47",
    name: "The Python Cookbook - Programming Guide",
    price: 974,
    originalPrice: 1299,
    description: "Comprehensive guide to Python programming with practical recipes and solutions. Essential for developers.",
    category: "Books",
    images: [
      "https://images.pexels.com/photos/8207315/pexels-photo-8207315.jpeg",
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg",
      "https://images.pexels.com/photos/31410610/pexels-photo-31410610.jpeg"
    ],
    rating: 4.6,
    reviewCount: 1230,
    inStock: true,
    specifications: { Author: "David Beazley", Pages: "656", Format: "Hardcover", Technical: "Yes" }
  },
  {
    id: "48",
    name: "Sapiens - Human History Book",
    price: 524,
    originalPrice: 749,
    description: "Fascinating exploration of human history and society. A must-read for understanding our world.",
    category: "Books",
    images: [
      "https://images.pexels.com/photos/8207315/pexels-photo-8207315.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg"
    ],
    rating: 4.7,
    reviewCount: 3450,
    inStock: true,
    specifications: { Author: "Yuval Noah Harari", Pages: "496", Format: "Paperback", Educational: "Yes" }
  },
  {
    id: "49",
    name: "The Great Gatsby - Classic Literature",
    price: 219,
    originalPrice: 399,
    description: "Classic American novel about love, wealth, and the American Dream. A timeless literary masterpiece.",
    category: "Books",
    images: [
      "https://images.pexels.com/photos/8207315/pexels-photo-8207315.jpeg",
      "https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg",
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg"
    ],
    rating: 4.5,
    reviewCount: 4120,
    inStock: true,
    specifications: { Author: "F. Scott Fitzgerald", Pages: "180", Format: "Paperback", Classic: "Yes" }
  },
];
