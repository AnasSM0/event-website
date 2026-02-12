import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { UtensilsCrossed, Award, Users, Clock, Shield, Star, Shirt, Armchair, Refrigerator, Scroll, Tent, Layers, Utensils, ConciergeBell, BedDouble } from "lucide-react";

const slides = [
  {
    image: "https://www.gulffoodsuppliesllc.com/wp-content/uploads/2024/04/Industrial-Catering-1.jpg",
    title: "Premium Industrial Catering Supplies",
    subtitle: "High-quality equipment for professional operations",
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?w=1920&q=80",
    title: "Reliable Business Support Services",
    subtitle: "Partnering with you for operational excellence",
  },
  {
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80",
    title: "Event & Marquee Infrastructure",
    subtitle: "Fabrication and setup for events of any scale",
  },
];

const services = [
  { icon: Utensils, title: "Crockery", description: "Elegant and durable dinnerware for all occasions.", link: "/categories/crockery" },
  { icon: Shirt, title: "Staff Uniforms", description: "Professional attire for your hospitality team.", link: "/categories/staff-uniforms" },
  { icon: Armchair, title: "Furniture", description: "Premium tables, chairs, and lounge setups.", link: "/categories/furniture" },
  { icon: Refrigerator, title: "Kitchen Equipment", description: "Commercial-grade appliances for mass catering.", link: "/categories/kitchen-equipment" },
  { icon: Scroll, title: "Table Linens", description: "Luxurious tablecloths, napkins, and runners.", link: "/categories/table-linens" },
  { icon: Tent, title: "Marquee Fabrication", description: "Custom tents and structures for outdoor events.", link: "/categories/marquee-fabrication" },
  { icon: Layers, title: "Carpet", description: "Red carpets, exhibition flooring, and grass.", link: "/categories/carpet" },
  { icon: UtensilsCrossed, title: "Kitchen Utensils", description: "Essential tools for culinary preparation.", link: "/categories/kitchen-utensils" },
  { icon: Utensils, title: "Cutlery", description: "Stainless steel flatware in various styles.", link: "/categories/cutlery" },
  { icon: ConciergeBell, title: "Serving Products", description: "Trays, stands, and chafing dishes.", link: "/categories/serving-products" },
  { icon: BedDouble, title: "Room Linens", description: "Premium bedding and bath linens for hotels.", link: "/categories/room-linens" },
];

const whyUs = [
  { icon: Award, title: "Award-Winning Service", description: "Recognized for excellence in luxury event management across the region." },
  { icon: Clock, title: "Flawless Execution", description: "Meticulous planning and on-time delivery, every single time." },
  { icon: Shield, title: "Trusted by Hundreds", description: "A proven track record with discerning clients who demand the best." },
  { icon: Star, title: "Bespoke Experiences", description: "Every event is uniquely tailored — no templates, no shortcuts." },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* Hero Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            />
            <div className="absolute inset-0 bg-charcoal/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-5xl font-bold text-offwhite md:text-7xl">
                {slides[current].title}
              </h1>
              <p className="mt-4 text-lg text-offwhite/70 md:text-xl">
                {slides[current].subtitle}
              </p>
              <Link to="/contact">
                <Button className="mt-8 rounded-full bg-primary px-8 py-6 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute bottom-12 flex items-center gap-6">
            <button onClick={prev} className="rounded-full border border-offwhite/30 p-2 text-offwhite/70 transition hover:border-primary hover:text-primary" aria-label="Previous slide">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-offwhite/40"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="rounded-full border border-offwhite/30 p-2 text-offwhite/70 transition hover:border-primary hover:text-primary" aria-label="Next slide">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services at a Glance */}
      <section className="bg-charcoal py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-offwhite">Services at a Glance</h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <Link to={s.link} className="block h-full">
                  <div className="group h-full rounded-xl border border-offwhite/10 bg-charcoal-light p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:scale-105">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-offwhite">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-offwhite/60">{s.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal-light py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Shaheen</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-offwhite">Why Choose Us</h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-offwhite/5 bg-charcoal p-8 text-center transition-all hover:border-primary/20">
                  <item.icon className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="mt-5 font-heading text-lg font-semibold text-offwhite">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-offwhite/60">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
