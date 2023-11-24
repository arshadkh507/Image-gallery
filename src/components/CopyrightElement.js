import React from 'react';

const CopyrightElement = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center">
      <p className="text-lg">© Copyright Arshad Khan</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/in/arshadkh507"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/arshadkh507"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://web.facebook.com/code.master.arshad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 transition duration-300"
        >
          Facebook
        </a>
      </div>
    </div>
  );
};

export default CopyrightElement;
