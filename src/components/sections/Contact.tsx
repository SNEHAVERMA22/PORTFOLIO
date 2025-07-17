
import { motion } from 'framer-motion';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import { containerVariants, fadeInUp } from './contact/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-emerald-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto"
        >
          Let's discuss your next project or just say hello! I'm always open to new opportunities and collaborations.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
