
import { Mail, Github, Linkedin,  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-background to-muted border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-bold mb-4 md:mb-0 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400">
            Sneha Verma
          </div>
          <div className="flex items-center space-x-6">
            {[
              { icon: Mail, href: 'mailto:sneha2205verma@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sneha-verma-42457025a/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/SNEHAVERMA22', label: 'GitHub' }
            ].map((social, index) => (
              <a 
                key={index}
                target='_blank'
                href={social.href} 
                className="p-2 rounded-full hover:bg-muted transition-all duration-300 transform hover:scale-110 text-muted-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Sneha Verma. All rights reserved. Built by using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
