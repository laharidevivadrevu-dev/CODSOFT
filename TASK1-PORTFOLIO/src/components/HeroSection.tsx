import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => (
  <section id="home" className="min-h-screen gradient-hero flex items-center pt-20">
    <div className="container mx-auto px-4">
      <motion.div
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Lahari Devi <span className="text-gradient">Vadrevu</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          B.Tech Computer Science Student | Aspiring Web Developer
        </p>
        <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Aspiring Web Developer passionate about building clean and user-friendly web experiences.
        </p>
        <a
          href="#contact"
          className="inline-block gradient-primary text-primary-foreground font-medium px-8 py-3 rounded-lg shadow-primary hover:opacity-90 transition-opacity"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
