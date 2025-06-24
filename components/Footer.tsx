export default function Footer() {
  return (
      <div className=" text-white py-6 m-10 max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ramisa Fatima. Contact: 
          <a href="mailto:youremail@example.com" className="text-gray-200 hover:underline ml-1">
            fatimaramisa12@gmail.com
          </a>
        </p>
      </div>
  );
}
