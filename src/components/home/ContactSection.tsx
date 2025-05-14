
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
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
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Liên hệ tư vấn"
          subtitle="Để lại thông tin, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất"
        />
        
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium">
                    Họ và tên
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
                    Số điện thoại
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
                  Email
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
                <label htmlFor="service" className="block font-medium">
                  Dịch vụ quan tâm
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
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Nội dung
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Nhập nội dung tin nhắn của bạn"
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full md:w-auto">
                Gửi yêu cầu tư vấn
              </Button>
            </form>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Thông tin liên hệ</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-mba-secondary mr-4 mt-1" />
                <div>
                  <p className="font-medium text-white">Điện thoại</p>
                  <p className="text-white">0948 078 599</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-mba-secondary mr-4 mt-1" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-white">mbafulfillmentvn@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-mba-secondary mr-4 mt-1" />
                <div>
                  <p className="font-medium text-white">Giờ làm việc</p>
                  <p className="text-white">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                  <p className="text-white">Thứ 7: 8:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
