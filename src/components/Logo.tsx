import React from 'react';
import { Link } from 'react-router-dom';
import dplogo from '../components/images/logo.png'; // Adjust path as needed

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl md:text-4xl'
  };

  return (
    <Link to="/" className={`font-display font-bold ${sizeClasses[size]} text-white relative group flex items-center space-x-2`}>
      {/* Club Logo Image */}
      <img src={dplogo} alt="Club Logo" className="h-13 w-12" />
      
      <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-500">
        Data
      </span>
      <span className="inline-block ml-1 relative z-10 text-sky-500 transition-colors duration-300 group-hover:text-white">
        Polaris
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </Link>
  );
};

export default Logo;
