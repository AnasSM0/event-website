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
            <h1 className="mt-2 font-heading text-5xl font-bold text-offwhite md:text-6xl">Your Supply Partner</h1>
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
                  A Legacy of Reliability
                </h2>
                <div className="mt-2 h-0.5 w-12 bg-primary" />
                <p className="mt-6 text-base leading-relaxed text-offwhite/70">
                  Anas Fabrics is a trusted provider of high-quality industrial supplies, catering equipment, and business support services. With a strong focus on reliability and operational excellence, we serve as a dedicated supply partner for businesses and event professionals, ensuring you have the materials needed to succeed.
                </p>
                <p className="mt-4 text-base leading-relaxed text-offwhite/70">
                  Our operations cover a wide range of essential supplies including crockery, kitchen equipment, uniforms, linens, and event infrastructure. We are committed to delivering consistent quality, dependable service, and long-term business partnerships built on trust and performance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Anas Fabrics warehouse"
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
              { icon: Target, title: "Precision", description: "We deliver exactly what you need, when you need it, ensuring your operations never miss a beat." },
              { icon: Eye, title: "Quality", description: "Our products are sourced and fabricated to meet the rigors of professional and industrial use." },
              { icon: Sparkles, title: "Partnership", description: "We build long-term relationships, understanding your business needs to provide tailored support." },
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
