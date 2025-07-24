import { FaExchangeAlt, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

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
                One Click
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Switch your entire digital workspace in 1 click. The ultimate productivity tool for students, developers, and remote workers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaDiscord className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
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
                <button 
                  onClick={() => scrollToSection('download')}
                  className="hover:text-white transition-colors"
                >
                  Download
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Roadmap</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 One Click. All rights reserved. Made with ❤️ for productivity enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
}
