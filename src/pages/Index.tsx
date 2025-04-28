import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import bgimg from "../components/images/sthings_dp.jpg"

const Index: React.FC = () => {
  // Create a ref for the canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for the canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle configuration
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageTransition>
      <main className="relative min-h-screen">
        {/* Canvas background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />

        
        
        <section className="min-h-screen flex items-center justify-center relative">


<div 
  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
  style={{ backgroundImage: `url(${bgimg})` }}
></div>

          <div className="absolute inset-0 z-1 bg-gradient-radial from-transparent to-club-dark"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-1 border border-white/10"
            >
              <Star className="h-4 w-4 text-club-accent mr-2" />
              <span className="text-sm font-medium text-white/90">Innovate. Connect. Inspire.</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-glow">Welcome to</span> <br />
              <span className="text-orange-500">Data <span className='text-sky-500 '>Polaris</span></span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Where Data Meets Discovery & Innovation Thrives.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center bg-club-accent hover:bg-club-accent/15 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-club-accent/20"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="https://chat.whatsapp.com/DYS9BFXhNcEHTHS4T2H8Qp"
                className="inline-flex items-center bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white font-medium rounded-full px-8 py-3 transition-all duration-300"
              >
                Join Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                What We <span className="text-orange-500">Offer</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Join us to explore a world of opportunities, experiences, and connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Skill Development",
                  description: "Access workshops, resources, and mentorship to enhance your skills in your area of interest.",
                  icon: "💡",
                  delay: 1
                },
                {
                  title: "Networking",
                  description: "Connect with like-minded individuals, alumni, and industry professionals.",
                  icon: "🔗",
                  delay: 2
                },
                {
                  title: "Events & Competitions",
                  description: "Participate in exciting events, hackathons, and competitions throughout the year.",
                  icon: "🏆",
                  delay: 3
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-8 hover-scale"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: feature.delay * 0.2 }}
                >
                  <div className="text-club-accent text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-club-dark to-black opacity-70 z-0"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="text-club-accent">Join Us</span>?
            </motion.h2>
            <motion.p
              className="text-lg text-white/80 mb-8 mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Share Your Thoughts & Reviews 💭
              Your voice matters! Tell us about your experience, share your ideas, and help us grow together. 🚀💡
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-club-accent/90 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-club-accent/20"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
