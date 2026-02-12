export interface CategoryData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  services: string[];
  benefits: string[];
  ctaText: string;
}

export const categoriesData: Record<string, CategoryData> = {
  crockery: {
    slug: "crockery",
    title: "Crockery",
    subtitle: "Commercial Grade Dinnerware",
    description:
      "We supply high-durability crockery designed for the rigors of commercial catering and hospitality environments. Our collections range from fine china for banquets to chip-resistant stoneware for high-volume operations.",
    heroImage: "https://images.unsplash.com/photo-1617784625140-515e220ba148?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      "Bulk dinner sets supply",
      "Buffet display platters",
      "Stackable catering bowls",
      "Tea & coffee service volume packs",
      "Custom branded tableware",
      "Hotel restaurant supplies",
    ],
    benefits: [
      "Industrial chip-resistance",
      "Stackable for storage efficiency",
      "Commercial dishwasher safe",
      "Wholesale bulk pricing",
    ],
    ctaText: "Request Crockery Quote",
  },
  "serving-products": {
    slug: "serving-products",
    title: "Serving Products",
    subtitle: "Professional Buffet Solutions",
    description:
      "Equip your catering operation with our comprehensive range of serving products. We provide durable, hygienic, and aesthetic serving solutions suitable for hotels, restaurants, and large-scale event catering.",
    heroImage: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&q=80",
    services: [
      "Stainless steel chafing dishes",
      "Melamine serving trays",
      "Presentation risers & stands",
      "Bulk salad bowls",
      "Juice & beverage dispensers",
      "Gastronorm pans & lids",
    ],
    benefits: [
      "Food-safe materials",
      "Easy-clean surfaces",
      "Heat retention properties",
      "Durable construction",
    ],
    ctaText: "Get Serving Gear Quote",
  },
  "staff-uniforms": {
    slug: "staff-uniforms",
    title: "Staff Uniforms",
    subtitle: "Hospitality Apparel Supply",
    description:
      "Source professional uniforms for your entire workforce. We manufacture and supply high-quality, comfortable, and durable uniforms tailored for chefs, housekeeping, waitstaff, and security personnel.",
    heroImage: "https://images.unsplash.com/photo-1766289198971-e53bc0a762c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      "Chef coats & utility aprons",
      "Service staff waistcoats",
      "Housekeeping & janitorial uniforms",
      "Security guard attire",
      "Logo embroidery services",
      "Safety footwear supply",
    ],
    benefits: [
      "Industrial laundry resistant",
      "Fade-resistant fabrics",
      "Wide size range stock",
      "Uniform consistency",
    ],
    ctaText: "Order Staff Uniforms",
  },
  furniture: {
    slug: "furniture",
    title: "Furniture",
    subtitle: "Event & Hospitality Furnishing",
    description:
      "Wholesale supply of heavy-duty furniture for events and hospitality. Our inventory includes stackable banquet chairs, folding tables, and lounge furniture designed for frequent transport and setup.",
    heroImage: "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      "Stackable banquet chairs",
      "Folding round & rectangular tables",
      "Outdoor rattan furniture sets",
      "Bar stools & cocktail tables",
      "Sofa lounges for events",
      "Chair covers & cushions",
    ],
    benefits: [
      "Space-saving nesting designs",
      "High weight capacity",
      "Weather-resistant coatings",
      "Bulk order discounts",
    ],
    ctaText: "Request Furniture Catalog",
  },
  "kitchen-equipment": {
    slug: "kitchen-equipment",
    title: "Kitchen Equipment",
    subtitle: "Commercial Kitchen Supply",
    description:
      "Reliable heavy machinery and equipment for commercial kitchens. We supply industrial-grade appliances ensuring your culinary operations run smoothly and efficiently under high demand.",
    heroImage: "https://images.unsplash.com/photo-1580929753603-10519c6e480a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      "Industrial convection ovens",
      "Commercial refrigeration units",
      "Stainless steel prep tables",
      "Heavy-duty mixers & grinders",
      "Dishwashing units",
      "Ventilation hoods",
    ],
    benefits: [
      "Energy-efficient ratings",
      "Health & safety compliant",
      "Parts & service support",
      "Installation assistance",
    ],
    ctaText: "Inquire About Equipment",
  },
  "table-linens": {
    slug: "table-linens",
    title: "Table Linens",
    subtitle: "Event Textile Supply",
    description:
      "Premium table linens manufactured for the event industry. Our fabrics are selected for their durability, stain resistance, and ability to withstand repeated commercial laundering while maintaining a luxury feel.",
    heroImage: "https://plus.unsplash.com/premium_photo-1675235279499-45d8a5762a20?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      "Round & rectangular tablecloths",
      "Reusable cloth napkins",
      "Spandex chair covers",
      "Table runners & overlays",
      "Stage skirting",
      "Custom size sewing",
    ],
    benefits: [
      "Commercial wash durability",
      "Wrinkle-resistant options",
      "Color-fast dyes",
      "Large stock availability",
    ],
    ctaText: "Order Table Linens",
  },
  "marquee-fabrication": {
    slug: "marquee-fabrication",
    title: "Marquee Fabrication",
    subtitle: "Structural Fabrications",
    description:
      "Leading fabricators of steel and aluminum marquee structures. We design, build, and supply extensive tenting solutions for wedding halls, corporate events, and industrial warehousing needs.",
    heroImage: "https://static.wixstatic.com/media/445bd3_2c4f5544b60843b096f383aae84de040~mv2.jpg/v1/fill/w_640,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/445bd3_2c4f5544b60843b096f383aae84de040~mv2.jpg",
    services: [
      "Steel structure fabrication",
      "PVC tensile fabric installation",
      "Aluminum modular tents",
      "Custom canopy manufacturing",
      "Flooring platform construction",
      "Maintenance & repair services",
    ],
    benefits: [
      "Wind & weather rated",
      "Modular expandability",
      "Long structural lifespan",
      "Turnkey installation",
    ],
    ctaText: "Get Fabrication Quote",
  },
  "room-linens": {
    slug: "room-linens",
    title: "Room Linens",
    subtitle: "Hotel Textile Supply",
    description:
      "Wholesale supplier of bed and bath linens for the hospitality sector. We provide crisp, durable, and comfortable textiles that meet the standards of hotels, guest houses, and hospitals.",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    services: [
      "Percale bed sheets (T-200 to T-400)",
      "Duvet inserts & covers",
      "Hotel pillows & protectors",
      "Terry bath towels & mats",
      "Bathrobes & slippers",
      "Pool towels",
    ],
    benefits: [
      "Industrial wash proven",
      "High tensile strength",
      "Bright white retention",
      "Soft skin feel",
    ],
    ctaText: "Request Linen Samples",
  },
  carpet: {
    slug: "carpet",
    title: "Carpet",
    subtitle: "Event Flooring Supply",
    description: "Distributor of event carpets and flooring solutions. We stock vast quantities of non-woven and exhibition carpets in various colors for immediate deployment.",
    heroImage: "https://images.unsplash.com/photo-1534349762913-96e97113fe3f?w=1920&q=80",
    services: ["Exhibition needle punch carpet", "VIP red carpet rolls", "Artificial grass turf", "Vinyl flooring rolls", "Custom aisle runners", "Installation tape & accessories"],
    benefits: ["Fire retardant options", "Disposable & reusable grades", "Immediate stock delivery", "Cost-effective coverage"],
    ctaText: "Order Event Carpet",
  },
  "kitchen-utensils": {
    slug: "kitchen-utensils",
    title: "Kitchen Utensils",
    subtitle: "Culinary Tool Supply",
    description: "Complete sourcing partner for professional kitchen smallwares. Equipping chefs with durable, NSF-standard tools required for efficient food preparation.",
    heroImage: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=1920&q=80",
    services: ["Professional chefs knives", "Color-coded cutting boards", "Stainless steel mixing bowls", "High-heat spatulas & tongs", "Portion control scoops", "Thermometers & timers"],
    benefits: ["NSF sanitation certified", "Ergonomic designs", "Commercial durability", "Comprehensive catalog"],
    ctaText: "Shop Smallwares",
  },
  cutlery: {
    slug: "cutlery",
    title: "Cutlery",
    subtitle: "Flatware Wholesale",
    description: "Volume supplier of stainless steel cutlery. We offer various grades and patterns suitable for canteens, restaurants, and luxury banquets.",
    heroImage: "https://images.unsplash.com/photo-1584269666885-3b17c2a7dbb5?w=1920&q=80",
    services: ["18/10 Stainless steel sets", "Economy catering flatware", "Steak knives bulk packs", "Serving spoons & ladles", "Dessert forks & spoons", "Cutlery storage bins"],
    benefits: ["Rust & corrosion resistant", "Dishwasher safe polish", "Balanced weight", "Replacement stock availability"],
    ctaText: "Request Cutlery Quote",
  },
  "tent-accessories": {
    slug: "tent-accessories",
    title: "Tent Accessories",
    subtitle: "Marquee Enhancement Solutions",
    description: "Complete your marquee setup with our extensive range of tent accessories. From lining and lighting to sidewalls and flooring, we provide everything needed to enhance the functionality and aesthetics of your event structure.",
    heroImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80",
    services: ["Decorative linings & drapes", "Chandelier & LED lighting", "Sidewalls & window panels", "Climate control units", "Safety & fire equipment", "Hardwood & carpet flooring"],
    benefits: ["Elevated event aesthetics", "Climate protection", "Customizable interiors", "Easy installation"],
    ctaText: "Get Accessories Quote",
  },
};
