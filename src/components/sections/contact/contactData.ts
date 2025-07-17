
import { Phone, Mail, Github, Linkedin, Code } from 'lucide-react';
import { ContactInfoItem } from './types';

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pranjal1gupta811@gmail.com',
    href: 'mailto:pranjal1gupta811@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/pranjalgupta811'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my projects',
    href: 'https://github.com/Pranjal1gupta'
  },
  {
    icon: Code,
    label: 'LeetCode',
    value: 'See my solutions',
    href: 'https://leetcode.com/u/pranjal1gupta811'
  }
];
