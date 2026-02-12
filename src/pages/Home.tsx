import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { UtensilsCrossed, Award, Users, Clock, Shield, Star, Shirt, Armchair, Refrigerator, Scroll, Tent, Layers, Utensils, ConciergeBell, BedDouble, Sparkles } from "lucide-react";

const slides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1661720085508-f51d205eeb4b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Premium Hospitality Supplies",
    subtitle: "Reliable Equipment for Catering Professionals",
  },
  {
    image: "/gallery/30.jpeg",
    title: "Complete Infrastructure Solutions",
    subtitle: "From Marquees to Furniture - We Supply It All",
  },
  {
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80",
    title: "Trusted Vendor for Industry Leaders",
    subtitle: "Supporting Caterers & Event Managers Since 2010",
  },
];

const services = [
  { icon: Utensils, title: "Crockery", description: "Commercial-grade dinnerware for high-volume operations.", link: "/categories/crockery" },
  { icon: Shirt, title: "Staff Uniforms", description: "Durable, professional attire for hospitality staff.", link: "/categories/staff-uniforms" },
  { icon: Armchair, title: "Furniture", description: "Stackable banquet chairs and sturdy event tables.", link: "/categories/furniture" },
  { icon: Refrigerator, title: "Kitchen Equipment", description: "Heavy-duty appliances for commercial catering.", link: "/categories/kitchen-equipment" },
  { icon: Scroll, title: "Table Linens", description: "Stain-resistant fabrics for frequent laundering.", link: "/categories/table-linens" },
  { icon: Tent, title: "Marquee Fabrication", description: "Weather-proof structures for outdoor venues.", link: "/categories/marquee-fabrication" },
  { icon: Layers, title: "Carpet", description: "Exhibition and aisle runner flooring solutions.", link: "/categories/carpet" },
  { icon: UtensilsCrossed, title: "Kitchen Utensils", description: "NSF-grade tools for professional kitchens.", link: "/categories/kitchen-utensils" },
  { icon: Utensils, title: "Cutlery", description: "Rust-resistant stainless steel flatware sets.", link: "/categories/cutlery" },
  { icon: ConciergeBell, title: "Serving Products", description: "Chafing dishes and serving platters for buffets.", link: "/categories/serving-products" },
  { icon: BedDouble, title: "Room Linens", description: "Hotel-quality bedding and bath textiles.", link: "/categories/room-linens" },
  { icon: Sparkles, title: "Tent Accessories", description: "Linings, lighting, and decor for marquee interiors.", link: "/categories/tent-accessories" },
];

const whyUs = [
  { icon: Shield, title: "Consistent Quality", description: "Industrial-grade materials tested for durability and long-term commercial use." },
  { icon: Layers, title: "Bulk Capability", description: "Large inventory ready for immediate dispatch to support major operations." },
  { icon: Clock, title: "Reliable Logistics", description: "On-time delivery ensuring your supply chain never misses a deadline." },
  { icon: Users, title: "Vendor Partnership", description: "Dedicated support for catering companies, hotels, and event managers." },
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
                  Request Supply Quote
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
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Values</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-offwhite">Why Choose Anas Fabrics</h2>
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
