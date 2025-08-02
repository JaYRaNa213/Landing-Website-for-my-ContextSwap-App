import { FaExchangeAlt, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="support" className="py-16 px-4 bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <FaExchangeAlt className="inline mr-2" />
                ContextSwap
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Switch your digital workspace in one click. The ultimate automation tool for developers, creators, and productivity lovers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/your-handle" // optional
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://github.com/JaYRaNa213/contextswap"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">App</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="hover:text-white transition-colors"
                >
                  Demo
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/JaYRaNa213/ModoCore_Desktop_APP/releases/download/untagged-5b63790aed8c1ab7268e/ContextSwap-Setup-1.0.2.exe"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation {/* future */}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              {/* Optional future policy */}
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 ContextSwap. All rights reserved. Built for creators and coders.</p>
        </div>
      </div>
    </footer>
  );
}
