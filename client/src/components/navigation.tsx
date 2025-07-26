import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaExchangeAlt, FaWindows } from "react-icons/fa";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <FaExchangeAlt className="inline mr-2" />
              ContextSwap
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About us
            </button>
            {/* <button 
              onClick={() => scrollToSection('demo')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              
            </button> */}
            {/* <button 
              onClick={() => scrollToSection('download')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Download
            </button> */}
            <button 
              onClick={() => scrollToSection('support')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Support
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('download')}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Download Now
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur rounded-lg p-4 mt-2">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Support
              </button>
              <a
      href="https://github.com/JaYRaNa213/ModoCore_Desktop_APP/releases/download/untagged-03f2f4fa673e9f8af2a1/ContextSwap-Setup-1.0.0.exe"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full px-6 py-3 rounded-lg font-semibold text-white text-center flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
    >
      <FaWindows className="text-xl" />
      Download Now
    </a>

    {/* <a
        aria-label="Download ModoCore setup for Windows"
        href="https://github.com/JaYRaNa213/ModoCore_Desktop_APP/releases/download/v1.0.0/OnlyOneClick.Setup.1.0.0.exe"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl"
      >
        <FaWindows className="mr-2" />
        Download for Windows
      </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
