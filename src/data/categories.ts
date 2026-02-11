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
  weddings: {
    slug: "weddings",
    title: "Weddings",
    subtitle: "Your Dream Day, Perfected",
    description:
      "From intimate ceremonies to grand celebrations, Shaheen crafts weddings that reflect your unique love story. Every detail — from floral arrangements to multi-course dining — is curated with impeccable taste and precision.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    services: [
      "Full wedding planning & coordination",
      "Custom menu design & gourmet catering",
      "Venue decoration & floral styling",
      "Premium furniture & linen rentals",
      "Professional staffing & service",
      "Entertainment & lighting design",
    ],
    benefits: [
      "Dedicated wedding coordinator",
      "Tastings & menu customization",
      "Setup & teardown included",
      "Flexible packages for every budget",
    ],
    ctaText: "Plan Your Wedding",
  },
  corporate: {
    slug: "corporate",
    title: "Corporate Events",
    subtitle: "Impress. Connect. Elevate.",
    description:
      "Elevate your brand with flawlessly executed corporate events. Whether it's a product launch, gala dinner, or annual conference, Shaheen delivers experiences that leave lasting impressions on your guests and stakeholders.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    services: [
      "Conference & seminar management",
      "Product launch events",
      "Gala dinners & award ceremonies",
      "Team building experiences",
      "AV & stage setup",
      "Corporate catering solutions",
    ],
    benefits: [
      "Brand-aligned event design",
      "Scalable for 50 to 5,000+ guests",
      "End-to-end project management",
      "Post-event reporting & analytics",
    ],
    ctaText: "Plan Your Event",
  },
  furniture: {
    slug: "furniture",
    title: "Furniture Rental",
    subtitle: "Elegance, Delivered",
    description:
      "Transform any venue with our curated collection of premium furniture. From classic Chiavari chairs to modern lounge sets, our inventory is maintained to the highest standards for a flawless presentation every time.",
    heroImage: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80",
    services: [
      "Chiavari & cross-back chairs",
      "Banquet & cocktail tables",
      "Lounge furniture sets",
      "Linen & tableware packages",
      "Stage & dance floor rentals",
      "Delivery, setup & collection",
    ],
    benefits: [
      "Premium quality, immaculate condition",
      "Flexible rental periods",
      "On-site setup & styling support",
      "Large inventory for events of any scale",
    ],
    ctaText: "Browse Our Collection",
  },
  staffing: {
    slug: "staffing",
    title: "Professional Staffing",
    subtitle: "The Team Behind the Magic",
    description:
      "Our trained hospitality professionals are the backbone of every successful event. From courteous servers to experienced event managers, Shaheen provides staff who embody professionalism and grace.",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    services: [
      "Waitstaff & bartenders",
      "Event managers & coordinators",
      "Chefs & kitchen crew",
      "Valet & concierge staff",
      "Security personnel",
      "Cleanup & teardown teams",
    ],
    benefits: [
      "Rigorously trained professionals",
      "Uniformed & presentation-ready",
      "Flexible team sizing",
      "Multilingual staff available",
    ],
    ctaText: "Staff Your Event",
  },
  "kitchen-equipment": {
    slug: "kitchen-equipment",
    title: "Kitchen Equipment",
    subtitle: "Professional Grade, Event Ready",
    description:
      "Equip your event kitchen with commercial-grade appliances and tools. Whether you need a full mobile kitchen setup or individual pieces, our equipment is clean, certified, and ready to perform.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    services: [
      "Commercial ovens & stoves",
      "Refrigeration units",
      "Chafing dishes & warmers",
      "Prep stations & work tables",
      "Beverage dispensers & ice makers",
      "Full mobile kitchen setups",
    ],
    benefits: [
      "Health & safety certified",
      "Delivered & installed on-site",
      "Flexible rental durations",
      "Technical support available",
    ],
    ctaText: "Rent Equipment",
  },
};
