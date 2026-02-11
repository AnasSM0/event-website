import { useParams, Link } from "react-router-dom";
import { categoriesData } from "@/data/categories";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ArrowRight } from "lucide-react";
import NotFound from "./NotFound";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? categoriesData[slug] : undefined;

  if (!data) return <NotFound />;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{data.subtitle}</p>
            <h1 className="mt-3 font-heading text-5xl font-bold text-offwhite md:text-7xl">{data.title}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="bg-charcoal py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="text-lg leading-relaxed text-offwhite/70">{data.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-charcoal-light py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">What's Included</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-offwhite">Our Services</h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {data.services.map((service, i) => (
              <ScrollReveal key={service} delay={i * 0.08}>
                <div className="flex items-start gap-3 rounded-lg border border-offwhite/10 bg-charcoal p-5 transition hover:border-primary/20">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-offwhite/80">{service}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-charcoal py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Advantages</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-offwhite">Why Choose This Service</h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {data.benefits.map((benefit, i) => (
              <ScrollReveal key={benefit} delay={i * 0.1}>
                <div className="flex items-center gap-4 rounded-xl border border-offwhite/10 bg-charcoal-light p-6">
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium text-offwhite/80">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-light py-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-offwhite md:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-offwhite/60">Let's bring your vision to life with Shaheen.</p>
            <Link to="/contact">
              <Button className="mt-8 rounded-full bg-primary px-10 py-6 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
                {data.ctaText}
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
