const Contact = () => {
    return (
      <div className="bg-gradient-to-r from-indigo-100 via-blue-50 to-teal-100 py-20">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Contact Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              Feel free to reach out! I’d love to hear from you and discuss potential opportunities or ideas.
            </p>
            <a
              href="mailto:rashidreyaz4190@gmail.com"
              className="inline-block px-8 py-3 bg-teal-500 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-teal-600 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;