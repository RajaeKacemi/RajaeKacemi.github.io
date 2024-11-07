// ResumeButton.tsx
'use client';

import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const ResumeButton: React.FC = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1b8KyQYIWZHAgW6DC0I472JO9bjLMWvH3/view?usp=drive_link"
      target='_blank'
      download
      className="flex items-center bg-[#111111] hover:bg-white hover:border-black text-white hover:text-[#111111] px-3 py-1 rounded transition duration-300 mr-4 border border-white"
    >
      <FaFileDownload size={18} className="mr-2" />
      Resume
    </a>
  );
};

export default ResumeButton;