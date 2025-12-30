
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch('https://formspree.io/f/xldbjwyb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        toast({
          title: "Thành công!",
          description: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.",
        });
        
        // Reset the form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Lỗi!",
        description: "Đã có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout
      title="Liên hệ | MBA Fulfillment Hub"
      description="Liên hệ với MBA Fulfillment Việt Nam để được tư vấn về dịch vụ kho vận, vật tư đóng gói và vận chuyển hàng hóa."
    >
      <PageHeader
        title="Liên hệ"
        breadcrumbs={[{ label: 'Liên hệ', path: '/lien-he' }]}
      />
      
      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">Gửi thông tin liên hệ</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Nhập họ và tên của bạn"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại của bạn"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Nhập địa chỉ email của bạn"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-medium">
                    Công ty/Tổ chức
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nhập tên công ty/tổ chức của bạn (nếu có)"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="block font-medium">
                    Dịch vụ quan tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-mba-primary"
                    required
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="tu-van">Tư vấn setup kho</option>
                    <option value="vat-tu">Vật tư đóng gói</option>
                    <option value="van-chuyen">Vận chuyển Bắc - Nam</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">
                    Nội dung <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                    rows={5}
                    required
                  />
                </div>
                
                <div className="inline-block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-md font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-200"
                    >
                      <Send className="mr-2 h-4 w-4" /> Gửi tin nhắn
                    </Button>
                  </motion.div>
                </div>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <h2 className="text-xl font-semibold mb-6 text-white">Thông tin liên hệ</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-400 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-white">Địa chỉ</p>
                      <p className="text-white">40/8 Lê Thị Ánh, Phường Tân Thới Nhất, Quận 12, TPHCM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-400 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-white">Điện thoại</p>
                      <p className="text-white">
                        <a href="tel:0948078599" className="text-white hover:underline">0948 078 599</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-400 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-white">
                        <a href="mailto:mbafulfillmentvn@gmail.com" className="text-white hover:underline">
                          mbafulfillmentvn@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-mba-secondary mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-white">Giờ làm việc</p>
                      <p className="text-white">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                      <p className="text-white">Thứ 7: 8:00 - 12:00</p>
                      <p className="text-white">Chủ nhật: Nghỉ</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-80 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.92824658608546!2d106.62196488744371!3d10.822640154706463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bdbc63a2e65%3A0xdfc360725a51294d!2zNDAvOCBMw6ogVGjhu4sgw4FuaCwgVMOibiBUaOG7m2kgTmjhuqV0LCBRdeG6rW4gMTIsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1747120807890!5m2!1svi!2s" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
