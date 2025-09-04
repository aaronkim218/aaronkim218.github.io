import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const experiences = [
    {
      title: "Job Title 1",
      company: "Company Name 1",
      period: "2024 — Present",
      description: "Sample description for job 1.",
      technologies: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Job Title 2",
      company: "Company Name 2",
      period: "2023 — 2024",
      description: "Sample description for job 2.",
      technologies: ["JavaScript", "Python", "MongoDB"],
    },
    {
      title: "Job Title 3",
      company: "Company Name 3",
      period: "2022 — 2023",
      description: "Sample description for job 3.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const projects = [
    {
      title: "Project 1",
      description: "Sample description for project 1.",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Project 2",
      description: "Sample description for project 2.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Project 3",
      description: "Sample description for project 3.",
      technologies: ["Vue.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];


  useEffect(() => {
    const getVisibleArea = (rect: DOMRect) => {
      const viewportHeight = window.innerHeight;

      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      return rect.height > 0 ? visibleHeight / rect.height : 0;
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      let maxVisiblePercentage = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visiblePercentage = getVisibleArea(rect);

        if (visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage;
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen flex relative">
      <div className="fixed left-0 top-0 w-1/2 h-screen p-16 flex flex-col justify-between">
        <div>
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4">Aaron Kim</h1>
            <h2 className="text-xl text-muted-foreground mb-4">
              Full Stack Developer
            </h2>
            <p className="text-muted-foreground max-w-sm">
              Need to add brief title
            </p>
          </div>

          <nav className="space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block text-left transition-colors ${
                  activeSection === section.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-8 h-px transition-all ${
                      activeSection === section.id
                        ? "bg-foreground w-16"
                        : "bg-muted-foreground"
                    }`}
                  />
                  <span className="text-sm uppercase tracking-widest">
                    {section.label}
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aaron@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="ml-[50%] w-1/2 p-16 space-y-32">
        <section id="about">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 sticky top-0 bg-background py-4">
            About
          </h3>
          <div className="space-y-6 text-muted-foreground">
            <p>Sample about section.</p>
            <p>Need to add more details.</p>
            <p>Need to add even more details.</p>
            <Link to="/more">More</Link>
          </div>
        </section>

        <section id="experience">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 sticky top-0 bg-background py-4">
            Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 sticky top-0 bg-background py-4">
            Projects
          </h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {project.title}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
