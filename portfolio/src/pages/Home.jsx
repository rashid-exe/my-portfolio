import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; // Ensure your image path is correct
import resume from "../assets/resume.pdf"; // Ensure your resume file path is correct

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 bg-gradient-to-r from-blue-50 via-teal-100 to-indigo-200 min-h-screen">
      {/* Profile Picture Section */}
      <img
        src={profilePic}
        alt="Rashid Reyaz"
        className="w-40 h-40 rounded-full shadow-xl mb-6 hover:scale-110 transition-all duration-300"
      />
      <h1 className="text-4xl font-semibold text-gray-800 mb-2">Hello, I'm Rashid Reyaz</h1>
      <p className="text-lg text-gray-600 mt-2">Frontend Developer | MERN Stack Learner</p>

      {/* About Me Section */}
      <section className="mt-12 w-full max-w-4xl bg-white text-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I am a passionate Frontend Developer with hands-on experience in <b>HTML, CSS, Tailwind CSS, JavaScript, and React</b>. Currently, I am expanding my skills in the MERN stack to build dynamic and responsive applications. 
          <br />
          <br />
          I am pursuing  <b> B.Tech in Electronics and Communication Engineering (ECE) </b> with a specialization in <b>AI & ML</b> from <b>Netaji Subhas University of Technology (NSUT)</b>. As a final-year student, I am constantly learning and tackling new challenges to apply my skills in the tech industry. I aspire to develop innovative solutions that make a meaningful impact.
        </p>
      </section>

      {/* Buttons for Projects and Resume */}
      <div className="mt-12 flex space-x-6 justify-center">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          View Projects
        </Link>

        <a
          href={resume}
          download="Rashid_Reyaz_Resume.pdf"
          className="px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;