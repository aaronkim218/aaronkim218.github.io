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
        "Currently, I am building a full-stack web app that helps our phone reps stay compliant with legal policies during live calls with customers. This project integrates with many APIs across the firm and demands high performance to support real-time call scenarios. Our team is using TypeScript and Angular for the frontend, and Node.js, NestJS, and Express for the backend. In my previous project, I developed and optimized endpoints in a RESTful API with Java, Spring, and PostgreSQL. The endpoints I worked on made many database calls and I was able to reduce response time by batching queries and leveraging CompletableFutures for concurrent processing.",
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
      company: "Platnm (Northeastern Generate Product Development)",
      period: "Sep — Dec 2024",
      description:
        "Built a full-stack mobile app for reviewing and discussing music. It's essentially the Letterboxd for music. I worked on this project as a part of Generate Product Development, a Northeastern club that partners with 4-5 software clients each semester to prototype their business ideas. We developed the backend with Go and Fiber, and the frontend with TypeScript and React Native.",
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
        "Performed various development tasks supporting an effort to build a robust and scalable system for testing LLM responses generated from a RAG application. 1) Experimented in Jupyter Notebook with generating RAGAs metrics and traditional NLP metrics such as F1, precision, and recall on LLM responses. 2) Built a RESTful service with Python and Flask that calculates metrics given the question asked, LLM response, ground truth, and context retrieved by the RAG application. 3) Leveraged GCP Cloud Storage, BigQuery, and Pub/Sub to automate and scale the evaluation system. 4) Leveraged Jinja2 HTML templates and Bokeh plots to generate plots that visualize the calculated metrics and allow for easy interpretation. 5) Trained a binary classification model using TensorFlow and HuggingFace datasets.",
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
      company: "Voxeti (Northeastern Generate Product Development)",
      period: "Sep — Dec 2023",
      description:
        "Built a full-stack web app for monetizing and outsourcing 3D printing services as a part of Generate (which I discuss above). We developed the backend with Go and Echo, and the frontend with TypeScript and React.",
      technologies: ["Go", "Echo", "TypeScript", "React", "HTML", "CSS"],
      github: "https://github.com/GenerateNU/voxeti",
    },
    {
      title: "Software Engineering Co-op",
      company: "Brooktec",
      period: "May — Aug 2023",
      description:
        "Built a full-stack web app that leverages OpenAI's API to generate user stories from meeting minutes. I developed the backend with Node.js and Express, and the frontend with TypeScript and React.",
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
        "Developed QA automation scripts using Java, Selenium, and Jenkins",
      technologies: ["Java", "Selenium", "Jenkins"],
    },
  ];

  const projects = [
    {
      title: "Go Chat",
      description:
        "A performant real-time chat app. I developed the backend with Go, Fiber, and Supabase, and the frontend with TypeScript and React. Realtime communication is facilitated through websockets and a custom library I built called Eventsocket (which I discuss down below) that helps to manage websocket connections.",
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
        "A Stack Overflow clone. I developed the backend with TypeScript, Node.js, Express, and MongoDB, and the frontend with TypeScript and React.",
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
      description: `A Go package that abstracts the management of long-lasting websocket connections in a room-based application, allowing developers to focus on application logic. The package also leverages the observer pattern to allow consumers of the library to register handlers for lifecycle events, which inspired the name "Eventsocket".`,
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
            <h2 className="text-xl text-muted-foreground">
              Full-stack Software Engineer
            </h2>
            {/* <p className="text-muted-foreground max-w-sm mx-auto lg:mx-0">
              Mostly full-stack, but I like to think I can do more
            </p> */}
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

      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col gap-8 lg:gap-16">
        <section id="about">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 sticky top-0 bg-background py-4">
            About
          </h3>
          <div className="space-y-6 text-muted-foreground">
            <p>Hi there!</p>
            <p>
              My name is Aaron. I'm a recent graduate from Northeastern
              University with a B.S. in computer science and math. Currently,
              I'm working as a full-stack engineer at Fidelity Investments.
            </p>
            <p>
              As a person, I like to think that I'm naturally driven by
              curiosity and discipline. I find myself always trying to
              understand the why behind things and going down rabbit holes in
              search of an answer. I think this is also the reason why I'm so
              passionate about software engineering. I love discovering new
              technologies and tools, but more importantly, I love actually
              committing to learning them through hands-on practice and real
              application.
            </p>
            <p>
              Below, I showcase some of my relevant professional experience and
              personal projects. For the personal projects, I purposely kept the
              descriptions short. If you want to see the actual project in
              action, please check out the actual link. If you want to learn
              more about the development process or the technical details,
              please check out the Github repository where I talk in greater
              depth.
            </p>
            <p>
              Thanks for visiting my site! Feel free to reach out to any of my
              socials.
            </p>
            <p>
              You can also check out a page that I created where I talk about
              random stuff and anything that interests me
              <span className="ml-1">
                <Link className="underline" to="/random">
                  here!
                </Link>
              </span>
            </p>
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
