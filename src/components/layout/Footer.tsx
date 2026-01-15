import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Carlos Andres Ochoa
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Data Scientist passionate about leveraging data to solve complex
              problems and drive meaningful insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/resume"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Resume
              </Link>
              <Link
                to="/projects"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:Caochoa8a@outlook.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail size={16} />
                Caochoa8a@outlook.com
              </a>
              <a
                href="tel:+12523678495"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone size={16} />
                (252) 367-8495
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/carlos-a-ochoa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ochoac19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:Caochoa8a@outlook.com"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Carlos Andres Ochoa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
