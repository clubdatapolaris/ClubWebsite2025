import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

 import sachin_dabhade from "../Alumni-images/DS_18_201106019_Sachin Vinayak Dabhade - Sachin Dabhade.png";
 import Dhanashri_Saner from "../Alumni-images/IMG_20250304_152623 - Dhanashri Saner.jpg";
 import Bharat_Rajput from "../Alumni-images/IMG_20241028_220947_134 - Bharat Rajput.webp";
 import Tejas_Chaudhari from "../Alumni-images/IMG_20250404_071404 - Tejas Chaudhari.jpg";
const AlumniSuccess: React.FC = () => {
  const [selectedYear, setSelectedYear] = React.useState<"all" | number>("all");

  const alumniData = {
    2024: [
      {
        name: "Sachin Dabhade",
        image: "Alumni-images/DS_18_201106019_Sachin Vinayak Dabhade - Sachin Dabhade.png",
        company: "IGT Solutions Pvt. Ltd",
        
      },
      {
        name: "Dhanashri Saner",
        image: "Alumni-images/Dhanashri Saner.jpg",
        company: "Midoffice Data",
      },
      {
        name: "Vedant Thakur",
        image: "Alumni-images/Vedant thakur.jpg",
        company: "Pursuing Higher Education, Nottingham Trent University, UK",
        
      },
      {
        name: "Bharat Rajput",
        image: "Alumni-images/Bharat Rajput.webp",
        company: "eSamyak Software Pvt. Ltd.",
        
      },
      
    ],
    2025: [
      {
        name: "Vishal Bhalkar",
        image: "public/Alumni-images/vishal.jpg",
        head: "Formal Head",
        company: "Celebal Technologies",
        
      },
      {
        name: "Tejas Chaudhari",
        image: "Alumni-images/Tejas Chaudhari.jpg",
        company: "Webtech Depelopers",
        
      },
      {
        name: "Uday Bhartiya",
        image: "Alumni-images/uday.png",
        company: "Tech Mahindra",
        
      },
      {
        name: "Rohit Patil",
        image: "Alumni-images/Rohit Patil.jpg",
        company: "Intern at Vinsys",
        
      },
    
      {
        name: "Khushal Jain",
        image: "Alumni-images/kushal jain.jpeg",
        company: "Intern at HiDevs",
        
      },
      {
        name: "Mohit Patil ",
        image: "Alumni-images/Mohit patil.jpeg",
        company: "Tech Mahindra, Numetry Technology Pune",
        
      },
    
      {
        name: "Bhupesh Chaudhari ",
        image: "Alumni-images/Bhupesh - Bhupesh Chaudhari.jpg",
        company: "Intern at Mansavi Tech Solutions Pvt. Ltd.",
        
      },
      {
        name: "Nikita Saindane",
        image: "Alumni-images/Nikita Sudhir saindane.jpg",
        company: "Tech Mahindra",
        
      },
      ,
    ],
  };

  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        <section className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold text-white mb-12 text-center font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
               
              Alumni <span className="text-orange-500 text-4xl ">Success</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedYear === "all"
                    ? "bg-orange-500 border-red text-black font-semibold"
                    : "bg-transparent border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                }`}
                onClick={() => setSelectedYear("all")}
              >
                All
              </button>

              {Object.keys(alumniData).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(Number(year))}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    selectedYear === Number(year)
                      ? "bg-orange-500 border-red text-black font-semibold"
                      : "bg-transparent border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {selectedYear === "all"
                ? Object.values(alumniData)
                    .flat()
                    .map((alumni, index) => (
                      <div
                        key={index}
                        className="bg-club-dark/50 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <div className="w-[8.25rem] h-[8.25rem] mx-auto mb-4 rounded-full border-4 border-gray-600 overflow-hidden transition-transform duration-300">
                          <img
                            src={alumni.image}
                            alt={alumni.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-white text-center mb-2">
                          {alumni.name}
                        </h3>
                        <p className="text-club-muted text-sm text-center mb-1">
                          {alumni.company}
                        </p>
                        {alumni.name === "Sachin Dabhade" && (
                          <p className="text-orange-400 text-sm text-center font-bold">
                            Founder
                          </p>
                          
                        )}
                        {alumni.name === "Dhanashri Saner" && (
                          <p className="text-orange-400 text-sm text-center font-bold">
                            Co-founder
                          </p>
                        )}
                      </div>
                    ))
                : alumniData[selectedYear]?.map((alumni, index) => (
                    <div
                      key={index}
                      className="bg-club-dark/50 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="w-[8.25rem] h-[8.25rem] mx-auto mb-4 rounded-full overflow-hidden transition-transform duration-300">
                        <img
                          src={alumni.image}
                          alt={alumni.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-2">
                        {alumni.name}
                      </h3>
                      <p className="text-club-muted text-sm text-center mb-1">
                        {alumni.company}
                      </p>
                     
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default AlumniSuccess;