export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "crockery" | "serving" | "furniture" | "equipment" | "linens" | "uniforms";
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1556912386-3f69527d81a5?w=800&q=80", alt: "Premium crockery set", category: "crockery" },
  { id: 2, src: "https://images.unsplash.com/photo-1584269666885-3b17c2a7dbb5?w=800&q=80", alt: "Stainless steel cutlery", category: "crockery" },
  { id: 3, src: "https://images.unsplash.com/photo-1574966739908-0113271777d5?w=800&q=80", alt: "Serving platters", category: "serving" },
  { id: 4, src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80", alt: "Event furniture setup", category: "furniture" },
  { id: 5, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "Lounge arrangements", category: "furniture" },
  { id: 6, src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80", alt: "Banquet chairs", category: "furniture" },
  { id: 7, src: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80", alt: "Commercial kitchen equipment", category: "equipment" },
  { id: 8, src: "https://images.unsplash.com/photo-1588726569149-fb55919e917d?w=800&q=80", alt: "Industrial ovens", category: "equipment" },
  { id: 9, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", alt: "Hotel room linens", category: "linens" },
  { id: 10, src: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=800&q=80", alt: "Staff uniforms", category: "uniforms" },
  { id: 11, src: "https://images.unsplash.com/photo-1534349762913-96e97113fe3f?w=800&q=80", alt: "Red carpet setup", category: "furniture" },
  { id: 12, src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80", alt: "Marquee setup", category: "furniture" },
];

export const galleryFilters = ["all", "crockery", "serving", "furniture", "equipment", "linens", "uniforms"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];
