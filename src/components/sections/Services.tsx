
import { Code, Palette, Globe, Presentation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'End-to-end web solutions using modern technologies like MERN stack, ensuring scalable and robust applications.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with modern design principles and user-centered approach.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Custom WordPress development and bespoke web designs tailored to your business needs.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Presentation,
      title: 'Poster & Presentation Design',
      description: 'Professional visual communication materials for presentations, marketing, and branding purposes.',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const zoomInFade = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
            My Services
          </span>
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={zoomInFade}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-8 hover:shadow-2xl dark:hover:shadow-emerald-500/10 transition-all duration-500 border border-l-4 border-gray-300 dark:border-gray-700 group overflow-hidden relative bg-white dark:bg-gray-800 hover:border-green-600 dark:hover:border-blue-400">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
