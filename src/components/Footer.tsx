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
              High-quality industrial supplies, catering equipment, and business support services provider.
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
