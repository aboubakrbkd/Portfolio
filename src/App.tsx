import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">
                <span className="text-purple-400">A</span>boubakr Boukdidi
              </div>
              <p className="text-gray-400 mb-6">Backend Developer</p>
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="https://github.com/aboubakr-boukdidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/aboubakr-boukdidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:aboubakr.boukdidi@example.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Email
                </a>
              </div>
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400 text-sm">
                  © 2025 Aboubakr Boukdidi. Built with React and Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;