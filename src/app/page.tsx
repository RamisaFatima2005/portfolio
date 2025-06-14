import React from 'react';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '⏭️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
];

const projects = [
  {
    name: 'DevConnect',
    description: 'A professional networking platform for developers.',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://devconnect.example.com',
    repoUrl: 'https://github.com/fakeuser/devconnect',
  },
  {
    name: 'TaskMaster',
    description: 'A task management app with real-time collaboration.',
    tech: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://taskmaster.example.com',
    repoUrl: 'https://github.com/fakeuser/taskmaster',
  },
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio with projects and contact info.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://portfolio.example.com',
    repoUrl: 'https://github.com/fakeuser/portfolio',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <header className="sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight hover:text-indigo-400 transition">
            Fullstack Dev
          </a>
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <a href="#skills" className="hover:text-indigo-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-400 hover:text-indigo-400 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        <div id="mobile-menu" className="md:hidden hidden px-6 py-4 bg-gray-800">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#skills" className="block hover:text-indigo-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block hover:text-indigo-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-16 max-w-5xl">
        <section className="text-center mb-24">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Hi, I'm a Fullstack Developer
          </h1>
          <p className="text-indigo-400 text-lg max-w-2xl mx-auto mb-8">
            I build modern, scalable web applications using React, Next.js, and Node.js.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-indigo-600 rounded-lg text-white font-semibold text-lg hover:bg-indigo-700 transition"
          >
            View My Projects
          </a>
        </section>

        <section id="skills" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center bg-gray-800 rounded-xl py-6 shadow-md hover:shadow-lg transition cursor-default select-none text-indigo-300"
              >
                <span className="text-4xl mb-3">{skill.icon}</span>
                <span className="text-lg font-semibold">{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-3 text-indigo-300">{project.name}</h3>
                <p className="mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-700 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-600 font-semibold transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-600 font-semibold transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="mb-8 text-gray-400">
            I'm currently open to new opportunities. Feel free to contact me via email or through my social media.
          </p>
          <a
            href="mailto:developer@example.com"
            className="inline-block px-8 py-4 bg-indigo-600 rounded-lg text-white font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Email Me
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 text-center text-gray-500 text-sm select-none">
        © {new Date().getFullYear()} Fullstack Developer Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

