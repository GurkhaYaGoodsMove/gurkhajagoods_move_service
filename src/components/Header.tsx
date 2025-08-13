import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import GurkhaJaGoodsLogo from "@/assets/logos/logomark/green.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className=" text-white py-2 px-4 bg-primary">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm ">
          <div className="flex flex-col md:flex-row items-center gap-4 ">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@GurkhaJaGoods.fi</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Juustenintie 3, Helsinki, Finland</span>
            </div>
            <span className="text-xs opacity-75">
              A subsidiary of Gurkha Trading Oy
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span>Help / Support / Contact</span>
            <div className="flex gap-2">
              {/* Social media icons would go here */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={GurkhaJaGoodsLogo}
                alt="GurkhaJaGoods Move"
                className="h-16 w-auto rounded-lg mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-GurkhaJaGoods-dark-gray">
                  GurkhaJaGoods Move
                </h1>
                <p className="text-sm text-muted-foreground">Experts</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-foreground hover:text-cyan-600 transition-colors duration-200 font-medium relative group",
                    activeItem === item.href && "text-cyan-600"
                  )}
                  onClick={() => setActiveItem(item.href)}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute left-0 bottom-0 h-0.5 bg-cyan-600 transition-all duration-300",
                      activeItem === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  Have any questions?
                </p>
                <div className="flex items-center gap-2 text-cyan-600 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>+358469587579 | +358451562510</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-foreground hover:text-cyan-600 transition-colors duration-200 font-medium px-4 py-2",
                      activeItem === item.href && "text-cyan-600 bg-cyan-600/5"
                    )}
                    onClick={() => {
                      setActiveItem(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-cyan-600 font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>+358469587579</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
