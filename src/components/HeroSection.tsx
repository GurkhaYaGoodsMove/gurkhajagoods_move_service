import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] bg-green-800 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/5 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              gurkha Move Experts
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-2xl md:text-4xl font-semibold text-white/95">
              <span>Your Trusted</span>
              <span className="bg-white text-green-800 px-4 py-2 rounded-lg shadow-elegant">
                Moving
              </span>
              <span>Partner</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional moving services in Helsinki and throughout Finland. We
            handle your belongings with care and expertise you can trust.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto font-semibold group bg-white">
              Let's Talk
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-green-800">
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroSection;
