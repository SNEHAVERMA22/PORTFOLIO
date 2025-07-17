import { Calendar } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-emerald-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-12"
        >
          <motion.div variants={slideInLeft} className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm Pranjal Gupta, a passionate and self-motivated full-stack
                web developer currently pursuing my MCA at GL Bajaj Institute of
                Technology and Management. I specialize in the MERN stack and
                have worked on several impactful projects. I thrive on solving
                real-world problems and am constantly exploring new tools and
                techniques to grow. My journey in web development combines
                technical expertise with creative problem-solving.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                Education
              </h3>
              <div className="space-y-6">
                {[
                  {
                    school: "GL Bajaj Institute of Technology and Management",
                    degree: "MCA – 8.00 CGPA (2023–Present)",
                    icon: "🎓",
                  },
                  {
                    school: "National Post Graduate College, Lucknow",
                    degree: "BCA – 6.5 CGPA (2020–2023)",
                    icon: "📚",
                  },
                  {
                    school: "Red Rose Senior Secondary School, Lucknow",
                    degree: "PCM – 89% (2019–2020)",
                    icon: "🏫",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group border-l-4 border-emerald-600 dark:border-emerald-400 pl-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300 "
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{edu.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {edu.school}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-8">
            {[
              { number: "10+", label: "Projects Completed", icon: "🚀" },
              { number: "30+", label: "GitHub Contributions", icon: "📊" },
              { number: "200+", label: "DSA Problems Solved", icon: "🧩" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border  border-b-4 border-gray-300  dark:border-gray-700 hover:border-green-600 dark:hover:border-blue-400"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
