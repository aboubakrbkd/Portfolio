import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Webserver',
      description: 'A high-performance HTTP server built from scratch in C++, implementing core web protocols and request handling with efficient memory management.',
      technologies: ['C++', 'HTTP', 'Socket Programming'],
      github: 'https://github.com/mboukour/webserv',
    },
    {
      title: 'BookLibrary',
      description: 'A comprehensive library management system with REST API, user authentication, and book catalog management built with modern backend technologies.',
      technologies: ['Node.js', 'MongoDB', 'Express', 'JWT'],
      github: 'https://github.com/aboubakrbkd/CRUD-book',
    },
    {
      title: 'Inception',
      description: 'Multi-container Docker application demonstrating microservices architecture with WordPress, MySQL, and Nginx in isolated environments.',
      technologies: ['Docker', 'Docker Compose', 'WordPress', 'MySQL'],
      github: 'https://github.com/aboubakrbkd/Inception-42',
    },
    {
      title: 'Minishell',
      description: 'A Unix shell implementation in C with command parsing, process management, pipes, redirections, and built-in commands functionality.',
      technologies: ['C', 'Unix Systems', 'Process Management'],
      github: 'https://github.com/aboubakrbkd/Minishell',
    },
    {
      title: 'Transcendance',
      description: 'Full-stack web application with real-time features, user management, and interactive gameplay using modern web technologies.',
      technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
      github: 'https://github.com/mboukour/ft_transcendence',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my backend development skills and passion for building robust systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border dark:border-gray-700"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300"
                >
                  <span>View Code</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;