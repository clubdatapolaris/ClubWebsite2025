import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  image: string;
  branch: string;
  role?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  delay?: number;
  size?: "small" | "large";
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  image,
  role = "",
  github,
  linkedin,
  instagram,
  delay = 0,
  size = "small",
}) => {
  const isLarge = size === "large";

  return (
    <motion.div
      className={`flex flex-col items-center ${isLarge ? "mb-12" : "mb-8"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {/* Profile Image */}
      <div
  className={`relative overflow-hidden ${
    isLarge ? "w-48 h-48 md:w-56 md:h-56" : "w-28 h-28 md:w-32 md:h-32"
  } rounded-full mb-4 border-4 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 p-1 shadow-xl shadow-blue-500/50 animate-pulse`}
>

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-club-accent/0 group-hover:bg-club-accent/20 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* Name and Role */}
      <h3 className={`font-medium text-center ${isLarge ? "text-xl" : "text-base"}`}>{name}</h3>
      {role && <p className="text-club-muted text-sm text-center">{role}</p>}

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-3 text-white text-xl">
        {github && (
          <a href={github} rel="noopener noreferrer" className="hover:text-gray-400 transition-transform transform hover:scale-110">
            <FaGithub />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110">
            <FaLinkedin />
          </a>
        )}
        {instagram && (
          <a href={instagram} rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaInstagram />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMember;
