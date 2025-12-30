import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { ScrollReveal } from '../animation';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Banknote, 
  Shield, 
  ListChecks, 
  LayoutDashboard, 
  LineChart, 
  BadgeCheck,
  Scale
} from 'lucide-react';

// Dữ liệu các lợi ích
const benefits = [
  {
    title: 'Tối ưu chi phí',
    description: 'Tiết kiệm đến 30% chi phí vận hành kho bãi nhờ thiết kế và quy trình hợp lý.',
    icon: Banknote,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Nâng cao hiệu suất',
    description: 'Tăng tốc độ xử lý đơn hàng, giảm thời gian tìm kiếm sản phẩm.',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Giảm thiểu rủi ro',
    description: 'Hạn chế tình trạng mất mát, hư hỏng hàng hóa trong kho.',
    icon: Shield,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    title: 'Dễ dàng mở rộng',
    description: 'Thiết kế linh hoạt, dễ dàng mở rộng khi nhu cầu kinh doanh tăng.',
    icon: LineChart,
    color: 'bg-purple-100 text-purple-600'
  }
];

// Dữ liệu các tính năng
const features = [
  'Phân tích nhu cầu và đặc thù kinh doanh',
  'Thiết kế layout kho hợp lý',
  'Tư vấn quy trình nhập/xuất kho',
  'Đề xuất giải pháp công nghệ quản lý kho',
  'Tối ưu hệ thống lưu trữ và phân loại hàng hóa',
  'Tư vấn hệ thống an ninh, phòng cháy chữa cháy'
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <ScrollReveal>
          <SectionTitle 
            title="Giải pháp toàn diện cho kho vận"
            subtitle="Tối ưu hóa hoạt động kho vận, nâng cao hiệu quả kinh doanh"
          />
        </ScrollReveal>
        
        {/* Phần lợi ích */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 h-full"
              whileHover={{ y: -5, scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-14 h-14 rounded-full ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Phần tính năng với minh họa */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Minh họa */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600/10 rounded-2xl transform -rotate-3"></div>
              <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
                <div className="flex items-center mb-6">
                  <LayoutDashboard className="w-10 h-10 text-indigo-600 mr-4" />
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">Thiết kế kho khoa học</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-lg p-4">
                    <Scale className="w-8 h-8 text-indigo-500 mb-2" />
                    <span className="text-center text-sm font-medium">Cân bằng lưu trữ</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-lg p-4">
                    <BadgeCheck className="w-8 h-8 text-indigo-500 mb-2" />
                    <span className="text-center text-sm font-medium">Chuẩn hóa quy trình</span>
                  </div>
                </div>
                
                <div className="h-64 rounded-lg overflow-hidden">
                  <img 
                    src="/warehouse-logistics.jpg" 
                    alt="Kho vận chuyên nghiệp" 
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Danh sách tính năng */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">Tại sao nên chọn dịch vụ của chúng tôi?</h3>
            <p className="text-gray-600 mb-6">
              MBA Fulfillment cung cấp giải pháp toàn diện cho việc tối ưu hóa kho vận với các tiêu chuẩn quốc tế và 
              kinh nghiệm thực tiễn trong lĩnh vực logistics tại Việt Nam.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ListChecks className="w-5 h-5 text-indigo-600 mt-1 mr-3 shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
