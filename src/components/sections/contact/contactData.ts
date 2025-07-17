
import { Phone, Mail, Github, Linkedin, Code } from 'lucide-react';
import { ContactInfoItem } from './types';

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sneha2205verma@gmail.com',
    href: 'mailto:sneha2205verma@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/sneha-verma-42457025a/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my projects',
    href: 'https://github.com/SNEHAVERMA22'
  },
  {
    icon: Code,
    label: 'LeetCode',
    value: 'See my solutions',
    href: 'https://leetcode.com/u/snehaverma_2204/'
  }
];
