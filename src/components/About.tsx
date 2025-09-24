import React from 'react';
import { Code2, GraduationCap, Heart } from 'lucide-react';
import profileImage from './aboukdid.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Coding Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My passion for backend development started with curiosity about how systems work behind the scenes. 
                  I love solving complex problems and building robust, scalable solutions that power modern applications.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently studying at <span className="font-semibold text-gray-900 dark:text-white">1337 Coding School</span>, 
                  where I'm deepening my understanding of computer science fundamentals and modern development practices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Passion</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm passionate about creating efficient, maintainable code and exploring new technologies. 
                  I believe in continuous learning and staying up-to-date with the latest industry trends and best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-xl border dark:border-gray-700">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-purple-100 dark:ring-purple-900/30">
                  <img 
                    src={profileImage} 
                    alt="Aboubakr Boukdidi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Backend Developer</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Building the Future, One API at a Time</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;