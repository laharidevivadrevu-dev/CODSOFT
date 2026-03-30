import { motion } from "framer-motion";
import { Code, Globe, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "Java", "Python", "SQL", "Data Structures"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools & Soft Skills",
    icon: Wrench,
    skills: ["GitHub", "VS Code", "Communication", "Problem Solving"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold text-foreground text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="gradient-card rounded-xl p-6 shadow-card hover:shadow-primary transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <group.icon className="text-primary mb-4" size={32} />
            <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
