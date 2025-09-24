import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AboubakrBoukdidi.pdf';
    link.download = 'AboubakrBoukdidi_Resume.pdf';
    link.click();
  };

  const handleView = () => {
    window.open('/AboubakrBoukdidi.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download or view my complete resume to learn more about my experience, education, and technical skills.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg border dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Aboubakr Boukdidi</h3>
                <p className="text-gray-600 dark:text-gray-300">Backend Developer Resume</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">PDF Document</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleView}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <Eye size={20} />
                <span>View Resume</span>
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* PDF Preview */}
          <div className="mt-8 border-t dark:border-gray-700 pt-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-inner border dark:border-gray-600 overflow-hidden">
              <div className="aspect-[8.5/11] w-full">
                <iframe
                  src="/AboubakrBoukdidi.pdf"
                  className="w-full h-full border-0"
                  title="Resume Preview"
                />
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Resume preview - Click "View Resume" to open in full screen or "Download PDF" to save locally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;