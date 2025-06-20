import Image from 'next/image';
import Link from 'next/link';

const PythonProjects = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-bounce">
        Python CLI and Streamlit Projects
      </h1>

      <p className="text-center text-gray-400 max-w-xl mb-16">
          This section features both CLI-based and Streamlit Python projects, showcasing hands-on logic-building, automation, and interactive applications developed in Google Colab and browser-based environments.
      </p>

      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-bounce">CLI Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


        {/* BMI Calculator */}
        <Link href="https://colab.research.google.com/drive/11veKl7H4oDHDFQ_QrPSNdFbrEaK52_u_?usp=sharing#scrollTo=ADWlEkkBt59F" >
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/bmi.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">BMI Calculator</h2>
          <p className="text-gray-400 text-center mb-6">
            CLI Version of BMI Calculator built using basic Python logic.
          </p>
          <button className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Computer Guess the Number */}
        <Link href={"https://colab.research.google.com/drive/1nX9ZQ9IGj71KANwpS_GnZrn-pUkhEAKC?usp=sharing#scrollTo=sYF2HB4q9KSM"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/compguessnum.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2 text-center">Computer Guess The Number</h2>
          <p className="text-gray-400 text-center mb-6">
            Fun CLI game where the computer tries to guess your number.
          </p>
          <button className="px-6 py-3 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Countdown Timer */}
        <Link href={"https://colab.research.google.com/drive/1d19CczYylPNQ5842-F39ypYDTAAAQn2_?usp=sharing"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/countdowntimer.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Countdown Timer</h2>
          <p className="text-gray-400 text-center mb-6">
            A simple CLI countdown timer that runs in real time.
          </p>
          <button className="px-6 py-3 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Hangman Game */}
        <Link href={"https://colab.research.google.com/drive/1n4J3EDBTZryhxqrVub8a6-T03bK_JSyj?usp=sharing"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/hangman.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-red-400 mb-2">Hangman Game</h2>
          <p className="text-gray-400 text-center mb-6">
            Classic word-guessing game in CLI using Python loops and logic.
          </p>
          <button className="px-6 py-3 rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Mad Libs Game */}
        <Link href={"https://colab.research.google.com/drive/1irCKsE1QN-407eXUZmRptsku82Anp8qb?usp=sharing"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/madlib.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-green-400 mb-2 text-center">Personalized Mad Libs</h2>
          <p className="text-gray-400 text-center mb-6">
            Enter your words to generate a funny story in CLI.
          </p>
          <button className="px-6 py-3 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Rock, Paper, Scissors */}
        <Link href={"https://colab.research.google.com/drive/1wICVfOmqKaQvAfrGz8nRshkkzyx2zGmD?usp=sharing"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/rps.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2 text-center">Rock, Paper, Scissors</h2>
          <p className="text-gray-400 text-center mb-6">
            Play Rock, Paper, Scissors against the computer in your terminal.
          </p>
          <button className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* User Guess the Number */}
        <Link href={"https://colab.research.google.com/drive/1WOEg2dD-ZvgwLr5f5q95kHQnIl0PKPPM?usp=sharing"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/userguessnum.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-blue-400 mb-2 text-center">User Guess The Number</h2>
          <p className="text-gray-400 text-center mb-6">
            The user tries to guess the number chosen by the computer.
          </p>
          <button className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Password Generator */}
        <Link href={"https://colab.research.google.com/drive/1YzuaCz0pjARDDvVozxEEFba-Hox8LMBO?usp=sharing#scrollTo=6nKM-2uU_Hul"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/passgenerator.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-orange-400 mb-2 text-center">Random Password Generator</h2>
          <p className="text-gray-400 text-center mb-6">
            Generates secure random passwords through the CLI.
          </p>
          <button className="px-6 py-3 rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>
      </div>

      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-bounce pb-10 pt-20">Streamlit Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


        {/* BMI Calculator */}
        <Link href={"https://appprojects-u7z8mlbejrmy5tmw2zotu9.streamlit.app/"} >
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/bmi.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">BMI Calculator</h2>
          <p className="text-gray-400 text-center mb-6">
            CLI Version of BMI Calculator built using basic Python logic.
          </p>
          <button className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Computer Guess the Number */}
        <Link href={"https://appprojects-cuqst3aosagjhe6gadtbnv.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/compguessnum.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2 text-center">Computer Guess The Number</h2>
          <p className="text-gray-400 text-center mb-6">
            Fun CLI game where the computer tries to guess your number.
          </p>
          <button className="px-6 py-3 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Countdown Timer */}
        <Link href={"https://appprojects-ckbeokd74k4yfvxlyblwpk.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/countdowntimer.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Countdown Timer</h2>
          <p className="text-gray-400 text-center mb-6">
            A simple CLI countdown timer that runs in real time.
          </p>
          <button className="px-6 py-3 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Hangman Game */}
        <Link href={"https://appprojects-fkxe9xzw3yhfwkwv7r4ggw.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/hangman.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-red-400 mb-2">Hangman Game</h2>
          <p className="text-gray-400 text-center mb-6">
            Classic word-guessing game in CLI using Python loops and logic.
          </p>
          <button className="px-6 py-3 rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Mad Libs Game */}
        <Link href={"https://appprojects-owgnxscsrw27zyhtbmt5iv.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/madlib.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-green-400 mb-2 text-center">Personalized Mad Libs</h2>
          <p className="text-gray-400 text-center mb-6">
            Enter your words to generate a funny story in CLI.
          </p>
          <button className="px-6 py-3 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Rock, Paper, Scissors */}
        <Link href={"https://appprojects-vpphhbd3qjbnsxzuku3yzv.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/rps.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2 text-center">Rock, Paper, Scissors</h2>
          <p className="text-gray-400 text-center mb-6">
            Play Rock, Paper, Scissors against the computer in your terminal.
          </p>
          <button className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* User Guess the Number */}
        <Link href={"https://appprojects-vdkulzp9wfghdtbsdcrahc.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/userguessnum.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-blue-400 mb-2 text-center">User Guess The Number</h2>
          <p className="text-gray-400 text-center mb-6">
            The user tries to guess the number chosen by the computer.
          </p>
          <button className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Password Generator */}
        <Link href={"https://appprojects-hgervcdhsrzrvxn3jdcfal.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/passgenerator.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-orange-400 mb-2 text-center">Random Password Generator</h2>
          <p className="text-gray-400 text-center mb-6">
            Generates secure random passwords through the CLI.
          </p>
          <button className="px-6 py-3 rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Portfolio */}
        <Link href={"https://appprojects-8qtkrrnh6rpp6tvm6oq45a.streamlit.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[340px] flex flex-col items-center mx-auto">
          <Image src="/images/portfolio.png" alt="portfolio" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-emerald-500 mb-2 text-center">Simple Basic Portfolio</h2>
          <p className="text-gray-400 text-center mb-6">
            Generates secure random passwords through the CLI.
          </p>
          <button className="px-6 py-3 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>
      </div>

    </div>
  );
};

export default PythonProjects;
