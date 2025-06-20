import Image from 'next/image';
import Link from 'next/link';

const OpenAIProjects = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-bounce">
        OpenAI SDK Projects
      </h1>

      <p className="text-center text-gray-400 max-w-xl mb-16">
        These projects use the OpenAI SDK to integrate artificial intelligence features such as text generation, chatbots, and automation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* AI Chatbot */}
        <Link href={"https://chatbot-production-0c97.up.railway.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/chatbot.png" alt="AI Chatbot" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">AI Chatbot</h2>
          <p className="text-gray-400 text-center mb-6">
            
          </p>
          <p className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black cursor-pointer">
            View Project
          </p>
        </div>
        </Link>

        {/* Mental Health Assistant */}
        <Link href={"https://mental-health-assistant-snowy.vercel.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/mha.png" alt="Mental Health Assistant" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Mental Health Assistant</h2>
          <p className="text-gray-400 text-center mb-6">
            A smart assistant chatbot built using OpenAI SDK and FastAPI for mental health support.
          </p>
          <p className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black cursor-pointer">
            View Project
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default OpenAIProjects;
