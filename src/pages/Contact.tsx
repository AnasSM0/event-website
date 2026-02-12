import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ScrollReveal from "@/components/ScrollReveal";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  eventDate: z.string().min(1, "Please select an event date"),
  guestCount: z.string().min(1, "Please enter the guest count"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", eventDate: "", guestCount: "", message: "" },
  });

  const onSubmit = (_data: ContactFormData) => {
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-center justify-center bg-charcoal pt-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">B2B Inquiries</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-offwhite md:text-6xl">Request a Quote</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-charcoal py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left - Info */}
            <ScrollReveal>
              <div>
                <h2 className="font-heading text-3xl font-bold text-offwhite">Partner With a Reliable Supplier</h2>
                <div className="mt-2 h-0.5 w-12 bg-primary" />
                <p className="mt-6 text-base leading-relaxed text-offwhite/60">
                  Looking for bulk crockery, furniture, or marquee fabrication? Contact our sales team for a competitive wholesale quote. We support caterers, hotels, and event managers with industrial-grade supplies.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-offwhite">Warehouse & Office</h4>
                      <p className="mt-1 text-sm text-offwhite/60">Zia Colony Industrial Area, Korangi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-offwhite">Sales Hotline</h4>
                      <p className="mt-1 text-sm text-offwhite/60">+923002714890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-offwhite">Email Inquiries</h4>
                      <p className="mt-1 text-sm text-offwhite/60">anasiqbal19@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-10 overflow-hidden rounded-xl border border-offwhite/10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9354127539177!2d67.12065331031945!3d24.83188227785597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b7833ccf997%3A0xb0faa0324595ffc3!2sAnas%20Fabrics!5e0!3m2!1sen!2s!4v1770883815021!5m2!1sen!2s" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[300px] w-full bg-charcoal-light grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-offwhite/10 bg-charcoal-light p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="h-16 w-16 text-primary" />
                    <h3 className="mt-6 font-heading text-2xl font-bold text-offwhite">Inquiry Received</h3>
                    <p className="mt-3 text-offwhite/60">Our sales team will review your requirements and send a quotation shortly.</p>
                    <Button
                      onClick={() => { setSubmitted(false); form.reset(); }}
                      className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
                    >
                      Process Another Request
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-2xl font-bold text-offwhite">Get a Supply Quotation</h3>
                    <div className="mt-1 h-0.5 w-8 bg-primary" />
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-offwhite/80">Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  className="border-offwhite/10 bg-charcoal text-offwhite placeholder:text-offwhite/30 focus-visible:ring-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-offwhite/80">Event Date</FormLabel>
                                <FormControl>
                                  <Input
                                    type="date"
                                    className="border-offwhite/10 bg-charcoal text-offwhite placeholder:text-offwhite/30 focus-visible:ring-primary"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="guestCount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-offwhite/80">Guest Count</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g. 200"
                                    className="border-offwhite/10 bg-charcoal text-offwhite placeholder:text-offwhite/30 focus-visible:ring-primary"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-offwhite/80">Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  rows={5}
                                  placeholder="Tell us about your event..."
                                  className="border-offwhite/10 bg-charcoal text-offwhite placeholder:text-offwhite/30 focus-visible:ring-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full rounded-full bg-primary py-6 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
                        >
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
