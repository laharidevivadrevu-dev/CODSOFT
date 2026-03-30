import { motion } from "framer-motion";
import { User } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10 justify-center">
          <User className="text-primary" size={28} />
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-primary">
              <img
                src={profilePhoto}
                alt="Lahari Devi Vadrevu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <p className="text-muted-foreground leading-relaxed text-center md:text-left text-lg flex-1">
            I am a B.Tech Computer Science student with a strong interest in web development
            and emerging technologies like Artificial Intelligence. I enjoy learning new
            technologies and applying them to real-world problems. With a solid foundation
            in programming and data structures, I focus on building efficient and user-friendly
            solutions. I am also passionate about improving my problem-solving skills and
            continuously growing as a developer.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
