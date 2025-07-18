import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import expensetracker from "@/media/expense_tracker.png";
import taskmanager from "@/media/Screenshot (146).png";
import evanescent from "@/media/evanescent.png";
import magma from "@/media/magma_ddt.png";

import calculator from "@/media/calculator.png";
import randompassword from "@/media/random_password.png";
import todo from "@/media/todo.png";
import weather from "@/media/weather.png";
import qrcode from "@/media/qrcode.png";
import auth from "@/media/authentication.png";
import textutils from "@/media/textutils.png";
import martex from "@/media/martex.png";
import rayban from "@/media/rayban.png";

const Portfolio = () => {
  const featuredProjects = [
    
    {
      title: "AI Resume Analyzer",
      stack: ["Python", "Streamlit", "Generative-AI"],
      description:
        `Developed an interactive Streamlit web app leveraging Gemini LLM API to match resumes with job descriptions, highlighting ATS keywords, match score, and tailored feedback.
           Enabled PDF parsing and downloadable report generation to help users improve resume visibility and ATS optimization efficiently.`,
      image: taskmanager,
      github: "https://github.com/SNEHAVERMA22/MOD-ATS",
      demo: "https://sneha-smart-resume-analyser.streamlit.app/",
    },
    {
      title: "Evanescent Equilibration",
      stack: ["HTML5", "Sherry.js", "Locomotive.js"],
      description:
        "Animated landing page with zoom effects, fluid transitions, and scroll-based motion interactions using modern JavaScript animation libraries.",
      image: evanescent,
      github: "https://github.com/Pranjal1gupta/Evanescent_Equilibration",
      demo: "https://pranjal1gupta.github.io/Evanescent_Equilibration/",
    },
    {
      title: "Modern UI – MagmaDDT",
      stack: ["React.js", "CSS3", "JavaScript", "Canva"],
      description:
        "Sleek modern UI built using React and Canva visuals, featuring smooth scroll animations and clean, responsive layouts.",
      image: magma,
      github: "https://github.com/Pranjal1gupta/magma",
      demo: "https://pranjal1gupta.github.io/magma/",
    },
  ];

const otherProjects = [
 
  {
    title: "Random Password Generator",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Secure password generator with adjustable length and symbols.",
    image: randompassword,
    github: "https://github.com/Pranjal1gupta/Random_Password",
    demo: "https://pranjal1gupta.github.io/Random_Password/",
  },
  {
    title: "Secure Auth System",
    stack: ["MERN"],
    description: "Robust authentication system with JWT tokens and password encryption.",
    image: auth,
    github: "https://github.com/Pranjal1gupta/Login_Authentification",
    demo: null,
  },
];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInFade = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-4xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400">
            My Work
          </span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          A collection of projects that showcase my skills and passion for
          creating innovative solutions
        </motion.p>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-2xl font-semibold mb-8 text-foreground"
          >
            ⭐ Featured Projects
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={slideInFade}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl hover:border-green-600 dark:hover:border-blue-400 transition-all duration-500 group border-border/50 bg-card/50 backdrop-blur-sm border border-b-4 border-gray-300  dark:border-gray-700">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/20"
                      >
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-9 w-9 hover:bg-muted group/btn"
                          >
                            <Github className="w-4 h-4 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors" />
                          </Button>
                        </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github</p>
                            </TooltipContent>
                          </Tooltip>
                        
                        {project.demo && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="p-2 h-9 w-9 hover:bg-muted group/btn"
                                >
                                  <ExternalLink className="w-4 h-4 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors" />
                                </Button>
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Live</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-2xl font-semibold mb-8 text-foreground"
          >
            🛠️ Other Projects
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={slideInFade}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="overflow-hidden hover:border-green-600 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-500 group border-border/50 bg-card/50 backdrop-blur-sm border border-b-4 border-gray-300  dark:border-gray-700">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm">
                        {project.title}
                      </h3>
                      <div className="flex space-x-1">
                         <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-9 w-9 hover:bg-muted group/btn"
                          >
                            <Github className="w-4 h-4 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors" />
                          </Button>
                        </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github</p>
                            </TooltipContent>
                          </Tooltip>
                        
                        {project.demo && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="p-2 h-9 w-9 hover:bg-muted group/btn"
                                >
                                  <ExternalLink className="w-4 h-4 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors" />
                                </Button>
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Live</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs px-2 py-0 bg-muted/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
