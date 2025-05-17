
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mall-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl mb-4 font-semibold text-mall-gold">Tedd's City Mall</h4>
            <p className="mb-4">Your premier shopping destination with over 200 stores, restaurants, and entertainment options.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-mall-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-mall-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-mall-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl mb-4 font-semibold text-mall-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/stores" className="hover:text-mall-gold transition-colors">Stores</Link></li>
              <li><Link to="/events" className="hover:text-mall-gold transition-colors">Events</Link></li>
              <li><Link to="/map" className="hover:text-mall-gold transition-colors">Mall Map</Link></li>
              <li><Link to="/info" className="hover:text-mall-gold transition-colors">Hours & Info</Link></li>
              <li><Link to="/contact" className="hover:text-mall-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl mb-4 font-semibold text-mall-gold">Opening Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Friday: 10am - 9pm</li>
              <li>Saturday: 10am - 10pm</li>
              <li>Sunday: 11am - 7pm</li>
              <li>Restaurant hours may vary</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl mb-4 font-semibold text-mall-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@teddscitymall.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li>123 Shopping Avenue<br />Retail District, City<br />ZIP 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Tedd's City Mall. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/privacy" className="hover:text-mall-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-mall-gold transition-colors">Terms of Use</Link></li>
              <li><Link to="/careers" className="hover:text-mall-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
