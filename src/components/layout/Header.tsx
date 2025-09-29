import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/ara-logo.webp"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Social Media Marketing",
    "Website Development",
    "Meta Ads",
    "Google Ads",
    "Graphic Design",
    "Video Editing"
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <div className="flex items-center space-x-2">
              <div className="w-28 h-28 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img
                  src={logo}
                  alt="DigitalCraft Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-foreground hover:text-brand-primary transition-colors duration-300 font-secondary font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-large transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                      <div className="p-2">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-3 text-sm text-foreground hover:text-brand-primary hover:bg-neutral-50 rounded-lg transition-all duration-200 font-secondary"
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-foreground hover:text-brand-primary transition-colors duration-300 font-secondary font-medium relative ${location.pathname === item.path ? "text-brand-primary" : ""
                      }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="w-full">
              <Button className="bg-gradient-primary hover:bg-gradient-accent text-white font-secondary font-semibold px-6 py-2.5 rounded-xl shadow-glow hover:shadow-large transition-all duration-300 hover:scale-105">
                Book your Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-brand-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-foreground hover:text-brand-primary hover:bg-neutral-50 rounded-lg transition-all duration-200 font-secondary ${location.pathname === item.path ? "text-brand-primary bg-neutral-50" : ""
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-brand-primary hover:bg-neutral-50 rounded-lg transition-all duration-200 font-secondary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-2">
              <Link to="/contact" className="w-full">
                <Button className="w-full bg-gradient-primary hover:bg-gradient-accent text-white font-secondary font-semibold py-2.5 rounded-xl">
                  Book your Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;