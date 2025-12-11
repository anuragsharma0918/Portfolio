import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiVercel,
  SiNpm,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "group-hover:text-yellow-400",
  },
  { name: "React", icon: SiReact, color: "group-hover:text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white" },
  { name: "Tailwind", icon: SiTailwindcss, color: "group-hover:text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-green-500" },
  { name: "Express", icon: SiExpress, color: "group-hover:text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "group-hover:text-blue-400" },
  { name: "Git", icon: SiGit, color: "group-hover:text-orange-500" },
  { name: "Vercel", icon: SiVercel, color: "group-hover:text-white" },
  { name: "npm", icon: SiNpm, color: "group-hover:text-red-500" },
  { name: "Python", icon: SiPython, color: "group-hover:text-yellow-300" },
  { name: "HTML5", icon: SiHtml5, color: "group-hover:text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "group-hover:text-blue-400" },
  { name: "Postman", icon: SiPostman, color: "group-hover:text-orange-400" },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "group-hover:text-purple-500",
  },
];

export default function Skills() {
  return (
    <section className="px-6 md:px-25 py-10">
      <h2 className="text-3xl font-semibold mb-10">
        Technologies That Shape My Work
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group relative flex h-20 items-center justify-center 
                       rounded-xl border border-white/10 
                       bg-white/5 backdrop-blur-md 
                       transition hover:bg-white/10
                       hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            {/* ICON */}
            <skill.icon
              className={`text-2xl text-white/70 transition-all duration-300 
                          ${skill.color} group-hover:-translate-y-2`}
            />

            {/* LABEL */}
            <span
              className="absolute bottom-2 text-xs text-white/80 
                         opacity-0 translate-y-2 
                         transition-all duration-300 
                         group-hover:opacity-100 group-hover:translate-y-0"
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
