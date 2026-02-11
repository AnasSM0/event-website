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
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-offwhite md:text-6xl">Contact Us</h1>
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
                <h2 className="font-heading text-3xl font-bold text-offwhite">Let's Create Something Extraordinary</h2>
                <div className="mt-2 h-0.5 w-12 bg-primary" />
                <p className="mt-6 text-base leading-relaxed text-offwhite/60">
                  Ready to plan your next event? Reach out to us and our team will get back to you within 24 hours.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-offwhite">Address</h4>
                      <p className="mt-1 text-sm text-offwhite/60">123 Luxury Avenue, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-offwhite">Phone</h4>
                      <p className="mt-1 text-sm text-offwhite/60">+971 50 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-offwhite">Email</h4>
                      <p className="mt-1 text-sm text-offwhite/60">info@shaheen-events.com</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-10 overflow-hidden rounded-xl border border-offwhite/10">
                  <div className="flex h-48 items-center justify-center bg-charcoal-light">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-primary/40" />
                      <p className="mt-2 text-sm text-offwhite/30">Map Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-offwhite/10 bg-charcoal-light p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="h-16 w-16 text-primary" />
                    <h3 className="mt-6 font-heading text-2xl font-bold text-offwhite">Thank You!</h3>
                    <p className="mt-3 text-offwhite/60">We've received your inquiry and will be in touch shortly.</p>
                    <Button
                      onClick={() => { setSubmitted(false); form.reset(); }}
                      className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-2xl font-bold text-offwhite">Send Us a Message</h3>
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
