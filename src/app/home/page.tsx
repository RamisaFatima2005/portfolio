"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LandingPage= () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow for the animation to trigger

    return () => clearTimeout(timer);
  }, []);

  const fadeInStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-16">
      <section className="max-w-3xl text-center space-y-8" style={fadeInStyle}>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent transition-transform duration-500 ease-in-out hover:scale-105">
          Hii, I&apos;m Ramisa Fatima
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed transition-opacity duration-500 ease-in-out hover:opacity-90">
          An aspiring Full Stack Developer and Agents Expert with a passion for building clean,
          responsive web applications. Dive into my work and see how I blend creativity with technology.
        </p>
        <div className="mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-transform duration-500 ease-in-out hover:scale-110">
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Ramisa Fatima in a round frame, professional and modern style with dark background and bright accent border"
            className="w-full h-full object-cover"
            width={250}
            height={250}
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
