import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Instagram, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:8077531426',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/918077531426',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/dr_chandra_heals',
      color: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Toggle Button */}
      <motion.button
        className={`floating-button ${isExpanded ? 'bg-green-600 text-white' : 'bg-white text-green-600'}`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {isExpanded && (
          <div className="absolute bottom-16 right-0 space-y-3">
            {buttons.map((button, index) => (
              <motion.a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${button.color} ${button.hoverColor} text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ 
                  opacity: 0, 
                  scale: 0, 
                  x: 20,
                  y: 20 
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  y: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0, 
                  x: 20,
                  y: 20 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex items-center space-x-2">
                  <button.icon className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {button.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons; 