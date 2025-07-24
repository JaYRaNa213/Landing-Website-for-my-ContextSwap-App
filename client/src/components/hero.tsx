import { Button } from "@/components/ui/button";
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
                Switch your entire{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  digital workspace
                </span>{" "}
                in 1 click
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Study. Code. Meet. Automate.ContextSwap instantly launches your perfect productivity setup with templates for every task.
              </p>
            </div>

            {/* Download Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  <a
    aria-label="Download ModoCore setup for Windows"
    href="https://github.com/JaYRaNa213/ModoCore_Desktop_APP/releases/download/v1.0.0/OnlyOneClick.Setup.1.0.0.exe"
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
        "865b7065eb0ff3330974ec6920abadf5b1737e9524bd97782cdbf36c6ae5990f"
      )
    }
  >
    865b7065eb0ff3330974ec6920abadf5b1737e9524bd97782cdbf36c6ae5990f
  </code>
</p>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1-Click</div>
                <div className="text-sm text-gray-400">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">10+</div>
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
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="ModoCore – One-click productivity launcher desktop app for developers and students"
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
