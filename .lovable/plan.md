

# Shaheen — Premium Event Management & Catering Website

**Tagline:** *"Where Elegance Meets Excellence"*

---

## Design System

- **Color Palette:** Deep Charcoal (#121212), Champagne Gold (#D4AF37), Off-White (#FAF9F6)
- **Typography:** Playfair Display (headings), Inter (body)
- **Style:** Glassmorphism navbar, soft card shadows, rounded-xl corners, subtle gold accents throughout
- **Animations:** Smooth fade-ins on scroll, hover scale effects, animated page transitions using Framer Motion

---

## Persistent Layout

### Navbar
- Glassmorphism sticky header — transparent at top, solid on scroll
- Logo ("Shaheen") on left, nav links on right
- **"Categories" dropdown** on hover with smooth animation: Weddings, Corporate Events, Furniture Rental, Staffing, Kitchen Equipment
- Mobile: hamburger menu with smooth slide-in, dropdown works inside mobile menu

### Footer
- Full-width luxury footer with logo, quick links, categories, contact info, social icons, and tagline
- Subtle gold accent details

---

## Pages

### 🏠 Home Page
1. **Hero Section** — Full-width animated carousel (3-4 slides) with auto-play, elegant text overlays, and CTA button
2. **Services at a Glance** — 4-column responsive grid with icons, titles, descriptions, and hover effects
3. **Why Choose Us** — 3-4 feature cards with Lucide icons and scroll-reveal animations

### 🏢 About Page
1. **Our Story** — Two-column layout (text left, image right), responsive stacking
2. **Our Mission** — Card-based layout with professional tone and premium styling

### 🖼 Gallery Page
1. **Filterable Grid** — Filter buttons (All, Weddings, Furniture, Catering, Corporate) with animated layout shifts
2. **Lightbox** — Click to open image overlay with close, next/prev navigation, and fade animation
3. Uses high-quality Unsplash placeholder images

### 📂 Categories Page (Dynamic)
- Single reusable template at `/categories/:slug`
- Slugs: weddings, corporate, furniture, staffing, kitchen-equipment
- Each renders: hero section, description, services list, benefits, and CTA
- Content driven by a local data object (no backend needed)

### 📞 Contact Page
- **Left column:** Address, phone, email, styled map placeholder, gold accents
- **Right column:** Form with Name, Event Date, Guest Count, Message fields
- React Hook Form with validation, clean error states, and success message

---

## Technical Notes
- No backend needed — all content is local/static
- Framer Motion for all animations (page transitions, reveals, carousel, dropdown, lightbox)
- Unsplash images for gallery and hero sections
- Fully responsive mobile-first design

