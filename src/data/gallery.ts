export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "weddings" | "furniture" | "catering" | "corporate";
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Elegant wedding reception", category: "weddings" },
  { id: 2, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", alt: "Outdoor wedding ceremony", category: "weddings" },
  { id: 3, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", alt: "Wedding floral decor", category: "weddings" },
  { id: 4, src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80", alt: "Premium event furniture", category: "furniture" },
  { id: 5, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "Luxury lounge setup", category: "furniture" },
  { id: 6, src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80", alt: "Elegant dining chairs", category: "furniture" },
  { id: 7, src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80", alt: "Gourmet catering spread", category: "catering" },
  { id: 8, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Fine dining service", category: "catering" },
  { id: 9, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Artisan food plating", category: "catering" },
  { id: 10, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Corporate conference", category: "corporate" },
  { id: 11, src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80", alt: "Corporate gala dinner", category: "corporate" },
  { id: 12, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", alt: "Corporate award ceremony", category: "corporate" },
];

export const galleryFilters = ["all", "weddings", "furniture", "catering", "corporate"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];
