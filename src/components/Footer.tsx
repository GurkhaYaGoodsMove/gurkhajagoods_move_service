import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import GurkhaJaGoodsLogo from "@/assets/logos/logomark/darkgreen.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Professional Packing",
    "Residential Moving",
    "Office Relocation",
    "Storage Solutions",
    "International Moving",
    "Furniture Assembly",
  ];

  return (
    <footer className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={GurkhaJaGoodsLogo}
                alt="gurkha Move"
                className="h-12 w-auto rounded-lg mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">gurkha Move</h3>
                <p className="text-sm text-white/70">Experts</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted moving partner in Helsinki and throughout Finland.
              Professional, reliable, and committed to making your move
              stress-free.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gurkha-blue transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gurkha-blue transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gurkha-blue transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gurkha-light-blue transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gurkha-light-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">Juustenintie 3</p>
                  <p className="text-white/70">Helsinki, Finland</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gurkha-light-blue flex-shrink-0" />
                <div>
                  <p className="text-white/90">+358 413 123691</p>
                  <p className="text-white/70">+358 417 233118</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gurkha-light-blue flex-shrink-0" />
                <p className="text-white/90">contact@gurkha.fi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} gurkha Move Experts. All rights reserved. A
              subsidiary of gurkha Trading Oy.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-white/60">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
