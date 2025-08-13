import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSectionI() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://ext.same-assets.com/2408989152/3786914820.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          variants={item}
        >
          We Take The Stress
          <br />
          Out Of Moving
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={item}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </motion.p>

        <motion.div variants={item}>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>DISCOVER MORE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
