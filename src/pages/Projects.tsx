import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCategory = "All" | "Data Science" | "Research" | "Web Development";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projects Coming Soon!",
    description:
      "This is a current place holder so i can adjust the visualization for my project cards.",
    technologies: ["HTML", "CSS", "TypeScript", "JavaScript", "JSON", ],
    category: "Web Development",
    github: "#",
    demo: "#",
  },
];

const categories: ProjectCategory[] = ["All", "Data Science", "Research", "Web Development"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      <section className="pt-28 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Projects
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my portfolio of data science, research, and development projects.
                Each project showcases different skills and problem-solving approaches.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl shadow-card overflow-hidden h-full flex flex-col hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
                    {/* Project Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-heading font-bold text-primary">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={16} />
                            View Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No projects found in this category yet.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
