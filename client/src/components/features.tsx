import { FaMousePointer, FaLayerGroup, FaClock, FaPuzzlePiece, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaMousePointer className="text-2xl text-white" />,
      title: "ContextSwap Launch",
      description: "Instantly launch your entire workspace setup - apps, websites, files, and music - with a single click.",
      gradient: "from-blue-600 to-purple-600",
      hoverColor: "hover:border-blue-500/50"
    },
    {
      icon: <FaLayerGroup className="text-2xl text-white" />,
      title: "Smart Templates",
      description: "Pre-built templates for Study, Coding, Meeting, and Focus modes. Customize or create your own.",
      gradient: "from-purple-600 to-pink-600",
      hoverColor: "hover:border-purple-500/50"
    },
    {
      icon: <FaClock className="text-2xl text-white" />,
      title: "Auto-Scheduling",
      description: "Schedule your modes to activate automatically. Start your day with Focus Mode at 9 AM.",
      gradient: "from-green-600 to-emerald-600",
      hoverColor: "hover:border-green-500/50"
    },
    {
      icon: <FaPuzzlePiece className="text-2xl text-white" />,
      title: "Drag & Drop",
      description: "Easy customization with drag-and-drop interface. Add apps, websites, and files effortlessly.",
      gradient: "from-yellow-600 to-orange-600",
      hoverColor: "hover:border-yellow-500/50"
    },
    {
      icon: <FaChartLine className="text-2xl text-white" />,
      title: "Usage Analytics",
      description: "Track your productivity patterns and optimize your workflow with detailed usage insights.",
      gradient: "from-red-600 to-pink-600",
      hoverColor: "hover:border-red-500/50"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "100% Local",
      description: "Your data stays on your device. No cloud required, complete privacy and security guaranteed.",
      gradient: "from-cyan-600 to-blue-600",
      hoverColor: "hover:border-cyan-500/50"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ContextSwap?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop manually opening apps one by one. Create perfect productivity setups that launch instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-black/5 backdrop-blur rounded-2xl p-8 border border-white/10 ${feature.hoverColor} transition-all transform hover:scale-105`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
