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
  SiVuedotjs,
  SiExpress,
} from "@icons-pack/react-simple-icons";

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
  "Vue.js": { bg: "bg-[#4FC08D]", text: "text-white", icon: SiVuedotjs },
  Express: { bg: "bg-[#000000]", text: "text-white", icon: SiExpress },
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
