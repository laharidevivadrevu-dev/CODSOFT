import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectCalculator from "@/assets/project-calculator.jpg";
import projectEcobin from "@/assets/project-ecobin.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website designed to showcase my skills, projects, and contact information. Built with clean UI principles and smooth navigation to provide a seamless user experience.",
    tech: ["HTML", "CSS"],
    image: projectPortfolio,
  },
  {
    title: "Calculator",
    description:
      "A simple and interactive calculator that performs basic arithmetic operations with a user-friendly interface. Designed for quick calculations with responsive button interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: projectCalculator,
  },
  {
    title: "Eco-Bin",
    description:
      "A concept-based web project focused on promoting smart waste management. It highlights the idea of using technology to encourage proper waste segregation and environmental awareness.",
    tech: ["HTML", "CSS"],
    image: projectEcobin,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold text-foreground text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-primary hover:-translate-y-1 transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="overflow-hidden h-44">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <ExternalLink className="text-primary" size={20} />
                <h3 className="font-semibold text-foreground text-lg">{project.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
