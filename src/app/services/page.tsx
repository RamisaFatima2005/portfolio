"use client";

import { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay before fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <section className="max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold mb-12 text-center tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-bounce">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <div
            className={`bg-gray-900 bg-opacity-70 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-teal-500 hover:via-blue-500 hover:to-purple-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } transition-all duration-500`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Frontend Web Development
            </h2>
            <p className="text-gray-300 max-w-xs">
              Responsive websites with HTML, CSS & JavaScript and modern UI using
              Tailwind CSS. Cross-browser & mobile-friendly design guaranteed.
            </p>
          </div>

          {/* Service Card 2 */}
          <div
            className={`bg-gray-900 bg-opacity-70 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-red-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } transition-all duration-500`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              React.js / Next.js Development
            </h2>
            <p className="text-gray-300 max-w-xs">
              SPA development with dynamic React components, hooks, and SEO-friendly static & dynamic pages using Next.js.
            </p>
          </div>

          {/* Service Card 3 */}
          <div
            className={`bg-gray-900 bg-opacity-70 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } transition-all duration-500`}
          >
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design Implementation</h2>
            <p className="text-gray-300 max-w-xs">
              User-centered layouts with pixel-perfect design to code conversions and Tailwind-based styling.
            </p>
          </div>

          {/* Service Card 4 */}
          <div
            className={`bg-gray-900 bg-opacity-70 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-red-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } transition-all duration-500`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Website Redesign & Optimization
            </h2>
            <p className="text-gray-300 max-w-xs">
              Speed & performance improvements, modernizing old layouts, and improving accessibility & UX.
            </p>
          </div>

          {/* Service Card 5 */}
          <div
            className={`bg-gray-900 bg-opacity-70 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } transition-all duration-500`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Custom Components Development
            </h2>
            <p className="text-gray-300 max-w-xs">
              Reusable and scalable components such as dashboard elements, modals, cards, buttons, etc.
            </p>
          </div>

          {/* Service Card 6 */}
          <div
            className={`bg-gray-900 bg-opacity-70 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-teal-500 hover:via-blue-500 hover:to-purple-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } transition-all duration-500`}
          >
            <h2 className="text-2xl font-semibold mb-4">Backend Development</h2>
            <p className="text-gray-300 max-w-xs">
              RESTful APIs with FastAPI/Node.js, secure authentication/authorization, and database integration (MongoDB, PostgreSQL).
            </p>
          </div>

          {/* Service Card 7 */}
          <div
            className={`bg-gray-900 bg-opacity-70 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-red-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } transition-all duration-500`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Full-Stack Web Development
            </h2>
            <p className="text-gray-300 max-w-xs">
              Complete web solutions (frontend + backend) with Next.js + Tailwind UI, FastAPI/Node.js backend APIs, JWT/OAuth authentication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

