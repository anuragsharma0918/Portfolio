"use client";
import { useState } from "react";

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
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "npm", icon: SiNpm, color: "text-red-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (i) => {
    // Toggle on mobile tap
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="px-6 md:px-25 py-10">
      <h2 className="text-3xl font-semibold mb-10">
        Technologies That Shape My Work
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {skills.map((skill, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              onClick={() => handleTap(i)}
              className="group relative flex h-20 items-center justify-center
                         rounded-xl border border-white/10 
                         bg-white/5 backdrop-blur-md 
                         transition hover:bg-white/10
                         hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
                         cursor-pointer"
            >
              {/* ICON */}
              <skill.icon
                className={`text-2xl transition-all duration-300 
                  ${isActive ? skill.color : "text-white/70"} 
                  group-hover:${skill.color} 
                  ${isActive ? "-translate-y-2" : "group-hover:-translate-y-2"}
                `}
              />

              {/* LABEL */}
              <span
                className={`absolute bottom-2 text-xs 
                  transition-all duration-300
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                  group-hover:opacity-100 group-hover:translate-y-0
                `}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
