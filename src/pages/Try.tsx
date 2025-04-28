import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { QueryClient } from "@tanstack/react-query";
import logo from "../public/logo.png";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          className="relative w-48 h-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Gear Effect */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <Image src={logo} alt="Data Polaris Logo" layout="fill" objectFit="contain" />
          </motion.div>

          {/* Pulsating Glow */}
          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute w-32 h-32 bg-white opacity-20 rounded-full blur-lg"></div>
          </motion.div>

          {/* Text Animation */}
          <motion.div
            className="absolute bottom-[-40px] w-full text-center text-white text-xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Loading Data Polaris...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1>Welcome to Data Polaris</h1>
    </div>
  );
};

export default App;
