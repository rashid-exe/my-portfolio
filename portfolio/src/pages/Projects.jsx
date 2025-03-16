const projects = [
    { id: 1, name: "Weather App", link: "https://github.com/rashid/weather-app" },
    { id: 2, name: "Quiz App", link: "https://quizapp419.netlify.app/" },
    { id: 3, name: "Sentiment Analysis", link: "https://github.com/rashid-exe/Sentiment-Analysis-with-ML" },
    { id: 4, name: "Employee Task Manager", link: "https://employeedashboard-orcin.vercel.app/" },
    { id: 5, name: "ChatBot", link: "https://github.com/rashid-exe/Sentiment-Analysis-with-ML" },
    { id: 6, name: "Random Password Generator", link: "https://random-password-generator419.netlify.app/" },
  ];
  
  const Projects = () => {
    return (
      <div className="container mx-auto px-6 py-20 bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-600"
            >
              <h3 className="text-2xl font-extrabold text-gray-800 mb-4">{project.name}</h3>
              <p className="text-lg text-gray-600">Click to view the project live</p>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;