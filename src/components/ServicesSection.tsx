import { Card, CardContent } from "@/components/ui/card";
import { Package, Users, Truck, Shield, Clock, Star } from "lucide-react";
import packingService from "@/assets/packing-service.jpg";
import customerService from "@/assets/customer-service.jpg";
import movingTruck from "@/assets/moving-truck.jpg";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "Professional Packing",
      description:
        "Our team uses the best packing practices to ensure your items are securely packed. From delicate glassware to bulky furniture, we take care of everything.",
      image: packingService,
      features: [
        "Secure packing materials",
        "Professional techniques",
        "Delicate item handling",
      ],
    },
    {
      icon: Users,
      title: "Friendly Staff",
      description:
        "Our team is always approachable, polite, and ready to answer any questions you have. We aim to make your moving experience as smooth and stress-free as possible.",
      image: customerService,
      features: [
        "24/7 customer support",
        "Trained professionals",
        "Multilingual team",
      ],
    },
    {
      icon: Truck,
      title: "Reliable Transportation",
      description:
        "Modern fleet of vehicles equipped with the latest technology to ensure your belongings reach their destination safely and on time.",
      image: movingTruck,
      features: ["Modern vehicle fleet", "GPS tracking", "Insurance coverage"],
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive protection for your valuables",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Moving services that fit your timeline",
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed on all services",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <p className="text-primary font-semibold mb-2 text-lg">
            What We're Offering
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-6">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <CardContent className="p-8">
                  {/* Service Image */}
                  <motion.div
                    className="relative mb-6 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </motion.div>

                  {/* Service Icon */}
                  <motion.div
                    className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-bold text-gray-500 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {additionalServices.map((service, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                className="group hover:shadow-card transition-all duration-300 border-primary/20 bg-white rounded-xl"
                whileHover={{ scale: 1.03 }}
              >
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-500 mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
