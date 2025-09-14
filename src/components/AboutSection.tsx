import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Code, Target, Lightbulb, Monitor, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Scroll-based animations
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);
  const scale = useTransform(scrollY, [200, 600], [0.8, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Scroll Effects */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/40" 
      />
      
      {/* Floating Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-purple-800/30 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ opacity, scale }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              About Me
            </motion.h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-900 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Centered Layout */}
          <div className="flex flex-col items-center gap-16">
            {/* Developer Image in Center */}
            <motion.div variants={itemVariants} className="relative flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glow */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-purple-900 to-purple-700 rounded-3xl opacity-20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Image Box */}
                <motion.div
                  className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-purple-800/50 shadow-2xl shadow-purple-900/40"
                  style={{
                    background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(88, 28, 135, 0.2))"
                  }}
                >
                  <img
                    src="/local-uploads/1cf7f11d-9199-4e9f-922c-a2b644007ad7.png"
                    alt="Developer workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                  
                  {/* Floating Code Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Cards Below Image */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              {[
                { icon: Code, label: "Projects", value: "10+", color: "from-purple-900 to-purple-700" },
                { icon: Target, label: "Skills", value: "Full-Stack (MERN)", color: "from-purple-800 to-purple-900" },
                { icon: Lightbulb, label: "Technologies", value: "20+", color: "from-purple-700 to-purple-800" }
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className={`text-center p-5 bg-gradient-to-b ${item.color} rounded-xl border border-purple-600/40 shadow-lg`}
                  whileHover={{ scale: 1.08, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-purple-600 rounded-lg shadow-md">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-200">{item.value}</div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Text Content Below */}
            <motion.div variants={itemVariants} className="space-y-8 max-w-3xl">
              {/* Status */}
              <motion.div
                className="flex items-center gap-5 p-6 bg-gradient-to-r from-purple-700 to-purple-900 rounded-xl border border-purple-600/40 shadow-lg"
                whileHover={{ scale: 1.03, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 bg-purple-600 rounded-xl shadow-md">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-purple-300 text-sm font-medium">Status</p>
                  <p className="text-white font-semibold text-lg">Final Year Student · Computer Science & Engineering · Batch 2022–2026</p>
                </div>
              </motion.div>

              {/* Journey */}
              <motion.div 
                className="bg-gradient-to-r from-purple-900/50 to-purple-800/40 p-8 rounded-xl border border-purple-600/40 shadow-xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                  <Monitor className="w-7 h-7" />
                  💻 My Journey
                </h3>
                <p className="text-lg">
                  With a strong foundation in Java, DSA, and Full-Stack Development, I thrive on solving complex problems and building efficient, scalable solutions. My academic journey has given me hands-on experience in both frontend and backend technologies.
                </p>
              </motion.div>

              {/* What I Do */}
              <motion.div 
                className="bg-gradient-to-r from-purple-800/40 to-purple-900/50 p-8 rounded-xl border border-purple-600/40 shadow-xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                  <Target className="w-7 h-7" />
                  🚀 What I Do
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Develop clean, optimized code with focus on performance and usability
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Build full-stack web applications using modern technologies
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Solve algorithmic challenges to sharpen problem-solving skills
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Collaborate on projects bridging theory and real-world impact
                  </li>
                </ul>
              </motion.div>

              {/* Experience */}
              <motion.div 
                className="bg-gradient-to-r from-purple-900/50 to-purple-800/40 p-8 rounded-xl border border-purple-600/40 shadow-xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                  <Briefcase className="w-7 h-7" />
                  🏆 Experience
                </h3>
                <ul className="space-y-4 text-lg">
                  <li>
                    <p className="font-semibold text-white">Vocational Training — CSIR-CIMFR (Jun 2025 – Jul 2025)</p>
                    <p>Built a web app for iron ore classification using React.js, Flask & MongoDB. Integrated YOLOv5 & ResNet18 for real-time detection and implemented JWT authentication with monitoring features.</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">Web Developer Intern — AppThing (Dec 2023 – Feb 2024)</p>
                    <p>Developed 5–10 mini projects using React, JavaScript, and CSS. Fixed bugs, added features, and contributed to best practice discussions.</p>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
