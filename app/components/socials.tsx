// SocialLinks.tsx
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-3 items-center">
      
      <a href="https://github.com/RajaaKacemi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800">
        <FaGithub size={24} />
      </a>
      <a href="mailto:rajaa01.kacemi@gmail.com" className="text-gray-400 hover:text-gray-800">
        <FaEnvelope size={24} />
      </a>
      <a href="https://www.linkedin.com/in/rajaa-kacemi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800">
        <FaLinkedin size={24} />
      </a>
      <a href="https://x.com/heyRajaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800">
        <FaXTwitter size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;