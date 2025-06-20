import Image from 'next/image';
import Link from 'next/link';

const NextjsProjects = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-bounce">
        Next.js Projects
      </h1>

      <p className="text-center text-gray-400 max-w-xl mb-16">
        Explore a collection of my Next.js projects, including blogs, APIs, and e-commerce sites.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Sanity Blog */}
        <Link href={"https://sanity-blog-lovat-gamma.vercel.app/" }>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/sanity.png" alt="Sanity Blog" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">Sanity Blog</h2>
          <p className="text-gray-400 text-center mb-6">
            A blog website powered by Sanity CMS and Next.js.
          </p>
          <button className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Next.js Blog Website */}
        <Link href={"https://blog-website-eight-fawn.vercel.app/" }>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/blog.png" alt="Next.js Blog" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Next.js Blog Website</h2>
          <p className="text-gray-400 text-center mb-6">
            A feature-rich blog website built with Next.js.
          </p>
          <button className="px-6 py-3 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Nike E-commerce Website */}
        <Link href={"https://e-commerce-website-nike.vercel.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/nike.png" alt="Nike E-commerce" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-red-400 mb-2">Nike E-commerce Website</h2>
          <p className="text-gray-400 text-center mb-6">
            A stylish e-commerce website showcasing Nike products.
          </p>
          <button className="px-6 py-3 rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* API Routes Demo */}
        <Link href={"https://class-11-api-route.vercel.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/api.png" alt="API Routes Demo" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">API Routes Demo</h2>
          <p className="text-gray-400 text-center mb-6">
            A Next.js project demonstrating API Routes functionality.
          </p>
          <button className="px-6 py-3 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Books API */}
        <Link href={"https://class-10-assignment-books-api-nxiw.vercel.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/booksapi.png" alt="Books API" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Books API</h2>
          <p className="text-gray-400 text-center mb-6">
            A book management API created with Next.js.
          </p>
          <button className="px-6 py-3 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Skincare Website */}
        <Link href={"https://nextjs-skincare-website-customcss.vercel.app/"}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/skincare.png" alt="Skincare Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Skincare Website</h2>
          <p className="text-gray-400 text-center mb-6">
            A beautifully designed skincare product website.
          </p>
          <button className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

        {/* Haveli Restaurant Website */}
        <Link href={"https://blog-website-eight-fawn.vercel.app/" }>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 w-80 min-h-[440px] flex flex-col items-center mx-auto">
          <Image src="/images/haveli.png" alt="Haveli Restaurant Website" className="rounded-lg mb-6" width={200} height={200} />
          <h2 className="text-2xl font-semibold text-amber-200 mb-2 text-center">Haveli Restaurant Website</h2>
          <p className="text-gray-400 text-center mb-6">
            An amazing restaurant website built with Next.js.
          </p>
          <button className="px-6 py-3 rounded-lg border border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-black cursor-pointer">
            View Project
          </button>
        </div>
        </Link>

      </div>
    </div>
  );
};

export default NextjsProjects;
