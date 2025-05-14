import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, X } from 'lucide-react';

// Icon cho Messenger
const MessengerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
    <path fill="#448AFF" d="M24,4C13,4,4,12.1,4,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.9,0.5,4,0.7,6.2,0.7c11,0,20-8.1,20-18S35,4,24,4z"/>
    <path fill="#FFFFFF" d="M12,28l8-9l4,4l8-8l-8,9l-4-4L12,28z"/>
  </svg>
);

// Icon cho Zalo
const ZaloIcon = () => (
  <img 
    src="/images/Icon_of_Zalo.svg.webp" 
    alt="Zalo" 
    className="w-6 h-6"
  />
);

type ContactOption = {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
};

const contactOptions: ContactOption[] = [
  {
    id: 'messenger',
    name: 'Messenger',
    icon: <MessengerIcon />,
    url: 'https://m.me/774100352957169',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    id: 'zalo',
    name: 'Zalo',
    icon: <ZaloIcon />,
    url: 'https://zalo.me/3831770019815467178',
    color: 'bg-[#0068FF] hover:bg-[#0054cc]'
  },
  {
    id: 'phone',
    name: 'Gọi ngay',
    icon: <Phone size={24} />,
    url: 'tel:0948078599',
    color: 'bg-green-500 hover:bg-green-600'
  }
];

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Các tùy chọn liên hệ */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end mb-4 space-y-3">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.id}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 h-12 px-5 rounded-full shadow-lg ${option.color} text-white w-36`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <span className="font-medium">{option.name}</span>
                {option.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Nút chính */}
      <motion.button
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center ${
          isOpen ? 'bg-red-500' : 'bg-gradient-to-br from-blue-600 to-indigo-700'
        } text-white focus:outline-none`}
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;
