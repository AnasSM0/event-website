import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const categoryLinks = [
  { label: "Crockery", path: "/categories/crockery" },
  { label: "Serving Products", path: "/categories/serving-products" },
  { label: "Staff Uniforms", path: "/categories/staff-uniforms" },
  { label: "Furniture", path: "/categories/furniture" },
  { label: "Kitchen Equipment", path: "/categories/kitchen-equipment" },
  { label: "Table Linens", path: "/categories/table-linens" },
  { label: "Marquee Fabrication", path: "/categories/marquee-fabrication" },
  { label: "Room Linens", path: "/categories/room-linens" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileCategoryOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-solid shadow-lg" : "glass"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="font-heading text-2xl font-bold tracking-wide text-offwhite">
          Anas Fabrics
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-offwhite/80"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname.startsWith("/categories") ? "text-primary" : "text-offwhite/80"
              }`}
            >
              Categories <ChevronDown className={`h-4 w-4 transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {categoryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-charcoal border border-offwhite/10 py-2 shadow-2xl z-50"
                >
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      className={`block px-5 py-2.5 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                        location.pathname === cat.path ? "text-primary" : "text-offwhite/80"
                      }`}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-offwhite md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-offwhite/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 ${
                    location.pathname === link.path ? "text-primary" : "text-offwhite/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Categories */}
              <button
                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 ${
                  location.pathname.startsWith("/categories") ? "text-primary" : "text-offwhite/80"
                }`}
              >
                Categories
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileCategoryOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileCategoryOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4"
                  >
                    {categoryLinks.map((cat) => (
                      <Link
                        key={cat.path}
                        to={cat.path}
                        className={`block rounded-lg px-4 py-2.5 text-sm transition-colors hover:bg-primary/10 ${
                          location.pathname === cat.path ? "text-primary" : "text-offwhite/60"
                        }`}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
