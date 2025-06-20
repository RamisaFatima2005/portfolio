"use client"

import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      className={`
        min-h-screen bg-black text-gray-100 flex flex-col items-center px-6 py-16 sm:py-24 duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <section className="max-w-3xl w-full flex flex-col items-center gap-10 text-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-bounce">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Hello! Passionate full-stack developer with hands-on experience in modern web frameworks like Next.js and Node.js, along with a strong command of AI agents using Python.
            I specialize in building scalable applications and intelligent systems that effectively solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I enjoy solving complex problems, learning new technologies, and bringing creative ideas to life.
            My focus is on building scalable apps with clean code and delightful user interfaces.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            When I&apos;m not coding, I love exploring design trends, reading tech blogs, and contributing to the developer community.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
