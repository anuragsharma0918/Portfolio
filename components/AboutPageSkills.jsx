import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiGit,
  SiVercel,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiBootstrap,
  SiNpm,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit },
      { name: "npm", icon: SiNpm },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function AboutSkills() {
  return (
    <section className="w-full max-w-5xl mx-auto  py-20">
      <h2 className="text-3xl font-serif font-semibold mb-10">
        Skills & Expertise
      </h2>

      <div className="flex flex-col gap-12">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {/* Category title */}
            <h3 className="text-xl font-semibold text-white/70">{cat.title}</h3>

            {/* Skill row */}
            <div className="flex flex-wrap gap-4">
              {cat.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 
                             rounded-full bg-white/5 border border-white/10 
                             backdrop-blur-sm
                             transition-all duration-300 
                             hover:bg-white/10 hover:border-white/20 
                             hover:-translate-y-1"
                >
                  <skill.icon className="text-lg text-white/70" />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
