import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-foreground">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-primary-foreground/70">
        © 2026 Lahari Devi Vadrevu. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/lahari-devi" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/laharidevivadrevu-dev" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary transition-colors">
          <Github size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
