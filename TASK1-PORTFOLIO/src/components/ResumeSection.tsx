import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const ResumeSection = () => (
  <section id="resume" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          My <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          View or download my resume to learn more about my education, experience, and skills.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/lahari-resume.pdf"
            download="lahari-resume.pdf"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-medium px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
