import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-offwhite/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-offwhite">Anas Fabrics</h3>
            <p className="mt-2 text-sm italic text-primary">"Reliable Business Support Services"</p>
            <p className="mt-4 text-sm leading-relaxed text-offwhite/60">
              Anas Fabrics Pakistan is a trusted supplier for the hospitality and event industry, providing high-quality crockery, cutlery, kitchen equipment, uniforms, linens, furniture, carpets, and complete marquee fabrication solutions. We support caterers and event professionals with reliable products, consistent quality, and dependable service.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-offwhite/20 transition-all hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-offwhite">Quick Links</h4>
            <div className="h-0.5 w-8 bg-primary mb-4" />
            <ul className="space-y-3">
              {["Home", "About", "Gallery", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-offwhite">Our Services</h4>
            <div className="h-0.5 w-8 bg-primary mb-4" />
            <ul className="space-y-3">
              {[
                { label: "Crockery", slug: "crockery" },
                { label: "Serving Products", slug: "serving-products" },
                { label: "Staff Uniforms", slug: "staff-uniforms" },
                { label: "Furniture", slug: "furniture" },
                { label: "Kitchen Equipment", slug: "kitchen-equipment" },
                { label: "Table Linens", slug: "table-linens" },
                { label: "Marquee Fabrication", slug: "marquee-fabrication" },
                { label: "Tent Accessories", slug: "tent-accessories" },
                { label: "Room Linens", slug: "room-linens" },
              ].map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/categories/${cat.slug}`} className="text-sm transition-colors hover:text-primary">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-offwhite">Contact Us</h4>
            <div className="h-0.5 w-8 bg-primary mb-4" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Zia Colony Industrial Area, Korangi
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +923002714890
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                anasiqbal19@gmail.com
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-lg border border-offwhite/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9354127539177!2d67.12065331031945!3d24.83188227785597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b7833ccf997%3A0xb0faa0324595ffc3!2sAnas%20Fabrics!5e0!3m2!1sen!2s!4v1770883815021!5m2!1sen!2s" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-offwhite/10 pt-8 text-center">
          <p className="text-xs text-offwhite/40">
            © {new Date().getFullYear()} Anas Fabrics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
