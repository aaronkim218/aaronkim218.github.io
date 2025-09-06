import { Badge } from "./ui/badge";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiSpring,
  SiAngular,
  SiNestjs,
  SiFlask,
  SiDocker,
  SiGooglecloud,
  SiJenkins,
  SiJupyter,
  SiSelenium,
  SiGo,
  SiVite,
  SiSocketdotio,
} from "@icons-pack/react-simple-icons";
import JavaSvg from "../assets/Java.svg?react";

const JavaIcon = ({ size = 16 }: { size?: number }) => (
  <JavaSvg width={size} height={size} />
);

const technologies: Record<
  string,
  { bg: string; text: string; icon: React.ComponentType<any> | null }
> = {
  React: { bg: "bg-[#61DAFB]", text: "text-black", icon: SiReact },
  TypeScript: { bg: "bg-[#3178C6]", text: "text-white", icon: SiTypescript },
  "Node.js": { bg: "bg-[#339933]", text: "text-white", icon: SiNodedotjs },
  JavaScript: { bg: "bg-[#F7DF1E]", text: "text-black", icon: SiJavascript },
  Python: { bg: "bg-[#3776AB]", text: "text-white", icon: SiPython },
  MongoDB: { bg: "bg-[#47A248]", text: "text-white", icon: SiMongodb },
  HTML: { bg: "bg-[#E34F26]", text: "text-white", icon: SiHtml5 },
  CSS: { bg: "bg-[#1572B6]", text: "text-white", icon: SiCss },
  "Next.js": { bg: "bg-black", text: "text-white", icon: SiNextdotjs },
  "Tailwind CSS": {
    bg: "bg-[#06B6D4]",
    text: "text-white",
    icon: SiTailwindcss,
  },
  PostgreSQL: { bg: "bg-[#336791]", text: "text-white", icon: SiPostgresql },
  Express: { bg: "bg-[#000000]", text: "text-white", icon: SiExpress },
  Spring: { bg: "bg-[#6DB33F]", text: "text-white", icon: SiSpring },
  Angular: { bg: "bg-[#0F0F11]", text: "text-white", icon: SiAngular },
  Java: { bg: "bg-[#ED8B00]", text: "text-white", icon: JavaIcon },
  NestJS: { bg: "bg-[#E0234E]", text: "text-white", icon: SiNestjs },
  Flask: { bg: "bg-[#3BABC3]", text: "text-white", icon: SiFlask },
  Docker: { bg: "bg-[#2496ED]", text: "text-white", icon: SiDocker },
  "Google Cloud Platform": {
    bg: "bg-[#4285F4]",
    text: "text-white",
    icon: SiGooglecloud,
  },
  Jenkins: { bg: "bg-[#D24939]", text: "text-white", icon: SiJenkins },
  "Jupyter Notebook": {
    bg: "bg-[#F37626]",
    text: "text-white",
    icon: SiJupyter,
  },
  Selenium: { bg: "bg-[#43B02A]", text: "text-white", icon: SiSelenium },
  Go: { bg: "bg-[#00ADD8]", text: "text-white", icon: SiGo },
  Vite: { bg: "bg-[#646CFF]", text: "text-white", icon: SiVite },
  "Socket.io": { bg: "bg-[#010101]", text: "text-white", icon: SiSocketdotio },
};

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export function TechBadge({ tech, className = "" }: TechBadgeProps) {
  const config = technologies[tech] || {
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    icon: null,
  };

  const IconComponent = config.icon;

  return (
    <Badge
      variant="secondary"
      className={`text-xs ${config.bg} ${config.text} hover:opacity-80 flex items-center gap-1 ${className}`}
    >
      {IconComponent && <IconComponent size={12} />}
      {tech}
    </Badge>
  );
}
