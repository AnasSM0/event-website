import ScrollReveal from "@/components/ScrollReveal";
import { Target, Eye, Sparkles } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-charcoal pt-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-offwhite md:text-6xl">Our Story</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-charcoal py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Since 2010</p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-offwhite md:text-4xl">
                  A Legacy of Luxury
                </h2>
                <div className="mt-2 h-0.5 w-12 bg-primary" />
                <p className="mt-6 text-base leading-relaxed text-offwhite/70">
                  Founded with a passion for perfection, Shaheen has grown from a boutique catering service into one of the region's most sought-after event management firms. Our journey has been defined by an unwavering commitment to elegance, creativity, and client satisfaction.
                </p>
                <p className="mt-4 text-base leading-relaxed text-offwhite/70">
                  Over the years, we have orchestrated hundreds of weddings, corporate galas, and private celebrations — each one a unique masterpiece. Our team of seasoned professionals brings together culinary artistry, design excellence, and logistical precision to craft events that are nothing short of extraordinary.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                  alt="Shaheen luxury event setup"
                  className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-charcoal-light py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Values</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-offwhite">Our Mission</h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Precision", description: "Every detail is meticulously planned and executed to create a seamless experience from start to finish." },
              { icon: Eye, title: "Vision", description: "We see beyond the ordinary, transforming venues into immersive spaces that tell your unique story." },
              { icon: Sparkles, title: "Excellence", description: "We hold ourselves to the highest standards, because your event deserves nothing less than perfection." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="rounded-xl border border-offwhite/10 bg-charcoal p-10 text-center transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <item.icon className="mx-auto h-10 w-10 text-primary" />
                  <h3 className="mt-6 font-heading text-xl font-semibold text-offwhite">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-offwhite/60">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
