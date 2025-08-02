'use client';

import { Button } from './ui/button';
import { FaWindows, FaAndroid, FaCode, FaRocket } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";

export default function Demo() {
  return (
    <main className="pt-24 pb-16 px-4 relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
        {/* Text + Download Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Launch your entire{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              workspace
            </span>{" "}
            in ContextSwap.
          </h1>
          <p className="text-lg text-gray-300">
            Automate your coding, studying, and productivity with powerful desktop templates.
            No setup. Just launch.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-xl"
            >
              <a
                href="https://github.com/JaYRaNa213/ModoCore_Desktop_APP/releases/download/untagged-5b63790aed8c1ab7268e/ContextSwap-Setup-1.0.2.exe"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FaWindows className="inline mr-2" />
                Download for Windows
              </a>
            </Button>

            <Button
              disabled
              className="bg-gray-700 text-white px-6 py-3 rounded-xl opacity-60 cursor-not-allowed"
            >
              <FaAndroid className="inline mr-2" />
              Android Coming Soon
            </Button>
          </div>

          {/* SHA256 */}
          <p className="text-xs text-gray-400">
            SHA256:&nbsp;
            <code
              className="hover:text-white cursor-pointer break-all"
              onClick={() =>
                navigator.clipboard.writeText(
                  "865b7065eb0ff3330974ec6920abadf5b1737e9524bd97782cdbf36c6ae5990f"
                )
              }
            >
              865b7065eb0ff3330974ec6920abadf5b1737e9524bd97782cdbf36c6ae5990f
            </code>
          </p>
        </div>

        {/* Image or Demo Preview */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=600"
            alt="ContextSwap Preview"
            className="rounded-2xl shadow-2xl animate-fade-in"
          />
          {/* Floating Icons */}
          <div className="absolute -top-4 -left-4 bg-blue-600/90 rounded-lg p-3 animate-pulse">
            <FaCode className="text-white text-xl" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-purple-600/90 rounded-lg p-3 animate-pulse" style={{ animationDelay: "1s" }}>
            <FaRocket className="text-white text-xl" />
          </div>
          <div className="absolute top-1/2 -right-6 bg-green-600/90 rounded-lg p-3 animate-pulse" style={{ animationDelay: "2s" }}>
            <IoFlash className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="max-w-5xl mx-auto mt-20 grid sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-bold text-blue-400">1-Click</h3>
          <p className="text-sm text-gray-400">Setup Time</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-purple-400">10+</h3>
          <p className="text-sm text-gray-400">Prebuilt Templates</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-400">100%</h3>
          <p className="text-sm text-gray-400">Offline & Secure</p>
        </div>
      </div>

      {/* Gradient Circles BG */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}
