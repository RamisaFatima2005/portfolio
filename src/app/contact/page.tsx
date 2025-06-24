"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaEnvelope, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (Twitter) icon

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-bounce">
        Contact Me
      </h1>

      <p className="text-gray-400 mb-10 text-center max-w-md">
        Feel free to connect with me through any of the platforms below.
      </p>

      <div className="flex space-x-8 text-3xl">
        <Link href="https://github.com/RamisaFatima2005" className="hover:text-zinc-400 transition" passHref>
            <FaGithub />
        </Link>

        <Link href="https://www.linkedin.com/in/ramisa-fatima-8639822b8/" className="hover:text-blue-500 transition" passHref>
            <FaLinkedin />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
