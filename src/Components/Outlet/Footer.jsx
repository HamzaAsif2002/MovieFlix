export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-[80%] mx-auto  py-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hamza Flix. All rights reserved.
        </p>
        <div className="space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
