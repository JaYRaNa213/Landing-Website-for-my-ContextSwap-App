import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

export default function UseCases() {
  const useCases = [
    {
      icon: <FaGraduationCap className="text-white" />,
      title: "Students",
      description: "Switch between study sessions, research mode, and break time instantly.",
      bgColor: "bg-blue-600"
    },
    {
      icon: <FaLaptopCode className="text-white" />,
      title: "Developers",
      description: "Launch your entire development environment with IDEs, terminals, and docs.",
      bgColor: "bg-purple-600"
    },
    {
      icon: <FaBriefcase className="text-white" />,
      title: "Remote Workers",
      description: "Seamlessly transition between meetings, deep work, and collaboration.",
      bgColor: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Perfect For{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a student, developer, or remote worker, One Click adapts to your workflow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Modern home office with dual monitors"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${useCase.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
