import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Aboubakr Boukdidi
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Backend Developer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I build scalable and secure backend systems
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/aboubakrbkd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/aboubakr-boukdidi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bkd.bakr3@gmail.com"
              className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 animate-bounce mt-16"
          >
            <span>Learn more about me</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;