import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Send } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#592A8A] via-[#592A8A]/90 to-[#FEC923] p-1.5">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                <img src="/me.JPG" alt="Carlos Andres Ochoa" className="w-full h-full rounded-full object-cover object-top" />
                

              </div>
            </div>
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-pulse" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Carlos Andres Ochoa
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-light">
              Data Scientist | Bioinformatics Researcher | Problem Solver
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Transforming complex data into actionable insights. Specializing in 
              machine learning, bioinformatics, and data-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="gold" size="lg">
                <Link to="/resume">
                  <FileText size={20} />
                  View Resume
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">
                  <Send size={20} />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
