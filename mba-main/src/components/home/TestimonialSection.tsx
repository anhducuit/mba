
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../animation';
import InfiniteSlider from './InfiniteSlider';

// Thêm nhiều testimonial để hiệu ứng slider hiển thị tốt hơn
const testimonials = [
  {
    name: 'Nguyễn Tiến Thành',
    position: 'CEO, Công ty tư nhân Spa',
    content: 'MBA Fulfillment đã giúp chúng tôi tối ưu hóa quy trình kho vận, tiết kiệm 30% chi phí vận hành. Dịch vụ tư vấn chuyên nghiệp, tận tâm.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Nguyễn Thanh An',
    position: 'Founder, Shop Atxilux Premium',
    content: 'Vật tư đóng gói chất lượng cao, giao hàng đúng hẹn. Đặc biệt ấn tượng với dịch vụ vận chuyển Bắc - Nam tiết kiệm chi phí.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Daniel Smith',
    position: 'Giám đốc vận hành, Công ty Verde',
    content: 'Sau khi được MBA tư vấn setup kho, hiệu suất xử lý đơn hàng của chúng tôi tăng gấp đôi. Rất hài lòng với sự chuyên nghiệp!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Trần Minh Phương',
    position: 'Chủ shop online Minh Phương',
    content: 'Tôi rất hài lòng với dịch vụ cung cấp vật tư đóng gói của MBA. Chất lượng sản phẩm tốt và được giao đúng hẹn.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Lê Văn Hùng',
    position: 'Giám đốc logistics, Công ty TNHH XNK Hùng Phát',
    content: 'Dịch vụ vận chuyển Bắc - Nam của MBA Fulfillment là đối tác tin cậy của chúng tôi. Chi phí hợp lý và hàng hóa luôn được đảm bảo an toàn.',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Nguyễn Thị Hương',
    position: 'Quản lý kho, Công ty TNHH Hương Trà',
    content: 'Giải pháp setup kho của MBA đã giúp chúng tôi tối ưu hóa không gian và quy trình làm việc. Hiệu quả công việc tăng đáng kể.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-mba-primary/5">
      <div className="container mx-auto px-0 max-w-full">
        <ScrollReveal>
          <SectionTitle 
            title="Khách hàng nói gì về chúng tôi"
            subtitle="Những đánh giá từ các khách hàng đã sử dụng dịch vụ của MBA Fulfillment"
          />
        </ScrollReveal>
        
        <div className="pt-6 w-full overflow-x-hidden">
          <InfiniteSlider 
            duration={30} 
            direction="left"
            pauseOnHover={true}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4" style={{ width: '450px', minWidth: '450px', height: '230px' }}>
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="h-full w-full"
                >
                  <Card className="border-none shadow-md h-full w-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4 shrink-0"
                        />
                        <div className="overflow-hidden">
                          <h4 className="font-semibold break-words">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 break-words">{testimonial.position}</p>
                        </div>
                      </div>
                      
                      <div className="flex-grow mb-4 overflow-auto">
                        <p className="italic text-gray-600 break-words whitespace-normal">" {testimonial.content} "</p>
                      </div>
                      
                      <div className="mt-auto flex text-mba-secondary">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-5 h-5"
                          >
                            <path d="M12 1l3.09 6.5L22 8.28l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.15 2 8.28l6.91-.78L12 1z" />
                          </svg>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
