
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfoItem {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
}
