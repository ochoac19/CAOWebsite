import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Resume = () => {
  const handleDownload = () => {
    // Create a simple text version of the resume for download
    const resumeContent = `
CARLOS ANDRES OCHOA
Data Scientist | Bioinformatics Researcher

CONTACT
Email: Caochoa8a@outlook.com
Phone: (252) 367-8495
LinkedIn: linkedin.com/in/carlos-a-ochoa

EDUCATION
Master of Science in Data Science
East Carolina University | Aug 2023 - May 2025 | GPA: 3.55

Bachelor of Science in Computer Science
East Carolina University | Aug 2019 - May 2023

Associate Of Science
Pitt Community College| Jun 2018 - August 2020

Associate Of Art
Pitt Community College| Jun 2018 - August 2020

PROFESSIONAL EXPERIENCE
Graduate Research Assistant | Sept 2023 - May 2025
- Conducted bioinformatics research focusing on cancer genomics
- Developed automated data analysis pipelines using Python and R
- Applied machine learning techniques to biological datasets

Graduate & Undergraduate Teaching Assistant | Jan 2023 - May 2025
- Assisted in teaching programming and data science courses
- Provided tutoring and mentorship to students
- Graded assignments and provided constructive feedback

Undergraduate Robotics Research Assistant | Sept 2022 - May 2023
- Contributed to robotics research projects
- Developed software solutions for robotic systems

ECU CET Mentor | Sept 2021 - Jan 2023
- Mentored students in the College of Engineering and Technology
- Provided academic and career guidance

IT Support Technician | Sept 2021 - Jan 2023
- Provided technical support to university staff and students
- Troubleshot hardware and software issues

SKILLS
Languages: Python, R, SQL, HTML/CSS
Libraries: Pandas, Numpy, dplyr, ggplot2, Matplotlib, Seaborn, Plotly
Developer Tools: Git/GitHub, RStudio, Jupyter Notebook, Docker, Google Colab
Soft Skills: Cross-functional collaboration, Problem Solving, Technical Communication
    `.trim();

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Carlos_Ochoa_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <section className="pt-28 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Resume
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>

            {/* Resume Card */}
            <div className="bg-card rounded-2xl shadow-card-hover p-8 md:p-12 print:shadow-none print:p-0">
              {/* Name & Title */}
              <div className="text-center border-b border-border pb-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  Carlos Andres Ochoa
                </h2>
                <p className="text-lg text-accent font-medium">
                  Data Scientist | Bioinformatics Researcher
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm">
                <a
                  href="mailto:Caochoa8a@outlook.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  Caochoa8a@outlook.com
                </a>
                <a
                  href="tel:+12523678495"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  (252) 367-8495
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-a-ochoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  North Carolina, USA
                </span>
              </div>

              {/* Education Section */}
              <section className="mb-10">
                <h3 className="text-xl font-heading font-bold text-primary border-b-2 border-primary pb-2 mb-6">
                  Education
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Master of Science in Data Science
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Aug 2023 - May 2025
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      East Carolina University | GPA: 3.55
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Bachelor of Science in Computer Science
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Aug 2019 - May 2023
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      East Carolina University
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Associate Of Science
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Jun 2018 - August 2020
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      Pitt Community College
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Associate Of Art
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Jun 2018 - August 2020
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      Pitt Community College
                    </p>
                  </div>


                </div>
              </section>
              {/* Experience Section */}
              <section className="mb-10">
                <h3 className="text-xl font-heading font-bold text-primary border-b-2 border-primary pb-2 mb-6">
                  Professional Experience
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Graduate Research Assistant
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Sept 2023 - May 2025
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      East Carolina University | Greenville, NC (Remote)
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>Conducted bioinformatics research focusing on cancer genomics</li>
                      <li>Developed automated data analysis pipelines using Python and R</li>
                      <li>Applied machine learning techniques to biological datasets</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Graduate & Undergraduate Teaching Assistant 
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Jan 2023 - May 2025
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      East Carolina University | Greenville, NC (Remote/On-site)
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>Assisted in teaching programming and data science courses</li>
                      <li>Provided tutoring and mentorship to students</li>
                      <li>Graded assignments and provided constructive feedback</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Undergraduate Robotics Research Assistant
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Sept 2022 - May 2023
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      East Carolina University | Greenville, NC (Remote)
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>Contributed to robotics research projects</li>
                      <li>Developed software solutions for robotic systems</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        ECU CET Mentor
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Sept 2021 - Jan 2023
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      East Carolina University | Greenville, NC (Remote)
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>Mentored students in the College of Engineering and Technology</li>
                      <li>Provided academic and career guidance</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        IT Support Technician
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Sept 2021 - Jan 2023
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      East Carolina University | Greenville, NC (On-site)
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>Provided technical support to university staff and students</li>
                      <li>Troubleshot hardware and software issues</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h4 className="font-semibold text-foreground">
                        Coding Instructor
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        Sept 2021 - Jan 2023
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      Coding Minds Academy | Irvine, CA (Remote)
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>Supervise, guide, and model appropriate techniques and behaviors for students new to programming.</li>
                      <li>Observed and evaluated student performance and development along with providing appropriate feedback on work.</li>
                      <li>Plan instruction to achieve objectives based upon student needs and established curriculum</li>
                    </ul>
                  </div>
                  
                </div>
              </section>

              {/* Skills Section */}
              <section>
                <h3 className="text-xl font-heading font-bold text-primary border-b-2 border-primary pb-2 mb-6">
                  Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Programming Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "R", "SQL", "HTML/CSS"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Libraries & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Pandas", "Numpy", "dplyr", "ggplot2", "Matplotlib", "Seaborn", "Plotly"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Developer Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git/GitHub", "RStudio", "Jupyter Notebook", "Docker", "Google Colab"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Soft Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Cross-functional collaboration", "Problem Solving", "Technical Communication"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Download Button */}
            <div className="flex justify-center mt-8 print:hidden">
              <Button onClick={handleDownload} variant="gold" size="lg">
                <Download size={20} />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
