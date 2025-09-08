import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { TechBadge } from "../components/TechBadge";
import { ExternalLink, FileDown, Linkedin, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "react-router";
import headshot from "../assets/headshot.png";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Fidelity",
      period: "Jan 2025 — Present",
      description:
        "Designed and developed a RESTful microservice that served 30K+ requests per hour using Java, Spring, and PostgreSQL. On another team, I built a full-stack application using TypeScript, Angular, Node.js, NestJS, and Express in an Nx workspace.",
      technologies: [
        "TypeScript",
        "Angular",
        "HTML",
        "CSS",
        "Node.js",
        "NestJS",
        "Express",
        "Java",
        "Spring",
        "PostgreSQL",
      ],
    },
    {
      title: "Software Engineer",
      company: "Platnm (Generate Product Development)",
      period: "Sep — Dec 2024",
      description:
        "Built a full-stack mobile app with a Go + Fiber backend and a TypeScript + React Native frontend.",
      technologies: [
        "Go",
        "Fiber",
        "PostgreSQL",
        "TypeScript",
        "React Native",
        "Expo",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/GenerateNU/platnm",
    },
    {
      title: "Software Engineering Co-op",
      company: "Optum (UnitedHealth Group)",
      period: "Jan — Jul 2024",
      description:
        "Did a lot of miscellaneous work supporting an effort to build a robust and scalable system for testing a generative AI application. This included experimenting in Jupyter Notebook with the RAGAs library, training a classification model using TensorFlow, building a Python + Flask app that calculates metrics on the generative AI application's responses, and leveraging Google Cloud Platform to scale the evaluation system.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Flask",
        "Google Cloud Platform",
        "Docker",
        "Jenkins",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Software Engineer",
      company: "Voxeti (Generate Product Development)",
      period: "Sep — Dec 2023",
      description:
        "Built a full-stack web app with a Go + Echo backend and a TypeScript + React frontend.",
      technologies: ["Go", "Echo", "TypeScript", "React", "HTML", "CSS"],
      github: "https://github.com/GenerateNU/voxeti",
    },
    {
      title: "Software Engineering Co-op",
      company: "Brooktec",
      period: "May — Aug 2023",
      description:
        "Built a full-stack web app with a Node.js + Express backend and a React frontend.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "React",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Software Engineering Co-op",
      company: "Optum (UnitedHealth Group)",
      period: "Jul — Dec 2022",
      description:
        "Built QA automation scripts using Java, Selenium, and Jenkins",
      technologies: ["Java", "Selenium", "Jenkins"],
    },
  ];

  const projects = [
    {
      title: "Go Chat",
      description:
        "Built a real-time chat app. Backend built with Go + Fiber + Supabase. Frontend built with TypeScript + React. Realtime built with websockets and a custom library I built called Eventsocket that helps to manage websocket connections.",
      period: "May - Aug 2025",
      technologies: [
        "Go",
        "Fiber",
        "PostgreSQL",
        "Supabase",
        "TypeScript",
        "React",
        "Vite",
      ],
      github: "https://github.com/aaronkim218/go-chat",
      demo: "https://go-chat-frontend-3glj.onrender.com",
    },
    {
      title: "Husky Connect",
      description:
        "Stack overflow clone. Backend built with TypeScript + Node.js + Express + MongoDB. Frontend built with TypeScript + React.",
      period: "Sep - Dec 2024",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Socket.io",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/aaronkim218/husky-connect",
      demo: "https://husky-connect.onrender.com/",
    },
    {
      title: "Eventsocket",
      description:
        "Library that handles the boilerplate code necessary for reading from and writing to long-lasting websocket connections. Also, reduces the boilerplate code for implementing a room-based architecture. Also, exposes lifecycle hooks to allow developers that consume the library to easily run code when specific lifecycle events occur. ",
      period: "Jul - Aug 2025",
      technologies: ["Go"],
      github: "https://github.com/aaronkim218/eventsocket",
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
    <div className="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto relative">
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col lg:justify-between gap-6 lg:sticky lg:top-0 lg:h-screen">
        <div className="flex flex-col gap-6 items-center lg:items-start">
          {/* Profile Picture */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800/20 to-slate-900/40 backdrop-blur-sm border border-slate-600/30"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <img
                src={headshot}
                alt="Aaron Kim"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/5"></div>
          </div>

          {/* Name & Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Aaron Kim</h1>
            <h2 className="text-xl text-muted-foreground mb-4">
              Software Engineer
            </h2>
            <p className="text-muted-foreground max-w-sm mx-auto lg:mx-0">
              Mostly full-stack, but I like to think I can do more
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex flex-col gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block text-left transition-colors cursor-pointer ${
                activeSection === section.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-4">
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

        {/* Social Links */}
        <div className="flex gap-6 justify-center lg:justify-start">
          <a
            href="https://github.com/aaronkim218"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-kim27"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aaronkim2727@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="/resume.pdf"
            download={"aaron_kim_resume.pdf"}
            className="text-muted-foreground hover:text-foreground transition-colors flex gap-2"
          >
            <FileDown size={24} />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col gap-16 lg:gap-32">
        <section id="about">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 sticky top-0 bg-background py-4">
            About
          </h3>
          <div className="space-y-6 text-muted-foreground">
            <p>Hi there, my name is Aaron.</p>
            <p>
              I am a passionate software engineer driven by curiosity and
              discipline.
            </p>
            <p>
              Please take a look at my site lol! And feel free to reach out to
              any of my socials
            </p>
            <Link to="/more">More</Link>
          </div>
        </section>

        <section id="experience">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 sticky top-0 bg-background py-4">
            Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {exp.title}
                        {exp.github && (
                          <a
                            href={exp.github}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            target="_blank"
                          >
                            <SiGithub size={16} />
                          </a>
                        )}
                      </CardTitle>
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
                    {exp.technologies.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {project.title}
                        <div className="flex gap-2">
                          <a
                            href={project.github}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            target="_blank"
                          >
                            <SiGithub size={16} />
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              target="_blank"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </CardTitle>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {project.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
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
