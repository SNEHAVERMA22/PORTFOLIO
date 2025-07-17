
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ContactFormData } from './types';
import { slideInRight } from './animations';

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_byd2rmj', // SERVICE_ID
        'template_zlud71q', // TEMPLATE_ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        '2YkMR0fu0YaS5efRJ' // PUBLIC_KEY
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset(); // Clear form fields
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div variants={slideInRight}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
            <div>
              <Input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                placeholder="your@email.com"
                className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          
          
          <div>
            <Input
              {...register('subject', { required: 'Subject is required' })}
              placeholder="Subject"
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <Textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Your message..."
              rows={10}
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
