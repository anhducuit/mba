
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animation/motion-variants';

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { 
    name: 'Dịch vụ', 
    href: '/dich-vu',
    submenu: [
      { name: 'Tư vấn setup kho', href: '/dich-vu/tu-van-setup-kho' },
      { name: 'Vật tư đóng gói', href: '/dich-vu/vat-tu-dong-goi' },
      { name: 'Vận chuyển Bắc - Nam', href: '/dich-vu/van-chuyen-bac-nam' },
    ]
  },
  { name: 'Sản phẩm', href: '/san-pham' },
  { name: 'Blog', href: '/blog' },
  { name: 'Liên hệ', href: '/lien-he' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  
  // Header scroll effect
  const [scrolled, setScrolled] = useState(false);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };
  
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants
  const containerVariants = staggerContainer(0.1, 0.2);
  const navContainerVariants = staggerContainer(0.05, 0.1);
  const submenuContainerVariants = staggerContainer(0.05, 0);

  return (
    <motion.header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            variants={fadeIn('right', 0.2, 0.5)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">MBA Fulfillment</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            variants={navContainerVariants}
          >
            {navigation.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative group"
                variants={fadeIn('down', 0.1 * index, 0.4)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.submenu ? (
                  <>
                    <button 
                      className={`flex items-center space-x-1 py-2 ${isActive(item.href) ? 'text-mba-secondary font-medium' : 'text-mba-primary hover:text-mba-secondary'}`}
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <motion.div 
                      className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden origin-top-left z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="py-2"
                        variants={submenuContainerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {item.submenu.map((subitem, subIndex) => (
                          <motion.div
                            key={subitem.name}
                            variants={fadeIn('right', 0.05 * subIndex, 0.2)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              to={subitem.href}
                              className="block px-4 py-3 text-sm text-mba-dark hover:bg-mba-light hover:text-mba-secondary"
                            >
                              {subitem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`py-2 ${isActive(item.href) ? 'text-mba-secondary font-medium' : 'text-mba-primary hover:text-mba-secondary'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.nav>
          
          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            variants={fadeIn('left', 0.4, 0.5)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white" asChild>
                <Link to="/lien-he">
                  Tư vấn miễn phí
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            variants={fadeIn('left', 0.3, 0.4)}
          >
            <motion.button
              type="button"
              className="p-2 text-mba-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3 text-mba-primary"
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        <span className={isActive(item.href) ? 'text-mba-secondary font-medium' : ''}>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeSubmenu === item.name && (
                        <motion.div 
                          className="pl-4 py-2 space-y-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subitem) => (
                            <motion.div
                              key={subitem.name}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              whileHover={{ x: 5 }}
                            >
                              <Link
                                to={subitem.href}
                                className={`block py-2 ${isActive(subitem.href) ? 'text-mba-secondary font-medium' : 'text-mba-dark'}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.href}
                        className={`block py-3 ${isActive(item.href) ? 'text-mba-secondary font-medium' : 'text-mba-primary'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-primary w-full" asChild>
                    <Link to="/lien-he">
                      Tư vấn miễn phí
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
