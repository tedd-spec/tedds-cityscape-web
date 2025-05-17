
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          We're here to help! Reach out to us with any questions, feedback, or inquiries about Tedd's City Mall.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold bg-white dark:bg-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold bg-white dark:bg-gray-800"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold bg-white dark:bg-gray-800"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Store Information">Store Information</option>
                    <option value="Event Information">Event Information</option>
                    <option value="Leasing Opportunities">Leasing Opportunities</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold bg-white dark:bg-gray-800"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-mall-navy text-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-mall-gold mr-4" />
                  <div>
                    <h3 className="font-medium mb-2">Address</h3>
                    <p>123 Shopping Avenue<br />Retail District, City<br />ZIP 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-mall-gold mr-4" />
                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p>Main: (555) 123-4567<br />Customer Service: (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-mall-gold mr-4" />
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p>info@teddscitymall.com<br />customerservice@teddscitymall.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-mall-gold mr-4" />
                  <div>
                    <h3 className="font-medium mb-2">Hours</h3>
                    <p>Monday - Friday: 10am - 9pm<br />Saturday: 10am - 10pm<br />Sunday: 11am - 7pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="flex space-x-6 mb-6">
                <a href="#" className="text-mall-navy hover:text-mall-gold dark:text-white dark:hover:text-mall-gold transition-colors">
                  <Facebook size={32} />
                </a>
                <a href="#" className="text-mall-navy hover:text-mall-gold dark:text-white dark:hover:text-mall-gold transition-colors">
                  <Instagram size={32} />
                </a>
                <a href="#" className="text-mall-navy hover:text-mall-gold dark:text-white dark:hover:text-mall-gold transition-colors">
                  <Twitter size={32} />
                </a>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400">
                Follow us on social media for the latest updates, promotions, and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
