import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryFilters, GalleryFilter } from "@/data/gallery";
import ScrollReveal from "@/components/ScrollReveal";

const Gallery = () => {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);

  const currentIndex = lightbox !== null ? filtered.findIndex((item) => item.id === lightbox) : -1;

  const goPrev = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id);
  };
  const goNext = () => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].id);
  };

  const currentItem = filtered.find((item) => item.id === lightbox);

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-center justify-center bg-charcoal pt-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-offwhite md:text-6xl">Our Gallery</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="bg-charcoal py-16">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium capitalize transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-offwhite/20 text-offwhite/60 hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => openLightbox(item.id)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/40" />
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-sm font-medium text-offwhite">{item.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 rounded-full border border-offwhite/20 p-2 text-offwhite/70 transition hover:border-primary hover:text-primary"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-6 rounded-full border border-offwhite/20 p-2 text-offwhite/70 transition hover:border-primary hover:text-primary"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {currentIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-6 rounded-full border border-offwhite/20 p-2 text-offwhite/70 transition hover:border-primary hover:text-primary"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            <motion.img
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
