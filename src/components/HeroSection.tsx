import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";

const HeroSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "backOut" } },
  };

  const floating = {
    hidden: { y: 20, opacity: 0 },
    show: (i: number) => ({
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        delay: 1 + i * 0.2,
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center overflow-hidden"
    >
      {/* Abstract background shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400 rounded-full mix-blend-overlay filter blur-[120px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-500 rounded-full mix-blend-overlay filter blur-[90px] opacity-15"></div>
      </motion.div>

      {/* Geometric grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"
      />

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Text content */}
          <div className="lg:w-1/2 text-left">
            <motion.div variants={item} className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-400/30">
                Premium Moving Services
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
                Stress-Free
              </span>{" "}
              Relocations Across Finland
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Experience seamless moving with our expert team. From packing to
              transportation, we handle every detail so you don't have to.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto font-semibold bg-transparent border-2 border-gray-700 hover:bg-gray-800/50 text-white hover:text-white shadow-lg hover:shadow-gray-800/20 transition-all group"
              >
                How It Works
                <MoveRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex items-center gap-4 text-gray-400"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <motion.img
                    key={i}
                    src={`https://randomuser.me/api/portraits/${
                      i % 2 === 0 ? "women" : "men"
                    }/${i + 20}.jpg`}
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-gray-800"
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={floating}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm mt-1">Trusted by 500+ clients</p>
              </div>
            </motion.div>
          </div>

          {/* Image/content card */}
          <motion.div
            variants={item}
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Moving team"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-400 ml-2">
                      Currently available
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Helsinki Moving Specialists
                  </h3>
                  <p className="text-gray-400">
                    Book our team today for your next relocation
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              custom={0}
              variants={floating}
              className="absolute -bottom-10 -left-10 bg-emerald-500 w-24 h-24 rounded-lg rotate-12 opacity-80"
            />
            <motion.div
              custom={1}
              variants={floating}
              className="absolute -top-10 -right-10 bg-purple-500 w-20 h-20 rounded-full opacity-80"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floating}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "bg-emerald-400"
              : i % 3 === 1
              ? "bg-amber-300"
              : "bg-purple-400"
          } ${i % 2 === 0 ? "w-2 h-2" : "w-3 h-3"} opacity-30`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
