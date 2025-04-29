import { motion } from "framer-motion";
import React from "react";
import PageTransition from "../components/PageTransition";
// import TeamMember from "../components/TeamMember";
import Card from "../components/ui/card";

const Team: React.FC = () => {
  const coreTeam = [
    {
      name: "Kalesh Patil",
      role: "Head",
      branch: "TYAIML",
      image: "/images/team images/kalesh.jpg",
      github: "https://github.com/kalesh-94",
      linkedin: "https://www.linkedin.com/in/kalesh-patil-232873292/",
    },
    {
      name: "Sarthak Patil",
      role: "Co-Head",
      branch:"TYDS",
      image: "/images/team images/Sarthak.jpg",
      github: "https://github.com/realsarthak",
      linkedin: "https://www.linkedin.com/in/sarthak909",
    },
  ];

  const teamMembers = [
    
   {
      name: "Jagruti Desale",
      role: "TY-DS",
      image: "/images/team images/IMG-20250404-WA0009.jpg",
      github: "https://github.com/emilywhite",
      linkedin: "https://linkedin.com/in/emilywhite",
      
    },
    {
      name: "Sakshi Bari",
      role: "TY-DS",
      image: "/images/team images/Sakshi_Bari - Sakshi Bari.jpeg",
      github: "https://github.com/Sakshi04bari",
      linkedin: "https://linkedin.com/in/sakshi-bari",
      
    },
    ,
    
  
    ,
    {
      name: "Akash Shinde",
      role: "TY-DS",
      image: "/images/team images/Akash Shinde.jpg",
      github: "https://github.com/akascaptain",
      linkedin: "https://www.linkedin.com/in/akash-shinde-2692b9258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
      name: "Rashmi Borase",
      role: "TY-DS",
      image: "/images/team images/IMG20241210184223 - Rashmi Borse.jpg",
      github: "https://github.com/Rashmiborse10",
      linkedin: "https://www.linkedin.com/in/rashmi-borse-0461b025b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     
    },
    
    {
      name: "Rohit Bhalkar",
      role: "TY-COMP",
      image: "/images/team images/Rohit Bhalkar.jpg",
      github: "https://github.com/emilywhite",
      linkedin: "https://www.linkedin.com/in/rohit-bhalkar-ab4a882b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
    {
      name: "Mitesh Chudhari",
      role: "TY COMP",
      image: "/images/team images/MITS - Kunal Chaudhari05.jpg",
      github: "https://github.com/MiteshChaudhari18",
      linkedin: "https://www.linkedin.com/in/mitesh-chaudhari-201b57288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
    
    {
      name: "Rituja Dhangar",
      role: "TY-DS",
      image: "/images/team images/Rituja Dhangar.jpg",
      github: "https://github.com/RitujaDhangar",
      linkedin: "www.linkedin.com/in/ rituja-dhangar-696736278",
      
    },
    
    {
      name: "Yogesh Girase",
      role: "TY-AIML",
      image: "/images/team images/yogesh girase.jpg",
      github: "https://github.com/GiraseYogesh",
      linkedin: "https://www.linkedin.com/in/yogesh-girase",
     
    },
    {
      name: "Nayan Patil",
      role: "TY-AIML",
      image: "/images/team images/img_nyn - Nayan Patil.jpeg",
      github: "https://github.com/Nayan1809",
      linkedin: "www.linkedin.com/in/nayanpatil09",

    },
    {
      name: "Krishna Vispute",
      role: "TY-DS",
      image: "/images/team images/IMG_20241024_120855 - Krishna Vispute.jpg",
      github: "https://github.com/emilywhite",
      linkedin: "https://www.linkedin.com/in/krishna-vispute-484555257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
      name: "Vaishnavi Borase",
      role: "TY-DS",
      image: "/images/team images/vaishnavi_manag.jpg",
      github: "https://github.com/emilywhite",
      linkedin: "https://linkedin.com/in/emilywhite",
    
    },
    {
      name: "Nilesh Patil",
      role: "SY-AIML",
      image: "/images/team images/160408401 - Nilesh Patil.jpg",
      github: "https://github.com/NileshPatil24-a",
      linkedin: "www.linkedin.com/in/nilesh-patil-a3818b329",
   
    },
    {
      name: "Sayali Jadhav",
      role: "SY-AIML",
      image: "/images/team images/IMG-20250327-WA0003 - Sayali Jadhav.jpg",
      github: "https://github.com/emilywhite",
      linkedin: "https://www.linkedin.com/in/sayali-jadhav-b4263827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
      name: "Ashna Pinjari",
      role: "SY-AIML",
      image: "/images/team images/Ashna Pinjari..jpg",
      github: "https://github.com/emilywhite",
      linkedin: "https://www.linkedin.com/in/ashna-pinjari-b067942a0",
   
    },
    {
      name: "Riya Deshmukh",
      role: "SY-DS",
      image: "/images/team images/Riya Deshmukh.jpg",
      github: "https://github.com/Rhea-droid",
      linkedin: "https://www.linkedin.com/in/riya-deshmukh-557b182b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageStyle: { objectPosition: 'center -5px' }     
    },
    {
      name: "Paresh Mahirrao",
      role: "SY-DS",
      image: "/images/team images/paresh_manage.jpg",
      github: "https://github.com/emilywhite",
      linkedin: "https://www.linkedin.com/in/paresh-mahirrao-389825250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
    {
      name: "Nomesh Kirange",
      role: "TY-DS",
      image: "/images/team images/1723968168657.jpg",
      github: "https://github.com/NomeshKirange",
      linkedin: "https://www.linkedin.com/in/nomesh-kirange-2012a5258",
    
    },
    {
      name: "Tanisha Badgujar",
      role: "SY-AIML",
      image: "/images/team images/Tanisha.png",
      github: "https://github.com/Tanisha1604",
      linkedin: "https://www.linkedin.com/in/tanisha-badgujar-00b251299",
  
    },
    {
      name: "Lokesh Chaudhari",
      role: "SY-COMP",
      image: "/images/team images/IMG_20241002_130116 - Lokkesh Chaudhari.jpg",
      github: "https://github.com/https://github.com/Lokesh-Squazzo",
      linkedin: "https://linkedin.https://www.linkedin.com/in/lokesh-chaudhari-917778280//in/emilywhite",
    
      imageStyle: { objectPosition: 'center 0px' } 
    },
    {
      name: "Digvijaysing Rajput",
      role: "SY-AIML",
      image: "/images/team images/Digvijaysing Rajput.JPG",
      github: "https://github.com/digvijay1129",
      linkedin: "https://www.linkedin.com/in/digvijaysing-rajput-287b46351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

      imageStyle: { objectPosition: 'center -5px' } 
    },
    
    {
      name: "Disha Nikumbh",
      role: "SY-DS",
      image: "/images/team images/IMG_20241021_164813 - Disha Nikumbh.jpg",
      github: "https://github.com/dishanikumbh06",
      linkedin: "https://www.linkedin.com/in/disha-rajendra-nikumbh-9873bb290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  
    },
    {
      name: "Pranav Sutar",
      role: "SY-AIML",
      image: "/images/team images/pranav sutar.jpeg",
      github: "https://github.com/pranav1217",
      linkedin: "https://www.linkedin.com/in/pranav-sutar-0358642b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    
    {
      name: "Sudarshan Bhosale",
      role: "SY-DS",
      image: "/images/team images/Sudarshan Bhosale.jpg",
      github: "https://github.com/Sidz77",
      linkedin: "https://www.linkedin.com/in/sudarshan-bhosale-2356a428a/",
      imageStyle: { objectPosition: 'center 0px' } 
    },
    {
      name: "Parag Nikum",
      role: "SY-AIML",
      image: "/images/team images/IMG_20250318_144114 - Parag Nikum.jpg",
      github: "https://github.com/Parag-Nikum",
      linkedin: "https://www.linkedin.com/in/parag-nikum-a371aa294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Bhavya Chauhan",
      role: "SY-DS",
      image: "/images/team images/bhavya_chawhan.jpg",
      github: "https://github.com/BeingBhavya",
      linkedin: "https://www.linkedin.com/in/bhavya-chauhan-50b98133a/",
    },
    
  ];

  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center bg-no-repeat opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-club-dark via-club-dark/95 to-club-dark"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our <span className="text-orange-500">Team</span>
              </motion.h1>
              <motion.p className="text-lg text-white/80" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                Meet the passionate individuals who make our club what it is.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Core Team */} 
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center font-display">Leadership</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {coreTeam.map((member, index) => (
                <Card key={index} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center font-display">Team Members</h2>
            <div className="flex flex-wrap justify-center gap-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="w-64">
                  <Card {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Team;
