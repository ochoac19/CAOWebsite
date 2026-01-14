import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, FolderOpen, Send } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Ready to Connect?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Explore my work, view my qualifications, or reach out to discuss opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <Link to="/resume">
                <FileText size={20} />
                View Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                <FolderOpen size={20} />
                See Projects
              </Link>
            </Button>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">
                <Send size={20} />
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
