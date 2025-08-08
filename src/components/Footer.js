import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Facebook, 
  Instagram, 
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Book Appointment', href: '#appointment' }
  ];

  const services = [
    'Chiropractic Adjustments',
    'Osteopathic Treatment',
    'Pain Management',
    'Preventive Care',
    'Posture Correction',
    'Sports Injury Recovery'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
                <div>
                  <h3 className="text-xl font-bold">Dr. Chandra</h3>
                  <p className="text-gray-400 text-sm">Chiropractic & Osteopathy</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dedicated to providing exceptional chiropractic and osteopathic care with a focus on natural healing methods.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">
                    Halduchor near Evergreen School, Haldwani, Nainital, Uttarakhand
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a href="tel:8077531426" className="text-gray-300 text-sm hover:text-green-400 transition-colors">
                    8077531426
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    Mon-Sat: 9AM-2PM, 4PM-6PM
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                                         <button
                       onClick={() => scrollToSection(link.href)}
                       className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                     >
                       {link.name}
                     </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <div>
                    <p className="text-gray-300 text-sm">Call Now</p>
                                       <a href="tel:8077531426" className="text-green-400 hover:text-green-300 transition-colors">
                     8077531426
                   </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">W</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">WhatsApp</p>
                    <a 
                      href="https://wa.me/918077531426" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="text-sm font-semibold mb-3 text-gray-400">Follow Us</h5>
                <div className="flex space-x-3">
                  <motion.a
                    href="https://www.instagram.com/dr_chandra_heal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.facebook.com/share/195VNrLAeo/?mibextid=wwXIfr"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Dr. Chandra - Chiropractic & Osteopathy Clinic. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Designed with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
                             <span className="text-green-400 font-semibold">
                 Bipin chandra pandey(+916397780633)
                  
                 
               </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 