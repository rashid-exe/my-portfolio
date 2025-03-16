import React from "react";

const futureProjects = [
  {
    id: 1,
    name: "AI Chatbot",
    features: [
      "Natural language processing",
      "Sentiment analysis",
      "User interaction-based learning",
    ],
  },
  {
    id: 2,
    name: "Blockchain App",
    features: [
      "Smart contracts",
      "Decentralized transactions",
      "Crypto wallet integration",
    ],
  },
  {
    id: 3,
    name: "Image Recognition",
    features: [
      "Object detection",
      "Real-time image processing",
      "AI-powered analysis",
    ],
  },
  {
    id: 4,
    name: "Image Recognition",
    features: [
      "Object detection",
      "Real-time image processing",
      "AI-powered analysis",
    ],
  },
  {
    id: 5,
    id: 5,
    name: "Speech Recognition",
    features: [
      "Real-time speech-to-text",
      "Voice command processing",
      "Language translation",
    ],
  },
  {
    id: 6,
    name: "Automated Essay Grader",
    features: [
      "Natural language understanding",
      "Grading based on content quality",
      "Real-time feedback for students",
    ],
  },
];

const FutureProjects = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-blue-50 to-teal-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Future Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {futureProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.name}</h3>
              <ul className="text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-3">
                    <span className="text-lg text-teal-600">&#8226;</span>
                    <span className="ml-3 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureProjects;