

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Zap, Link2, Code, Database, Bot, Cpu, Users, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Wanderlust",
      description: "A web app inspired by Airbnb for listing, managing, and reviewing properties with interactive map exploration.",
      image: "local-uploads/Screenshot 2025-09-12 163106.png",
      features: ["Add/Edit/Delete Listings", "User Reviews", "Map Integration", "Secure Authentication"],
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB Atlas", "MapTiler"],
      detailedTech: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        backend: ["Node.js", "Express.js", "REST APIs"],
        database: ["MongoDB Atlas"],
        deployment: ["Render"],
        maps: ["MapTiler"]
      },
      links: {
        live: "https://majorproject-p8s3.onrender.com/listings",
        github: "https://github.com/SumitKumarSoftwareEngineer/MajorProject"
      },
      icon: Bot,
      gradient: "from-red-500 to-purple-600"
    },
    {
      title: "Hospital Management System",
      description: "A full-stack web application to manage patients, doctors, and hospital operations with secure authentication and responsive design.",
      image: "local-uploads/Screenshot 2025-09-12 163128.png",
      features: [
        "Secure Authentication",
        "Patient Records & Appointments",
        "Doctor Profiles & Schedules",
        "Admin Dashboard",
        "Responsive Design"
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS"],
      detailedTech: {
        frontend: ["React.js", "React Router", "Tailwind CSS", "Lucide Icons", "Axios"],
        backend: ["Node.js", "Express.js", "JWT", "Mongoose"],
        database: ["MongoDB Atlas"],
        tools: ["dotenv"]
      },
      links: {
       
        live: "https://hotel-management-system-frontend-lilac.vercel.app/",
        github: "https://github.com/SumitKumarSoftwareEngineer/Hotel-Management-System-Frontend"
      },
      icon: Cpu,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "DevSpace",
      description: "A dynamic platform to explore user profiles, posts, and albums with a clean and responsive UI.",
      image: "local-uploads/Screenshot 2025-09-12 163734.png",
      features: [
        "User Profiles",
        "Manage Posts (Add/Edit/Delete)",
        "Albums & Photos",
        "Responsive UI"
      ],
      tech: ["React", "Material-UI", "JSONPlaceholder API"],
      detailedTech: {
        frontend: ["React.js", "Material-UI", "Responsive Design"],
        backend: ["JSONPlaceholder Fake API (for data simulation)"],
        database: ["No real DB, using JSONPlaceholder"]
      },
      links: {
        live: "https://dev-space-amber.vercel.app/Users",
        github: "https://github.com/SumitKumarSoftwareEngineer/DevSpace"
      },
      icon: Users,
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Stack Overflow Clone",
      description: "A full-stack web application built during NullClass training, replicating core Stack Overflow features like Q&A, authentication, and user profiles.",
      image: "local-uploads/1743678545923.jpeg",
      features: [
        "Ask & Answer Questions",
        "User Authentication with JWT",
        "Upvote/Downvote System",
        "Responsive UI"
      ],
      tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
      detailedTech: {
        frontend: ["React.js", "Redux", "Redux Thunk", "Axios", "HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB", "MongooseJS"],
        auth: ["JWT Authentication"],
        tools: ["Git", "Deployment Insights"]
      },
      links: {
        
        github: "https://github.com/SumitKumarSoftwareEngineer/Codequest"
      },
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 pt-4 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-purple-800/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-800 to-purple-600 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-purple-900/30 border-purple-600/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-600/25 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Project Icon */}
                      <motion.div
                        className={`absolute top-3 right-3 p-2 bg-gradient-to-r ${project.gradient} rounded-lg shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <project.icon className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-5">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-3">
                        <div className="grid grid-cols-2 gap-1">
                          {project.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center text-xs text-gray-300"
                            >
                              <div className="w-1 h-1 bg-purple-500 rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-4 space-y-2">
                        {/* Frontend */}
                        {project.detailedTech.frontend && (
                          <div className="flex items-center">
                            <Code className="w-3 h-3 text-purple-400 mr-1.5" />
                            <span className="text-xs text-purple-300 font-medium mr-2">Frontend:</span>
                            <div className="flex flex-wrap gap-1">
                              {project.detailedTech.frontend.map((tech) => (
                                <span key={tech} className="px-1.5 py-0.5 bg-purple-800/30 text-purple-300 text-[10px] rounded-full border border-purple-600/40">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {/* Backend */}
                        {project.detailedTech.backend && (
                          <div className="flex items-center">
                            <Zap className="w-3 h-3 text-purple-400 mr-1.5" />
                            <span className="text-xs text-purple-300 font-medium mr-2">Backend:</span>
                            <div className="flex flex-wrap gap-1">
                              {project.detailedTech.backend.map((tech) => (
                                <span key={tech} className="px-1.5 py-0.5 bg-purple-800/30 text-purple-300 text-[10px] rounded-full border border-purple-600/40">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {/* Database */}
                        {project.detailedTech.database && (
                          <div className="flex items-center">
                            <Database className="w-3 h-3 text-purple-400 mr-1.5" />
                            <span className="text-xs text-purple-300 font-medium mr-2">Database:</span>
                            <div className="flex flex-wrap gap-1">
                              {project.detailedTech.database.map((tech) => (
                                <span key={tech} className="px-1.5 py-0.5 bg-purple-800/30 text-purple-300 text-[10px] rounded-full border border-purple-600/40">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {project.links?.live && (
                          <Button
                            className="flex-1 bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white text-xs py-2"
                            size="sm"
                            onClick={() => window.open(project.links.live, "_blank")}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Preview
                          </Button>
                        )}
                        {project.links?.github && (
                          <Button
                            variant="outline"
                            className="border-purple-600 text-purple-400 hover:bg-purple-600/20 text-xs py-2"
                            size="sm"
                            onClick={() => window.open(project.links.github, "_blank")}
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div variants={cardVariants} className="text-center mt-4 pb-14">
           
            <div
              className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-purple-700/50 to-purple-600/50 rounded-full border border-purple-400/70 hover:bg-purple-600/60 hover:border-purple-400/80 transition-all duration-300 cursor-pointer shadow-lg shadow-purple-900/30"
              onClick={() => window.open('https://github.com/SumitKumarSoftwareEngineer', '_blank')}
            >
              <Github className="w-5 h-5 text-purple-200" />
              <span className="text-white font-medium text-sm">
                View my GitHub profile for all projects and source code
              </span>
              <ExternalLink className="w-5 h-5 text-purple-200" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

