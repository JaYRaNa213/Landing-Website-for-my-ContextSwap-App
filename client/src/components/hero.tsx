import { Button } from './ui/button';
import { FaWindows, FaAndroid, FaCode, FaRocket } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
    Build and Launch Your{" "}
    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Perfect Workflow
    </span>{" "}
    in Seconds
  </h1>
  <p className="text-xl text-gray-300 leading-relaxed">
    ContextSwap lets you create custom templates based on your daily routines—whether you're a student, developer, designer, or remote worker. Add your favorite apps and websites, and launch everything exactly where you left off—ready to work, instantly.
  </p>
</div>


            {/* Download Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  <a
    aria-label="Download ContextSwap setup for Windows"
    href="https://github.com/JaYRaNa213/ModoCore_Desktop_APP/releases/download/untagged-5b63790aed8c1ab7268e/ContextSwap-Setup-1.0.2.exe"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl"
  >
    <FaWindows className="mr-2" />
    Download for Windows
  </a>

  {/* Placeholder Android button */}
  <a
    aria-label="Android version coming soon"
    className="bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 opacity-50 cursor-not-allowed pointer-events-none"
  >
    <FaAndroid className="mr-2" />
    Android Coming Soon
  </a>
</div>

{/* SHA256 */}
<p className="text-sm text-gray-400 pt-2">
  SHA256:&nbsp;
  <code
    className="text-xs break-all cursor-pointer hover:text-white"
    title="Click to copy"
    onClick={() =>
      navigator.clipboard.writeText(
        "cc3f1418e008a18453350291a80f0b6ec925fea3d9c882d5d159ea9d56b008d6"
      )
    }
  >
    cc3f1418e008a18453350291a80f0b6ec925fea3d9c882d5d159ea9d56b008d6
  </code>
</p>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1-Click</div>
                <div className="text-sm text-gray-400">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">Built In</div>
                <div className="text-sm text-gray-400">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-400">Local & Secure</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <img
              src="https://res.cloudinary.com/djtq2eywl/image/upload/v1753504471/Screenshot_1107_imxrn7.png"
              alt="ContextSwap – One-click productivity launcher desktop app for developers and students"
              className="rounded-2xl shadow-2xl w-full animate-float"
            />

            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 bg-blue-600/90 backdrop-blur rounded-lg p-3 animate-pulse-slow">
              <FaCode className="text-white text-xl" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 bg-purple-600/90 backdrop-blur rounded-lg p-3 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            >
              <FaRocket className="text-white text-xl" />
            </div>
            <div
              className="absolute top-1/2 -right-6 bg-green-600/90 backdrop-blur rounded-lg p-3 animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            >
              <IoFlash className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
