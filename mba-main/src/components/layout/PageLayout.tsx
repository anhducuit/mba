
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedElement } from '../animation';
import { useLocation } from 'react-router-dom';
import FloatingContactButton from '../ui/FloatingContactButton';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      when: 'beforeChildren',
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title = 'MBA Fulfillment Việt Nam - Giải pháp kho vận toàn diện', 
  description = 'Dịch vụ tư vấn setup kho vận, cung cấp vật tư đóng gói và vận chuyển hàng hóa Bắc - Nam tối ưu chi phí.' 
}) => {
  const { pathname } = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mbafulfillment.vn" />
        <meta property="og:title" content={title || 'MBA Fulfillment Hub'} />
        <meta property="og:description" content={description || 'Dịch vụ kho vận chuyên nghiệp'} />
        <meta property="og:image" content="https://mbafulfillment.vn/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mbafulfillment.vn" />
        <meta property="twitter:title" content={title || 'MBA Fulfillment Hub'} />
        <meta property="twitter:description" content={description || 'Dịch vụ kho vận chuyên nghiệp'} />
        <meta property="twitter:image" content="https://mbafulfillment.vn/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="flex-grow"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <AnimatedElement
              type="fade"
              direction="up"
              duration={0.6}
              delay={0.2}
              viewport={false}
            >
              {children}
            </AnimatedElement>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <FloatingContactButton />
      </div>
    </>
  );
};

export default PageLayout;
