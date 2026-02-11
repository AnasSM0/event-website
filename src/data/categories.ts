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
    subtitle: "Premium Dining Essentials",
    description:
      "Elevate your dining experience with our extensive collection of high-quality crockery. From fine china for elegant banquets to durable stoneware for daily operations, Anas Fabrics provides tableware that combines aesthetics with resilience.",
    heroImage: "https://images.unsplash.com/photo-1603194562237-7749bd003463?w=1920&q=80",
    services: [
      "Fine dining dinner sets",
      "Buffet ware & serving platters",
      "Durable melamine collections",
      "Tea & coffee service sets",
      "Custom branding options",
      "Bulk supply for hotels",
    ],
    benefits: [
      "Chip-resistant durability",
      "Wide range of designs",
      "Dishwasher safe",
      "Immediate bulk availability",
    ],
    ctaText: "Order Crockery",
  },
  "serving-products": {
    slug: "serving-products",
    title: "Serving Products",
    subtitle: "Presentation Perfected",
    description:
      "Presentation is everything. Our range of serving products ensures that every dish is showcased beautifully. We offer a variety of trays, bowls, stands, and specialized serving gear tailored for professional catering environments.",
    heroImage: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&q=80",
    services: [
      "Stainless steel trays & platters",
      "Wooden & slate serving boards",
      "Cake stands & tiered displays",
      "Salad bowls & servers",
      "Beverage dispensers",
      "Chafing dishes",
    ],
    benefits: [
      "Enhances food presentation",
      "Durable & easy to clean",
      "modern & classic styles",
      "Versatile utility",
    ],
    ctaText: "View Serving Gear",
  },
  "staff-uniforms": {
    slug: "staff-uniforms",
    title: "Staff Uniforms",
    subtitle: "Professionalism in Every Stitch",
    description:
      "Dress your team for success with our professionally designed staff uniforms. We provide high-quality, comfortable, and stylish uniforms for chefs, waiters, housekeeping, and front-of-house staff, ensuring a cohesive brand image.",
    heroImage: "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=1920&q=80",
    services: [
      "Chef jackets & aprons",
      "Waiter vests & shirts",
      "Housekeeping tunics",
      "Security personnel uniforms",
      "Custom embroidery & logos",
      "Industrial safety wear",
    ],
    benefits: [
      "Breathable & durable fabrics",
      "Custom brand integration",
      "Wide range of sizes",
      "Professional appearance",
    ],
    ctaText: "Get Uniforms",
  },
  furniture: {
    slug: "furniture",
    title: "Furniture",
    subtitle: "Comfort Meets Durability",
    description:
      "Furnish your spaces with our premium selection of event and hospitality furniture. Whether for a banquet hall, restaurant, or outdoor marquee, our furniture combines comfort, style, and industrial-grade durability.",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80",
    services: [
      "Banquet chairs & tables",
      "Outdoor seating solutions",
      "Lounge sofas & ottomans",
      "Bar stools & high tables",
      "Folding & stackable options",
      "Custom upholstery services",
    ],
    benefits: [
      "Space-saving designs",
      "High load-bearing capacity",
      "Weather-resistant options",
      "Elegant aesthetics",
    ],
    ctaText: "Browse Furniture",
  },
  "kitchen-equipment": {
    slug: "kitchen-equipment",
    title: "Kitchen Equipment",
    subtitle: "The Heart of Your Operation",
    description:
      "Equip your commercial kitchen with top-tier machinery and tools. We supply everything from heavy-duty ovens to precision cookware, enabling your culinary team to perform at their best with reliable, compliant equipment.",
    heroImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&q=80",
    services: [
      "Commercial ovens & ranges",
      "Industrial refrigerators",
      "Food preparation machines",
      "Stainless steel worktables",
      "Cookware & utensils",
      "Ventilation systems",
    ],
    benefits: [
      "Energy efficient models",
      "Health & safety compliant",
      "Robust warranty support",
      "Installation services",
    ],
    ctaText: "Equip Your Kitchen",
  },
  "table-linens": {
    slug: "table-linens",
    title: "Table Linens",
    subtitle: "Fabric of Elegance",
    description:
      "Transform any table setting with our luxurious table linens. Available in a vast array of colors, textures, and fabrics, our linens are designed to withstand frequent commercial laundering while maintaining their feel and finish.",
    heroImage: "https://images.unsplash.com/photo-1562002591-627c264a7872?w=1920&q=80",
    services: [
      "Tablecloths & overlays",
      "Napkins & runners",
      "Chair covers & sashes",
      "Skirting & clips",
      "Custom size fabrication",
      "Stain-resistant fabrics",
    ],
    benefits: [
      "Premium fabric feel",
      "High color retention",
      "Easy maintenance",
      "Custom branding available",
    ],
    ctaText: "Shop Linens",
  },
  "marquee-fabrication": {
    slug: "marquee-fabrication",
    title: "Marquee Fabrication",
    subtitle: "Structures for Every Event",
    description:
      "Anas Fabrics specializes in the fabrication of high-quality marquees and tents. Our structures are engineered for stability and weather resistance, providing perfect venues for outdoor events, weddings, and corporate gatherings.",
    heroImage: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80",
    services: [
      "Wedding marquees",
      "Corporate event tents",
      "Warehouse structures",
      "Custom shade sails",
      "Flooring & lining systems",
      "Installation & maintenance",
    ],
    benefits: [
      "Weather-proof materials",
      "Customizable sizes",
      "Quick assembly designs",
      "Long-lasting durability",
    ],
    ctaText: "Discuss Fabrication",
  },
  "room-linens": {
    slug: "room-linens",
    title: "Room Linens",
    subtitle: "Comfort in Every Layer",
    description:
      "Ensure your guests sleep in luxury with our premium room linens. specialized for hotels and guest houses, our bedding and bath linens offer the perfect balance of softness, durability, and hygiene.",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    services: [
      "Bed sheets & duvet covers",
      "Pillows & protectors",
      "Bath towels & robes",
      "Mattress toppers",
      "Decorative throws",
      "Pool & spa towels",
    ],
    benefits: [
      "High thread count options",
      "Industrial wash durable",
      "Soft touch finish",
      "Hypoallergenic materials",
    ],
    ctaText: "Upgrade Linens",
  },
  carpet: {
    slug: "carpet",
    title: "Carpet",
    subtitle: "Flooring Solutions",
    description: "High-quality carpets for events, marquees, and exhibitions.",
    heroImage: "https://images.unsplash.com/photo-1534349762913-96e97113fe3f?w=1920&q=80",
    services: ["Event Carpeting", "Walking Runners", "Artificial Grass", "VIP Red Carpet", "Exhibition Flooring", "Custom Cuts"],
    benefits: ["Durable", "Fast Installation", "Various Colors", "Slip Resistant"],
    ctaText: "Get Carpeting",
  },
  "kitchen-utensils": {
    slug: "kitchen-utensils",
    title: "Kitchen Utensils",
    subtitle: "Essential Tools",
    description: "Professional grade utensils for commercial kitchens.",
    heroImage: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=1920&q=80",
    services: ["Knives & Sharpeners", "Whisks & Spatulas", "Tongs & Ladles", "Measuring Tools", "Graters & Peelers", "Thermometers"],
    benefits: ["NSF Certified", "Ergonomic Grips", "Heat Resistant", "Dishwasher Safe"],
    ctaText: "Shop Utensils",
  },
  cutlery: {
    slug: "cutlery",
    title: "Cutlery",
    subtitle: "Dining Elegance",
    description: "Premium stainless steel cutlery for all dining occasions.",
    heroImage: "https://images.unsplash.com/photo-1584269666885-3b17c2a7dbb5?w=1920&q=80",
    services: ["Forks, Knives, Spoons", "Steak Knives", "Dessert Sets", "Serving Spoons", "Soup Ladles", "Butter Spreaders"],
    benefits: ["Rust Resistant", "High Polish Finish", "Weighted Balance", "Bulk Availability"],
    ctaText: "Order Cutlery",
  },
};
