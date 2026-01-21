import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Heart
} from "lucide-react";
import logo from "../../assets/ara-logo.webp"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Social Media Marketing",
    "Website Development",
    "Meta Ads",
    "Google Ads",
    "Graphic Design",
    "Video Editing"
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center space-x-3">
                <div className="w-36 h-24 rounded-xl flex items-center justify-center transition-transform duration-300">
                  <img
                    src={logo}
                    alt="DigitalCraft Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-neutral-300 font-secondary leading-relaxed mb-6 max-w-sm">
              Transforming digital experiences with innovative solutions. We craft beautiful,
              functional websites and powerful marketing strategies that drive results.
            </p>


          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-primary mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-brand-primary transition-colors duration-300 font-secondary relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-primary mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-neutral-300 hover:text-brand-primary transition-colors duration-300 font-secondary relative group"
                  >
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>

            {/* Contact Info */}
            <div className="space-y-3 mb-12">
              <div className="flex items-center space-x-3 text-neutral-300">
                <Mail className="w-5 h-5 text-brand-teal" />
                <span className="font-secondary">
                  aradiscovermarketing@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Phone className="w-5 h-5 text-brand-teal" />
                <span className="font-secondary">(+91) 81100 25254</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <MapPin className="w-5 h-5 text-brand-teal" />
                <span className="font-secondary">
                  67A, Giri Rd, Srinivasapuram, Thanjavur, Tamil Nadu 613009</span>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <p className="text-neutral-300 font-secondary mb-4">Follow Us</p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/aradiscovermarketing", color: "hover:text-blue-500" },
                  { icon: Twitter, href: "https://x.com/AraDiscove54623", color: "hover:text-sky-400" },
                  { icon: Instagram, href: "https://www.instagram.com/aradiscover_marketing/", color: "hover:text-pink-500" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/ara-discover-marketing/", color: "hover:text-blue-600" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"        
                    rel="noopener noreferrer" 
                    className={`w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-glow`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 font-secondary text-sm">
              © 2025 ARA Discover Marketing. All rights reserved. 
              {/* <Heart className="w-4 h-4 inline text-brand-pink" /> by our team. */}
            </div>

            <div className="flex items-center space-x-6">
              {/* <Link
                to="/privacy"
                className="text-neutral-400 hover:text-white transition-colors duration-300 font-secondary text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-neutral-400 hover:text-white transition-colors duration-300 font-secondary text-sm"
              >
                Terms of Service
              </Link> */}

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-glow"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;