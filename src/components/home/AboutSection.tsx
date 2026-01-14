import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full" />

          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a dedicated <span className="text-foreground font-medium">Data Scientist</span> with 
              a Master's degree in Data Science from East Carolina University. My academic journey and 
              professional experience have equipped me with a robust foundation in{" "}
              <span className="text-foreground font-medium">machine learning</span>,{" "}
              <span className="text-foreground font-medium">statistical analysis</span>, and{" "}
              <span className="text-foreground font-medium">data visualization</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My research experience in <span className="text-foreground font-medium">bioinformatics</span>{" "}
              has allowed me to work on cutting-edge cancer research projects, developing automated pipelines 
              and applying advanced analytical techniques to complex biological datasets. I'm passionate about 
              leveraging data to solve real-world problems and drive meaningful insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond technical skills, I bring strong abilities in{" "}
              <span className="text-foreground font-medium">cross-functional collaboration</span>,{" "}
              <span className="text-foreground font-medium">technical communication</span>, and{" "}
              <span className="text-foreground font-medium">problem-solving</span>. I thrive in environments 
              where I can combine analytical thinking with creative solutions to tackle complex challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
