
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animation/motion-variants';

const Footer = () => {
  const footerVariants = staggerContainer(0.1, 0.1);
  const columnVariants = staggerContainer(0.05, 0);

  return (
    <motion.footer
      className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={fadeIn('up', 0.1, 0.5)}>
            <motion.h3
              className="text-xl font-bold text-white mb-4"
              variants={fadeIn('up', 0.2, 0.5)}
            >
              MBA Fulfillment Việt Nam
            </motion.h3>
            <motion.p
              className="mb-4 text-gray-300"
              variants={fadeIn('up', 0.3, 0.5)}
            >
              Giải pháp toàn diện về kho vận và nguyên vật liệu đóng gói cho doanh nghiệp.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              variants={staggerContainer(0.1, 0.4)}
            >
              <motion.a
                href="https://www.facebook.com/mbafulfillment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 0, 0.3)}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/mba-fulfillment-viet-nam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 0.1, 0.3)}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn('up', 0.2, 0.5)}>
            <motion.h3
              className="text-xl font-bold text-white mb-4"
              variants={fadeIn('up', 0.3, 0.5)}
            >
              Dịch vụ
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={columnVariants}
            >
              <motion.li variants={fadeIn('right', 0, 0.3)}>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/dich-vu/tu-van-setup-kho" className="text-gray-300 hover:text-white">
                    Tư vấn setup kho vận
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li variants={fadeIn('right', 0.1, 0.3)}>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/dich-vu/vat-tu-dong-goi" className="text-gray-300 hover:text-white">
                    Vật tư đóng gói
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li variants={fadeIn('right', 0.2, 0.3)}>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/dich-vu/van-chuyen-bac-nam" className="text-gray-300 hover:text-white">
                    Vận chuyển Bắc - Nam
                  </Link>
                </motion.div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn('up', 0.3, 0.5)}>
            <motion.h3
              className="text-xl font-bold text-white mb-4"
              variants={fadeIn('up', 0.4, 0.5)}
            >
              Liên kết nhanh
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={columnVariants}
            >
              <motion.li variants={fadeIn('right', 0, 0.3)}>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/san-pham" className="text-gray-300 hover:text-white">
                    Sản phẩm
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li variants={fadeIn('right', 0.1, 0.3)}>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li variants={fadeIn('right', 0.2, 0.3)}>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/lien-he" className="text-gray-300 hover:text-white">
                    Liên hệ
                  </Link>
                </motion.div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn('up', 0.4, 0.5)}>
            <motion.h3
              className="text-xl font-bold text-white mb-4"
              variants={fadeIn('up', 0.5, 0.5)}
            >
              Thông tin liên hệ
            </motion.h3>
            <motion.ul
              className="space-y-3"
              variants={columnVariants}
            >
              <motion.li
                className="flex items-start"
                variants={fadeIn('left', 0, 0.3)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 mr-3 text-mba-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">40/8 Lê Thị Ánh, Phường Tân Thới Nhất, Quận 12, TPHCM</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                variants={fadeIn('left', 0.1, 0.3)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 mr-3 text-mba-secondary" />
                <a href="tel:+84948078599" className="text-gray-300 hover:text-white">
                  0948 078 599
                </a>
              </motion.li>
              <motion.li
                className="flex items-center"
                variants={fadeIn('left', 0.2, 0.3)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 mr-3 text-mba-secondary" />
                <a href="mailto:mbafulfillmentvn@gmail.com" className="text-gray-300 hover:text-white">
                  mbafulfillmentvn@gmail.com
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm"
          variants={fadeIn('up', 0.6, 0.5)}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} MBA Fulfillment Việt Nam. Tất cả quyền được bảo lưu.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
