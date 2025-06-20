import Image from 'next/image';
import Link from 'next/link';

const TSProjects = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        TypeScript Projects
      </h1>

      <p className="text-center text-gray-400 max-w-xl mb-16">
        These projects showcase the power of TypeScript for building scalable and robust applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* BMI Calculator */}
        <Link href={"https://www.npmjs.com/package/calc_bmi-calculator"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/calculator.png" alt="Bmi Calculator" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">BMI Calculator</h2>
          <p className="text-gray-400 text-center mb-6">
            A to-do list web app with state management and full TypeScript support.
          </p>
          <button className="px-6 py-3 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Number Guessing Game */}
        <Link href={"https://www.npmjs.com/package/play_num_guess_game"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/numguessgame.png" alt="Number Guessing Game" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl text-center font-semibold text-sky-400 mb-2">Number Guessing Game</h2>
          <p className="text-gray-400 text-center mb-6">
            Weather data fetched using OpenWeather API and strictly typed with TypeScript.
          </p>
          <button className="px-6 py-3 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* ATM Machine */}
        <Link href={"https://www.npmjs.com/package/cash-amount-atm_machine"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/atm.png" alt="ATM Machine" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">ATM Machine</h2>
          <p className="text-gray-400 text-center mb-6">
            A fully typed personal portfolio using React, TypeScript, and Tailwind CSS.
          </p>
          <button className="px-6 py-3 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Todo List */}
        <Link href={"https://www.npmjs.com/package/your_own_todo_list"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/todo.png" alt="Todo List" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Todo List</h2>
          <p className="text-gray-400 text-center mb-6">
            A real-time chat app built with TypeScript and socket.io.
          </p>
          <button className="px-6 py-3 rounded-lg border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/*Word Counter */}
        <Link href={"https://www.npmjs.com/package/fta_word_counter"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/wc.png" alt="Word Counter" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Word Counter</h2>
          <p className="text-gray-400 text-center mb-6">
            A fully typed personal portfolio using React, TypeScript, and Tailwind CSS.
          </p>
          <button className="px-6 py-3 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/*Countdown Timer*/}
        <Link href={"https://www.npmjs.com/package/nr_countdown_timer"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/countdowntimer.png" alt="Countdown Timer" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl font-semibold text-lime-400 mb-2">Countdown Timer</h2>
          <p className="text-gray-400 text-center mb-6">
            A fully typed personal portfolio using React, TypeScript, and Tailwind CSS.
          </p>
          <button className="px-6 py-3 rounded-lg border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/*Adventure Game*/}
        <Link href={"https://www.npmjs.com/package/tf_adventure_game"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/adventuregame.png" alt="Adventure Game" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">Adventure Game</h2>
          <p className="text-gray-400 text-center mb-6">
            A fully typed personal portfolio using React, TypeScript, and Tailwind CSS.
          </p>
          <button className="px-6 py-3 rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/*OOP Bank*/}
        <Link href={"https://www.npmjs.com/package/ra_oop_bank"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/oopbank.png" alt="OOP Bank" className="rounded-lg mb-6" width={100} height={100} />
          <h2 className="text-2xl font-semibold text-red-400 mb-2">OOP Bank</h2>
          <p className="text-gray-400 text-center mb-6">
            A fully typed personal portfolio using React, TypeScript, and Tailwind CSS.
          </p>
          <button className="px-6 py-3 rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

      </div>
    </div>
  );
};

export default TSProjects;
