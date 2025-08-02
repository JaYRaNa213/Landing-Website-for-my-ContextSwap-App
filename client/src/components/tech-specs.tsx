"use client";

import { FaWindows, FaDownload, FaLock, FaUserShield, FaCode } from "react-icons/fa";
import { Button } from './ui/button';

export default function TechSpecs() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Optimized for performance, privacy, and full offline support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Windows App Card */}
          <div className="bg-black/5 backdrop-blur rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <FaWindows className="text-4xl text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Windows App (.exe)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Supported OS:</span>
                <span>Windows 10 & 11</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Version:</span>
                <span>v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Size:</span>
                <span>90 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Runs Offline:</span>
                <span>Yes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Auto Update:</span>
                <span>Enabled</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Built With:</span>
                <span>Electron + React</span>
              </div>

              <div className="pt-6">
                <a
                  href="https://github.com/JaYRaNa213/ModoCore_Desktop_APP/releases/download/untagged-5b63790aed8c1ab7268e/ContextSwap-Setup-1.0.2.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                    <FaDownload className="mr-2" />
                    Download for Windows
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Privacy & Security Card */}
          <div className="bg-black/5 backdrop-blur rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-6">
              <FaUserShield className="text-4xl text-green-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold">Privacy & Security</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <FaLock className="text-2xl text-blue-400 mb-2 mx-auto" />
                <h4 className="font-semibold mb-1">100% Local</h4>
                <p className="text-gray-300 text-sm">
                  All your data is stored securely on your device.
                </p>
              </div>
              <div>
                <FaUserShield className="text-2xl text-purple-400 mb-2 mx-auto" />
                <h4 className="font-semibold mb-1">No Tracking</h4>
                <p className="text-gray-300 text-sm">
                  We never collect personal data or behavior analytics.
                </p>
              </div>
              <div>
                <FaCode className="text-2xl text-green-400 mb-2 mx-auto" />
                <h4 className="font-semibold mb-1">Open Source</h4>
                <p className="text-gray-300 text-sm">
                  View and verify the code. Full transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
