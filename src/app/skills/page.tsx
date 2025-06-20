"use client";
import React, { useState, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiOpenai,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="h-10 w-10 text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="h-10 w-10 text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="h-10 w-10 text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-10 w-10 text-blue-700" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-10 w-10 text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-10 w-10 text-teal-400" /> },
  { name: "Python", icon: <SiPython className="h-10 w-10 text-green-600" /> },
  { name: "OpenAI SDK", icon: <SiOpenai className="h-10 w-10 text-purple-700" /> },
];

const SkillsSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-black text-white max-w-8xl mx-auto py-20 px-4">
      <h2
        tabIndex={0}
        className={`text-4xl font-bold mb-12 text-center select-none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-bounce
          transition-all duration-700 ease-in-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        My Skills
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <li
            key={skill.name}
            tabIndex={0}
            aria-label={`Skill: ${skill.name}`}
            className={`bg-gray-900 hover:bg-gradient-to-r hover:from-teal-100 hover:via-blue-200 hover:to-purple-600 hover:text-black backdrop-blur-md rounded-xl shadow-lg py-6 px-4 flex flex-col items-center justify-center font-semibold text-lg cursor-default select-none
              transform transition-all duration-700 ease-in-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
            style={{ willChange: "opacity, transform", transitionDelay: `${index * 150}ms` }}
          >
            {skill.icon}
            <span className="mt-2">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
