import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold mb-6 animate-bounce bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          My Projects
        </h1>

        <p className="text-center mb-16">
          Explore projects using Next.js, TypeScript, Python, and OpenAI SDK.
        </p>

        {/* Grid layout for 2x2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Next.js Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[500px] flex flex-col items-center mx-auto">
            <Image
              src="/images/nextjs.png"
              alt="Next.js Project"
              className="rounded-lg mb-6 object-contain"
              width={200}
              height={200}
            />
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
              Next.js Project
            </h2>
            <p className="text-gray-400 text-center mb-6">
              A modern React framework for production.
            </p>
            <Link href="/nextjsproj">
              <p className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black cursor-pointer">
                View Details
              </p>
            </Link>
          </div>

          {/* TypeScript Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[500px] flex flex-col items-center mx-auto">
            <Image
              src="/images/ts.png"
              alt="TypeScript Project"
              className="rounded-lg mb-6 object-contain"
              width={200}
              height={200}
            />
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">
              TypeScript Project
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Strongly typed JavaScript for scalable applications.
            </p>
            <Link href="/tsproj">
              <p className="px-6 py-3 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black cursor-pointer">
                View Details
              </p>
            </Link>
          </div>

          {/* Python Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[500px] flex flex-col items-center mx-auto">
            <Image
              src="/images/python.png"
              alt="Python Project"
              className="rounded-lg mb-6 object-contain"
              width={200}
              height={200}
            />
            <h2 className="text-2xl font-semibold text-green-400 mb-2">
              Python Project
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Versatile programming language for various applications.
            </p>
            <Link href="/pythonproj">
              <p className="px-6 py-3 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer">
                View Details
              </p>
            </Link>
          </div>

          {/* OpenAI SDK Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[500px] flex flex-col items-center mx-auto">
            <Image
              src="/images/sdk.png"
              alt="OpenAI SDK Project"
              className="rounded-lg mb-6 object-contain"
              width={200}
              height={200}
            />
            <h2 className="text-2xl font-semibold text-violet-400 mb-2">
              OpenAI SDK Project
            </h2>
            <p className="text-gray-400 text-center mb-6">
              AI-powered app using OpenAI’s official SDK for ChatGPT and assistants.
            </p>
            <Link href="/openaisdk">
              <p className="px-6 py-3 rounded-lg border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-black cursor-pointer">
                View Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
