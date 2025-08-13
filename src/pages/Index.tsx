import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSectionI from "@/components/HeroSectionI";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSectionI />
      {/* <HeroSection /> */}
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
