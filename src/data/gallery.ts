export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "crockery" | "serving" | "furniture" | "equipment" | "linens" | "uniforms";
}

export const galleryItems: GalleryItem[] = Array.from({ length: 30 }, (_, i) => {
  const categories: GalleryItem["category"][] = ["crockery", "serving", "furniture", "equipment", "linens", "uniforms"];
  // Distribute 30 images across 6 categories (5 images each)
  const category = categories[Math.floor(i / 5)];
  
  return {
    id: i + 1,
    src: `/gallery/${i + 1}.jpeg`,
    alt: `${category} item ${i + 1}`,
    category: category,
  };
});

export const galleryFilters = ["all", "crockery", "serving", "furniture", "equipment", "linens", "uniforms"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];
