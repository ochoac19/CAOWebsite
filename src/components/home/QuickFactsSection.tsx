import { motion } from "framer-motion";
import { GraduationCap, Microscope, Code, MapPin, Briefcase, Award } from "lucide-react";

const facts = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "MS in Data Science, BS in Computer Science from East Carolina University",
  },
  {
    icon: Microscope,
    title: "Research Focus",
    description: "Bioinformatics, Cancer Research, Genomic Data Analysis, Robotics Teaching Software"
  },
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Python, R, SQL, Machine Learning, Data Visualization",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "Graduate & Undergraduate Research Assistant, Graduate & Undergraduate Teaching Assistant, IT Support, Coding Instructor",
  },
  {
    icon: MapPin,
    title: "Availability",
    description: "Open to remote and on-site opportunities",
  },
];

const QuickFactsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Quick Facts
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl shadow-card p-6 h-full hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <fact.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {fact.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {fact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFactsSection;
