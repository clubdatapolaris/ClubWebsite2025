"use client"

import { motion } from "framer-motion"
import type React from "react"
import { useState } from "react"
import aboutTeamImg from "../images/about_datapolaris.jpg"
import A_D_Mairale from "../images/AD mairale.jpg"
import A_K_patil from "../images/Ashish patil.jpg"
import bg1 from "../images/bg1.jpeg"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bg4.jpg"
import hod from "../images/Hod-image.jpg"
import newlogo from "../images/logo.png"
import rcpitlogo from "../images/rcpitlogo2.png"
import teamVideo from "../images/teamVideo.mp4"

const About: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  // Faculty data with enhanced information
  const facultyMembers = [
    {
      name: "Dr. U. M. Patil",
      position: "Head of Department",
      image: hod,
      specialization: "Data Science & Machine Learning",
      experience: "20+ years of academic experience",
      education: "Ph.D. in Computer Science",
      achievements: ["Published 15+ research papers", "Mentored 50+ students", "Industry collaborations"],
      email: "umpatil@example.com",
      social: {
        linkedin: "#",
        twitter: "#",
        scholar: "#",
      },
    },
    {
      name: "Prof. Ashish K. Patil",
      position: "Club Coordinator",
      image: A_K_patil,
      specialization: "Artificial Intelligence & Deep Learning",
      experience: "10+ years of teaching experience",
      education: "M.Tech in Computer Science",
      achievements: ["Industry consultant", "Research in NLP", "Technical advisor"],
      email: "akpatil@example.com",
      social: {
        linkedin: "#",
        twitter: "#",
        scholar: "#",
      },
    },
    {
      name: "Prof. A. D. Mairale",
      position: "Faculty Coordinator",
      image: A_D_Mairale,
      specialization: "Big Data Analytics & Cloud Computing",
      experience: "8+ years of academic experience",
      education: "M.Tech in Information Technology",
      achievements: ["Cloud certification", "Industry partnerships", "Research publications"],
      email: "admairale@example.com",
      social: {
        linkedin: "#",
        twitter: "#",
        scholar: "#",
      },
    },
  ]

  return (
    <>
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1433086966358-54859d0ed716')] bg-cover bg-center bg-no-repeat opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-club-dark via-club-dark/95 to-club-dark"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-orange-500"></span>
              </motion.h1>
              <motion.p
                className="text-lg text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Logo Section */}
                <div className="flex flex-col items-center justify-center gap-8 cursor-default mt-15">
                  <div className="flex items-center justify-center gap-4">
                    <a href="/about">
                      <img
                        src={rcpitlogo || "/placeholder.svg"}
                        alt="About-us image"
                        className="w-40 h-20 md:w-48 md:h-24 object-contain cursor-pointer"
                      />
                    </a>

                    <a href="/about">
                      <img
                        src={newlogo || "/placeholder.svg"}
                        alt="About-us image"
                        className="w-40 h-20 md:w-48 md:h-24 object-contain cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </motion.p>
            </div>
          </div>
        </section>

        {/* Faculty Section with Focus on Photos */}
        <section className="py-16 bg-gradient-to-b from-gray-900/10 via-gray-900/50 to-gray-900/70 relative">
          {/* Add subtle background pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Our <span className="text-orange-500">Faculty Mentors</span>
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-white/80 max-w-2xl mx-auto">
                Meet the brilliant minds guiding Data Polaris and shaping the future of data science education.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {facultyMembers.map((faculty, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 max-w-xs mx-auto">
                    {/* Glass morphism effect for modern look */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image Container with better contrast - reduced height */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-900/40 to-transparent"></div>
                    </div>

                    {/* Name and Position - more compact padding */}
                    <div className="p-4 text-center relative z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{faculty.name}</h3>
                      <p className="text-orange-400 font-medium mb-1">{faculty.position}</p>
                      <p className="text-white/80 text-sm">{faculty.specialization}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 font-display text-center">Our Story</h2>
                <p className="text-white/80 mb-6 text-justify">
                  Just as Polaris, the North Star, guides explorers across uncharted territories, Data Polaris lights
                  the way for students navigating the realms of Data Science and Machine Learning. Much like the steady
                  brilliance of the North Star, Data Polaris is a constant source of direction and support for aspiring
                  technologists.
                </p>
                <p className="text-white/80 mb-6 text-justify">
                  As a key initiative within the Department of Computer Science and Engineering (Data Science & AIML),
                  Data Polaris is a thriving hub where passion meets purpose. Rooted in exploration, collaboration, and
                  continuous learning, it's not just a club, but a community driven by innovation and shared growth.
                </p>
                <p className="text-white/80 text-justify">
                  Collaboration is at the heart of Data Polaris. We celebrate diverse perspectives and create an
                  environment where students come together to inspire and challenge each other. Through mentorship,
                  resources, and hands-on experiences, we foster a culture of growth, ensuring our members stay at the
                  forefront of Data Science and Machine Learning.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                Goals  <span className="text-orange-500">&</span> Values
              </h2>
              <p className="text-white/80 text-lg">Igniting brilliance with knowledge, forging unstoppable teams.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, pushing our boundaries and raising our standards.",
                  delay: 0,
                  bgImage: `${bg1}`,
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in teamwork and best results come from diverse perspectives working together.",
                  delay: 0.1,
                  bgImage: `${bg2}`,
                },
                {
                  title: "Innovation",
                  description: "We encourage creative thinking and new approaches to challenges.",
                  delay: 0.2,
                  bgImage: `${bg3}`,
                },
                {
                  title: "Inclusivity",
                  description: "We welcome individuals of all backgrounds, creating diverse and inclusive community.",
                  delay: 0.3,
                  bgImage: `${bg4}`,
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-4 w-35 h-60 hover-scale text-white bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: `url(${value.bgImage})`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: value.delay }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold mb-3 p-4">{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About;

